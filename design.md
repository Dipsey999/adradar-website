# adRadar Design System

> **IMPORTANT**: This is the single source of truth for all adRadar design decisions. Every component, page, and UI element must follow these specifications for consistency.

---

## 1. Color Palette

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#e8573a` | Main brand orange-red, CTAs, active states |
| Primary Dark | `#d14a30` | Hover/active variant of primary |
| Accent | `#ff6b35` | Bright orange, secondary emphasis |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| Foreground | `#1a1a2e` | Primary text color |
| Text Dark | `#111827` | Headings, bold content |
| Text Medium | `#374151` | Medium emphasis text |
| Text Light | `#4b5563` | Body text, descriptions |
| Muted | `#6b7280` | Secondary text, captions |
| Subtle | `#9ca3af` | Placeholder, disabled text |

### Background Colors
| Token | Value | Usage |
|-------|-------|-------|
| White | `#ffffff` | Main page background |
| Section Alt | `#fef6f3` | Warm off-white section alternation |
| Section Cool | `#f8fafb` | Cool gray section alternation |
| Dark | `#1a1a2e` | Footer, dark sections |

### Border & UI Colors
| Token | Value | Usage |
|-------|-------|-------|
| Border | `#e5e7eb` | Default borders |
| Border Light | `#e8e8e8` | Subtle borders, dividers |
| Border Focus | Primary color | Active/focus states |

---

## 2. Agent Card Color System (7 Agents)

Each agent has a complete 6-color system. **Always use these exact values** when building agent-specific UI.

### Company Blocking Agent
| Property | Value |
|----------|-------|
| Card BG | `#e3f3fa` |
| Card Border | `#9dcce7` |
| Avatar BG | `#b8dff0` |
| Button BG | `#9dcce7` |
| Button Text | `#1a5a78` |
| Accent | `#4a9cc5` |

### Impression Capping Agent
| Property | Value |
|----------|-------|
| Card BG | `#e5f7fa` |
| Card Border | `#a8d1dc` |
| Avatar BG | `#a8d1dc` |
| Button BG | `#a8d1dc` |
| Button Text | `#1a5a6a` |
| Accent | `#3a97ab` |
| Dark | `#1a5a6a` |
| Light BG | `#f0fafb` |

### Title Blocking Agent
| Property | Value |
|----------|-------|
| Card BG | `#fbf2f5` |
| Card Border | `#f4e0e9` |
| Avatar BG | `#ee95a0` |
| Button BG | `#ee95a0` |
| Button Text | `#5e1a24` |
| Accent | `#d4606f` |

### Bidding Optimization Agent
| Property | Value |
|----------|-------|
| Card BG | `rgba(38,216,98,0.12)` |
| Card Border | `#acdfa4` |
| Avatar BG | `#acdfa4` |
| Button BG | `#82c97a` |
| Button Text | `#1a4a18` |
| Accent | `#4a9a42` |

### Campaign Scheduling Agent
| Property | Value |
|----------|-------|
| Card BG | `#fffbe3` |
| Card Border | `#fdecc8` |
| Avatar BG | `#fbf5df` |
| Button BG | `#f0d48a` |
| Button Text | `#5e4a0e` |
| Accent | `#c5a030` |

### Ad Rotation Agent
| Property | Value |
|----------|-------|
| Card BG | `#f7f3f8` |
| Card Border | `#e8deee` |
| Avatar BG | `#d9e1fb` |
| Button BG | `#c8b4e0` |
| Button Text | `#3e2460` |
| Accent | `#6b5ea0` |

### Analyse Competitors Agent
| Property | Value |
|----------|-------|
| Card BG | `#edf3ec` |
| Card Border | `#dbeddb` |
| Avatar BG | `#acdfa4` |
| Button BG | `#82c97a` |
| Button Text | `#1a4a18` |
| Accent | `#4a9a42` |

---

## 3. Typography

### Font Families
```css
--font-sans: "DM Sans", "Graphik", system-ui, sans-serif;
--font-brand: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
```
- **DM Sans**: Primary body/UI font (Google Fonts, free fallback for Graphik)
- **Helvetica**: Brand/logo text only
- **Anti-aliasing**: `-webkit-font-smoothing: antialiased` on body

### Type Scale

| Level | Size (mobile / md / lg) | Weight | Line Height | Letter Spacing | Usage |
|-------|------------------------|--------|-------------|----------------|-------|
| Display | 48 / 64 / 76px | 700 | 1.05 | -0.02em | Hero h1 |
| H1 | 28 / 38 / 44px | 700 | 1.1 | -0.025em | Section headings |
| H2 | 24 / 32 / 36px | 700 | 1.1 | -0.02em | Sub-sections |
| H3 | 18 / 20px | 600 | 1.3 | -0.01em | Card titles |
| H4 | 16 / 17px | 600 | snug | -- | Small headings |
| Body LG | 17px | 400 | 1.65 | -- | Subheadings, descriptions |
| Body | 15px | 400 | 1.65 | -- | Default body text |
| Body SM | 14px | 400 | 1.6 | -- | Card descriptions, features |
| Caption | 13px | 600 | -- | 0.06em | Badges, overlines (uppercase) |
| Small | 12px | 500 | -- | -- | Labels, metadata |
| Overline | 11px | 700 | -- | 0.08em | Hero badge text (uppercase) |

