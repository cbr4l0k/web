// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";

export default defineConfig({
    integrations: [mdx(), icon()],
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://simple-elegant-web.site',
    base: process.env.NODE_ENV === 'production' ? undefined : undefined,
});
