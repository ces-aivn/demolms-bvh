# Code Standards - LMS BVHTTDL Mockup

## Language & Type System

**TypeScript Strict Mode:**
```
"compilerOptions": {
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true
}
```

- All files use `.ts` or `.tsx` extensions
- No `any` types without explicit justification
- Interfaces for all data structures
- Generic types for reusable components
- Type inference where clear and readable

## File & Folder Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | camelCase.tsx | `CourseCard.tsx`, `AdminDashboard.tsx` |
| Pages | lowercase/route groups | `app/(learner)/dashboard/page.tsx` |
| Utilities | camelCase.ts | `mock-data.ts`, `constants.ts` |
| Styles | globals.css | `globals.css` |
| Types | index.ts in types/ | `src/types/index.ts` |
| Data files | kebab-case.json | `courses.json`, `admin-stats.json` |
| Directories | kebab-case | `content-library/`, `course-builder/` |

## Component Structure

**Functional Components with React Hooks:**
```typescript
import React from 'react';
import { Type } from '@/types';

interface ComponentProps {
  title: string;
  onAction: (id: string) => void;
  children?: React.ReactNode;
}

export function ComponentName({ title, onAction, children }: ComponentProps) {
  const [state, setState] = React.useState(false);

  return (
    <div>
      {/* Implementation */}
    </div>
  );
}
```

**Standards:**
- Default exports for page components only
- Named exports for reusable components
- Props interfaces always defined
- Destructure props at function signature
- No class components

## Styling Standards

**Tailwind CSS + shadcn/ui:**
```typescript
<div className="flex items-center justify-between gap-4 p-4 border rounded-lg">
  <Button variant="default" size="sm">
    Action
  </Button>
</div>
```

**Conventions:**
- Use shadcn/ui components for UI primitives
- Tailwind utility classes for layout & spacing
- Never write raw CSS (use Tailwind)
- Responsive: mobile-first (base → sm → md → lg → xl)
- Dark mode: Use `dark:` prefix for dark mode styles
- Colors: Use Tailwind default palette + government brand colors
- Spacing: Use Tailwind scale (4px base unit)

**Government Brand Colors:**
```css
primary: #B71C1C (red)
secondary: #FFC107 (gold)
neutral-dark: #1A237E (navy)
```

## Naming Conventions

**Variables & Functions:**
- camelCase for all JS variables and functions
- UPPER_SNAKE_CASE for constants
- Descriptive names (no abbreviations unless standard)

```typescript
const maxAttempts = 3;
const MONTHS_IN_YEAR = 12;

function calculateProgress(completed: number, total: number): number {
  return (completed / total) * 100;
}
```

**React Components:**
- PascalCase for component names
- Match filename to component name
- File: `CourseCard.tsx` → Component: `CourseCard`

**Boolean Variables/Props:**
- Prefix with `is`, `has`, `can`, `should`
```typescript
interface ButtonProps {
  isDisabled?: boolean;
  hasIcon?: boolean;
  canSubmit: boolean;
}
```

## TypeScript Interfaces & Types

**Location:** All types in `src/types/index.ts`

**Naming:** PascalCase with suffix
- `UserProfile` (primary types)
- `CourseFilters` (prop types)
- `ProgressData` (data types)

**Example Structure:**
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'learner' | 'instructor' | 'admin';
  createdAt: Date;
}

interface CourseProgress {
  courseId: string;
  userId: string;
  completionPercentage: number;
  lastAccessedAt: Date;
}
```

## Data Management

**Mock Data Pattern:**
1. JSON structure in `src/data/*.json`
2. Exported as typed objects in `src/lib/mock-data.ts`
3. Imported in components with correct types
4. Never modify mock data at runtime (immutable)

```typescript
// src/lib/mock-data.ts
import courses from '@/data/courses.json';
import { Course } from '@/types';

export const mockCourses: Course[] = courses;

// Component usage
import { mockCourses } from '@/lib/mock-data';

const activeCourses = mockCourses.filter(c => c.isActive);
```

## Accessibility Standards

**WCAG 2.1 AA Compliance:**
- Use semantic HTML (button, nav, main, etc)
- shadcn/ui provides Radix UI accessible primitives
- All interactive elements keyboard navigable
- Alt text for all images (even if decorative)
- ARIA labels for icons without text
- Color not sole conveyor of information
- Minimum 4.5:1 contrast ratio for text

```typescript
<button
  aria-label="Close dialog"
  onClick={onClose}
  className="text-gray-600 hover:text-gray-900"
>
  <X size={24} />
</button>
```

## Icon Standards

**Library:** lucide-react
- **Size:** Default 24px (`size={24}`)
- **Stroke:** 2px (default)
- **Naming:** Use icon name directly from lucide-react
- **Usage:** Import and use as component

```typescript
import { Settings, Users, BarChart3 } from 'lucide-react';

<Settings size={24} className="text-primary" />
```

## Import Organization

```typescript
// 1. React & external libraries
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Third-party components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 3. Project imports
import { CustomComponent } from '@/components/custom-component';
import { mockData } from '@/lib/mock-data';
import { User } from '@/types';

// 4. Local component imports
import { ChildComponent } from './child-component';
```

## Error Handling

**React Error Boundaries:**
- Wrap portal layouts with error boundaries
- Display user-friendly error messages
- Log errors in development

**Try-Catch for Data Operations:**
```typescript
try {
  const data = JSON.parse(jsonString);
  return data;
} catch (error) {
  console.error('Failed to parse data:', error);
  return null;
}
```

## Performance Standards

**Best Practices:**
- Use `React.memo()` for expensive components
- Extract static content outside render
- Use `useCallback()` for event handlers passed to children
- Lazy load routes via Next.js `dynamic()`
- No inline object/array creation in component render

## Code Comments

**Style:**
- Use clear, concise comments
- Explain WHY, not WHAT (code shows what)
- Remove commented-out code
- Use TypeDoc for exported functions

```typescript
// Calculate completion percentage with rounding
function getCompletionPercentage(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}
```

## Localization Standards

**Language:** Vietnamese (vi) throughout
- All UI text in Vietnamese
- Use consistent terminology
- No mixed languages in single component
- Ready for i18n (language switching) in future

**Example:**
```typescript
const labels = {
  dashboard: 'Bảng điều khiển',
  courses: 'Khóa học',
  profile: 'Hồ sơ người dùng',
};
```

## Mobile Responsiveness

**Breakpoints (Tailwind):**
- `base` (mobile, 0px+)
- `sm` (640px+)
- `md` (768px+)
- `lg` (1024px+)
- `xl` (1280px+)

**Strategy:** Mobile-first design
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## Testing Standards

**Unit Testing:**
- Test component rendering with different props
- Test user interactions
- Test edge cases
- Aim for >80% coverage

**Integration Testing:**
- Test page navigation
- Test modal flows
- Test form submissions (mock)

## Build & Deployment Standards

**Pre-commit:**
- Run `npm run lint` (ESLint)
- No TypeScript errors
- All imports resolved

**Pre-push:**
- All components render without errors
- No console warnings (except intentional)
- Responsive on mobile (375px width minimum)

**Environment:**
- Node.js 18+
- npm or yarn
- No environment variables needed (mock data)

## Forbidden Practices

❌ No `any` types (use `unknown` if necessary)
❌ No console.log in production (use logging library)
❌ No hardcoded strings (use constants)
❌ No direct DOM manipulation (use React state)
❌ No global state mutation (use React Context if needed)
❌ No commented-out code blocks
❌ No ES5 syntax (use ES6+)
❌ No CSS-in-JS (use Tailwind only)
