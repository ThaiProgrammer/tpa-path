# Architectural Styles & Patterns
ในโลกของการพัฒนาซอฟต์แวร์ การออกแบบ architecture ถือเป็นหนึ่งในขั้นตอนที่สำคัญที่สุด เพราะ software architecture นั้น**ทำหน้าที่เหมือน blueprint ที่กำหนดโครงสร้างและการทำงานของระบบทั้งหมด** การเลือกใช้ architectural styles และ patterns ที่เหมาะสมจะช่วยให้ระบบมีความยืดหยุ่น บำรุงรักษาง่าย และสามารถรองรับการเปลี่ยนแปลงในอนาคตได้

หากไม่มีการกำหนดรูปแบบของ architecture ที่ดีตั้งแต่เริ่มต้น อาจทำให้เกิดความไม่สอดคล้องกันในการพัฒนาได้ ซึ่งมีความเสี่ยงหลายอย่าง เช่น เกิด coupling ระหว่าง dependencies จำนวนมาก หรือมีความซับซ้อนเกืนความจำเป็น ซึ่งส่งผลให้การบริหารจัดการ และการพัฒนาต่อยอดในอนาคตทำได้ยากมากขึ้น

โดยเนื้อหาเกี่ยวกับ architectural styles และ patterns ที่พบได้บ่อยในปัจจุบันได้จากหัวข้อด้านล่างนี้เลยค่ะ
## Architectural Styles
Architectural Styles เป็นการอธิบายภาพใหญ่ของ architecture โดย**ให้ความสำคัญกับภาพรวมของระบบที่กำลังออกแบบมากกว่ารายละเอียดในการ implementation เชิงลึก** โดยอาจละเว้นในส่วนของ technologies หรือเครื่องมือที่จะใช้กับองค์ประกอบนั้นๆ แต่จะเป็นการอธิบายภาพรวมและคุณลักษณะขององค์ประกอบนั้นๆ เช่น

- ระบบย่อยต่างๆ
- ระบบภายนอก
- รูปแบบการเชื่อมต่อระหว่างองค์ประกอบต่างๆ
- การจัดการข้อมูลในระบบ
- กลไกความปลอดภัย
- Layers

โดย architectural styles ที่เรามักพบเห็นได้บ่อยในปัจจุบัน มีดังนี้
- **Monolithic Architecture:** เป็นรูปแบบของ architecture ที่ทุกส่วนประกอบของ application เช่น user interface, business logic, หรือ data access ถูกรวมเข้าไว้ใน codebase เดียวกัน โดย application ที่เป็น monolith จะถูกพัฒนา ทดสอบ และบริหารจัดการอยู่ใน package เดียวกัน
- **Microservices Architecture:** เป็นรูปแบบของ architecture ที่ application จะถูกแยกออกไป service ย่อยๆหลายตัว โดยที่แต่ละ service จะทำหน้าที่เฉพาะงานที่เกี่ยวข้องกับตัวเอง และเป็นอิสระจาก service อื่นๆในการพัฒนาและบริหารจัดการ ทำให้มีความคล่องตัวในการพัฒนาและยืดหยุ่นในการเลือกใช้เทคโนโลยี
- **Event-Driven Architecture:** เป็นรูปแบบ architecture ที่ใช้ event ในการสื่อสารระหว่าง service ต่างๆในระบบ โดย events ต่างๆจะแสดงถึงการเปลี่ยนแปลงของข้อมูล หรือเหตุการณ์ต่างๆที่เกิดขึ้นในระบบ รูปแบบ architecture นี้มักจะมีตัวกลางในการรับส่ง events เรียกว่า message broker หรือ event broker
- **Client-Server:** เป็นรูปแบบของ architecture ที่ใช้งานกันแพร่หลาย โดย client หรือผู้ใช้งานจะร้องขอการประมวลผลหรือการทำงานไปที่ server ซึ่งทำหน้าที่ประมวลผลและส่งผลลัพธ์กลับไปที่ client หนึ่งในลักษณะการใช้งานที่พบได้บ่อยที่สุดในปัจจุบันคือ web server ที่ให้บริการ website หรือ web service ต่างๆ