### Responsive Text Alignment
- **Mobile**: `text-left` (left-aligned)
- **Desktop (md+)**: `text-center` (centered)
- Pattern: `text-left md:text-center`
- Max-width centering: `max-w-none md:max-w-[640px] mx-0 md:mx-auto`

---

## 4. Spacing

### Section Spacing
| Context | Value |
|---------|-------|
| Section vertical | `py-12 lg:py-20` to `py-24 lg:py-28` |
| Section heading margin | `mb-12` to `mb-16` |
| Container max-width | `max-w-[1200px]` (content), `max-w-[1480px]` (full) |
| Horizontal padding | `px-6` (all breakpoints) |

### Component Spacing
| Context | Value |
|---------|-------|
| Card padding | `p-6` to `p-8` |
| Grid gap | `gap-5` to `gap-7` |
| Flex gap | `gap-2` (tight) to `gap-6` (loose) |
| Stack gap | `space-y-3` to `space-y-6` |

---

## 5. Border Radius

| Size | Value | Usage |
|------|-------|-------|
| Full | `rounded-full` | Buttons, pills, avatars, badges |
| XL | `rounded-xl` (16px) | Small components, inner cards |
| 2XL | `rounded-2xl` (24px) | Cards, modals, sections |
| Custom | `rounded-[28px]` to `rounded-[32px]` | Hero images, agent cards |

---

## 6. Shadow System

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | `0_2px_12px_-3px_rgba(0,0,0,0.08)` | Default card shadow |
| Medium | `0_8px_40px_-10px_rgba(0,0,0,0.08)` | Elevated cards, images |
| Strong | `0_20px_60px_-10px_rgba(0,0,0,0.12)` | Dropdowns, popovers |
| Primary | `shadow-lg shadow-primary/10` | Highlighted pricing card |
| Hover lift | `0_16px_50px_-12px_rgba(26,90,106,0.16)` | Card hover states |

### Agent-Specific Shadows
Use the agent's accent color for shadow tints:
```
shadow-[0_4px_16px_-4px_rgba({agent-accent-rgb},0.3)]
```

---

## 7. Component Patterns

### Primary CTA Button
```html
<a class="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white rounded-full pl-6 pr-1.5 py-1.5 transition-colors">
  <span class="text-[15px] font-medium">Start free trial</span>
  <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center">
    <!-- Arrow SVG icon -->
  </div>
</a>
```

### Secondary Button (Outline)
```html
<a class="h-12 px-8 flex items-center justify-center border border-[color] rounded-full text-[15px] font-medium text-[color] hover:bg-[light-bg] transition-colors">
  Button text
</a>
```

### Agent Card (Copilot Section)
```
[cardBg] [cardBorder] border-2 rounded-[24px] p-8
Avatar: [avatarBg] w-[112px] h-[112px] rounded-full overflow-hidden
Title: text-[20px] font-bold text-[#111827]
Description: text-[15px] text-[#4b5563] leading-[1.65]
Button: rounded-full px-4 py-1.5 text-[13px] font-semibold [btnBg] [btnText]
```

### Pricing Card
```
bg-white rounded-2xl p-6 border flex flex-col
Default: border-gray-200
Highlighted: border-primary shadow-lg shadow-primary/10
Badge: absolute -top-3 left-1/2 -translate-x-1/2
```

### Testimonial Card
```
rounded-2xl border border-[#e8a96d]/30 backdrop-blur-2xl
bg-gradient-to-br from-white/90 via-white/70 to-[#fef3ec]/40
shadow-[0_2px_20px_-6px_rgba(232,135,58,0.06)]
Hover: shadow-[0_12px_50px_-8px_rgba(232,135,58,0.2)] -translate-y-1.5 scale-[1.02]
Avatar: w-12 h-12 rounded-full ring-2 ring-white/80
```

### Navbar
```
sticky top-0 z-50 bg-white border-b border-border
Height: h-[70px]
Container: max-w-[1480px] mx-auto px-6
Logo: h-[34px] w-auto
Dropdown: w-[620px] rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12)]
```

---

## 8. Layout Patterns

### Responsive Grid
| Layout | Pattern |
|--------|---------|
| 2-column | `grid md:grid-cols-2 gap-6` |
| 3-column | `grid md:grid-cols-3 gap-6` |
| 4-column (pricing) | `grid md:grid-cols-2 lg:grid-cols-4 gap-6` |

### Section Container Pattern
```html
<section class="py-20 bg-white">
  <div class="max-w-[1200px] mx-auto px-6">
    <!-- Section heading -->
    <div class="text-left md:text-center mb-14">
      <span class="text-[13px] font-semibold tracking-[0.06em] uppercase text-[#3a97ab] mb-4 block">LABEL</span>
      <h2 class="text-[28px] md:text-[38px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.025em] text-[#111827]">Heading</h2>
      <p class="text-[17px] text-[#4b5563] leading-[1.65] max-w-none md:max-w-[680px] mx-0 md:mx-auto mt-4">...</p>
    </div>
    <!-- Content grid -->
  </div>
</section>
```

