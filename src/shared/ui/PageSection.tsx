import type { ComponentProps } from "react";
import { styled } from "styled-system/jsx";

export const PageSection = styled("section", {
    base: {
        scrollMarginTop: "20",
        paddingBlock: { base: "12", md: "16" },
    },
});

export type PageSectionProps = ComponentProps<typeof PageSection>;
