import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
// const { libInjectCss } = pkg;

// https://vitejs.dev/config/
export default defineConfig({
    // build: {
    //     lib: {
    //         entry: path.resolve(__dirname, "src/index.jsx"),
    //         name: "gg-bsw",
    //         fileName: (format) => `gg-bsw.${format}.js`,
    //     },
    //     rollupOptions: {
    //         external: ["react", "react-dom"],
    //         output: {
    //             globals: {
    //                 react: "React",
    //             },
    //         },
    //     },
    // },
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [react(), tailwindcss(), libInjectCss()],
});
