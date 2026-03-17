# System Architecture - LMS BVHTTDL Mockup

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                  Next.js App Router                 │
│  (Route groups: auth, learner, instructor, admin)  │
└──────────────────┬──────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
   ┌────────┐ ┌────────┐ ┌────────┐
   │ Pages  │ │Layouts │ │ Server │
   │(22)    │ │(3)     │ │ Comps  │
   └────────┘ └────────┘ └────────┘
        │          │          │
        └──────────┼──────────┘
                   │
        ┌──────────▼──────────┐
        │  Component Library  │
        │ (UI + Portal-spec)  │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   Mock Data Layer   │
        │ (JSON + TypeScript) │
        └─────────────────────┘
```

## Layer 1: Next.js App Router

**Technology:** Next.js 14 with App Router (React Server Components)

**Route Groups:**
```
app/
├── (auth)/              # Authentication pages
│   ├── login/page.tsx
│   └── register/page.tsx
├── (learner)/           # Learner portal (protected layout)
│   ├── dashboard/page.tsx
│   ├── courses/page.tsx
│   ├── my-courses/page.tsx
│   ├── certificates/page.tsx
│   ├── leaderboard/page.tsx
│   └── profile/page.tsx
├── (instructor)/instructor/  # Instructor portal
│   ├── dashboard/page.tsx
│   ├── course-builder/page.tsx
│   ├── quiz-builder/page.tsx
│   ├── content-library/page.tsx
│   └── students/page.tsx
├── (admin)/admin/       # Admin portal
│   ├── dashboard/page.tsx
│   ├── users/page.tsx
│   ├── courses/page.tsx
│   ├── organizations/page.tsx
│   ├── reports/page.tsx
│   └── settings/page.tsx
└── learn/[id]/page.tsx  # Public learning detail view
```

**Root Layout:** `app/layout.tsx`
- Global font loading (Be Vietnam Pro)
- Tailwind CSS initialization
- Metadata configuration

## Layer 2: Portal Layouts (3 variants)

Each portal has a dedicated layout component:

### Learner Layout
- **File:** `src/components/layout/learner-sidebar.tsx`
- **Structure:** Sidebar (left) + Main content (right)
- **Navigation Items:**
  - Dashboard
  - My Courses
  - Browse Courses
  - Certificates
  - Leaderboard
  - Profile
- **Header:** User avatar, notifications badge, settings menu

### Instructor Layout
- **File:** `src/components/layout/instructor-sidebar.tsx`
- **Structure:** Sidebar (left) + Main content (right)
- **Navigation Items:**
  - Dashboard
  - Course Builder
  - Quiz Builder
  - Content Library
  - Student Progress
- **Header:** Instructor name, course selector, settings

### Admin Layout
- **File:** `src/components/layout/admin-sidebar.tsx`
- **Structure:** Sidebar (left) + Main content (right)
- **Navigation Items:**
  - Dashboard
  - Users
  - Courses
  - Organizations
  - Reports
  - Settings
- **Header:** Admin info, system status, settings

**Common Layout Features:**
- Responsive: Sidebar collapses on mobile (sheet menu)
- Active link highlighting
- Breadcrumb navigation
- Footer with legal links

## Layer 3: Component Library

### UI Primitives (shadcn/ui + Radix)
14 base components providing accessible, styled elements:
- Button, Card, Badge, Avatar, Dialog, Dropdown Menu
- Input, Select, Tabs, Table, Sheet, Separator

### Portal-Specific Components

**Learner Components:**
- `CourseCard` - Course preview with progress
- `ProgressBar` - Visual completion indicator
- `CertificateCard` - Certificate display
- `LeaderboardTable` - Rankings with medals
- `EnrollmentModal` - Course enrollment dialog
- `LessonViewer` - Content consumption UI

**Instructor Components:**
- `CourseBuilder` - Drag-drop course structure
- `QuizBuilder` - Question/answer editor
- `StudentMetricsCard` - Performance statistics
- `ContentLibraryGrid` - Media asset browser
- `StudentProgressTable` - Individual tracking
- `AssignmentModal` - Task creation dialog

**Admin Components:**
- `UserManagementTable` - User CRUD interface
- `OrganizationForm` - Org profile editor
- `ReportViewer` - Analytics dashboard
- `SystemSettingsPanel` - Config management
- `ActivityLog` - Audit trail viewer
- `CourseModeratorUI` - Review & approve interface

### Shared Components
- `Header` - Top navigation bar
- `Navigation` - Sidebar navigation
- `SidebarNav` - Navigation item list
- `BreadcrumbNav` - Path navigation
- `Footer` - Page footer
- `LoadingSpinner` - Loading state
- `EmptyState` - Empty container UI
- `ErrorBoundary` - Error catch component

### Chart Components
CSS/SVG based visualizations (no external chart library):
- `BarChart` - Horizontal/vertical bar charts
- `PieChart` - Donut/pie charts
- `LineChart` - Trend visualization
- `ProgressChart` - Completion indicators

## Layer 4: Mock Data Layer

### Architecture Pattern

```
JSON Files (src/data/)
         ↓
TypeScript Objects (src/lib/mock-data.ts)
         ↓
Type Definitions (src/types/index.ts)
         ↓
