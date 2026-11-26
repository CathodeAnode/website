import type { ReactElement } from "react";
import { Stack, styled } from "styled-system/jsx";
import { PageSection } from "@/shared/ui";

export function SubdomainsSection(): ReactElement {
    return (
        <PageSection id="subdomains">
            <Stack
                gap="2"
                css={{
                    marginBottom: { base: "6", md: "8" },
                    maxWidth: "2xl",
                }}
            >
                <styled.h2 css={{ textStyle: "heading.h2", color: "foreground" }}>
                    Subdomains
                </styled.h2>
            </Stack>

            <styled.p css={{ textStyle: "body", color: "foreground.muted" }}>
                Nothing (yet). Feel free to email me ideas!
            </styled.p>
        </PageSection>
    );
}
