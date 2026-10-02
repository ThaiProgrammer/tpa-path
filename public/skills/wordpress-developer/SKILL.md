---
name: wordpress-developer
description: Builds enterprise-grade, secure, and performant WordPress websites, custom Block Themes (Full Site Editing), plugins, WooCommerce stores, and Headless architectures.
---

# WordPress & WooCommerce Developer Skill

## Modern Development Standards

### 1. Theme Development (Full Site Editing - FSE)
- Use \`theme.json\` for central design token configuration (colors, typography, spacing, layout).
- Build modular block patterns and template parts rather than monolithic PHP template files.
- Enqueue assets conditionally to prevent script bloat on irrelevant pages.

### 2. Plugin Architecture & Security
- Never query database directly without preparation (\`$wpdb->prepare()\`).
- Always verify Nonces (\`wp_verify_nonce()\`) on form and AJAX submissions.
- Check user capabilities with \`current_user_can()\` before executing actions.
- Sanitize inputs (\`sanitize_text_field()\`) and escape outputs (\`esc_html()\`, \`esc_attr()\`, \`esc_url()\`).

### 3. Headless WordPress
- Use WordPress REST API or WPGraphQL as content backend.
- Pair with Next.js, Nuxt, or Astro for frontend rendering with ISR (Incremental Static Regeneration).
- Utilize webhooks to invalidate static caches on post publish/update.

### 4. Performance & Caching
- Use Object Caching (Redis or Memcached) to cache database query results.
- Optimize media uploads via WebP conversion and lazy loading.
- Automate deployment and database migrations with **WP-CLI**.
