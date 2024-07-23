# Web Deployment

คือกระบวนการที่นำเว็บแอปพลิเคชันจากสภาพแวดล้อมการพัฒนาไปยังสภาพแวดล้อมการใช้งานจริง (production) เพื่อให้ผู้ใช้สามารถเข้าถึงและใช้งานได้ มีหลายวิธีและเครื่องมือที่ใช้ในการปรับใช้เว็บแอปพลิเคชัน ขึ้นอยู่กับเทคโนโลยีและความต้องการของโปรเจค

## ขั้นตอนพื้นฐานในการปรับใช้เว็บแอปพลิเคชัน

### 1. การเตรียมโปรเจค

- **ตรวจสอบความถูกต้องของโค้ด**: ทำการทดสอบและแก้ไขข้อผิดพลาดที่พบ
- **สร้างไฟล์ที่จำเป็น**: เช่น ไฟล์ build, ไฟล์กำหนดค่า (configuration files)
- **ตรวจสอบการจัดการเวอร์ชัน**: ตรวจสอบให้แน่ใจว่าโค้ดทั้งหมดถูก commit และ push ไปยัง repository

### 2. การเลือกแพลตฟอร์มและเครื่องมือ

มีหลายแพลตฟอร์มและเครื่องมือที่ใช้ในการปรับใช้เว็บแอปพลิเคชัน:

- **โฮสติ้งแบบดั้งเดิม (Traditional Hosting)**: เช่น การใช้บริการจากบริษัทโฮสติ้งที่มีการจัดการเซิร์ฟเวอร์
- **โฮสติ้งบนคลาวด์ (Cloud Hosting)**: เช่น AWS, Azure, Google Cloud
- **แพลตฟอร์มปรับใช้แบบง่าย (Platform-as-a-Service, PaaS)**: เช่น Heroku, Vercel, Netlify

### 3. การตั้งค่าเซิร์ฟเวอร์

- **การติดตั้งซอฟต์แวร์ที่จำเป็น**: เช่น Nginx, Apache, Node.js, Python
- **การกำหนดค่าเซิร์ฟเวอร์**: ตั้งค่า DNS, SSL/TLS, Firewall
- **การตั้งค่าฐานข้อมูล**: การสร้างและกำหนดค่าเชื่อมต่อฐานข้อมูล เช่น MySQL, PostgreSQL, MongoDB

### 4. การปรับใช้โปรเจค

- **การคัดลอกไฟล์**: คัดลอกไฟล์จากเครื่องพัฒนาไปยังเซิร์ฟเวอร์ (เช่นผ่าน SFTP, SCP)
- **การสร้างไฟล์และไดเรกทอรี**: สร้างไดเรกทอรีที่จำเป็นและไฟล์การกำหนดค่าบนเซิร์ฟเวอร์
- **การรันโปรเจค**: รันคำสั่งที่จำเป็นในการเริ่มต้นแอปพลิเคชัน

### 5. การตรวจสอบและการบำรุงรักษา

- **การตรวจสอบการทำงาน**: ตรวจสอบว่าแอปพลิเคชันทำงานได้ถูกต้อง
- **การสำรองข้อมูล**: จัดการการสำรองข้อมูลที่จำเป็น
- **การบำรุงรักษาและอัปเดต**: ตรวจสอบและอัปเดตซอฟต์แวร์ตามความจำเป็น

## ตัวอย่างการปรับใช้บนแพลตฟอร์มยอดนิยม

### 1. การปรับใช้บน Heroku

Heroku เป็นแพลตฟอร์ม PaaS ที่ช่วยในการปรับใช้เว็บแอปพลิเคชันอย่างง่ายดาย

1. **สร้างโปรเจคใหม่บน Heroku**:

    ```bash
    heroku create myapp
    ```

2. **ตั้งค่า Git Remote**:

    ```bash
    git remote add heroku https://git.heroku.com/myapp.git
    ```

3. **ดันโค้ดไปยัง Heroku**:

    ```bash
    git push heroku main
    ```

4. **ตั้งค่า Environment Variables**:

    ```bash
    heroku config:set MY_VARIABLE=value
    ```

