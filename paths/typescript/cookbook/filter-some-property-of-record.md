# เลือกบาง Property จาก Record

Ref: https://rossbulat.medium.com/typescript-typing-dynamic-objects-and-subsets-with-generics-44ba3988a91a

## มาดูตัวอย่างเต็มๆ กันดีกว่า

```typescript
/**
 * Get only some keys and return the correct key
 */
export function pick<T, U extends keyof T>(obj: T, keys: U[]) {
  // สาเหตุที่เลือกใช้ Partial ของ Pick จะทำให้สร้าง Object ว่างๆ ได้นั่นเอง แล้วค่อยเลือก Property ทีหลัง
  const result: Partial<Pick<T, U>> = {};
  keys.forEach((key) => {
    if (typeof obj[key] !== "undefined") {
      result[key] = obj[key];
    }
  });
  return result;
}

interface IPost {
  id: string;
  title: string;
}

const post: IPost = {
    id: '1',
    title: 'Go Lang'
}
const result = pick(post, ['id']);


console.log(result.id);
console.log(result.title);  //  ❌ Error: Property 'title' does not exist on type 'Partial<FilterRecord<IPost, "id">>'
```