---
name: typescript-expert
description: Applies advanced TypeScript patterns, type-level programming, strict configuration, schema validation, and runtime safety across Node.js and browser applications.
---

# Advanced TypeScript Architect Skill

## Configuration & Strictness
Always enable strict compiler checks in \`tsconfig.json\`:
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

## Key Architectural Patterns

### 1. Discriminated Unions over Ambiguous Objects
\`\`\`typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
\`\`\`

### 2. Runtime Schema Validation with Zod
Never trust external I/O (APIs, env vars, user inputs). Validate at system boundaries:
\`\`\`typescript
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['admin', 'member'])
});

export type User = z.infer<typeof UserSchema>;
\`\`\`

### 3. Avoid Dangerous Anti-Patterns
- Never use \`any\`; use \`unknown\` and narrow with type guards or assertions.
- Avoid non-null assertion operator (\`!\`) unless backed by invariant checks.
- Prefer \`type\` aliases for unions/intersections and \`interface\` for object schemas intended for extension.
