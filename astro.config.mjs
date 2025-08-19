// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    site: 'https://cbr4l0k.github.io',
    base: process.env.NODE_ENV === 'production' ? '/web/' : undefined,
});
