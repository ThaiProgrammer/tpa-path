---
outline: deep
---
# จัดการ Try-Catch Error

Because JS can throw any type:

```ts
throw 'What the!?'
throw 5
throw {error: 'is this'}
throw null
throw new Promise(() => {})
throw undefined
```

ดังนั้นเราสามารถใช้ [Type Narrowing](/docs/basic/narrowing-type)   ในการจัดการ Type ได้อย่างถูกต้อง
```ts
try {
  throw new Error('Oh no!');
} catch (error) {
  // error always unknown type
  if (error instanceof Error) return error.message;
  return String(error);
}
```

ตัวอย่างการใช้งานจริง ด้วย [zod](https://github.com/colinhacks/zod)
```ts
import { z } from 'zod';

const errorWithMessageSchema = z.object({
  message: z.string(),
})

type ErrorWithMessage = z.infer<typeof errorWithMessageSchema>;

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return errorWithMessageSchema.safeParse(error).success;
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}

function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message
}
```

Ref: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript