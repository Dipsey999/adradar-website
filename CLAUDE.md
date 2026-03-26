# adRadar Website

## Design System

**IMPORTANT**: Before generating any design, component, or UI code for adRadar, you MUST read `design.md` first. This file contains the complete design system including colors, typography, spacing, component patterns, effects, and responsive behavior. All generated designs must follow these specifications for consistency.

## Tech Stack

- Angular 21 (zoneless — no Zone.js)
- Tailwind CSS v4 (CLI compilation)
- TypeScript

## Key Commands

- **Dev server**: `npx ng serve --port 4200`
- **Tailwind build**: `npm run tw:build` (run after adding new Tailwind classes)
- **Tailwind source**: `src/tailwind.css` → `src/styles.css`

## Architecture Notes

- All components are standalone with inline templates and styles
- Zoneless Angular: use `signal()` + `ChangeDetectorRef.detectChanges()` for manual event listener callbacks
- Use `overflow-x-clip` (not `overflow-x-hidden`) on scrollable containers to preserve sticky positioning
- Components live in `src/app/components/<name>/<name>.component.ts`
- Pages live in `src/app/pages/<name>/<name>.component.ts` (lazy-loaded via Angular Router)
- Agent pages live in `src/app/pages/agents/<agent-name>/<agent-name>.component.ts`
- Routing config in `src/app/app.routes.ts`
- Static assets in `public/` (agents, images, icons, logo, testimonials)
