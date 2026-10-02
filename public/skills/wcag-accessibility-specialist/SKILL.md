---
name: wcag-accessibility-specialist
description: Audits and implements WCAG 2.2 Level AA accessibility standards across web and mobile applications. Covers keyboard navigation, screen reader compatibility, ARIA patterns, color contrast, and automated testing with axe-core.
---

# WCAG 2.2 Web Accessibility Specialist Skill

## Overview
This skill provides comprehensive guidance for designing, implementing, and auditing digital products to meet the **W3C Web Content Accessibility Guidelines (WCAG) 2.2** at **Level AA** (and AAA where applicable), ensuring inclusive experiences for people with disabilities.

---

## The 4 Core Principles (POUR)

1. **Perceivable (รับรู้ได้)**: Information and user interface components must be presentable to users in ways they can perceive.
   - Text alternatives for non-text content (`alt` attributes on images, captions/transcripts for audio/video).
   - Color contrast: At least **4.5:1** for regular text, **3:1** for large text (>= 18pt or 14pt bold) and active UI components.
   - Responsive reflow: Support zoom up to 400% without horizontal scrolling or loss of content.

2. **Operable (ใช้งานได้)**: Interface components and navigation must be operable via any input method.
   - 100% keyboard navigable without keyboard traps.
   - Visible focus indicator at all times.
   - Sufficient time to read and use content; provide controls to pause/stop auto-updating carousels.

3. **Understandable (เข้าใจได้)**: Information and the operation of the user interface must be understandable.
   - Set document language: `<html lang="th">` or `lang="en"`.
   - Predictable navigation and consistent UI placement.
   - Input assistance: Descriptive error messages, error suggestions, and prevention of legal/financial errors.

4. **Robust (คงทน/เข้ากันได้)**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies.
   - Valid semantic HTML; correct `name`, `role`, and `value` on custom components.

---

## 9 New Success Criteria in WCAG 2.2

### 1. SC 2.4.11: Focus Not Obscured (Minimum) (Level AA)
When a user interface component receives keyboard focus, it must **not be entirely hidden** by author-created content (such as sticky headers, footers, floating cookies, or chat widgets).
- **Fix**: Use CSS `scroll-padding-top` or `scroll-margin` so the browser scrolls the element into a visible viewport area:
```css
html {
  scroll-padding-top: 80px; /* Height of sticky navbar */
  scroll-padding-bottom: 40px;
}
```

### 2. SC 2.4.12: Focus Not Obscured (Enhanced) (Level AAA)
**No part** of the focused component may be obscured by author-created content.

### 3. SC 2.4.13: Focus Appearance (Level AAA)
The focus indicator must:
- Have a contrast ratio of at least **3:1** between focused and unfocused states.
- Have an area at least as large as a 2 CSS pixel perimeter of the component.
- Never use `outline: none` without providing a high-contrast `:focus-visible` replacement:
```css
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

### 4. SC 2.5.7: Dragging Movements (Level AA)
Any functionality using a dragging movement (drag-and-drop file upload, reorderable Kanban cards, slider handles) must have a **single-pointer alternative** (such as buttons or dropdowns):
- Provide "Move Up" / "Move Down" buttons alongside drag handles.
- Allow file selection via standard `<input type="file">` button in addition to drag-and-drop zones.

### 5. SC 2.5.8: Target Size (Minimum) (Level AA)
The size of interactive targets for pointer inputs must be at least **24x24 CSS pixels**, or have sufficient spacing offset around them:
```css
.clickable-icon-button {
  min-width: 24px;
  min-height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px; /* Expands touch target to >= 40px */
}
```
*(Exceptions: Inline targets within a sentence of text, browser default controls, or user-modified sizing).*

### 6. SC 3.2.6: Consistent Help (Level A)
If help mechanisms (contact phone/email, live support chat, FAQ link, search) appear across multiple pages, they must appear in the **same relative order** in the DOM/page structure.

### 7. SC 3.3.7: Redundant Entry (Level A)
Information previously entered by the user in the same multi-step process or session must either:
- Be auto-populated.
- Be selectable (e.g., "Billing address same as shipping address" checkbox).
- Not require re-typing unless verification is essential (e.g., confirming password change).

### 8. SC 3.3.8: Accessible Authentication (Minimum) (Level AA)
Users must **not be required to solve cognitive function tests** (memorizing passwords, transcribing CAPTCHA, solving math/logic puzzles) to log in, unless at least one of these is supported:
- **Password Manager friendly**: Never disable paste on password fields (`onpaste="return false"` is strictly prohibited).
- **WebAuthn / Passkeys / Biometrics**: Support FIDO2 hardware keys or FaceID/TouchID.
- **Magic Links / Email OTP**: One-click authentication link.
- **Alternative Captcha**: Object recognition or 3rd-party non-cognitive verification (Cloudflare Turnstile, reCAPTCHA v3 Enterprise).

### 9. SC 3.3.9: Accessible Authentication (Enhanced) (Level AAA)
No cognitive function test whatsoever, including object or image recognition.

---

## ARIA Best Practices (The First Rule of ARIA)
- **Rule 1**: If you can use a native HTML element or attribute with the semantics and behavior you require, **do so instead of repurposing an element and adding ARIA**.
  - Use `<button>` instead of `<div role="button" tabindex="0">`.
  - Use `<dialog>` instead of `<div role="dialog">`.
  - Use native `<a href="...">` for links.
- When ARIA is required (custom tabs, accordions, comboboxes), follow the **W3C WAI-ARIA Authoring Practices Guide (APG)**.
- Always connect labels with controls using `<label for="inputId">` or `aria-labelledby`.

---

## Automated & Manual Testing Protocol

### 1. Automated Testing with axe-core & Playwright
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('page should not have any automatically detectable WCAG 2.2 AA violations', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

### 2. Manual Keyboard Navigation Checklist
- [ ] Can you Tab through all interactive elements in logical visual order?
- [ ] Is the focus indicator clearly visible on every focused element?
- [ ] Can modal dialogs trap focus inside, and release focus upon closing with `Escape`?
- [ ] Are there skip links (`Skip to main content`) as the first tabbable item?

### 3. Screen Reader Verification
- Test with **VoiceOver** (macOS/iOS) or **NVDA / JAWS** (Windows) or **TalkBack** (Android).
- Confirm all images convey meaningful purpose or are marked decorative with `alt=""`.
- Confirm dynamic content updates are announced using `aria-live="polite"` or `role="status"`.