นอกจากนี้ยังมี architectural styles อื่นๆอีกมากมาย โดยสามารถอ่านเพิ่มเติมจาก [บทความของทาง JavatPoint](https://www.javatpoint.com/architectural-styles-in-software-engineering) โดยในบทความนี้จะเปรียบเทียบข้อดีข้อเสียของแต่ละ architectural styles ให้เห็นด้วยค่ะ
## Architectural Patterns
Architectural Patterns คือแนวทางการและวิธีการต่างๆที่ใช้เพื่อ**แก้ปัญหาที่มักเกิดขึ้นซ้ำๆในการออกแบบ software architecture** เช่น

- การจัดการกับความซับซ้อน
- ประสิทธิภาพของระบบ
- Scalability
- การ test ระบบ
- การ reuse ส่วนประกอบต่างๆในระบบ

โดยตัวอย่างของ architectural patterns มีดังนี้

- **MVC (Model-View-Controller):** เป็นการแบ่ง software ออกเป็นสามส่วนหลักๆ ได้แก่ models ที่ทำหน้าทีจัดการกับข้อมูล, views ที่ทำหน้าที่ติดต่อกับผู้ใช้ในการแสดงผลและรับคำสั่งต่างๆ, และ controllers ที่ทำหน้าที่ในการประมวลผลต่างๆและเชื่อมโยง views กับ models เข้าด้วยกัน
- **Event Sourcing:** เป็นรูปแบบของ architecture ที่ทุกการเปลี่ยนแปลงของข้อมูลต่างๆใน application เช่น entity หรือ aggregate จะถูกเก็บในลักษณะของ **ลำดับของเหตุการณ์ (sequence of events)** โดยจะเป็นการจัดการข้อมูลในลักษณะ append-only ทำให้สามารถตรวจสอบทุกการเปลี่ยนแปลงของข้อมูลและสามารถนำ events เหล่านี้ไปประมวลผลเพิ่มเติมได้ โดยมักจะใช้คู่กับ pattern แบบ CQRS
- **Command Query Responsibility Segregation (CQRS):** เป็นการแยก application ออกเป็นสองส่วน ได้แก่ ส่วนที่เป็น command ทำหน้าที่เปลี่ยนแปลงข้อมูล และส่วนที่เป็น query ทำหน้าที่เรียกดูข้อมูล โดยทั้งสองส่วนจะใช้ model แยกจากกันชัดเจน ในบางระบบอาจแยกฐานข้อมูล และ process ในการทำงานออกจากกันเพื่อประสิทธิภาพสูงสุด
- **Saga Pattern:** เป็นรูปแบบของการจัดการ long-running transactions ผ่านระบบต่างๆ โดยมักจะถูกใช้ใน architecture ที่เป็น distributed systems เช่น microservices โดยแต่ละ microservice จะทำการประมวลผลและส่งต่อไปยัง microservice ถัดไป

## ความแตกต่างระหว่าง Architectural Styles และ Patterns
หลายครั้งที่ architectural styles และ patterns มีความแตกต่างกันในมุมมองของ architecture โดยที่ **architectural styles จะเน้นการอธิบายองค์ประกอบของระบบในภาพกว้าง**โดยไม่ลงลึกในรายละเอียดและ tools หรือ frameworks ที่ใช้การพัฒนา โดยส่วนใหญ่แล้วมักจะเป็นการกำหนดรูปร่างของ architecture ของระบบ เช่น จำนวน service ต่างๆ ระบบภายนอก และลักษณะการเชื่อมต่อขององค์ประกอบต่างๆ

ในขณะที่ **architectural patterns จะเป็นการมองในระดับที่เล็กลงมาและมีรายละเอียดมากขึ้น** โดยเน้นไปที่การแก้ปัญหาเฉพาะจุดของระบบ เช่น รูปแบบในการเก็บข้อมูล รูปแบบในการจัดวาง modules ในระบบ หรือรูปแบบในการรับ-ส่งข้อมูลที่มีความเฉพาะเจาะจงมากขึ้น

ตัวอย่างเช่น การออกแบบระบบโดยใช้ architectural style แบบ microservice และ event-driven architecture อาจเลือกใช้ architectural pattern แบบ pub/sub โดยมี message broker เป็นตัวกลางเพื่อรับ-ส่งข้อมูลระหว่าง module ต่างๆ

ตารางด้านล่างเป็นการเปรียบเทียบโดยคร่าวๆระหว่าง architectural styles และ patterns

| Feature                | Architectural Styles      | Architectural Patterns   |
| ----------------------- | --------------------------- | ------------------------ |
| **Level of Abstraction**   | ภาพกว้าง                | มีรายละเอียดมากขึ้น            |
| **Scope**                  | รวมของระบบทั้งหมด    | การแก้ปัญหาเฉพาะส่วน  |
| **Focus**                  | องค์ประกอบและความสัมพันธ์ต่างๆ | รูปแบบ แนวทางในการแก้ปัญหา   |
| **Examples**        | Event-Driven Architecture | Pub/Sub, Event Stream Processing, CQRS |