5. **เปิดแอปพลิเคชัน**:

    ```bash
    heroku open
    ```

### 2. การปรับใช้บน AWS (Amazon Web Services)

AWS เป็นบริการคลาวด์ที่มีความยืดหยุ่นและสามารถขยายตัวได้ มีเครื่องมือหลากหลายสำหรับการปรับใช้เว็บแอปพลิเคชัน

1. **สร้าง EC2 Instance**:

    - ล็อกอินเข้าสู่ AWS Management Console
    - ไปที่บริการ EC2 และสร้าง Instance ใหม่
    - เลือก AMI และขนาดของ Instance ที่ต้องการ
    - ตั้งค่าการเชื่อมต่อและความปลอดภัย

2. **เชื่อมต่อกับ EC2 Instance**:

    ```bash
    ssh -i "my-key-pair.pem" ec2-user@ec2-xx-xx-xx-xx.compute-1.amazonaws.com
    ```

3. **ตั้งค่าเซิร์ฟเวอร์บน EC2**:

    - ติดตั้งซอฟต์แวร์ที่จำเป็น (เช่น Nginx, Node.js)
    - อัปโหลดไฟล์โปรเจคไปยังเซิร์ฟเวอร์
    - ตั้งค่าการกำหนดค่าเซิร์ฟเวอร์และการรันโปรเจค

### 3. การปรับใช้บน Vercel

Vercel เป็นแพลตฟอร์มที่เน้นการปรับใช้เว็บแอปพลิเคชันแบบ Static และ Serverless

1. **ล็อกอินเข้าสู่ Vercel**:

    - ล็อกอินเข้าสู่ [Vercel](https://vercel.com/) ด้วยบัญชี GitHub หรือ GitLab

2. **เชื่อมต่อกับ Repository**:

    - เลือกโปรเจคจาก GitHub หรือ GitLab
    - ตั้งค่าการปรับใช้ (เช่น การตั้งค่า Environment Variables)

3. **ปรับใช้โปรเจค**:

    - คลิกที่ปุ่ม "Deploy" เพื่อปรับใช้โปรเจค
    - Vercel จะทำการปรับใช้โปรเจคอัตโนมัติและสร้าง URL สำหรับการเข้าถึงแอปพลิเคชัน

## การใช้งาน CI/CD (Continuous Integration/Continuous Deployment)

การตั้งค่า CI/CD ช่วยให้การปรับใช้เว็บแอปพลิเคชันเป็นไปได้อย่างต่อเนื่องและอัตโนมัติ

1. **ใช้ GitHub Actions**:

    - สร้างไฟล์ workflow ในโฟลเดอร์ `.github/workflows`:

    ```yaml
    name: CI/CD Pipeline

    on:
      push:
        branches:
          - main

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest

        steps:
        - name: Checkout code
          uses: actions/checkout@v2

        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '14'

        - name: Install dependencies
          run: npm install

        - name: Build project
          run: npm run build

        - name: Deploy to Vercel
          run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
    ```

    - ตั้งค่า Secrets ใน GitHub Repository เช่น `VERCEL_TOKEN`

2. **ใช้ Jenkins**:

    - ติดตั้ง Jenkins และตั้งค่า pipeline สำหรับการปรับใช้โปรเจค
    - สร้าง pipeline script สำหรับการทดสอบและปรับใช้โปรเจค

    ```groovy
    pipeline {
        agent any

        stages {
            stage('Build') {
                steps {
                    script {
                        sh 'npm install'
                        sh 'npm run build'
                    }
                }
            }

            stage('Deploy') {
                steps {
                    script {
                        sh 'vercel --prod --token $VERCEL_TOKEN'
                    }
                }
            }
        }
    }
    ```

การปรับใช้เว็บแอปพลิเคชันเป็นกระบวนการที่สำคัญในการนำโปรเจคจากสภาพแวดล้อมการพัฒนาไปยังสภาพแวดล้อมการใช้งานจริง ด้วยเครื่องมือและแพลตฟอร์มที่เหมาะสม นักพัฒนาสามารถปรับใช้และจัดการเว็บแอปพลิเคชันได้อย่างมีประสิทธิภาพและรวดเร็ว