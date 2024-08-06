# สร้าง Builder Pattern แบบ Type-Safe 

## Basic 

```typescript
class Inventory<Items extends Record<string, unknown> = {}> {

    items: Items = {} as Items;

    add<NewItem extends Record<string, unknown>>(value: NewItem) {
        this.items = {
            ...value as unknown as Items
        }
        return this as Inventory<Items & NewItem>;
    }
}

const inventory = new Inventory()
    .add({
        hello: 'world',
    }).add({
        typescript: 5.1,
        numbers: [23, '123']
    });

console.log(inventory.items.typescript)


type A = typeof inventory.items;

// type A = {
//     hello: string;
// } & {
//     typescript: number;
//     numbers: (string | number)[];
// }
```

[playground](https://www.typescriptlang.org/play?#code/FAYwNghgzlAECSA7AbgU0QFwPYCcCeAPPBqgLZyoAeJiAJnAEqoi60FQY4CWiA5gDSwArogDWiLAHdEAPlgBeWAG8AvnKXBgsbbC4lyALgT64i1bGjGyUANyadF2mwByqScTKwqNerCYscNg5uPkERcSlZGQAKZAgwIVQjV3d9AEplLQcdDAALLigAOj1rBUzsithC6riE1As4cIlpBqtyLIqVDuycVAwhHERYPILWpDRMXEIPclgAMlgUmZk7By6u0CxEDl0UdGx8MsQ3BD3J-Gi07sKIJ2iNSthc1DAwLCMAcklcMFoP-m6KjSNzuD0qGDwAAdUFAQNxIRgjABWQoARgBj0QQlIACNUDgoEYANoAJgAzIIPqjyR8ALqAtJ2TbbLBgVCFN68aI8CYHPDFEyFCHQ2HwjBXTTC+oAQTKUqwADNdrypgLrHYAPQanQAPQA-EA)

Ref: TypeScript Meetup Thailand July 2023
https://www.facebook.com/phantipk/videos/289991566938840?idorvanity=1377224595918442

## More advanced

```typescript
class ObjectBuilder<Items extends Record<string, unknown> = {}> {

    constructor(private readonly jsonObject: Items) { }

    add<K extends string, V>(key: K, value: V) {
        const nextPart = { [key]: value } as Record<K, V>;
        return new ObjectBuilder({ ...this.jsonObject, ...nextPart }) as
            ObjectBuilder<{ [Key in keyof (Items & Record<K, V>)]: (Items & Record<K, V>)[Key] }>;
    }

    build(): Items {
        return this.jsonObject;
    }

    static create(){
        return new ObjectBuilder({});
    }

}

const json = ObjectBuilder.create()
.add('aString', 'some text')
.add('aNumber', 2)
.add('anArray', [1, 2, 3])
.build();

type B = typeof json;

// type B = {
//     aString: string;
//     aNumber: number;
//     anArray: number[];
// }
```

[playground](https://www.typescriptlang.org/play?#code/MYGwhgzhAEDyBGArApsALgIQK4EsQBNkAnAHgEk1kBbGZAD0oDt8YAlVAeyPxIjSJyMA5gBpoWRgGtGHAO6MAfNAC80AN4BfJWoBQO6AejAOjPkSzouACgAOAgG5hK0IsjD4TIAJ7REEEwgo6ABc0BTUEACU6tAaeobQ7jwA0tD0TCzQZoKi0ABqClaSyF6hyWKOIFjIoXnRugkJxqZo0IzpAApgRK2qatAA2sVeALqhldWxiWyc3CTl+QoA3PqNBq5oWESMbciycEiomLgExFb9AHRXaAAWOBAXfgGH6GJXF+0MXT2x0ZCrawSgSO2DwhFI-QGyRK0EE0GGHAAZtArOEaNAAGTQdjGOYLAqRMYotEwLE4rgpMQEqElEaxZYA2LxQzwE74KyRUIk9SMhIbLY7W73R7+RjA9ArBJxRl8Jw4YBGVxOZAchqA-nbXb7cXHMFnTSRSWGaXS5p8XyilQHIK605EC7AJWUDk6C5JKwAcjAAGV+DkPWIPf4qMhoJQGB7Iq73V6AHJYKjwYgB6AAJijbvw7K9jAAgkQiGAvCmBgBGMSpsQAZhGGdZYI5Kx0aC8NlDGCtLbbSItJibAHp+2HW+2rbpB40fX7hKFssIVhOEmB44niKFGAmk0QF0Ol3mC0X15viAMRjumXogA)

Ref: https://medium.hexlabs.io/the-builder-pattern-with-typescript-using-advanced-types-e05a03ffc36e