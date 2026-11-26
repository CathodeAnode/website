export interface Vector2 {
    readonly x: number;
    readonly y: number;
}

export function lerpVector2(from: Vector2, to: Vector2, t: number): Vector2 {
    return {
        x: from.x + (to.x - from.x) * t,
        y: from.y + (to.y - from.y) * t,
    };
}
