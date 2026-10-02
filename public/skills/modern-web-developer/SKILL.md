---
name: modern-web-developer
description: Delivers modern, secure, and accessible full-stack web development following current web standards, responsive design, performance optimization, and OWASP security practices.
---

# Modern Fullstack Web Developer Skill

## Web Standards & Architecture

### 1. Semantic HTML & Web Accessibility (WCAG 2.2 Level AA)
- **POUR Principles**: Build interfaces that are Perceivable, Operable, Understandable, and Robust.
- **Semantic Structure**: Use standard HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<dialog>`). Prefer native elements over ARIA hacks.
- **Keyboard & Focus (SC 2.4.11 / 2.4.13)**: 100% keyboard navigable (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`). Never use `outline: none` without providing a high-contrast `:focus-visible` indicator (>= 3:1 contrast ratio, >= 2px thickness). Set `scroll-padding-top` to prevent sticky headers from obscuring focused items.
- **Target Size (SC 2.5.8)**: Interactive pointer/touch targets must be at least **24x24 CSS pixels** or have sufficient spacing.
- **Dragging Alternatives (SC 2.5.7)**: Any drag-and-drop or dragging control must offer a single-pointer alternative (buttons or keyboard controls).
- **Accessible Authentication (SC 3.3.8)**: Never block copy-paste on password fields (`onpaste="return false"` is prohibited); support password managers and WebAuthn.
- **Redundant Entry (SC 3.3.7)**: Auto-populate or allow selection of previously entered data in multi-step workflows.
- **Color Contrast**: At least **4.5:1** for body text and **3:1** for UI components and large text.
- **Automated Validation**: Integrate `@axe-core/playwright` or `axe-core` in CI pipelines to guard against regressions.

### 2. Modern CSS & Responsive Design
- Mobile-first approach using CSS Grid, Flexbox, and Container Queries.
- Use CSS Custom Properties (Variables) for tokens, theme switching (Light/Dark mode), and spacing.
- Minimize layout shifts with aspect-ratio properties and explicit image dimensions.

### 3. Web Performance & Core Web Vitals
- **LCP (Largest Contentful Paint)**: Optimize hero images (modern WebP/AVIF formats, \`fetchpriority="high"\`, CDN caching).
- **INP (Interaction to Next Paint)**: Break up long JavaScript tasks into smaller chunks; avoid blocking the main thread.
- **CLS (Cumulative Layout Shift)**: Reserve space for dynamic content, ads, and fonts with font-display: swap.

### 4. Web Security (OWASP Top 10)
- Guard against XSS by sanitizing untrusted inputs and avoiding dangerous DOM APIs (\`innerHTML\`).
- Implement Content Security Policy (CSP), CORS, and HTTP security headers (HSTS, X-Content-Type-Options).
- Secure Authentication: HttpOnly, Secure, SameSite cookies for session management.
