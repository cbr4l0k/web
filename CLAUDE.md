# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Development commands (run from project root):

- `pnpm run dev` - Start development server at localhost:4321
- `pnpm run build` - Build production site to ./dist/

## Architecture Overview

This is an Astro-based personal website with TailwindCSS 4.x styling and MDX content management.

### Project Structure

- **Content Collections**: Three main collections defined in `src/content.config.ts`:
  - `books/` - Book reviews with frontmatter (title, author, summary, status, dates)
  - `projects/` - Project documentation with metadata (title, summary, role, status, period, stack, links)
  - `random/` - Blog-style content with tags and dates

- **Components**: Reusable Astro components in `src/components/`:
  - Layout components: `Header.astro`, `Nav.astro`, `Footer.astro`
  - Content cards: `BookCard.astro`, `ProjectCard.astro`, `ReferenceCard.astro`
  - UI elements: `Callout.astro`, `Stat.astro`, `LoadingScreen.astro`

- **Layouts**:
  - `BaseLayout.astro` - Core layout with responsive sidebar, theme switching, and mobile navigation
  - `StandardPageLayout.astro` - Standard content pages

- **Routing**: File-based routing with dynamic routes:
  - `/books/[...slug].astro` - Individual book pages
  - `/projects/[...slug].astro` - Individual project pages
  - `/random/[...slug].astro` - Individual blog posts
  - `/references/` - References page using JSON data

### Key Features

- **Theme System**: Dark/light mode with localStorage persistence and system preference detection
- **Responsive Sidebar**: Collapsible on desktop (with state persistence), overlay on mobile
- **Reference System**: JSON-based references in `src/data/references.json` with TypeScript interfaces
- **Path Utils**: `src/utils/paths.ts` handles GitHub Pages deployment paths (base path handling for production vs dev)

### Configuration

- **Astro Config**: MDX integration, TailwindCSS via Vite plugin, GitHub Pages deployment setup
- **Site**: Configured for GitHub Pages at `cbr4l0k.github.io/web/` in production
- **Styling**: TailwindCSS 4.x with custom tokens in `src/styles/tokens.css`

### Content Authoring

Content uses MDX format with YAML frontmatter. Each collection has specific schema requirements defined in the content config. References are managed through JSON files with a TypeScript interface for type safety.