---

## 9. Animations & Transitions

### Transition Durations
| Speed | Duration | Usage |
|-------|----------|-------|
| Quick | `duration-200` | Opacity, color changes |
| Default | `duration-300` | Most hover effects |
| Medium | `duration-500` | Card lifts, shadows |
| Slow | `duration-700` | Complex multi-property animations |

### Keyframe Animations
| Name | Duration | Usage |
|------|----------|-------|
| `scroll-left` | 25s linear infinite | Testimonial auto-scroll |
| `shimmer-sweep` | 1s ease-in-out | Card hover shine |
| `glow-pulse` | 2s ease-in-out infinite | Ring glow effects |
| `agent-float` | 4s ease-in-out infinite | Agent constellation float |
| `pulse-ring` | 3s ease-in-out infinite | Center agent pulse ring |
| `donut-draw` | 1.8s cubic-bezier | Chart fill animation |

### Easing Functions
- Standard: `ease-out`
- Smooth lift: `cubic-bezier(0.23, 1, 0.32, 1)` (card hovers)
- Draw/fill: `cubic-bezier(0.4, 0, 0.2, 1)` (chart animations)

---

## 10. Special Effects

### Glass Morphism
```css
backdrop-blur-2xl          /* Strong blur (testimonials) */
backdrop-blur-md           /* Medium blur (footer icons) */
bg-white/[0-90%]           /* Transparent white layers */
```

### Text Gradients
```css
background: linear-gradient(...);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Ambient Glows
```css
/* Background radial glows behind sections */
bg-radial-[closest-side] from-[color]/20 to-transparent blur-[60px-100px]
```

### Footer Glass Text (3-layer system)
1. **Outline layer**: `-webkit-text-stroke: 1.2px rgba(255,255,255,0.10)`
2. **Liquid fill**: Bottom-up orange gradient with `background-clip: text`
3. **Highlight**: Diagonal specular reflection gradient

---

## 11. Z-Index Stacking
| Layer | Z-Index | Usage |
|-------|---------|-------|
| Navbar | `z-50` | Sticky header |
| Dropdowns | `z-10` | Nav dropdown panels |
| Center agent | `z-20` | Constellation center |
| Orbit agents | `z-10` | Constellation ring |
| Background decor | `-z-10` | Gradient blurs, patterns |

---

## 12. Responsive Breakpoints
| Breakpoint | Width | Notes |
|------------|-------|-------|
| Default | 0+ | Mobile-first styles |
| `md` | 768px | Tablet, 2-col grids |
| `lg` | 1024px | Desktop, full layouts |
| `xl` | 1280px | Wide desktop (selective) |

### Responsive Patterns
- Text: `text-left md:text-center`
- Width: `max-w-none md:max-w-[640px]`
- Margin: `mx-0 md:mx-auto`
- Visibility: `hidden md:flex` / `md:hidden`
- Font size: `text-[28px] md:text-[38px] lg:text-[44px]`

---

## 13. Image & Asset Guidelines

### Agent Avatars
- Format: PNG with transparent background
- Location: `/agents/[Agent Name].png`
- Display: `rounded-full overflow-hidden object-cover`
- Background: Agent's `avatarBg` color behind the image

### Logo
- Primary: `/logo/adradar-logo.svg` (dark variant)
- Footer: `/logo/adradar-logo-white.svg` (light variant)
- Height: `h-[34px]` (navbar)

### Dashboard Screenshots
- Location: `/images/`
- Display: `rounded-[20px] md:rounded-[28px]` with shadow
- Always use `object-cover` for responsive scaling

---

## 14. Agent Page Design Pattern

When creating an individual agent page, follow this template structure:

1. **Hero** -- Agent badge, headline, subheading, 2 CTAs (agent-dark + outline), agent constellation (all 7 agents, current highlighted center)
2. **Problem Stats** -- Section label, heading, 3 stat cards with inline SVG visualizations (donut chart, dot grid, bar chart)
3. **Comparison** -- Side-by-side cards (LinkedIn limitations vs AdRadar advantages), red X vs teal checkmarks
4. **How It Works** -- Vertical timeline with numbered circles, 4-5 steps
5. **Comparison Table** -- Desktop: 3-column table with colored header. Mobile: stacked cards
6. **Results Stats** -- 3 large metrics with gradient dividers
7. **Related Agents** -- 2-column grid of connected agent cards with avatars and descriptions
8. **Final CTA** -- Agent avatar, headline, 2 CTAs, trust text

### Agent Page Color Mapping
- Use the agent's **Dark** color for CTA backgrounds and heading accents
- Use the agent's **Accent** color for timeline circles, checkmarks, and highlights
- Use the agent's **Card BG** for tinted section backgrounds
- Use the agent's **Light BG** for subtle gradients
- Use the agent's **Card Border** for card borders and dividers
