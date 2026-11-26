import pandacss from "@pandacss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "panda-virtual-css",
            enforce: "pre",
            resolveId: (id: string): string | null => (id === "virtual:panda.css" ? id : null),
            load: (id: string): string | null =>
                id === "virtual:panda.css"
                    ? "@layer reset, base, tokens, recipes, utilities;"
                    : null,
        },
        pandacss(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "styled-system": fileURLToPath(new URL("./styled-system", import.meta.url)),
        },
    },
});
