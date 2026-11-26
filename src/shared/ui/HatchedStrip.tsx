import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

export const HatchedStrip = styled("div", {
    base: {
        height: "1.5",
        width: "full",
        borderBottomWidth: "1px",
        borderColor: "border",
        backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(37, 99, 235, 0.28) 4px, rgba(37, 99, 235, 0.28) 5px)",
    },
});

export type HatchedStripProps = ComponentProps<typeof HatchedStrip>;
