import { defineConfig } from "@pandacss/dev";
import { textStyles } from "./text-styles.ts";

export default defineConfig({
    presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
    preflight: true,
    include: ["./src/**/*.{ts,tsx}"],
    exclude: [],
    globalCss: {
        html: {
            scrollBehavior: "smooth",
            _motionReduce: {
                scrollBehavior: "auto",
            },
        },
        "html, body": {
            background: "background",
            color: "foreground",
            fontFamily: "body",
            lineHeight: "1.6",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
        },
        "::selection": {
            background: "accent",
            color: "accent.foreground",
        },
        ":focus-visible": {
            outline: "2px solid",
            outlineColor: "accent",
            outlineOffset: "2px",
        },
    },
    theme: {
        extend: {
            tokens: {
                fonts: {
                    display: { value: "'Space Grotesk', system-ui, sans-serif" },
                    body: { value: "'Inter', system-ui, sans-serif" },
                    mono: { value: "'JetBrains Mono', ui-monospace, monospace" },
                },
            },

            semanticTokens: {
                colors: {
                    background: {
                        value: {
                            base: "#f2f5fa",
                            _osDark: "#03050a",
                        },
                    },
                    surface: {
                        value: {
                            base: "#ffffff",
                            _osDark: "#070c17",
                        },
                    },
                    foreground: {
                        value: {
                            base: "#0a0f1c",
                            _osDark: "#e2e8f0",
                        },
                    },
                    "foreground.muted": {
                        value: {
                            base: "#475569",
                            _osDark: "#7b8ba5",
                        },
                    },
                    border: {
                        value: {
                            base: "#d1dae8",
                            _osDark: "#121d33",
                        },
                    },
                    "border.strong": {
                        value: {
                            base: "#aebcd1",
                            _osDark: "#1e3257",
                        },
                    },
                    accent: {
                        value: {
                            base: "#1e40af",
                            _osDark: "#2563eb",
                        },
                    },
                    "accent.hover": {
                        value: {
                            base: "#1e3a8a",
                            _osDark: "#3b82f6",
                        },
                    },
                    "accent.foreground": {
                        value: {
                            base: "#ffffff",
                            _osDark: "#ffffff",
                        },
                    },
                    "accent.subtle": {
                        value: {
                            base: "#e8effe",
                            _osDark: "rgba(29, 78, 216, 0.16)",
                        },
                    },
                    trace: {
                        value: {
                            base: "#dde6f5",
                            _osDark: "#09132b",
                        },
                    },
                },
            },

            textStyles,
        },
    },
    outdir: "styled-system",

    jsxFramework: "react",
    jsxStyleProps: "minimal",
});
