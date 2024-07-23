# Source Control Management

## Source Code Control

Source Code Control หรือ Version Control System (VCS) เป็นระบบที่ใช้ในการจัดการและติดตามการเปลี่ยนแปลงของซอร์สโค้ดในโปรเจคซอฟต์แวร์ ช่วยให้นักพัฒนาสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพและป้องกันปัญหาการทับซ้อนของการเปลี่ยนแปลงต่างๆ

## ประโยชน์ของ Source Code Control

1. **การติดตามการเปลี่ยนแปลง**: ช่วยติดตามการเปลี่ยนแปลงในซอร์สโค้ด ทำให้สามารถดูประวัติการแก้ไขได้ว่าใครเป็นคนแก้ไข เมื่อไร และทำการแก้ไขอะไร
2. **การทำงานร่วมกัน**: นักพัฒนาหลายคนสามารถทำงานร่วมกันบนโปรเจคเดียวกันได้อย่างมีประสิทธิภาพ โดยไม่ต้องกังวลเกี่ยวกับการทับซ้อนของการแก้ไข
3. **การย้อนกลับ**: สามารถย้อนกลับไปยังสถานะก่อนหน้าของโค้ดได้ง่ายในกรณีที่เกิดข้อผิดพลาด
4. **การจัดการเวอร์ชัน**: ช่วยจัดการเวอร์ชันต่างๆ ของซอฟต์แวร์ ทำให้สามารถแยกสายการพัฒนา (branch) ออกมาเพื่อทดลองฟีเจอร์ใหม่ๆ หรือแก้ไขบั๊กได้
5. **การสำรองข้อมูล**: ช่วยสำรองข้อมูลซอร์สโค้ดในกรณีที่เกิดความผิดพลาดหรือสูญหาย

## ระบบ Source Code Control ยอดนิยม

### 1. Git
Git เป็นระบบควบคุมเวอร์ชันแบบกระจาย (distributed version control system) ที่ได้รับความนิยมมากที่สุดในปัจจุบัน พัฒนาโดย Linus Torvalds ผู้สร้าง Linux มีคุณสมบัติที่รวดเร็ว ยืดหยุ่น และมีประสิทธิภาพ

#### การเริ่มต้นใช้งาน Git
- ติดตั้ง Git จาก [เว็บไซต์ทางการ](https://git-scm.com/)
- การตั้งค่า Git เบื้องต้น:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

- การสร้างและใช้งาน Git repository:

```bash
mkdir myproject
cd myproject
git init
```

- การเพิ่มไฟล์และคอมมิตการเปลี่ยนแปลง:

```bash
git add .
git commit -m "Initial commit"
```

- การสร้าง branch และรวมการเปลี่ยนแปลง (merge):

```bash
git branch new-feature
git checkout new-feature
# ทำการแก้ไขโค้ด
git add .
git commit -m "Add new feature"
git checkout main
git merge new-feature
```

### 2. Subversion (SVN)
Subversion เป็นระบบควบคุมเวอร์ชันแบบเซ็นทรัลไลซ์ (centralized version control system) ที่เคยได้รับความนิยมมาก่อนการมาของ Git มีการทำงานแบบเซิร์ฟเวอร์-ไคลเอนต์

#### การเริ่มต้นใช้งาน Subversion
- ติดตั้ง Subversion จาก [เว็บไซต์ทางการ](https://subversion.apache.org/)
- การสร้างและใช้งาน SVN repository:

```bash
svnadmin create /path/to/repository
svn checkout file:///path/to/repository myproject
```

- การเพิ่มไฟล์และคอมมิตการเปลี่ยนแปลง:

```bash
cd myproject
svn add myfile
svn commit -m "Initial commit"
```

### 3. Mercurial
Mercurial เป็นระบบควบคุมเวอร์ชันแบบกระจายที่มีความคล้ายคลึงกับ Git แต่ง่ายต่อการใช้งานมากกว่าในบางกรณี

#### การเริ่มต้นใช้งาน Mercurial
- ติดตั้ง Mercurial จาก [เว็บไซต์ทางการ](https://www.mercurial-scm.org/)
- การสร้างและใช้งาน Mercurial repository:

```bash
mkdir myproject
cd myproject
hg init
```

- การเพิ่มไฟล์และคอมมิตการเปลี่ยนแปลง:

```bash
hg add myfile
hg commit -m "Initial commit"
```

## แพลตฟอร์มการโฮสต์ซอร์สโค้ดยอดนิยม

### 1. GitHub
GitHub เป็นแพลตฟอร์มโฮสต์ซอร์สโค้ดที่ใช้ Git เป็นหลัก มีฟีเจอร์ต่างๆ เช่น การรีวิวโค้ด, การติดตามบั๊ก, และการจัดการโปรเจค

### 2. GitLab
GitLab เป็นแพลตฟอร์มที่มีความสามารถคล้ายกับ GitHub แต่มีฟีเจอร์เพิ่มเติมในการจัดการ CI/CD (Continuous Integration/Continuous Deployment) และสามารถติดตั้งใช้งานภายในองค์กรได้

### 3. Bitbucket
Bitbucket เป็นแพลตฟอร์มโฮสต์ซอร์สโค้ดที่รองรับทั้ง Git และ Mercurial มีฟีเจอร์ต่างๆ เช่น การรีวิวโค้ด และการจัดการโปรเจค

Source Code Control เป็นเครื่องมือสำคัญในการพัฒนาซอฟต์แวร์ที่ช่วยในการจัดการซอร์สโค้ดและการทำงานร่วมกันของนักพัฒนา ทำให้การพัฒนาโปรเจคมีประสิทธิภาพและเป็นระบบมากยิ่งขึ้น