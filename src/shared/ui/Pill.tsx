import type { ComponentProps } from "react";
import { cva } from "styled-system/css";
import { styled } from "styled-system/jsx";

const pillRecipe = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        gap: "1.5",
        textStyle: "mono.xs",
        lineHeight: "1",
        paddingInline: "2",
        paddingBlock: "1",
        borderRadius: "none",
        borderWidth: "1px",
        whiteSpace: "nowrap",
    },
    variants: {
        tone: {
            neutral: {
                background: "background",
                borderColor: "border",
                color: "foreground.muted",
            },
            accent: {
                background: "accent.subtle",
                borderColor: "transparent",
                color: "accent",
            },
        },
    },
    defaultVariants: {
        tone: "neutral",
    },
});

export const Pill = styled("span", pillRecipe);
export type PillProps = ComponentProps<typeof Pill>;
