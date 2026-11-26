import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

export const PageBounds = styled("div", {
    base: {
        width: "full",
        maxWidth: "5xl",
        marginInline: "auto",
        paddingInline: { base: "6", md: "8" },
    },
});

export type PageBoundsProps = ComponentProps<typeof PageBounds>;
