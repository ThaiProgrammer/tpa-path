---
outline: deep
---
# จัดการ Runtime Type

เมื่อเราต้องจัดการกับชนิดข้อมูลในขณะรันโปรแกรม (Runtime Type) และไม่แน่ใจว่าจะได้รับค่าอะไรเข้ามา เช่น การเรียก API ต่าง ๆ ซึ่งเราสามารถใช้ [Zod](https://github.com/colinhacks/zod)  ในการตรวจสอบและกำหนด Schema ของข้อมูลในขณะรันโปรแกรม เพื่อให้ตรงตามที่เราต้องการ

กำหนด Schema ของข้อมูลที่ต้องการ ดังนี้:

```ts
import { z } from 'zod';

// นิยาม Schema ที่ต้องการ
export const responseBodySchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
```

หลังจากที่เรานิยาม schema ไปแล้ว ให้ใช้คำสั่ง `safeParse` เพื่อตรวจสอบและแปลงข้อมูลในขณะรันโปรแกรม นำไปใช้งานในโค้ดได้เลย:

```ts
const url = 'https://jsonplaceholder.typicode.com/todos/1';
export async function getUserData() {
  const rawBody = await (await fetch(url)).json();
  // เอา data ที่เป็น any type ไป validate โดยใช้ zod schema
  const parseBody = responseBodySchema.safeParse(rawBody);
  if (!parseBody.success) {
    const { error } = parseBody;
    throw new Error(`Schema is not correct, ${JSON.stringify(error.errors)}`);
  }

  return parseBody.data;
  //                 ^? { userId: number; id: number; title: string; completed: boolean; }
}
```

[Zod](https://github.com/colinhacks/zod) เป็นพระเอกของเราในงานนี้เลย เพราะนอกจากจะเช็ค Schema ให้ตรงกับที่เราต้องการมั้ย

เราสามารถแปลงเป็น Type ของ TypeScript ให้เราไปทำอย่างอื่นได้ต่อ อีก ดีงามมากกกก 😍

```ts
type Todo = z.infer<typeof responseBodySchema>;
//    ^? type Todo = { userId: number; id: number; title: string; completed: boolean; }

const myTodo: Todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};
```

ใครไม่อยากใช้ zod เพียวๆ ก็มีคนทำ library เอาไว้ใช้
- [zodios](https://github.com/ecyrbe/zodios) = zod + axios
- [zod-fetch](https://github.com/mattpocock/zod-fetch) = zod + fetch

ลองเล่น [Playground](https://www.typescriptlang.org/play?#code/PTAEAsBdIBwZwFwgOYEtLgK4CMB0BjAewFtgBTfATwCdszgAvQgE1ULlAF5QnnQBqUAEMAHmzgAoEBGjwkwNBhwESwYkNmEi+ANaMWAWgBmZSPnBceLAaBNnwEqWFQA7ZmRG5Ik1MRiFqSFAAbx5QAF9bahJQAHJeWIBuRw9-QNAiFzgg6jI4fyyyACEWSgBlczJ1SwZcQmwAKwpIAApgiVBQTDgyagBJZgQeXBdMYjpqFoBKABoO0FRB4dHx3um5zsh0ABsyIdrs6ldkdfmiP13IMiXa7EJCXaEXU-Cp5IlM7K7qbctYqFgiBADTghBcMG2QnwZHAD3c1C8lBgqCI7hUpEgLHYwAAjEkJKkAkEhHBKC58LZMOStmDQMhTABVHrUAAiGiE0xCZzBX2oQgA7iVmJRLAKhOhQC0xRK7OYWpgflMprgQWDpslOp8gjAhNQekKRdxcvkecVShVwFUhLg4EITAAFXU9Fp8wWlN7zVBGSUAQh1erNwptmHw0LgcCmXM6mp5QVCvWi1Ailn9+tKGujGGi-NALjIOYAotREy0AAYWq0LDguQhBIjF5ozUAAEmCACkygB5AByNsgRxcaCMlBaCYCuDHeqm4VLHs64UcnVykAVLlAqcDlFwzHZyQXTlABiPx5Pp7P54vl6v15vt7v96vjmkrncniu2S8Pj8RNA76CRmiYhQAAIiEAA3IRgOSZ9v3SUIGGTACYmA3goIPXw0jjOlGWZNlICEJtjQKNNhQrapIiQoDgNwYAXw8NCJEgJEyFAAAVLEalwVwTGoAAeJiYDIQhvSI00DTIoQAD5oLAaMAD0AH5HC1UBiEodjmEIIYNMISx2k6bpegGIYcQ2BYllM+YtkgXYhlidxdnwFcOCETBiTcqpYjM84IVMa4hiMIRth6OZwneP8WliP8vOEUlyUlSAhieShI04SSowyWMulw9lRX5cUgnpSAmV6PCOTnUBgAAKiq+ZQCq0BAAE4QAiOEASThQEAEThABQ4VrAEE4QBSOFawByOFAQBCOEAVjg2OYsbACY4HqhuauqauAbksgeMhcG2QgTlLQzWXZXA9uMltgj2srDuZAYZwqz51s27ayzOg6fMufyTqe-D0V8q5mGu95Nm3MgyBgAsAEdMCClo1J0psPqED1XkSIA)

สามารถดูตัวอย่างอื่นๆ ในการใช้ [Zod ในชีวิตจริง](docs/cookbook/zod-typescript-integration.md)