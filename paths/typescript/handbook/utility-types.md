# Utility Types

https://www.typescriptlang.org/docs/handbook/utility-types.html


## Awaited<Type\> 

ใช้ `Awaited<Type>` สำหรับการถอด Promise Type ออกมา และสามารถถอดแบบ Recursive ลึกจนถึง Value ได้

```typescript
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean | Promise<number>>;
// type C = boolean | number
```

## Partial<Type\>

ทำให้ทุก Property ของ Type เป็น optional value;

```typescript
interface Todo {
  title: string;
  description: string;
}

type PartialTodo = Partial<Todo>;

// type PartialTodo = {
//   title?: string | undefined;
//   description?: string | undefined;
// }
```

## Required<Type\>

ทำให้ทุก Property ของ Type เป็น required value 

```typescript
interface Todo {
  title?: string;
  description?: string;
}

type RequiredTodo = Required<Todo>;

// type RequiredTodo = {
//     title: string;
//     description: string;
// }
```

## Readonly<Type\>

ทำให้ทุก Property ของ Type เป็น readonly (const) ไม่สามารถแก้ไขค่าได้

```typescript
interface Todo {
  title: string;
}
 
type ReadonlyTodo = Readonly<Todo>;

// type ReadonlyTodo = {
//     readonly title: string;
// }

// Example

const todo: ReadonlyTodo = {
  title: "Delete inactive users",
};

todo.title = "Hello"; // ❌ Error: Cannot assign to 'title' because it is a read-only property
```

เราสามารถใช้ `as const` เพื่อทำให้เป็น readonly ได้เหมือนกัน (Only Type Assertion) [อ่านเพิ่มที่](../everyday-types/type-assertions)

ถ้าเราอยากให้ Error ที่ Run time แนะนำให้ใช้ `Object.freeze(obj)` เช่น

```typescript
function freeze<Type>(obj: Type): Readonly<Type> {
  return Object.freeze(obj);
}

const todo = {
  title: 'Running'
};

const freezedTodo = freeze(todo);

freezedTodo.title = 'Lazy'; // ❌ Type Error and Error at run time
```

## Record<Keys, Type>

```typescript
const nameRecord: Record<string, number> = {
  john: 1,
  micky: 2,
};
 
nameRecord['Lilly'] = 5; // We can add new property in object becuase 'Lilly' is string

nameRecord[true] = 5; // ❌ Error: Type 'true' cannot be used as an index type
```

## Pick<T, Keys>

เลือกบาง Property ออกมาจาก Object

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type PickTodo = Pick<Todo, 'title' | 'completed'>;

// type PickTodo = {
//     title: string;
//     completed: boolean;
// }
```

## Omit<Type, Keys>

ลบบาง Property จาก Object

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type OmitTodo = Omit<Todo, 'description'>;
 
// type OmitTodo = {
//     title: string;
//     completed: boolean;
// }
```
