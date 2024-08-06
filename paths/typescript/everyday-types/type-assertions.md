---
outline: deep
---

# Type Assertions

รู้มั้ย Typescript สามารถหลอก Type ได้

TypeScript เป็นภาษาที่แยกตัวออกจากโลกของ JavaScript อย่างชัดเจน
สิ่งที่ TypeScript พยายามทำคือ Type inference (คาดเดา) Type จากภาษา JavaScript.
ดังนั้นเราเขียน TypeScript, แต่ ณ Runtime เราทำงานด้วย JavaScript.

แต่ในบางครั้งเรามักจะมีการใช้ any โดยตั้งใจ หรือไม่ตั้งใจ ก็ตาม 
แต่ any สามารถบังคับให้ Type เป็นอะไรก็ได้ผ่าน return type ของ function, as, หรือ satisfies 

แนวทางการป้องกันความเข้าใจผิดเราอาจจะใช้ Eslint ที่ชื่อ
[@typescript-eslint/no-unsafe-return](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.md)

แต่อย่างไรก็ตาม ถ้าเราใช้ as หรือ satisfies เป็นการใช้ บังคับเปลี่ยน type ของ any โดยตั้งใจ TypeScript ถือว่า เรารับทราบปัญหาที่จะเกิดขึ้นในอนาคต

หมายเหตุ: as หรือ satisfies มีประโยชน์ในหลายๆ เหตุการณ์ เลือกใช้ตามความเหมาะสม

## ตัวอย่างการใช้ Fetch ที่อาจจะนำมาซึ่งปัญหา

```ts
interface Person {
  data: {
    name: string;
  };
}
const url = "https://jsonplaceholder.typicode.com/todos/1";
async function getUserData1(): Promise<Person> {
  const result = (await fetch(url)).json();
  //      ^? Promise<any>
  return result;
}

async function getUserData2(){
  const result = (await fetch(url)).json();
  //      ^? Promise<any>
  return result as Promise<Person>;  // Same as `satisfies Promise<Person>`
}

/**
 * ไม่ได้ Error, ใน TypeScript, แต่ ❌ Error ที่ Runtime, TypeError: Cannot read properties of undefined (reading 'name')
 **/
console.log((await getUserData1()).data.name);
console.log((await getUserData2()).data.name);

export {};
```

ลองเล่น [Playground](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyAJnGHAFz5HHIhwC2E1GYUoA5gNy0C+vPgQQ42yAK5QANsgC8yAEQALMGAAOGSgHotAK2wg1UxBCVYpJaADowATzXARlqyMZawWElgxaAjAt44DFsQBGQYcVCwYBxkTggwAFUMaAARcjhfAAoASmpUKCxGYBSAHnQoAwA+GmIREDEoCAxxKTA5ZCy4AHc4YHaYBIQlLMkpHJyrfRxc3mIdOjoAPQB+NELisrgQWyraJrBJXCaWtsECAiCQsIiomNx4pJSodIoAJlza5HrG5tb2+RdXr9cJDEZjCZTAyzWgLRbIVbrIolCClba7fYJI7IE7-ZBBJGbVEVarceZaZAAZSYKAJAAMMOQSjBgM1CSjypgcFU6QQhAQtAAqQVEQXIQAicIBCOEAEnDiwAocIBJOGQAFEoIUoAAaZCAYThAJhwyAAKvYIJSEBw1GAtYBBOEAqHDS5CAGXIVWqsFBkIB0OEArHD2gBKkWizC1RrUEFV6uoAGFtiAsO0mnASMg1IUQ1BomysDAJCBLCyQBBE1l4yQuMgAOQMZhlnKiwVaS7BULhSIIaKxRh9ECfQh1UTmCBWKRYThZIF9dqPZJpDLZSFkChWSsQHJzb59qQDocjscgyfPV5wD5zjKLmkrvkXDugWZAA)

# Const Assertions

เราสามารถแปลง Object เป็น Readonly ผ่าน `as const`

const assertions in Typescript
https://mainawycliffe.dev/blog/const-assertion-in-typescript/

```typescript
const person = {
    name: "John Doe",
    age: 25,
};

const person = {
    name: "John Doe",
    age: 25,
} as const;

// (Note: This is not TypeScript Syntax)
// const person: {
//     readonly name: "John Doe";
//     readonly age: 25;
// }
```