# สร้าง enum ใช้เอง แบบที่ Key กับ Value เหมือกัน

```ts
type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K
}

type Enum<T> = T[keyof T];

const state = ['todo', 'in progress', 'completed'] as const;

// What we want
// const stateA = {
//   todo: 'todo',
//   'in progress': 'in progress',
//   completed: 'completed'
// }

function tupleToObject<T extends readonly (keyof any)[]>(data: T): TupleToObject<T>{
  return data.reduce((result: any, v: keyof any) => {
    result[v] = v;
    return result;
  }, {});
}

const GenState = tupleToObject(state);
console.log(GenState);

const myState1: Enum<typeof GenState> = GenState.completed;
const myState2: Enum<typeof GenState> = 'completed';
const myState3: Enum<typeof GenState> = 'hold';            // ❌ Error: Type '"hold"' is not assignable to type 'EnumGenState'.

// or 
const myState4: keyof typeof GenState = 'completed';
```