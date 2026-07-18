# AI Development Instructions

Follow this workflow for every implementation task.

---

# Phase 1

Analyze the requested feature.

Identify

- Layout
- Components
- Shared UI
- Data requirements
- Types
- Responsive behavior

Do not immediately write code.

---

# Phase 2

Determine reusable components.

Before creating a component, verify whether it already exists.

If reusable, use the existing component.

Do not duplicate components.

---

# Phase 3

Create required TypeScript interfaces.

Create interfaces before creating components.

Use strict typing.

Never use any.

---

# Phase 4

Create or update dummy data.

Store all landing page data inside

pages/landing-page/data/dummy.ts

Never hardcode business content inside components.

---

# Phase 5

Implement components.

Components must

- be focused
- be reusable
- remain small
- avoid unnecessary props
- avoid duplicated logic

---

# Phase 6

Compose sections.

Each section must be independent.

Sections must not depend on other sections.

---

# Phase 7

Compose the page.

LandingPage.tsx must only assemble sections.

Do not implement business logic inside LandingPage.

---

# Phase 8

Responsive verification.

Verify

Desktop

Tablet

Mobile

---

# Phase 9

Accessibility verification.

Verify

Semantic HTML

Alt text

Heading hierarchy

Keyboard accessibility

ARIA attributes when required

---

# Phase 10

Performance verification.

Verify

next/image

Minimal client components

No unnecessary rerenders

No unnecessary dependencies

No duplicated rendering

---

# Phase 11

Code review.

Verify

No duplicated code

No dead code

No unused imports

No TypeScript errors

No ESLint warnings

Readable naming

Consistent formatting

---

# Component Guidelines

Always prefer composition.

Avoid components larger than necessary.

Extract repeated UI into reusable components.

Keep presentation separated from data.

---

# State Management

Use local state whenever possible.

Do not introduce global state unless required.

Avoid unnecessary client components.

---

# Styling

Use Tailwind CSS.

Do not use inline style.

Maintain spacing consistency.

Maintain typography consistency.

---

# Images

Always use next/image.

Temporary assets must use Unsplash.

---

# Animations

Use Framer Motion only when it improves user experience.

Animations must remain lightweight.

---

# Completion Checklist

Before considering any task complete, verify

- Folder structure follows project architecture
- Components are reusable
- Types are defined
- Dummy data is centralized
- Responsive layout works
- Accessibility requirements are satisfied
- SEO requirements are satisfied
- No lint issues
- No TypeScript issues