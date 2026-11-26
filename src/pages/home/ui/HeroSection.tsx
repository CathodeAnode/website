import { useRef, type ReactElement } from "react";
import { HStack, Stack, styled } from "styled-system/jsx";
import {
    Button,
    Divider,
    GitHubIcon,
    LinkButton,
    PCBAnimationCanvas,
    type PCBAnimationHandle,
} from "@/shared/ui";
import { GITHUB_ACCOUNT, MAILTO_EMAIL } from "@/shared/config";

export function HeroSection(): ReactElement {
    const pcbRef = useRef<PCBAnimationHandle | null>(null);

    function handleReplay(): void {
        pcbRef.current?.reset();
    }

    return (
        <styled.section
            css={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "calc(100dvh - 56px)",
                paddingBlock: { base: "12", md: "16" },
            }}
        >
            <Stack
                align="flex-start"
                gap="7"
                css={{ width: "fit-content", maxWidth: "full" }}
            >
                <Stack gap="4">
                    <styled.h1
                        css={{
                            textStyle: "heading.hero",
                            color: "foreground",
                        }}
                    >
                        CathodeAnode
                    </styled.h1>

                    <styled.p
                        css={{
                            textStyle: "body.lg",
                            color: "foreground",
                            opacity: 0.8,
                            maxWidth: "xl",
                        }}
                    >
                        I love C++ and clean code.
                    </styled.p>
                </Stack>

                <Divider css={{ width: "full" }} />

                <HStack
                    gap="3"
                    css={{ width: "full", flexWrap: "wrap" }}
                >
                    <LinkButton
                        href={GITHUB_ACCOUNT}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="solid"
                        css={{ gap: "2" }}
                    >
                        <GitHubIcon />
                        GitHub ↗
                    </LinkButton>
                    <LinkButton
                        href={MAILTO_EMAIL}
                        variant="outline"
                        css={{ background: "surface" }}
                    >
                        Email
                    </LinkButton>
                    <Button
                        variant="ghost"
                        onClick={handleReplay}
                        css={{
                            marginLeft: "auto",
                            color: "foreground.muted",
                        }}
                    >
                        Replay PCB ↻
                    </Button>
                </HStack>
            </Stack>

            <PCBAnimationCanvas
                ref={pcbRef}
                css={{ zIndex: -1 }}
            />
        </styled.section>
    );
}
