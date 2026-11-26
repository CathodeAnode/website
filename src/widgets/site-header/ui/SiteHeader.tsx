import type { ReactElement } from "react";
import { styled } from "styled-system/jsx";
import { GitHubIcon, LinkButton, PageBounds, RouteButton } from "@/shared/ui";
import { GITHUB_SITE } from "@/shared/config";

export function SiteHeader(): ReactElement {
    return (
        <styled.header
            css={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                borderBottomWidth: "1px",
                borderColor: "border",
                background: "color-mix(in srgb, var(--colors-background) 80%, transparent)",
                backdropFilter: "blur(12px)",
            }}
        >
            <PageBounds
                css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "4",
                    height: "14",
                }}
            >
                <RouteButton
                    to="/"
                    variant="link"
                    size="auto"
                    css={{
                        gap: "0",
                        textStyle: "brand.md",
                        color: "foreground",
                        _hover: { color: "accent" },
                    }}
                >
                    cathodeanode<styled.span css={{ color: "accent" }}>.ca</styled.span>
                </RouteButton>

                <styled.nav
                    aria-label="Primary"
                    css={{
                        display: "flex",
                        alignItems: "center",
                        gap: { base: "4", md: "6" },
                        textStyle: "mono.xs",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                    }}
                >
                    <LinkButton
                        href="/#subdomains"
                        variant="link"
                        size="auto"
                    >
                        Subdomains
                    </LinkButton>
                    <LinkButton
                        href="/#projects"
                        variant="link"
                        size="auto"
                    >
                        Projects
                    </LinkButton>
                    <LinkButton
                        href="/#about"
                        variant="link"
                        size="auto"
                    >
                        About
                    </LinkButton>

                    <LinkButton
                        href={GITHUB_SITE}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        variant="ghost"
                        size="sm"
                        square
                    >
                        <GitHubIcon />
                    </LinkButton>
                </styled.nav>
            </PageBounds>
        </styled.header>
    );
}
