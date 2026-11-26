import { type Vector2 } from "./Vector2.ts";

export type Polyline = readonly Vector2[];

export interface StrokeStyle {
    readonly color: string;
    readonly width: number;
    readonly cap?: CanvasLineCap;
    readonly join?: CanvasLineJoin;
}

export function drawCircle(
    context: CanvasRenderingContext2D,
    center: Vector2,
    radius: number,
    color: string,
): void {
    context.fillStyle = color;
    context.beginPath();
    context.arc(center.x, center.y, radius, 0, Math.PI * 2);
    context.fill();
}

export function drawPolyline(
    context: CanvasRenderingContext2D,
    points: Polyline,
    style: StrokeStyle,
): void {
    const start: Vector2 | undefined = points[0];
    if (!start || points.length < 2) {
        return;
    }

    context.strokeStyle = style.color;
    context.lineWidth = style.width;
    if (style.cap) {
        context.lineCap = style.cap;
    }
    if (style.join) {
        context.lineJoin = style.join;
    }

    context.beginPath();
    context.moveTo(start.x, start.y);
    for (let i: number = 1; i < points.length; i++) {
        const point: Vector2 | undefined = points[i];
        if (point) {
            context.lineTo(point.x, point.y);
        }
    }
    context.stroke();
}
