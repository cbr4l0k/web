import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        summary: z.string(),
        status: z.string().default("leyendo"),
        started: z.string().optional(),     // Format: DD/MM/YYYY
        finished: z.string().optional(),    // Format: DD/MM/YYYY
        tags: z.array(z.string()).default([]),
        private: z.boolean().default(true),
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
        private: z.boolean().default(true),
        links: z.array(z.object({
            label: z.string(),
            href: z.string().url(),
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
        private: z.boolean().default(true),
    }),
});

const food = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/food" }),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        cuisine: z.string().optional(),
        prepTime: z.string().optional(),
        cookTime: z.string().optional(),
        servings: z.string().optional(),
        difficulty: z.string().optional(),
        tags: z.array(z.string()).default([]),
        private: z.boolean().default(true),
    }),
});

export const collections = {
    blog,
    projects,
    random,
    food,
};
