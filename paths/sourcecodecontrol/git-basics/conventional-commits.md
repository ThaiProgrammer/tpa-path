# Conventional Commits

Conventional Commits คือ รูปแบบของ commit message ที่ช่วยให้เราสามารถเข้าใจว่าการเปลี่ยนแปลงที่เกิดขึ้นใน commit นั้นๆ คืออะไร โดยไม่จำเป็นต้องเข้าไปดู diff ของไฟล์ หรือเปิดดูรายละเอียดของ commit นั้นๆ ก่อน

## รูปแบบของ Conventional Commits

Conventional Commits ประกอบไปด้วย 3 ส่วน ได้แก่ `type`, `scope`, และ `message`

```
<type>[optional scope]: <message>
```

### Type

Type คือ ประเภทของการเปลี่ยนแปลงที่เกิดขึ้นใน commit นั้นๆ โดยมีรูปแบบดังนี้

- **feat**: ใช้เพื่อบอกถึงการเพิ่ม feature ใหม่
- **fix**: ใช้เพื่อบอกถึงการแก้ไข bug
- **docs**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับเอกสาร(docmentation)
- **style**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับการจัดรูปแบบหรือฟอร์แมตของโค้ด เช่น การเว้นวรรค การเติม semi-colon(`;`)
- **refactor**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับการเปลี่ยนโครงสร้างของโค้ด โดยไม่มีการเปลี่ยนแปลงในพฤติกรรมของโค้ด
- **perf**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับประสิทธิภาพของโค้ด
- **test**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับไฟล์ test อาจจะเป็นการเพิ่ม test หรือการแก้ไข test ที่มีอยู่แล้ว
- **build**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่มีผลต่อ build system หรือ external dependencies
- **ci**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับการตั้งค่าหรือการเปลี่ยนแปลงในการทำงานของ CI
- **chore**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่ไม่เกี่ยวข้องกับซอร์สโค้ดหรือไฟล์ test
- **revert**: ใช้เพื่อบอกถึงการเปลี่ยนแปลงที่เกี่ยวกับการย้อนกลับไปยัง commit ก่อนหน้า

### Scope

Scope คือ ขอบเขตของการเปลี่ยนแปลงที่เกิดขึ้นใน commit นั้น ๆ โดยมีรูปแบบเป็นข้อความที่อธิบายถึงขอบเขตของการเปลี่ยนแปลง
ตรงส่วนนี้ สามารถใส่หรือไม่ใส่ก็ได้ ขึ้นอยู่กับความเหมาะสมของการใช้งาน

### Message

Message คือ ข้อความที่อธิบายถึงการเปลี่ยนแปลงที่เกิดขึ้นใน commit นั้น ๆ

## ตัวอย่างของ Conventional Commits

```
feat(auth): add social login
fix(auth): invalid token type in Google provider schema
docs(git-basics): add conventional commits section
style: format markdown files with prettier
refactor(utils): move common functions to utils file
perf!: improve performance for bulk insert
test(auth): add test for login function
build: switch from npm to yarn
ci: add GitHub Actions for CI/CD
chore: reorganize asset folder structure
revert: revert commit 123456
```

> [!TIP]
> ในกรณีที่ commit นั้น ๆ มี breaking changes เราสามารถใส่เครื่องหมาย `!` เข้าไปหลัง `type` ได้ เพื่อบอกว่า commit นั้น ๆ มี breaking changes

## ป้ายยา Extension

Extension สำหรับ Visual Studio Code ที่ชื่อว่า [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) สามารถช่วยให้เราสามารถสร้าง commit message ตามรูปแบบของ Conventional Commits ได้ง่ายขึ้น

![Conventional Commits Extension](https://github.com/vivaxy/vscode-conventional-commits/raw/HEAD/assets/docs/demo.gif)

> รูปภาพ Conventional Commits Extension จาก [vivaxy/vscode-conventional-commits](https://github.com/vivaxy/vscode-conventional-commits)

## สรุป

Conventional Commits คือ รูปแบบของ commit message ที่ช่วยให้เราสามารถเข้าใจว่าการเปลี่ยนแปลงที่เกิดขึ้นใน commit นั้นๆ โดยไม่จำเป็นต้องเข้าไปดู diff ของไฟล์ หรือเปิดดูรายละเอียดของ commit นั้นๆ ก่อน และยังช่วยให้เราสามารถใช้เครื่องมือที่สร้างขึ้นเพื่อช่วยในการจัดการ commit ได้ง่ายขึ้น เช่น การสร้าง CHANGELOG โดยอัตโนมัติ การสร้าง release note โดยอัตโนมัติ หรือการสร้าง semantic version โดยอัตโนมัติ

## Reference

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Credit
ขอบคุณเนื้อหาดีๆจากต้นทางครับ [TTSS Learning Portal - Learn together, succeed together.](https://learning-ttss.vercel.app/portal.html)