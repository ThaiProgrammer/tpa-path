# Data Validation ด้วย Zod ใช้คู่กับ TypeScript ได้

หลายคนๆ อาจจะรู้จักกับ `Zod` ในการทำ Data Validation 

> TypeScript-first schema validation with static type inference

## การเขียน Utility Function เพื่อทำ Data Validation

โดยใน [Doc ของ zod](https://github.com/colinhacks/zod/blob/c617ad3edbaf42971485f00042751771c335f9aa/README.md#writing-generic-functions) พูดถึงการเขียน Function Generics สำหรับทำ Validation แต่ไม่ได้บอก Return Type ให้ เราสามารถใข้ `z.infer<T>` ได้เพื่อระบุ Type ของ Schema ได้

```ts
import { z, ZodFormattedError } from 'zod';

export function parseEnv<T extends z.ZodTypeAny>(schema: T, input: Record<string, string>): z.infer<T> {
  const _functionEnv = schema.safeParse(input);

  if (_functionEnv.success === false) {
    const message = 'Invalid input';
    throw new Error(zodPrettyError(message, _functionEnv.error.format()));
  }

  return { ..._functionEnv.data };
}

export const zodPrettyError = (message: string, errors: ZodFormattedError<Map<string, string>, string>) => {
  const ouput = Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);

  return `❌ ${message}:\n ${ouput.join(', ')}`;
};

//
// ตัวอย่างการใช้งาน
//

const appSchema = z.object({
  Webhook_URL: z.string().url(),
  Is_Enable: z.boolean(),
});

type App = t.infer<typeof appSchema>;
// จะได้ Type ของ TypeScript ออกมา
// type App = {
//     Webhook_URL: string;
//     Is_Enable: boolean;
// }
 
const appData: App = {
    Webhook_URL: 'https://typescrip-th.thadaw.com',
    Is_Enable: true,
}

// Validate it!
const parsingData = parseEnv(appSchema, data);

parsingData.Webhook_URL // type => string
parsingData.Is_Enable // type => boolean
```