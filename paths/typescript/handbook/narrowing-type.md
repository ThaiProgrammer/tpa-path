# Narrowing Type

คือการตัด case ความเป็นไปได้ของ Type ที่เกิดขึ้น เพื่อให้เราจัดการกับ ชนิดของ Object ได้ถูกต้องนั้นเอง

- https://www.codecademy.com/learn/learn-typescript/modules/learn-typescript-type-narrowing/cheatsheet
- https://formidable.com/blog/2022/narrowing-types/

## การ narrow type ของ unknown

```ts
/**
 * A custom type guard function that determines whether
 * `value` is an array that only contains numbers.
 */``
function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) && value.every(element => typeof element === "number")
  );
}

const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

if (isNumberArray(unknownValue)) {
  // Within this branch, `unknownValue` has type `number[]`,
  // so we can spread the numbers as arguments to `Math.max`
  const max = Math.max(...unknownValue);
  console.log(max);
}
```

Ref: 
- https://mariusschulz.com/blog/the-unknown-type-in-typescript
- https://mainawycliffe.dev/blog/type-guards-and-narrowing-in-typescript/
- https://bobbyhadz.com/blog/typescript-type-unknown-is-not-assignable-to-type

ทีนี้มาลอง Narrow เพื่อเช็ค Record Type กัน โดยใช้ lib data validation ที่ชื่อ [zod](https://github.com/colinhacks/zod)

```ts
import { z } from 'zod';

function isRecord(object: unknown): object is Record<string, unknown> {
  const recordSchema = z.record(z.unknown());
  return recordSchema.safeParse(object).success;
}

function findLength(object: unknown): number {
  if (Array.isArray(object)) {
    return console.log(object.length);
  } else if (isRecord(object)) {
    return Object.keys(object).length;
  }
  throw new Error(`Input object doesn't support type`);
}
```