# LMS BVHTTDL Mockup - Documentation Index

Welcome to the LMS BVHTTDL (Learning Management System - Bộ Văn hóa, Thể thao và Du lịch) documentation. This is a comprehensive 22-screen UI/UX mockup for Vietnam's Ministry of Culture, Sports & Tourism.

## Quick Navigation

### 1. **[Project Overview & PDR](./project-overview-pdr.md)**
Start here for high-level understanding.
- Project name, purpose, and scope
- Technology stack (Next.js 14, TypeScript, Tailwind, shadcn/ui)
- Government color palette
- 22 screens across 3 portals
- Requirements traceability matrix
- **Best for:** Stakeholders, project managers, quick reference

### 2. **[Codebase Summary](./codebase-summary.md)**
Understanding the code structure and organization.
- Complete directory tree (175 source files)
- Component inventory and categorization
- 17 mock data JSON files with purposes
- Type system organization
- Build & runtime information
- **Best for:** Developers, architects, code reviewers

### 3. **[Code Standards](./code-standards.md)**
Rules and conventions for development.
- TypeScript strict mode requirements
- Naming conventions (camelCase, kebab-case)
- Component structure patterns
- Tailwind CSS + shadcn/ui standards
- Accessibility (WCAG 2.1 AA)
- Localization (Vietnamese)
- **Best for:** Developers, linters, code reviews

### 4. **[System Architecture](./system-architecture.md)**
Technical design and system patterns.
- 5-layer architecture overview
- Route groups and portal layouts
- Component hierarchy and data flow
- Mock data layer architecture
- State management strategy
- Future backend integration path
- **Best for:** Architects, senior developers, design reviews

## Project At A Glance

| Aspect | Details |
|--------|---------|
| **Project Name** | LMS BVHTTDL Mockup |
| **Client** | Vietnam's Ministry of Culture, Sports & Tourism |
| **Type** | Static UI/UX mockup with mock data |
| **Screens** | 22 total (9 learner, 6 instructor, 7 admin) |
| **Tech Stack** | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui |
| **Source Files** | 175 TypeScript/TSX files |
| **Components** | 14 UI primitives + 40+ portal-specific |
| **Mock Data** | 17 JSON files |
| **Localization** | Vietnamese |
| **Accessibility** | WCAG 2.1 AA |
| **Backend** | None (static mockup) |

## Three Portals

### Learner Portal (9 screens)
Student-facing learning management interface with course browsing, progress tracking, certificates, and leaderboards.

### Instructor Portal (6 screens)
Teacher-facing course authoring and student management tools including course builder, quiz builder, and analytics.

### Admin Portal (7 screens)
System administration interface for user management, course moderation, organization settings, and reporting.

## Key Features

✅ **22 Interactive Screens** - Fully designed and implemented mockup
✅ **3 Portal Layouts** - Learner, Instructor, Admin with distinct navigation
✅ **Mock Data Layer** - 17 JSON files with TypeScript type safety
✅ **Component Library** - 14 shadcn/ui primitives + 40+ portal-specific components
✅ **Responsive Design** - Mobile-first with Tailwind CSS breakpoints
✅ **Type Safety** - Full TypeScript strict mode, no `any` types
✅ **Accessibility** - WCAG 2.1 AA compliant with Radix UI primitives
✅ **Vietnamese Localization** - Complete Vietnamese UI throughout
✅ **Government Branding** - Official color palette (#B71C1C, #FFC107, #1A237E)

## Technology Stack

- **Framework:** Next.js 14.2.35 with App Router
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 3.4.1
- **Components:** shadcn/ui (Radix UI based)
- **Icons:** lucide-react
- **Typography:** Be Vietnam Pro (Vietnamese font)

## File Organization

```
docs/
├── README.md                      ← You are here
├── project-overview-pdr.md        ← Project info & requirements
├── codebase-summary.md            ← Code structure
├── code-standards.md              ← Development standards
└── system-architecture.md         ← System design
```

## Quick Links

**For New Team Members:**
1. Read: [Project Overview](./project-overview-pdr.md) (5 min)
2. Read: [Codebase Summary](./codebase-summary.md) (10 min)
3. Reference: [Code Standards](./code-standards.md) (when needed)

**For Architecture/Design Reviews:**
1. Start: [System Architecture](./system-architecture.md)
2. Reference: [Code Standards](./code-standards.md)
3. Cross-check: [Codebase Summary](./codebase-summary.md)

**For Ministry Presentation:**
1. Use: [Project Overview](./project-overview-pdr.md)
2. Highlight: Government branding & localization
3. Demo: 22 screens across 3 portals

## Standards & Best Practices

### Code Standards
- **Language:** TypeScript strict mode (no `any` types)
- **Naming:** camelCase (JS), kebab-case (files)
- **Styling:** Tailwind CSS only (no raw CSS)
- **Icons:** lucide-react (24px standard)
- **Components:** shadcn/ui primitives only

### Architecture Patterns
- **Routing:** Next.js App Router with route groups
- **Layouts:** 3 portal-specific layouts (learner/instructor/admin)
- **Data:** Mock JSON → TypeScript objects → React components
- **Types:** Centralized in `src/types/index.ts`
- **State:** React hooks + Props drilling (no Redux needed)

### Quality Standards
- **Accessibility:** WCAG 2.1 AA compliance
- **Responsiveness:** Mobile-first design
- **Localization:** Vietnamese throughout
- **Performance:** Optimized component rendering
- **Type Safety:** Full TypeScript coverage

## Future Enhancements

### Backend Integration (Out of scope)
When ready to add backend functionality:
- Replace mock data imports with API calls
- Implement real authentication
- Connect to database
- Add real course content delivery

See detailed integration path in [System Architecture](./system-architecture.md#future-backend-integration).

## Getting Started

**Development:**
```bash
npm install
npm run dev        # Start dev server (localhost:3000)
```

**Building:**
```bash
npm run build      # Production build
npm start          # Run production server
```

**Code Quality:**
```bash
npm run lint       # Run ESLint
```

## Contact & Support

- **Project:** LMS BVHTTDL Mockup
- **Client:** Vietnam's Ministry of Culture, Sports & Tourism
- **Documentation:** Current (2026-03-17)
- **Status:** Production-ready mockup, ready for ministry presentation

## Version History

| Date | Version | Notes |
|------|---------|-------|
| 2026-03-17 | 1.0 | Initial documentation suite created |

---

**Documentation Status:** Complete & Production-Ready
**Last Updated:** 2026-03-17
**Next Review:** Upon significant feature changes
