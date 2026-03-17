# Codebase Summary - LMS BVHTTDL Mockup

## Project Structure Overview

**Total Files:** 175 (src directory only, excludes node_modules)
**Source Code:** 154 TypeScript/TSX files
**Pages:** 22 (full mockup implementation)

## Directory Structure

```
src/
├── app/                              # Next.js App Router
│   ├── (auth)/                       # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── (learner)/                    # Learner portal (9 screens)
│   │   ├── dashboard/
│   │   ├── courses/
│   │   ├── my-courses/
│   │   ├── certificates/
│   │   ├── leaderboard/
│   │   └── profile/
│   ├── (instructor)/instructor/      # Instructor portal (6 screens)
│   │   ├── dashboard/
│   │   ├── course-builder/
│   │   ├── quiz-builder/
│   │   ├── content-library/
│   │   └── students/
│   ├── (admin)/admin/                # Admin portal (7 screens)
│   │   ├── dashboard/
│   │   ├── users/
│   │   ├── courses/
│   │   ├── organizations/
│   │   ├── reports/
│   │   └── settings/
│   ├── learn/                        # Public learning route
│   └── fonts/                        # Be Vietnam Pro font files
│
├── components/                       # React component library
│   ├── ui/                          # shadcn/ui primitives (14 components)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   ├── sheet.tsx
│   │   └── others
│   ├── layout/                      # Layout components
│   │   ├── learner-sidebar.tsx
│   │   ├── instructor-sidebar.tsx
│   │   └── admin-sidebar.tsx
│   ├── shared/                      # Shared components (nav, headers, etc)
│   ├── landing/                     # Landing page components
│   ├── auth/                        # Auth-specific components
│   ├── learner/                     # Learner-specific components
│   ├── instructor/                  # Instructor-specific components
│   ├── admin/                       # Admin-specific components
│   └── charts/                      # Chart components (CSS/SVG)
│
├── data/                            # Mock data layer (17 JSON files)
│   ├── courses.json                 # 50+ mock courses
│   ├── users.json                   # Mock user profiles
│   ├── categories.json              # Course categories
│   ├── badges.json                  # Achievement badges
│   ├── certificates.json            # User certificates
│   ├── content-library.json         # Media assets
│   ├── questions.json               # Quiz questions
│   ├── student-progress.json        # Learning progress
│   ├── leaderboard.json             # Rankings data
│   ├── admin-stats.json             # Dashboard metrics
│   ├── instructor-stats.json        # Instructor metrics
│   ├── activity-logs.json           # User activities
│   ├── organizations.json           # Institution data
│   ├── reviews.json                 # Course reviews
│   ├── mock-progress.json           # Progress tracking
│   ├── email-templates.json         # Mock email content
│   └── settings.json                # System settings
│
├── lib/                             # Utilities & helpers
│   ├── mock-data.ts                 # Centralized data exports
│   └── utils.ts                     # Utility functions
│
├── types/                           # TypeScript definitions
│   └── index.ts                     # All type interfaces
│
├── layout.tsx                       # Root layout
├── globals.css                      # Global styles
└── page.tsx                         # Root page
```

## Technology Breakdown

### Dependencies (10 core packages)
- Next.js 14.2.35 - Full-stack React framework
- React 18 - UI library
- TypeScript 5 - Type safety
- Tailwind CSS 3.4.1 - Utility-first styling
- shadcn/ui - Component library (Radix UI based)
- lucide-react - Icon library (500+ icons)
- Radix UI - Primitive components (avatar, dialog, select, dropdown, tabs, separator)
- class-variance-authority - Component variants
- tailwind-merge - CSS class merging
- clsx - Conditional className utility

### Build & Dev Tools
- ESLint 8 - Code linting
- PostCSS 8 - CSS preprocessing
- TypeScript compiler

## Data Layer Architecture

**Mock Data Pattern:**
- JSON files in `src/data/` contain structured mock datasets
- `src/lib/mock-data.ts` exports all data as TypeScript objects
- Components import directly from `src/lib/mock-data`
- Type-safe: all data matches TypeScript interfaces in `src/types/index.ts`

**Example:** `data/courses.json` → `lib/mock-data.ts` → `types/index.ts` interface → React component

## Component Library Breakdown

### UI Primitives (shadcn/ui)
14 base components from Radix UI + Tailwind styling, all WCAG accessible.

### Portal-Specific Components
- **Learner:** CourseCard, ProgressBar, Certificate, Leaderboard widgets
- **Instructor:** CourseBuilder, QuizBuilder, StudentMetrics, ContentLibrary
- **Admin:** UserManagement, ReportViewer, SystemMetrics, SettingsPanel

### Shared Components
- Navigation sidebars (learner, instructor, admin variants)
- Header/footer components
- Loading states, error boundaries
- Search & filter components
- Pagination, breadcrumbs

## Key Features by Portal

### Learner Portal
- 9 screens covering learning journey
- Progress tracking (mock)
- Certificate management
- Course browsing & enrollment (mock)
- Leaderboard with rankings
- User profile with stats

### Instructor Portal
- 6 screens for course management
- Course builder (visual editor simulation)
- Quiz/assessment builder
- Content library (media management UI)
- Student progress monitoring
- Dashboard with metrics

### Admin Portal
- 7 screens for system administration
- User management (CRUD simulation)
- Organization/institution management
- Course moderation interface
- Analytics & reporting
- System settings panel

## Styling Architecture

**Tailwind CSS Configuration:**
- Custom color palette (government branding)
- Responsive breakpoints (mobile-first)
- Typography system (Be Vietnam Pro font)
- Dark mode support (configured)
- Custom utility extensions

**CSS Organization:**
- `globals.css` - Global reset, fonts, base styles
- Component-scoped: Tailwind classes in JSX
- No CSS-in-JS, pure Tailwind

## Type Safety

**TypeScript Configuration:**
- Strict mode enabled
- All components typed
- Props interfaces defined
- Mock data typed
- No `any` types in core logic

**Types File:** `src/types/index.ts`
- User, Course, Progress, Badge, Certificate interfaces
- Activity, Review, Question types
- Portal-specific DTOs
- Enum definitions for status/role values

## Build & Runtime

**Next.js Config:**
- App Router (React 18+)
- Static generation where possible
- Server & client components mixed
- No API routes (mock data only)
- Image optimization disabled (local dev)

**Development:**
- `npm run dev` - Hot reload, http://localhost:3000
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint check

## File Count Summary

| Category | Count |
|----------|-------|
| Pages (app/) | 22 |
| Components (components/) | 85+ |
| UI Primitives | 14 |
| Data Files (JSON) | 17 |
| TypeScript/TSX | 154 |
| **Total** | **175** |

## Standards & Conventions

✅ **Language:** TypeScript strict mode
✅ **Styling:** Tailwind CSS + shadcn/ui
✅ **Icons:** lucide-react (consistent 24px)
✅ **Naming:** camelCase (JS), kebab-case (files)
✅ **Responsive:** Mobile-first design
✅ **Accessibility:** Radix UI primitives + semantic HTML
✅ **Localization:** Vietnamese throughout, ready for i18n
