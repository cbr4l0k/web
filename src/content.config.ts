import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const books = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/books" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        summary: z.string(),
        status: z.string().default("leyendo"),
        started: z.string().optional(),     // Format: DD/MM/YYYY
        finished: z.string().optional(),    // Format: DD/MM/YYYY
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        role: z.string().optional(),
        status: z.string().optional(),
        period: z.string().optional(),
        stack: z.array(z.string()).default([]),
        links: z.array(z.object({
            label: z.string(),
            url: z.string().url(),
        })).default([]), 
    }),
});

const random = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/random" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        author: z.string().optional(),
        date: z.string().optional(), // Format: DD/MM/YYYY
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    books,
    projects,
    random,
};
