# Backend End Web Development

Backend Web Development คือการพัฒนาและดูแลส่วนหลังของเว็บแอปพลิเคชัน ซึ่งรวมถึงการจัดการกับฐานข้อมูล, การประมวลผลบนเซิร์ฟเวอร์, การสร้าง API, การจัดการการรับส่งข้อมูล และการรักษาความปลอดภัย ส่วนของ Backend ไม่สามารถมองเห็นได้โดยตรงจากผู้ใช้ แต่มีบทบาทสำคัญในการทำให้เว็บแอปพลิเคชันทำงานได้อย่างถูกต้องและมีประสิทธิภาพ

## ส่วนประกอบหลักของ Backend Web Development

### 1. เซิร์ฟเวอร์ (Server)
เซิร์ฟเวอร์คือเครื่องคอมพิวเตอร์หรือโปรแกรมที่ให้บริการต่าง ๆ เช่น การประมวลผลข้อมูล การจัดการการเชื่อมต่อ และการส่งข้อมูลระหว่างไคลเอ็นต์ (client) และเซิร์ฟเวอร์

### 2. ฐานข้อมูล (Database)
ฐานข้อมูลใช้ในการเก็บรักษาและจัดการข้อมูลที่จำเป็นสำหรับเว็บแอปพลิเคชัน เช่น ข้อมูลผู้ใช้, รายการสินค้า, ข้อมูลการสั่งซื้อ ฯลฯ ฐานข้อมูลที่นิยมใช้ ได้แก่ MySQL, PostgreSQL, MongoDB และ SQLite

### 3. การสร้างและจัดการ API (Application Programming Interface)
API ใช้ในการสื่อสารระหว่างไคลเอ็นต์และเซิร์ฟเวอร์ โดยทั่วไปจะใช้ RESTful API หรือ GraphQL ในการรับส่งข้อมูล

### 4. การจัดการการรับส่งข้อมูล (HTTP Request and Response)
การจัดการการรับส่งข้อมูลระหว่างไคลเอ็นต์และเซิร์ฟเวอร์ผ่านโปรโตคอล HTTP (HyperText Transfer Protocol)

### 5. การรักษาความปลอดภัย (Security)
การรักษาความปลอดภัยของข้อมูลและการป้องกันการโจมตี เช่น การเข้ารหัสข้อมูล, การใช้ HTTPS, การจัดการการยืนยันตัวตนและการอนุญาต

## เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนา Backend

### 1. ภาษาการเขียนโปรแกรม
- **JavaScript (Node.js)**: เป็นภาษายอดนิยมสำหรับการพัฒนา Backend โดยเฉพาะเมื่อใช้ร่วมกับ Node.js
- **Python (Django, Flask)**: ภาษาที่อ่านง่ายและมีเฟรมเวิร์คที่ทรงพลัง
- **Ruby (Ruby on Rails)**: มีความยืดหยุ่นและง่ายต่อการพัฒนา
- **Java (Spring Boot)**: ใช้ในองค์กรใหญ่และมีความเสถียร
- **PHP (Laravel)**: นิยมใช้ในการพัฒนาเว็บแอปพลิเคชัน

### 2. ฐานข้อมูล
- **SQL Databases**: เช่น MySQL, PostgreSQL, SQLite
- **NoSQL Databases**: เช่น MongoDB, Cassandra, Firebase

### 3. เซิร์ฟเวอร์และแพลตฟอร์ม
- **Node.js**: รัน JavaScript บนเซิร์ฟเวอร์
- **Django**: เฟรมเวิร์คของ Python
- **Flask**: เฟรมเวิร์คของ Python
- **Express.js**: เฟรมเวิร์คของ Node.js
- **Spring Boot**: เฟรมเวิร์คของ Java
- **Ruby on Rails**: เฟรมเวิร์คของ Ruby
- **Laravel**: เฟรมเวิร์คของ PHP

### 4. การสร้าง API
- **RESTful API**: สถาปัตยกรรมที่ใช้ในการสร้าง API ที่มีความยืดหยุ่น
- **GraphQL**: ภาษาในการสอบถามข้อมูลที่มีความยืดหยุ่นและสามารถเรียกข้อมูลที่ต้องการได้เฉพาะเจาะจง

## ตัวอย่างการสร้าง Backend ด้วย Node.js และ Express

### การติดตั้ง Node.js และ Express

```bash
mkdir my-backend-app
cd my-backend-app
npm init -y
npm install express
```

### สร้างไฟล์ `index.js`

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

### รันเซิร์ฟเวอร์

```bash
node index.js
```

### การสร้าง API เบื้องต้น

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware สำหรับการจัดการ JSON
app.use(express.json());

// API สำหรับการดึงข้อมูลผู้ใช้
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];
    res.json(users);
});

// API สำหรับการสร้างผู้ใช้ใหม่
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // เพิ่มผู้ใช้ใหม่เข้าสู่ฐานข้อมูล (ตัวอย่าง)
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

## การเชื่อมต่อกับฐานข้อมูล

### การติดตั้งไลบรารีสำหรับการเชื่อมต่อฐานข้อมูล (เช่น MongoDB)

```bash
npm install mongoose
```

### การเชื่อมต่อและใช้ MongoDB

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

// การเชื่อมต่อกับ MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// สร้าง Schema และ Model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

// API สำหรับการดึงข้อมูลผู้ใช้
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// API สำหรับการสร้างผู้ใช้ใหม่
app.post('/api/users', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

Backend Web Development เป็นส่วนสำคัญในการสร้างแอปพลิเคชันเว็บที่มีประสิทธิภาพและสามารถรองรับการใช้งานในหลายสถานการณ์ การเข้าใจการทำงานของส่วน Backend ช่วยให้นักพัฒนาสามารถสร้างแอปพลิเคชันที่มีความเสถียรและปลอดภัยได้