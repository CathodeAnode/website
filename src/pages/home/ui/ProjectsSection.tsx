import type { ReactElement } from "react";
import { Stack, styled } from "styled-system/jsx";
import { PageSection } from "@/shared/ui";

export function ProjectsSection(): ReactElement {
    return (
        <PageSection id="projects">
            <Stack
                gap="2"
                css={{
                    marginBottom: { base: "6", md: "8" },
                    maxWidth: "2xl",
                }}
            >
                <styled.h2 css={{ textStyle: "heading.h2", color: "foreground" }}>
                    Projects
                </styled.h2>
            </Stack>

            <styled.p css={{ textStyle: "body", color: "foreground.muted" }}>
                Nothing I made is worth displaying it here (yet).
            </styled.p>
        </PageSection>
    );
}
