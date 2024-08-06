# Keyof

ในบทความนี้ ผมจะอธิบายละเอียดขั้นตอนในการสร้างฟังก์ชันที่สามารถดึงค่าจากคีย์ของ Object ใน TypeScript

สมมติ เริ่มต้นด้วยการกำหนดโครงสร้างของ Object ใน Post ดังนี้:

```ts
type Post = {
  title: string;
  date: Date;
};

const myPost: Post = {
  title: "TypeScript is great!",
  date: new Date(),
};
```
1. สมมติว่า เราต้องการสร้าง Function ที่ดึง Value ออกมาจาก Key ของ Object `myPost` นี้

    ```ts
    getPostByKey1("title", myPost); // TypeScript is great!
    ```
2. ถ้าเราพยายามใช้ key ในรูปแบบ string สำหรับฟังก์ชัน getPostByKey2 เราจะเจอข้อผิดพลาด เนื่องจากคีย์ต้องเป็น title หรือ date
    ```ts
    function getPostByKey2(key: string, postData: Post) {
      return postData[key];
       // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Post'.
    }
    ```
3. วิธีแก้ไขคือการกำหนดคีย์ให้เป็น union type แสดงว่า key ต้องเป็น union type ที่มีค่าเป็น `'title' | 'date'`
    ```ts
    function getPostByKey3(key: 'title' | 'date', postData: Post) {
      return postData[key];
    }
    ```
4. ใช้คำสั่ง keyof เพื่อได้ union ของคีย์ของ Object ทำให้เราสามารถกำหนดคีย์ที่ถูกต้องและใช้งานได้
    ```ts
    type KeyOfPost = keyof Post; // 'title' | 'date'
    ```

5. เราสามารถสร้างฟังก์ชันที่เป็น generic และนำไปใช้กับข้อมูลใด ๆ ได้ ด้วยฟังก์ชัน `getObjectByKey` ซึ่งใช้ keyof ของตัวแปร T ตัวอย่างนี้ใช้ `'date'` จาก object `myPost` 
    ```ts
    function getObjectByKey<T>(key: keyof T, data: T) {
      return data[key];
    }
    getObjectByKey('date', myPost);
    ```

จากตัวอย่าง เราสามารถสร้างฟังก์ชันที่สามารถดึงค่าจากคีย์ของ Object อย่างมีประสิทธิภาพและยืดหยุ่นใน TypeScript ได้ ฟังก์ชัน `getObjectByKey` ที่เป็น generic สามารถนำไปใช้กับ Object หรือโครงสร้างข้อมูลชนิดอื่น ๆ ได้ตามความต้องการของคุณ

ลองเล่นใน [Playground](https://www.typescriptlang.org/play?#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwHMQMAFHAZwwCEBPAaRBoEYAKAa0YC5403UcA7qgA08AA4UM3MpQCU3XvyEBuAFCqMNMQhkZ4AXngBvVfHjYMEEN0owsqAmrPAoGa-AAirkGoC+a1TA8SngAWxpdaUkDY1NzLEt3ACIAFS0QAGUwOzE9LHJCOFcAQiThOJc3blQQAU9vFlly-1UAegAqdtN2+CYAOnhAVDhASThAWjhAcDhAQDhAJjhAYjhAKjhZ4enx+AAxNExcfEB0OEBWOEAJOEAUOEA2OFWANSgIZARR0cnAQjhpwAg4acn4Bhp4QCA4CfgAeQARgArcAYbqtVREUiSWifVhJCxWMphCKSWTKeCtVrwNLaLI5PIFAhFDDFNqdbrwABMA0AAnCzaaAETgHgd5tMnrNAGhwgGE4QBQcMN4BwvnTANhwgHE4QCYcPBbPYCPAmUdBXTAHhwjMADHAyjB2BwK1n8g7xRLwQDUcLNAOxwo3glRAENUKHQ2DwhGIujhjGp7C4Wp1BFEEkoXgwUCicliZmx8AAAhhyABaEAAD20mATMBgOBgcTgGGQMHwAYwQagAG1hQBdPwUrrwHoAZgGgEE4eZHcaAcjgDtMhYwhmNxmKpTxUNtzOkDAA+eAAciRICn8AAPtObVO7Q6ts7oW76Iw616aNxEQlkYv4EkbSjC8XQxhZOH4Dm8wXJMWy4xK6pfNWqQAWAbCnBEHgZ51UVQU0BHX5VmFH4-iBUFMDtTRtA+Rh-kQXQYgAoDdExSMZ2POdTynFd1A6GsegAVgGHZAGY4HkTUFdcnXwIgajsMB4CeSZvhOYZpXZTkuQfEBkHIKBASsBUlTXTYWJdDB4LBd0aAAHhScd924bDcVESoQ1xO8TDMR982tVxSwrKtoSUzAVJYEjvCnURwl0DEgA)