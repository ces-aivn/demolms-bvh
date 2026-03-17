# LMS BVHTTDL Mockup - Project Overview & PDR

## Project Information

**Project Name:** LMS BVHTTDL Mockup
**Purpose:** Interactive UI/UX demonstration for Vietnam's Ministry of Culture, Sports & Tourism (Bộ Văn hóa, Thể thao và Du lịch)
**Type:** Static mockup with mock data, no backend integration
**Status:** Complete (22 screens, 3 portals)

## Technical Stack

- **Framework:** Next.js 14.2.35 with App Router
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 3.4.1 + shadcn/ui components
- **Icons:** lucide-react 0.577.0
- **Font:** Be Vietnam Pro (Vietnamese typography)
- **UI Components:** Radix UI primitives (avatar, dialog, select, tabs, dropdown-menu, separator)

## Color Palette (Government Branding)

| Color | Hex Value | Usage |
|-------|-----------|-------|
| Primary Red | #B71C1C | Main brand color, buttons |
| Secondary Gold | #FFC107 | Accents, highlights |
| Navy | #1A237E | Text, dark backgrounds |
| White | #FFFFFF | Backgrounds, text contrast |

## Scope: 22 Screens Across 3 Portals

### Learner Portal (9 screens)
- Dashboard with progress overview
- Browse & manage courses
- View course details with lessons
- Personal certificates
- Leaderboard rankings
- User profile management

### Instructor Portal (6 screens)
- Dashboard with student metrics
- Course builder & management
- Quiz builder interface
- Content library (media assets)
- Student progress tracking

### Admin Portal (7 screens)
- System dashboard with analytics
- User management
- Organization management
- Course moderation
- Report generation
- System settings

## Data Layer

**Mock Data Structure:**
- 17 JSON files in `src/data/` containing courses, users, progress, activities, etc.
- `src/lib/mock-data.ts` for centralized data exports
- `src/types/index.ts` for TypeScript type definitions
- Zero database, zero backend API calls

## Key Features (Static Mockup)

✅ 3 distinct portal layouts with navigation
✅ Responsive design (mobile-first)
✅ Interactive components (dialogs, dropdowns, tabs)
✅ Vietnamese language throughout
✅ Government color scheme compliance
✅ Chart visualizations (CSS/SVG, no external libs)
✅ Progress tracking UI (mock data)
✅ Search & filter components

## Requirements Met

| Requirement | Status | Notes |
|-------------|--------|-------|
| 22 screens | ✅ Complete | All portals fully designed |
| TypeScript types | ✅ Complete | Strict mode enabled |
| Accessibility | ✅ In progress | shadcn/ui + Radix UI foundation |
| Responsive mobile | ✅ Complete | Tailwind mobile-first |
| Vietnamese content | ✅ Complete | Full localization |
| Government branding | ✅ Complete | Color palette + typography |
| No backend | ✅ Complete | Static mock data only |

## Non-Functional Requirements

- **Performance:** <3s load time (static assets)
- **Accessibility:** WCAG 2.1 AA (via shadcn/ui)
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Scalability:** Ready for backend integration (mock data layer)

## Deployment

- **Build:** `npm run build` (Next.js static/SSR)
- **Development:** `npm run dev`
- **Environment:** Node.js 18+ required

## Future Enhancements (Out of scope)

- Backend API integration
- Real authentication system
- Database connectivity
- Real-time notifications
- Payment processing
