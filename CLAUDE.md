# Movement Photobooth Website

## Project Overview

This project is the public website for Movement Photobooth.

Current scope:

- Landing Page
- No Backend
- No Authentication
- No CMS
- No Database
- No API Integration

All content must use local dummy data.

---

# Technology Stack

Framework

- Next.js 15
- React 19
- App Router

Language

- TypeScript

Styling

- Tailwind CSS v4

Animation

- Framer Motion

Icons

- Remix Icon

Image

- next/image

Fonts

- next/font

Utilities

- clsx
- tailwind-merge

HTTP

- Axios

Compiler

- React Compiler Enabled

---

# Do Not Use

- Bootstrap
- Material UI
- Chakra UI
- Ant Design
- Shadcn UI
- Styled Components
- Emotion

---

# Folder Structure

src/

components/

ui/
layout/
shared/

pages/

landing-page/

components/
hero/
features/
packages/
gallery/
testimonial/
cta/

data/

types/

constants/

utils/

LandingPage.tsx

assets/

styles/

lib/

---

# Data Source

Do not use JSON Server.

Do not create fake REST APIs.

Do not create mock services.

All static content must be stored inside

pages/landing-page/data/dummy.ts

---

# Type Definitions

All interfaces must be placed inside

pages/landing-page/types

Never use any.

Always use explicit TypeScript interfaces.

---

# Component Rules

Reusable components belong only inside

src/components/ui

Landing page specific components belong only inside

src/pages/landing-page/components

Never duplicate reusable UI.

Always reuse existing components whenever possible.

---

# UI Rules

Every UI component must have a single responsibility.

Components should remain small and composable.

Avoid deeply nested JSX.

Avoid duplicated markup.

---

# Styling Rules

Use Tailwind CSS only.

Do not use inline styles.

Keep spacing consistent.

Keep typography consistent.

Maintain reusable design tokens.

---

# Responsive Design

Support

- Desktop
- Tablet
- Mobile

Use responsive Tailwind utilities.

Do not hardcode layouts for one screen size.

---

# Images

Use next/image.

Use responsive images.

Temporary images must use Unsplash URLs.

Do not use local assets unless provided.

---

# Animation

Use Framer Motion only.

Animations must remain subtle.

Allowed

- Fade
- Slide
- Scale
- Hover

Avoid excessive animation.

---

# Accessibility

Use semantic HTML.

Provide meaningful alt text.

Use proper heading hierarchy.

Buttons must use correct types.

Maintain keyboard accessibility.

---

# SEO

Use Metadata API.

Configure

- title
- description
- Open Graph
- Twitter Card

Use semantic structure.

---

# Code Style

Use descriptive names.

Use small functions.

Prefer composition.

Avoid large components.

Keep imports organized.

Remove unused code.

Never leave commented code.

---

# Architecture

Follow Component Driven Development.

Follow Single Responsibility Principle.

Follow Separation of Concerns.

Prefer reusable abstractions.

Avoid unnecessary abstraction.

Keep business data separated from presentation.

---

# Quality Requirements

No duplicated code.

No dead code.

No console logs.

No unnecessary comments.

No unnecessary dependencies.

No TypeScript errors.

No ESLint warnings.

No accessibility violations.

---

# Development Philosophy

Build reusable UI first.

Build sections second.

Compose pages last.

Prioritize maintainability.

Prioritize readability.

Prioritize scalability.