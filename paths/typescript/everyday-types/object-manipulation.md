---
outline: deep
---
# การจัดการกับ Object

บางครั้งเราต้องการเพิ่มคุณสมบัติใหม่ให้กับวัตถุ แต่การกระทำนี้อาจส่งผลให้เกิดข้อผิดพลาด ดูตัวอย่างด้านล่าง:

```ts
const nameRecord = {};
nameRecord.john = 1; // ❌ Error: Property 'john' does not exist on type '{}'.
```

เราไม่สามารถเพิ่มคุณสมบัติ 'john' ให้กับ `nameRecord` ได้เนื่องจากวัตถุไม่มีคุณสมบัตินั้น

ในการแก้ปัญหานี้ เราต้องใช้ [Mapped Types](../handbook/mapped-types) ในกรณีนี้คือ `Record`

## Record<Keys, Type>

`Record` ช่วยให้เราสามารถสร้างวัตถุที่สามารถเพิ่มคุณสมบัติใหม่ๆ ได้ ดูตัวอย่างด้านล่าง:

```typescript
const nameRecord: Record<string, number> = {
  john: 1,
  micky: 2,
};
 
nameRecord['Lilly'] = 5; // เราสามารถเพิ่มคุณสมบัติใหม่ให้กับวัตถุได้ เพราะ 'Lilly' เป็นชนิดข้อมูล string

nameRecord[true] = 5; // ❌ ข้อผิดพลาด: ไม่สามารถใช้ชนิดข้อมูล 'true' เป็นคีย์
```

ในตัวอย่างนี้เราสร้างตัวแปร `nameRecord` ที่มีชนิดข้อมูล `Record<string, number>` ซึ่งอนุญาตให้เพิ่มคุณสมบัติที่มีชนิดข้อมูลเป็น `string` และค่าของคุณสมบัติเป็นชนิดข้อมูล `number` นอกจากนี้เรายังไม่สามารถใช้ค่าที่ไม่ใช่ `string` เป็นชนิดข้อมูลของคีย์ได้

### Record with Type Union (จำเป็นต้องมีคีย์ครบทั้งหมด)

`Record<Type>` ต้องการให้กำหนดคีย์ของ Object ให้ครบถ้วน แต่ถ้าต้องการให้เป็นแบบ Partial (ไม่จำเป็นต้องมีคีย์ครบทั้งหมด) [ตอนนี้ TypeScript ยังไม่ได้ support](https://github.com/microsoft/TypeScript/issues/43918)

```typescript
type Activities = 'Running' | 'Walking' | 'Swimming';
const countActivities: Record<Activities, number> = {
  Running: 0,
  Swimming: 1,
  Walking: 5
}

// คีย์ของ Object `countActivities` ต้องตรงกับชนิด `Activities`
```

ในตัวอย่างนี้ เรากำหนดชนิด `Activities`
ที่ประกอบด้วยค่า 'Running', 'Walking', และ 'Swimming' แล้วเราสร้าง Object `countActivities`
ที่มีชนิดข้อมูล `Record<Activities, number>`
สิ่งนี้หมายความว่าวัตถุ `countActivities`
ต้องมีคีย์ของคุณสมบัติตรงกับที่กำหนดในชนิด `Activities`
ดังนั้นเราจึงต้องกำหนดค่าให้กับคุณสมบัติ 'Running', 'Walking', และ 'Swimming' ทั้งสามคุณสมบัติเสมอ

### Record with Type Union  (ไม่จำเป็นต้องมีคีย์ครบทั้งหมด)

ในกรณีที่ต้องการให้คุณสมบัติทั้งหมดเป็นตัวเลือก คุณสามารถใช้ `Partial` ร่วมกับ `Record` ดังตัวอย่าง:

```ts
type Activities = 'Running' | 'Walking' | 'Swimming';
const countActivities2: Partial<Record<Activities, number>> = {
  Running: 0,
}

// คีย์ของ Object `countActivities2` ต้องตรงกับชนิด `Activities` และไม่จำเป็นต้องใส่ครบ
```

หรือคุณสามารถกำหนด **`PartialRecord<Type>`** เพื่อใช้งานเอง:

```typescript
// กำหนด PartialRecord<Type> เพื่อใช้งานเอง
type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>

type Activities = 'Running' | 'Walking' | 'Swimming';
const countActivities: PartialRecord<Activities, number> = {
  Running: 0,
}
 
countActivities.Walking = 5; // ใช้งานได้!
countActivities.Cycling = 4; // ❌ ข้อผิดพลาด: คุณสมบัติ 'Cycling' ไม่มีอยู่ในชนิด 'Partial<Record<Activities, number>>'
```

ในตัวอย่างนี้ เรากำหนดชนิด **`Activities`** ที่ประกอบด้วยค่า 'Running', 'Walking', และ 'Swimming' และสร้าง Object **`countActivities`** ที่มีชนิดข้อมูล **`PartialRecord<Activities, number>`** ซึ่งอนุญาตให้คุณสมบัติทั้งหมดใน Object เป็นตัวเลือก ไม่จำเป็นต้องใส่ครบทุกคีย์ แต่คีย์ที่ใช้ยังคงต้องอยู่ในชนิด **`Activities`**
