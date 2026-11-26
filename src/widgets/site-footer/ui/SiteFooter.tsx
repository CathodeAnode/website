import type { ReactElement } from "react";
import { Stack, styled } from "styled-system/jsx";
import { PageBounds, RouteButton } from "@/shared/ui";

export function SiteFooter(): ReactElement {
    return (
        <styled.footer
            css={{
                borderTopWidth: "1px",
                borderColor: "border",
                paddingBlock: "8",
            }}
        >
            <PageBounds
                css={{
                    display: "flex",
                    flexDirection: { base: "column", md: "row" },
                    alignItems: { base: "flex-start", md: "center" },
                    justifyContent: "space-between",
                    gap: "6",
                }}
            >
                <Stack gap="1">
                    <RouteButton
                        variant="link"
                        to="/"
                        css={{
                            textStyle: "mono.xs",
                            color: "foreground.muted",
                        }}
                    >
                        cathodeanode.ca
                    </RouteButton>
                </Stack>
            </PageBounds>
        </styled.footer>
    );
}
