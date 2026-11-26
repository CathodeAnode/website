import { useEffect, useState, type ReactElement } from "react";
import { Menu, X } from "lucide-react";
import { HStack, styled } from "styled-system/jsx";
import { Button, GitHubIcon, LinkButton, PageBounds, RouteButton } from "@/shared/ui";
import { GITHUB_SITE } from "@/shared/config";

const NAV_ITEMS = [
    { label: "Subdomains", href: "/#subdomains" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
] as const;

const Nav = styled("nav", {
    base: {
        display: "flex",
        textStyle: "mono.xs",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
    },
});

export function SiteHeader(): ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMenuOpen) return;

        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return (): void => window.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    const closeMenu = (): void => setIsMenuOpen(false);
    const MenuIcon = isMenuOpen ? X : Menu;

    return (
        <styled.header
            css={{
                position: "sticky",
                top: 0,
                zIndex: 10,
                height: "14",
            }}
        >
            <styled.div
                css={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
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
                        onClick={closeMenu}
                        css={{
                            gap: "0",
                            textStyle: "brand.md",
                            color: "foreground",
                            _hover: { color: "accent" },
                        }}
                    >
                        cathodeanode<styled.span css={{ color: "accent" }}>.ca</styled.span>
                    </RouteButton>

                    <HStack gap={{ base: "2", sm: "4", md: "6" }}>
                        <Nav
                            aria-label="Primary"
                            css={{
                                display: { base: "none", sm: "flex" },
                                alignItems: "center",
                                gap: { sm: "4", md: "6" },
                            }}
                        >
                            {NAV_ITEMS.map(({ label, href }) => (
                                <LinkButton
                                    key={href}
                                    href={href}
                                    variant="link"
                                    size="auto"
                                >
                                    {label}
                                </LinkButton>
                            ))}
                        </Nav>

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

                        <Button
                            variant="ghost"
                            size="sm"
                            square
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            css={{ display: { base: "inline-flex", sm: "none" } }}
                        >
                            <MenuIcon
                                size={18}
                                aria-hidden="true"
                            />
                        </Button>
                    </HStack>
                </PageBounds>

                {isMenuOpen && (
                    <styled.div
                        id="mobile-nav"
                        css={{
                            display: { base: "block", sm: "none" },
                            borderTopWidth: "1px",
                            borderColor: "border",
                        }}
                    >
                        <PageBounds>
                            <Nav
                                aria-label="Mobile"
                                css={{
                                    flexDirection: "column",
                                    paddingBlock: "3",
                                    "& > a": {
                                        width: "100%",
                                        justifyContent: "flex-start",
                                        paddingBlock: "2.5",
                                    },
                                }}
                            >
                                {NAV_ITEMS.map(({ label, href }) => (
                                    <LinkButton
                                        key={href}
                                        href={href}
                                        variant="link"
                                        size="auto"
                                        onClick={closeMenu}
                                    >
                                        {label}
                                    </LinkButton>
                                ))}
                            </Nav>
                        </PageBounds>
                    </styled.div>
                )}
            </styled.div>
        </styled.header>
    );
}
