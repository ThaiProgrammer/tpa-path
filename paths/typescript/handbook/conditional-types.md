# conditional types (แบบมีเงื่อนไข)

อธิบาย keyword สำคัญๆ 

- `extends` เราสามารถคิดได้ว่าเป็นเงื่อนไขใน javacsript ก็ได้ คล้ายๆ กับการใช้ `===` เปรียบเทียบค่า
- `type` คิดว่าเหมือนเป็น function แต่เป็นสำหรับ type มันคือการใส่ input (ซึ่งก็คือ type เราเรียกว่า generics) แล้วก็มี output โดยที่ output ก็ขึ้นอยู่กับ "เงื่อนไข" ของ type นั้นๆ `extends` ก็เหมือนกับ block ของ logic เหมือนกับ if
- `infer` เปรียบเหมือนแว่นขยายใน TypeScript, ทำหน้าที่ในการ extract type ออกมาจาก type อื่นๆ 

## การ Extract property type ออกจาก object

```typescript
type ObjectInfer<T> = 
    // ถ้า Object T มี property ที่ชื่อ name อยู่
    T extends {name: infer A}
    // ถ้ามี ให้ return type A (type ของ property name)
    ? A
    // ถ้าไม่มี ใ้ห return never
    : never;

const member = { name: 'John' };

type nameType1 = ObjectInfer<typeof member>;    // จะได้ type เป็น string
type nameType2 = ObjectInfer<string>;           // จะได้ type เป็น never
```

## อ่านเพิ่มเด้อ
- [Learn Advanced TypeScript Types](https://medium.com/free-code-camp/typescript-curry-ramda-types-f747e99744ab) (3.7k claps)