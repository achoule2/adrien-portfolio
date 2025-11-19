// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

export default defineConfig({
    output: 'server', // Passer en mode SSR
    adapter: netlify(), // Ajouter l'adaptateur Netlify
    vite: {
        plugins: [tailwindcss()],
    },
});