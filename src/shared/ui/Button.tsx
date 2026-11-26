import type { ComponentProps } from "react";
import { Link as RouterLink } from "react-router";
import { cva, type RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";

const buttonRecipe = cva({
    base: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        borderWidth: "1px",
        borderColor: "transparent",
        borderRadius: "none",
        whiteSpace: "nowrap",
        textDecoration: "none",
        userSelect: "none",
        cursor: "pointer",
        transitionProperty: "background-color, border-color, color, transform",
        transitionDuration: "fast",
        transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)",
        willChange: "transform",
        _active: {
            transform: "scale(0.97)",
        },
        _motionReduce: {
            _active: {
                transform: "none",
            },
        },
        _disabled: {
            opacity: 0.5,
            pointerEvents: "none",
        },
    },
    variants: {
        variant: {
            solid: {
                background: "accent",
                color: "accent.foreground",
                _hover: {
                    background: "accent.hover",
                },
            },
            outline: {
                backdropFilter: "blur(2px)",
                background: "transparent",
                borderColor: "border.strong",
                color: "foreground",
                _hover: {
                    borderColor: "accent",
                    background: "accent.subtle",
                },
            },
            ghost: {
                background: "transparent",
                color: "foreground.muted",
                _hover: {
                    backdropFilter: "blur(2px)",
                    background: "foreground/8",
                    color: "foreground",
                },
            },
            link: {
                background: "transparent",
                color: "foreground.muted",
                _hover: {
                    color: "foreground",
                },
            },
        },
        size: {
            sm: {
                height: "8",
                paddingInline: "3",
                textStyle: "label.sm",
            },
            md: {
                height: "10",
                paddingInline: "4",
                textStyle: "label.sm",
            },
            lg: {
                height: "12",
                paddingInline: "6",
                textStyle: "label.md",
            },
            auto: {
                height: "auto",
            },
        },
        square: {
            true: {
                aspectRatio: "square",
                paddingInline: "0",
            },
        },
    },
    defaultVariants: {
        variant: "solid",
        size: "md",
    },
});

export type ButtonVariants = NonNullable<RecipeVariantProps<typeof buttonRecipe>>;

export const Button = styled("button", buttonRecipe, {
    defaultProps: { type: "button" },
});
export const LinkButton = styled("a", buttonRecipe);
export const RouteButton = styled(RouterLink, buttonRecipe);

export type ButtonProps = ComponentProps<typeof Button>;
export type LinkButtonProps = ComponentProps<typeof LinkButton>;
export type RouteButtonProps = ComponentProps<typeof RouteButton>;
