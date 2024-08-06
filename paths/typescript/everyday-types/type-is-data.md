---
outline: deep
---

# Type คือข้อมูลชนิดหนึ่ง

## ประเภทของ Type

1. Primitive types

    ```ts
    type MyNumber = number;
    type MyString = string;
    type MyBoolean = boolean;
    type MySymbol = symbol;
    type MyBigInt = bigint;
    type MyUndefined = undefined;
    type MyNull = null;
    ```

2. Literal types

    Literal types คือ Type ที่มีค่านั้น เพียงค่าเดียว

    ```ts
    type MyNumberLiteral = 20;
    type MyStringLiteral = 'Hello';
    type MyBooleanLiteral = true;
    ```

3. Data structures (Object Types)

    ```ts
    type MyObject = {
    key1: boolean;
    key2: number;
    };
    type MyRecord = {
    [key: string]: number;
    };
    type MyTuple = [boolean, number];
    type MyArray = number[];
    ```

4. Unions

    ```ts
    type MyUnion = 'Yes' | 'No';
    // Example
    const myUnion1: MyUnion = 'Yes';
    const myUnion2: MyUnion = 'No';
    const myUnion3: MyUnion = 'Maybe'; // Error
    ```

5. Intersections

    ```ts
    type MyIntersection = { count: number } & { title: string };
    // Example
    const myIntersection1: MyIntersection = {
    count: 1,
    title: 'Hello',
    };
    ```


อ้างอิง: https://type-level-typescript.com/types-are-just-data