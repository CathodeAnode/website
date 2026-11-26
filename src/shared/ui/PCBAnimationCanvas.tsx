import {
    useEffect,
    useImperativeHandle,
    useRef,
    type ComponentProps,
    type ReactElement,
    type Ref,
} from "react";
import { styled } from "styled-system/jsx";
import { drawCircle, drawPolyline, type Polyline, type Vector2 } from "@/shared/lib";
import { generateTraces, getTotalFrames, getTracesAtFrame, type Trace } from "./pcbTraces.ts";

const StyledCanvas = styled("canvas", {
    base: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "full",
        height: "100dvh",
        color: "trace",
        pointerEvents: "none",
        zIndex: 0,
    },
});

export interface PCBAnimationHandle {
    readonly reset: () => void;
}

export interface PCBAnimationCanvasProps extends Omit<ComponentProps<typeof StyledCanvas>, "ref"> {
    readonly ref?: Ref<PCBAnimationHandle>;
}

interface AnimationController {
    readonly reset: () => void;
    readonly cleanup: () => void;
}

const PAD_RADIUS: number = 3.2;
const LINE_WIDTH: number = 1.5;

function drawTrace(context: CanvasRenderingContext2D, trace: Trace, color: string): void {
    const start: Vector2 | undefined = trace.points[0];
    const end: Vector2 | undefined = trace.points[trace.points.length - 1];
    if (!start || !end) {
        return;
    }

    drawPolyline(context, trace.points, {
        color,
        width: LINE_WIDTH,
        cap: "round",
        join: "round",
    });
    drawCircle(context, start, PAD_RADIUS, color);
    if (trace.complete) {
        drawCircle(context, end, PAD_RADIUS, color);
    }
}

function drawBoard(
    context: CanvasRenderingContext2D,
    traces: readonly Trace[],
    color: string,
): void {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    for (const trace of traces) {
        drawTrace(context, trace, color);
    }
}

function mountAnimation(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
): AnimationController {
    let traces: Polyline[] = [];
    let color: string = getComputedStyle(canvas).color;
    let frame: number = 0;
    let totalFrames: number = 0;
    let animationId: number = 0;

    function paint(): void {
        drawBoard(context, getTracesAtFrame(traces, frame), color);
    }

    function animate(): void {
        paint();
        if (frame < totalFrames) {
            frame++;
            animationId = window.requestAnimationFrame(animate);
        }
    }

    function reset(): void {
        window.cancelAnimationFrame(animationId);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        color = getComputedStyle(canvas).color;
        traces = generateTraces(canvas.width, canvas.height);
        totalFrames = getTotalFrames(traces);
        frame = 0;
        animate();
    }

    function onColorSchemeChange(): void {
        color = getComputedStyle(canvas).color;
        paint();
    }

    const colorScheme: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    reset();
    window.addEventListener("resize", reset);
    colorScheme.addEventListener("change", onColorSchemeChange);

    return {
        reset,
        cleanup: (): void => {
            window.cancelAnimationFrame(animationId);
            window.removeEventListener("resize", reset);
            colorScheme.removeEventListener("change", onColorSchemeChange);
        },
    };
}

export function PCBAnimationCanvas({ ref, ...props }: PCBAnimationCanvasProps): ReactElement {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const controllerRef = useRef<AnimationController | null>(null);

    useImperativeHandle(
        ref,
        (): PCBAnimationHandle => ({
            reset: (): void => {
                controllerRef.current?.reset();
            },
        }),
        [],
    );

    useEffect((): (() => void) | undefined => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        const context: CanvasRenderingContext2D | null = canvas?.getContext("2d") ?? null;
        if (!canvas || !context) {
            return undefined;
        }

        const controller: AnimationController = mountAnimation(canvas, context);
        controllerRef.current = controller;

        return (): void => {
            controller.cleanup();
            controllerRef.current = null;
        };
    }, []);

    return (
        <StyledCanvas
            ref={canvasRef}
            aria-hidden="true"
            {...props}
        />
    );
}
