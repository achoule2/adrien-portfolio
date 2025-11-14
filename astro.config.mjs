// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify'; // Importer l'adaptateur Netlify

export default defineConfig({
    output: 'server', // Passer en mode SSR
    adapter: netlify(), // Ajouter l'adaptateur Netlify
    vite: {
        plugins: [tailwindcss()],
    },
});