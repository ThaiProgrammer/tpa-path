# สร้าง a Union type from an Array in TypeScript

```typescript
// 👇️ const sizes: readonly ["small", "medium", "large"]
const sizes = ['small', 'medium', 'large'] as const;

// 👇️ type SizesUnion = "small" | "medium" | "large"
type SizesUnion = typeof sizes[number];
```

https://bobbyhadz.com/blog/typescript-create-union-type-from-array