import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
    heading: {
        hero: {
            value: {
                fontFamily: "display",
                fontSize: { base: "5xl", sm: "6xl", md: "7xl" },
                fontWeight: "bold",
                letterSpacing: "-0.035em",
                lineHeight: "0.95",
            },
        },
        h1: {
            value: {
                fontFamily: "display",
                fontSize: { base: "2xl", md: "4xl" },
                fontWeight: "bold",
                letterSpacing: "-0.02em",
                lineHeight: "1.15",
            },
        },
        h2: {
            value: {
                fontFamily: "display",
                fontSize: { base: "xl", md: "2xl" },
                fontWeight: "semibold",
                letterSpacing: "-0.015em",
                lineHeight: "1.25",
            },
        },
        h3: {
            value: {
                fontFamily: "display",
                fontSize: "lg",
                fontWeight: "semibold",
                letterSpacing: "-0.01em",
                lineHeight: "1.3",
            },
        },
        lead: {
            value: {
                fontFamily: "display",
                fontSize: { base: "xl", md: "2xl" },
                fontWeight: "medium",
                letterSpacing: "-0.015em",
                lineHeight: "1.35",
            },
        },
    },
    brand: {
        sm: {
            value: {
                fontFamily: "display",
                fontSize: "sm",
                fontWeight: "semibold",
                lineHeight: "1.3",
            },
        },
        md: {
            value: {
                fontFamily: "display",
                fontSize: "md",
                fontWeight: "bold",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
            },
        },
    },
    body: {
        DEFAULT: {
            value: {
                fontFamily: "body",
                fontSize: "md",
                lineHeight: "1.65",
            },
        },
        sm: {
            value: {
                fontFamily: "body",
                fontSize: "sm",
                lineHeight: "1.6",
            },
        },
        lg: {
            value: {
                fontFamily: "body",
                fontSize: { base: "md", md: "lg" },
                lineHeight: "1.65",
            },
        },
    },
    label: {
        sm: {
            value: {
                fontFamily: "body",
                fontSize: "sm",
                fontWeight: "medium",
                lineHeight: "1",
            },
        },
        md: {
            value: {
                fontFamily: "body",
                fontSize: "md",
                fontWeight: "medium",
                lineHeight: "1",
            },
        },
    },
    mono: {
        DEFAULT: {
            value: {
                fontFamily: "mono",
                fontSize: "sm",
                lineHeight: "1.5",
            },
        },
        xs: {
            value: {
                fontFamily: "mono",
                fontSize: "xs",
                lineHeight: "1.4",
            },
        },
        eyebrow: {
            value: {
                fontFamily: "mono",
                fontSize: "xs",
                fontWeight: "medium",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                lineHeight: "1.4",
            },
        },
    },
});
