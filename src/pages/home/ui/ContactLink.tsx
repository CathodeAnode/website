import type { ReactElement, ReactNode } from "react";
import { HStack, styled } from "styled-system/jsx";
import { LinkButton } from "@/shared/ui";

export interface ContactLinkProps {
    readonly href: string;
    readonly label: string;
    readonly value: string;
    readonly icon?: ReactNode;
    readonly external?: boolean;
}

export function ContactLink({
    href,
    label,
    value,
    icon,
    external = true,
}: ContactLinkProps): ReactElement {
    return (
        <LinkButton
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            variant="outline"
            css={{
                display: "flex",
                justifyContent: "space-between",
                height: "auto",
                paddingBlock: "3",
                background: "surface",
            }}
        >
            <HStack gap="2.5">
                {icon}
                {label}
            </HStack>
            <styled.span
                css={{
                    textStyle: "mono.xs",
                    color: "foreground.muted",
                }}
            >
                {value}
            </styled.span>
        </LinkButton>
    );
}
