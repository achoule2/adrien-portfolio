// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

export default defineConfig({
    output: 'server', // Passer en mode SSR
    adapter: node({
      mode: "standalone",
    }), // Ajouter l'adaptateur Netlify
    vite: {
        plugins: [tailwindcss()],
    },
});