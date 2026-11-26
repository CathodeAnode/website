import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

export const Divider = styled("hr", {
    base: {
        borderWidth: "0",
        borderTopWidth: "1px",
        borderColor: "border",
    },
});

export type DividerProps = ComponentProps<typeof Divider>;
