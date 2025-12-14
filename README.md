# SEWS - Simple Elegant Web Site

A minimal personal website built with Astro, TailwindCSS 4.x, and MDX.

## Project Structure

```text
/
├── src/
│   ├── content/          # MDX content collections
│   │   ├── books/       # Book reviews
│   │   ├── projects/    # Project documentation
│   │   └── random/      # Blog posts
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes
│   └── data/            # JSON data (references, etc.)
└── public/              # Static assets
```

## Commands

| Command          | Action                              |
| :--------------- | :---------------------------------- |
| `bun install`    | Install dependencies                |
| `bun run dev`    | Start dev server at localhost:4321  |
| `bun run build`  | Build production site to ./dist/    |

## Content Collections

Add content by creating MDX files in the respective collection folders:
- `/src/content/books/` - Book reviews
- `/src/content/projects/` - Projects
- `/src/content/random/` - Blog posts

Each collection requires specific frontmatter. Check `src/content.config.ts` for schema details.