React Components
```

### Data Files (17 JSON sources)

| File | Purpose | Records |
|------|---------|---------|
| `courses.json` | Course catalog | 50+ |
| `users.json` | User profiles | 100+ |
| `student-progress.json` | Progress tracking | 500+ |
| `questions.json` | Quiz questions | 150+ |
| `leaderboard.json` | Rankings | 100 |
| `certificates.json` | User certs | 50 |
| `badges.json` | Achievement badges | 20 |
| `categories.json` | Course categories | 10 |
| `content-library.json` | Media assets | 200+ |
| `reviews.json` | Course reviews | 100 |
| `admin-stats.json` | Dashboard metrics | 1 doc |
| `instructor-stats.json` | Instructor metrics | 1 doc |
| `activity-logs.json` | User activities | 500+ |
| `organizations.json` | Institutions | 20 |
| `mock-progress.json` | Progress samples | 100+ |
| `email-templates.json` | Email content | 10 |
| `settings.json` | System config | 1 doc |

### Export Strategy

**`src/lib/mock-data.ts` exports:**
```typescript
export const mockUsers: User[] = users;
export const mockCourses: Course[] = courses;
export const mockProgress: Progress[] = progress;
// ... all datasets with correct types
```

**Component usage:**
```typescript
import { mockCourses } from '@/lib/mock-data';

const featured = mockCourses.filter(c => c.isFeatured);
```

## Layer 5: Type System

**Central Type Definition:** `src/types/index.ts`

### Core Entity Types
- `User` - Learner/Instructor/Admin profile
- `Course` - Course information
- `Module` - Course module/section
- `Lesson` - Learning unit
- `Progress` - Completion tracking
- `Certificate` - Completion credential
- `Badge` - Achievement reward

### Portal-Specific Types
- `LearnerDashboardData` - Learner view model
- `InstructorDashboardData` - Instructor view model
- `AdminDashboardData` - Admin view model

### Domain Types
- `Quiz` - Assessment definition
- `Question` - Quiz question
- `Review` - Course feedback
- `Activity` - User action log
- `Organization` - Institution

### Utility Types
- `PaginationParams` - Pagination info
- `FilterOptions` - Filter criteria
- `SortOptions` - Sort specification
- `ApiResponse<T>` - Response wrapper

## Data Flow Examples

### Learner Dashboard Flow
```
learner/dashboard/page.tsx
    ↓
imports mockProgress from lib/mock-data
    ↓
filters: userId === currentUser.id
    ↓
maps to ProgressCard components
    ↓
renders with Tailwind + shadcn/ui
```

### Admin User Management Flow
```
admin/users/page.tsx
    ↓
imports mockUsers from lib/mock-data
    ↓
displays in UserTable component
    ↓
form submission (mock) updates state
    ↓
changes reflected in UI
```

## Styling Architecture

### Tailwind CSS Setup
- **Config:** tailwind.config.ts
- **CSS:** src/app/globals.css
- **Theme:** Government brand colors
- **Responsive:** Mobile-first (base → breakpoints)

### Color Palette
```css
primary: #B71C1C (red)
secondary: #FFC107 (gold)
neutral-dark: #1A237E (navy)
gray-50-900: Full Tailwind scale
```

### Typography
- **Font:** Be Vietnam Pro (loaded in app/fonts/)
- **Sizes:** Tailwind scale (xs to 9xl)
- **Weights:** Regular (400), Medium (500), Bold (700)

## State Management

**Strategy:** React Hooks + Props Drilling
- No Redux/Zustand needed (static mock data)
- `useState()` for local component state
- `useContext()` for portal-wide settings (if needed)
- Immutable data patterns

**Example:**
```typescript
const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
const [filters, setFilters] = useState<FilterOptions>({});
```

## Performance Optimizations

✅ **Next.js Features:**
- Automatic code splitting (route-based)
- Image optimization (via shadcn/ui icons)
- CSS minification (Tailwind)

✅ **React Patterns:**
- `React.memo()` for expensive components
- `useCallback()` for stable event handlers
- No inline object creation in render

✅ **Tailwind:**
- PurgeCSS (automatic unused class removal)
- Single CSS file output

## Security Considerations

**Static Mockup:**
- No authentication (UI only)
- No API calls (mock data only)
- No database access
- No sensitive data at risk
- Safe for public demo

## Future Backend Integration

**Migration Path:**
1. Replace mock data imports with API calls
2. Implement authentication middleware
3. Add API route handlers (Next.js API routes)
4. Connect to real database
5. Implement authorization logic

**API Contract Example:**
```typescript
// Current: import from mock-data
import { mockCourses } from '@/lib/mock-data';

// Future: Replace with API call
const response = await fetch('/api/courses');
const courses = await response.json();
```

## Deployment Model

**Current:** Static mockup (deployable anywhere)
**Platforms:** Vercel, Netlify, traditional servers
**Build:** `npm run build` → Next.js static/SSR output
**Environment:** Node.js 18+ only

## Component Hierarchy Example

```
Learner Portal
├── Layout (sidebar + header)
├── Dashboard Page
│   ├── WelcomeBanner
│   ├── ProgressSummary
│   │   ├── ProgressBar
│   │   └── StatCard
│   ├── RecommendedCourses
│   │   └── CourseCard (×multiple)
│   └── RecentActivity
│       └── ActivityItem
```

## File Count by Layer

| Layer | Component Count | Files |
|-------|-----------------|-------|
| Pages | 22 | 22 |
| Layouts | 3 | 3 |
| UI Primitives | 14 | 14 |
| Portal Components | 40+ | 40+ |
| Shared Components | 20+ | 20+ |
| Chart Components | 5 | 5 |
| **Total** | **104+** | **104+** |
