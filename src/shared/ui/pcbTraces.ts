import { lerpVector2, randomInt, type Polyline, type Vector2 } from "@/shared/lib";

export interface Trace {
    readonly points: Polyline;
    readonly complete: boolean;
}

interface Step {
    readonly col: number;
    readonly row: number;
    readonly direction: number;
}

interface TraceGrid {
    readonly cols: number;
    readonly rows: number;
    readonly usedNodes: Set<number>;
    readonly usedDiagonals: Set<number>;
}

const CELL_SIZE: number = 18;
const MIN_TRACE_STEPS: number = 4;
const MAX_TRACE_STEPS: number = 15;
const MAX_FAILED_SPAWNS: number = 800;
const FRAMES_PER_STEP: number = 6;
const FRAMES_BETWEEN_TRACES: number = 4;

const DIRECTIONS: readonly Vector2[] = [
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: 0 },
    { x: -1, y: -1 },
];

function cellToPixel(col: number, row: number): Vector2 {
    return {
        x: (col + 0.5) * CELL_SIZE,
        y: (row + 0.5) * CELL_SIZE,
    };
}

function pickTurnOrder(): readonly number[] {
    if (Math.random() < 0.65) {
        return [0, 1, -1];
    }
    return Math.random() < 0.5 ? [1, 0, -1] : [-1, 0, 1];
}

function cellKey(grid: TraceGrid, col: number, row: number): number {
    return row * grid.cols + col;
}

function isInside(grid: TraceGrid, col: number, row: number): boolean {
    return col >= 1 && col < grid.cols - 1 && row >= 1 && row < grid.rows - 1;
}

function tryStep(grid: TraceGrid, col: number, row: number, direction: number): Step | null {
    for (const turn of pickTurnOrder()) {
        const nextDirection: number = (direction + turn + DIRECTIONS.length) % DIRECTIONS.length;
        const delta: Vector2 | undefined = DIRECTIONS[nextDirection];
        if (!delta) {
            continue;
        }

        const nextCol: number = col + delta.x;
        const nextRow: number = row + delta.y;
        const nextNode: number = cellKey(grid, nextCol, nextRow);
        if (!isInside(grid, nextCol, nextRow) || grid.usedNodes.has(nextNode)) {
            continue;
        }

        // Identify the grid cell whose diagonal we cross by its top-left corner
        const isDiagonal: boolean = delta.x !== 0 && delta.y !== 0;
        const diagonal: number = cellKey(grid, Math.min(col, nextCol), Math.min(row, nextRow));
        if (isDiagonal && grid.usedDiagonals.has(diagonal)) {
            continue;
        }

        grid.usedNodes.add(nextNode);
        if (isDiagonal) {
            grid.usedDiagonals.add(diagonal);
        }
        return { col: nextCol, row: nextRow, direction: nextDirection };
    }

    return null;
}

function walkTrace(grid: TraceGrid, startCol: number, startRow: number): Vector2[] | null {
    const startNode: number = cellKey(grid, startCol, startRow);
    if (grid.usedNodes.has(startNode)) {
        return null;
    }

    grid.usedNodes.add(startNode);
    let col: number = startCol;
    let row: number = startRow;
    let direction: number = randomInt(0, DIRECTIONS.length - 1);
    const maxSteps: number = randomInt(MIN_TRACE_STEPS, MAX_TRACE_STEPS);
    const path: Vector2[] = [cellToPixel(col, row)];

    for (let step: number = 0; step < maxSteps; step++) {
        const next: Step | null = tryStep(grid, col, row, direction);
        if (!next) {
            break;
        }
        ({ col, row, direction } = next);
        path.push(cellToPixel(col, row));
    }

    if (path.length === 1) {
        grid.usedNodes.delete(startNode);
        return null;
    }

    return path;
}

function sliceTrace(path: Polyline, stepsVisible: number): Trace | null {
    if (stepsVisible <= 0) {
        return null;
    }

    const totalSteps: number = path.length - 1;
    if (stepsVisible >= totalSteps) {
        return { points: path, complete: true };
    }

    const fullSteps: number = Math.floor(stepsVisible);
    const points: Vector2[] = path.slice(0, fullSteps + 1);
    const from: Vector2 | undefined = path[fullSteps];
    const to: Vector2 | undefined = path[fullSteps + 1];
    if (from && to) {
        points.push(lerpVector2(from, to, stepsVisible - fullSteps));
    }

    return { points, complete: false };
}

export function generateTraces(width: number, height: number): Vector2[][] {
    const cols: number = Math.floor(width / CELL_SIZE);
    const rows: number = Math.floor(height / CELL_SIZE);
    if (cols <= 2 || rows <= 2) {
        return [];
    }

    const grid: TraceGrid = {
        cols,
        rows,
        usedNodes: new Set(),
        usedDiagonals: new Set(),
    };
    const traces: Vector2[][] = [];

    let failedSpawns: number = 0;
    while (failedSpawns < MAX_FAILED_SPAWNS) {
        const startCol: number = randomInt(1, cols - 2);
        const startRow: number = randomInt(1, rows - 2);
        const trace: Vector2[] | null = walkTrace(grid, startCol, startRow);

        if (trace) {
            traces.push(trace);
            failedSpawns = 0;
        } else {
            failedSpawns++;
        }
    }

    return traces;
}

export function getTotalFrames(traces: readonly Polyline[]): number {
    return traces.reduce(
        (max: number, path: Polyline, index: number): number =>
            Math.max(max, index * FRAMES_BETWEEN_TRACES + (path.length - 1) * FRAMES_PER_STEP),
        0,
    );
}

export function getTracesAtFrame(traces: readonly Polyline[], frame: number): Trace[] {
    const visible: Trace[] = [];

    traces.forEach((path: Polyline, index: number): void => {
        const elapsedFrames: number = frame - index * FRAMES_BETWEEN_TRACES;
        const trace: Trace | null = sliceTrace(path, elapsedFrames / FRAMES_PER_STEP);
        if (trace) {
            visible.push(trace);
        }
    });

    return visible;
}
