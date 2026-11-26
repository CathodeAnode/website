import type { ReactElement } from "react";
import { Stack, styled } from "styled-system/jsx";
import { GitHubIcon, PageSection } from "@/shared/ui";
import { ContactLink } from "./ContactLink.tsx";
import { EMAIL, GITHUB_ACCOUNT, MAILTO_EMAIL } from "@/shared/config/site.ts";

export function AboutSection(): ReactElement {
    return (
        <PageSection id="about">
            <Stack
                gap="2"
                css={{
                    marginBottom: { base: "6", md: "8" },
                    maxWidth: "2xl",
                }}
            >
                <styled.h2 css={{ textStyle: "heading.h2", color: "foreground" }}>
                    About & Links
                </styled.h2>
            </Stack>

            <styled.div
                css={{
                    display: "grid",
                    gridTemplateColumns: { base: "1fr", md: "minmax(0, 1.3fr) minmax(0, 1fr)" },
                    gap: { base: "8", md: "12" },
                    alignItems: "start",
                }}
            >
                <Stack gap="4">
                    <styled.p css={{ textStyle: "body", color: "foreground.muted" }}>
                        I'm a developper from Canada. I like and prefer C++, but I also like C#.
                    </styled.p>
                </Stack>

                <Stack gap="2">
                    <ContactLink
                        href={GITHUB_ACCOUNT}
                        label="GitHub"
                        value="@CathodeAnode"
                        icon={<GitHubIcon />}
                    />
                    <ContactLink
                        href={MAILTO_EMAIL}
                        label="Email"
                        value={EMAIL}
                        external={false}
                    />
                </Stack>
            </styled.div>
        </PageSection>
    );
}
