// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://cbr4l0k.github.io',
    base: process.env.NODE_ENV === 'production' ? '/web/' : undefined,
});
