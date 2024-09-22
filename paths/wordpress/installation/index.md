# ติดตั้ง WordPress

การติดตั้ง WordPress สามารถทำได้หลายวิธี แต่ละวิธีจะมีข้อดีและข้อเสียต่างกัน ซึ่งวิธีที่ง่ายที่สุดคือการใช้งานเว็บไซต์ของผู้ให้บริการเว็บไซต์ (Web Hosting) ที่รองรับ WordPress เช่นกัน สำหรับการติดตั้งจะมีขั้นตอนดังนี้

## ขั้นตอนการติดตั้ง

1. [ดาวน์โหลด WordPress](#_1-ดาวน์โหลด-wordpress)
2. [ติดตั้ง Source Code ของ WordPress](#_2-ติดตั้ง-wordpress)
3. [ติดตั้งโดยใช้ Docker Image](#_3-ติดตั้งโดยใช้-docker-image)

---

## 1. ดาวน์โหลด WordPress 
สามารถดาวน์โหลดได้จากที่นี่ [WordPress Download](https://th.wordpress.org/download/)

## 2. ติดตั้ง WordPress
หลังจากดาวน์โหลดเสร็จแล้ว ให้ทำการติดตั้งนำโค้ดทั้งหมดอัพโหลดไปยังเซิฟเวอร์ของคุณ และตั้งค่า Web server ของคุณให้ชี้มายังไฟล์ `index.php` พร้อมทั้งกำหนดค่า Domain name ของคุณให้เรียบร้อย และเข้าสู่หน้าติดตั้งของ WordPress ผ่านโดเมนของคุณดังนี้

![/paths/wordpress/images/install-step3_v47.webp](/paths/wordpress/images/install-step3_v47.webp)
### 2.1 ตั้งค่าฐานข้อมูล โดยกำหนดค่า  
  - Database Name คือชื่อฐานข้อมูลเช่น `wordpress` ต้องสร้างไฟล์ก่อนแล้ว
  - Username คือชื่อผู้ใช้ฐานข้อมูล
  - Password คือรหัสผ่านฐานข้อมูล
  - Database Host คือที่อยู่ของฐานข้อมูลเช่น `localhost` หรือ `127.0.0.1`
  - Table Prefix เป็นชื่อหน้าของตารางเช่น `wp_users` ค่าเร่ิมต้นคือ `wp_`

![/paths/wordpress/images/install-step5_v47.webp](/paths/wordpress/images/install-step5_v47.webp)
### 2.2 ตั้งค่าเว็บไซต์ โดยกำหนดค่า  
  - Site Title คือชื่อเว็บไซต์เช่น บล็อกของฉัน
  - Username คือชื่อผู้ใช้ฐานข้อมูล
  - Password คือรหัสผ่านฐานข้อมูล
  - Email คืออีเมลของผู้ใช้ฐานข้อมูล
  - Search Engine Visibility คือการตั้งค่าการค้นหาของเว็บไซต์ ให้เปิดหรือปิด

### 2.3 เข้าใช้งานเว็บไซต์
หลังจากติดตั้งเสร็จแล้ว ให้ทำการเข้าใช้งานเว็บไซต์ผ่านโดเมนของคุณจะพบหน้าเว็บเริ่มต้น หากต้องการเข้าสู่ระบบหลังบ้านให้เข้าไปที่ path `/wp-admin`

---
## 3. ติดตั้งโดยใช้ Docker Image
สำหรับการติดตั้งโดยใช้ Docker Image สามารถทำได้ดังนี้

### 3.1 ติดตั้ง Docker ก่อน
สำหรับการติดตั้ง Docker สามารถทำได้จากที่นี่ [Docker Download](https://www.docker.com/products/docker-desktop/)

### 3.2 Pull WordPress Docker Image
สำหรับการ Pull WordPress Docker Image สามารถทำได้ดังนี้
```bash
docker pull wordpress
```

### 3.3 Run WordPress Docker Container
สำหรับการ Run WordPress Docker Container สามารถทำได้ดังนี้
```bash
docker run -d -p 80:80 --name wordpress-container wordpress
```

### 3.4 เข้าใช้งานเว็บไซต์
หลังจากติดตั้งเสร็จแล้ว ให้ทำการเข้าใช้งานเว็บไซต์ผ่านโดเมนของคุณจะพบหน้าสำหรับติดตั้ง หากต้องการเข้าสู่ระบบหลังบ้านให้เข้าไปที่ path `/wp-admin`


> TIPs 
> สามารถกำหนดค่าเริ่มต้นของฐานข้อมูลได้จากตัวแปร environment ของ Docker เช่น 
 ```bash
 docker run -d -p 80:80 --name wordpress-container -e WORDPRESS_DB_HOST=localhost -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=password -e WORDPRESS_DB_NAME=wordpress wordpress
 ```

## สรุป
 ยังมีวิธีติดตั้งอื่นๆอีกเช่นการใช้เครื่องมือติดตั้งสำเร็จรูปจากผู้ให้บริการ Web hosting ต่างๆ หรือแม้แต่การติดตั้งบน Kubernetes ก็ทำได้เช่นกัน