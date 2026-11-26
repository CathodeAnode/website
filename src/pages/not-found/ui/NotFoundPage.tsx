import type { ReactElement } from "react";
import { Stack, styled } from "styled-system/jsx";
import { PageBounds, PageSection, RouteButton } from "@/shared/ui";

export function NotFoundPage(): ReactElement {
    return (
        <PageBounds>
            <PageSection>
                <Stack
                    align="flex-start"
                    gap="4"
                >
                    <styled.p css={{ textStyle: "mono.eyebrow", color: "accent" }}>404</styled.p>
                    <styled.h1 css={{ textStyle: "heading.h1", color: "foreground" }}>
                        Page not found
                    </styled.h1>
                    <styled.p css={{ textStyle: "body", color: "foreground.muted" }}>
                        The page you requested does not exist on this domain.
                    </styled.p>
                    <RouteButton
                        to="/"
                        variant="outline"
                    >
                        Back to home
                    </RouteButton>
                </Stack>
            </PageSection>
        </PageBounds>
    );
}
