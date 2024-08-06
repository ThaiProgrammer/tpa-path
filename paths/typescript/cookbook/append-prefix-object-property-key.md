# เพิ่ม Prefix ในแต่ละ Property Key ใน Object

Ref: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types

Require: Version 4.1

```ts

type AppendPrefix<T, U extends string> = {
  [K in keyof T as `${U}${K & string}`]: T[K]
};

function appendPrefix<T extends Record<string, any>, U extends string>(obj: T, prefix: U) {
  const result: Partial<AppendPrefix<T, U>> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[`${prefix}${key}`] = value;
  }
  return result;
}

interface Person {
  name: string;
  age: number;
  location: string;
}

const person: Person = {
  name: 'John',
  age: 30,
  location: 'Thailand'
}

const oldPerson = appendPrefix(person, 'old_');

oldPerson.old_age;
oldPerson.old_location;
oldPerson.old_name;

oldPerson.name;   //  ❌ Property 'name' does not exist on type 'Partial<AppendPrefix<Person, "old_">>'
```