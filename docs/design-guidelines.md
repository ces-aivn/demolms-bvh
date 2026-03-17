# Design Guidelines - BVHTTDL E-Learning Portal

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#B71C1C` | Primary actions, active states, key CTAs |
| `primary-50` | `#FFEBEE` | Light backgrounds, hover states |
| `primary-100` | `#FFCDD2` | Badges, soft highlights |
| `primary-800` | `#C62828` | Hover/pressed states on primary buttons |

### Secondary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `secondary` | `#FFC107` | Gold accents, achievements, ratings |
| `secondary-50` | `#FFF8E1` | Achievement backgrounds |

### Navy (Formal/Government)
| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#1A237E` | Certificate headers, formal elements |
| `navy-50` | `#E8EAF6` | Subtle formal backgrounds |

### Semantic Colors
- **Success**: green-500/600 for completion, certificates
- **Warning**: amber-500/600 for deadlines, in-progress
- **Error**: destructive (red) for urgent items
- **Info**: blue-500/600 for enrollment, information

### Stats Widget Icon Colors
Each stat widget uses a unique icon color to improve visual differentiation:
- Enrolled: `bg-blue-100` + `text-blue-600`
- In Progress: `bg-amber-100` + `text-amber-600`
- Completed: `bg-green-100` + `text-green-600`
- Score/Rating: `bg-purple-100` + `text-purple-600`

## Typography

### Font Family
- **Primary**: Be Vietnam Pro (supports Vietnamese diacritical marks)
- **Fallback**: sans-serif

### Type Scale
| Element | Size | Weight | Class |
|---------|------|--------|-------|
| Page Title (h1) | 2xl (24px) | Bold | `text-2xl font-bold tracking-tight` |
| Section Heading (h2) | lg (18px) | Semibold | `font-semibold text-lg` |
| Card Title | base/sm | Semibold | `font-semibold text-sm` |
| Body Text | sm (14px) | Normal | `text-sm` |
| Caption | xs (12px) | Normal | `text-xs text-muted-foreground` |
| Micro | 10px | Medium | `text-[10px]` |

## Spacing Scale
Standard Tailwind 4px base: `1(4px) 2(8px) 3(12px) 4(16px) 5(20px) 6(24px) 8(32px)`

### Component Spacing
- Card padding: `p-4` to `p-5`
- Section gap: `gap-6` (24px)
- Widget gap: `gap-4` (16px)
- Inner element gap: `gap-2` to `gap-3`
- Page bottom margin: `mb-6` to `mb-8`

## Component Patterns

### Cards
- Base: `rounded-xl border bg-white/90 shadow-sm`
- Hover: `hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`
- Glass effect: `glass-card` utility class

### Buttons
- Primary CTA: `bg-gradient-to-r from-primary to-primary-700 shadow-md hover:shadow-lg`
- Secondary: `variant="outline" border-primary/30 text-primary hover:bg-primary/5`
- Ghost: `variant="ghost" text-muted-foreground`

### Sidebar
- Active state: `bg-primary/10 text-primary shadow-sm border border-primary/15 font-semibold`
- Inactive: `text-foreground/70 border border-transparent`
- Hover: `hover:bg-primary-50 hover:text-primary`

### Banners
- Welcome: gradient `from-primary via-primary-800 to-navy-900` with decorative circles
- Course detail: domain-specific gradient with decorative overlay elements

### Page Headers
- Include bottom border: `pb-4 border-b border-border/50`
- Title + optional description + optional actions

## Decorative Elements
- Translucent circles for banner depth: `bg-white/5 rounded-full`
- Gradient overlays for visual interest
- Subtle ring effects on avatars: `ring-2 ring-offset-2`

## Accessibility
- Min contrast ratio: WCAG 2.1 AA (4.5:1 normal text, 3:1 large text)
- Touch targets: min 44x44px on mobile
- Focus states on all interactive elements
- `prefers-reduced-motion` respected via Tailwind animate utilities

## Responsive Breakpoints
- Mobile: 320px+ (default)
- Tablet: 768px+ (`sm:`, `md:`)
- Desktop: 1024px+ (`lg:`)
- Wide: 1280px+ (`xl:`)

## Gov-Formal Design Principles
1. Professional, authoritative appearance
2. Red-gold palette reflects Vietnamese government branding
3. Navy accents for formal/certificate elements
4. Clean typography with adequate whitespace
5. Structured layouts with clear visual hierarchy
6. Subtle animations, no flashy effects
