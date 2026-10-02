---
outline: deep
title: 'Web Accessibility & WCAG 2.2 Guideline'
description: 'คู่มือการพัฒนาเว็บไซต์ให้ทุกคนเข้าถึงได้ตามมาตรฐานสากล W3C WCAG 2.2 ระดับ AA พร้อมเจาะลึก 9 เกณฑ์ใหม่และแนวทางปฏิบัติจริง'
---

# Web Accessibility (a11y) & WCAG 2.2 Guideline

**Web Accessibility (การเข้าถึงเว็บได้โดยทุกคน หรือ a11y)** คือหลักการออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชัน เพื่อให้ทุกคนสามารถใช้งาน รับรู้ เข้าใจ และมีปฏิสัมพันธ์กับระบบได้อย่างเท่าเทียม รวมถึงผู้มีความบกพร่องทางร่างกาย สายตา การได้ยิน การเคลื่อนไหว หรือการประมวลผลทางปัญญา (Cognitive) รวมถึงผู้สูงอายุและผู้ใช้งานในสภาพแวดล้อมที่จำกัด

มาตรฐานสากลที่ใช้อ้างอิงทั่วโลกคือ **WCAG (Web Content Accessibility Guidelines)** จัดทำโดย W3C (World Wide Web Consortium) โดยเวอร์ชันล่าสุดคือ **WCAG 2.2** (ประกาศใช้เป็น Recommendation อย่างเป็นทางการ)

<SkillCard id="wcag-accessibility-specialist" />

---

## 🏛️ เสาหลัก 4 ประการของ Accessibility (POUR Principles)

1. **Perceivable (รับรู้ได้)**: ข้อมูลและ UI Components ต้องถูกนำเสนอในรูปแบบที่ประสาทสัมผัสของผู้ใช้สามารถรับรู้ได้
   - มีข้อความทดแทนรูปภาพ (`alt` attribute บน `<img>`)
   - มีคำบรรยาย (Captions) และ Audio Description สำหรับวิดีโอ
   - มีอัตราส่วนความต่างของสี (Color Contrast) ไม่น้อยกว่า **4.5:1** สำหรับข้อความทั่วไป และ **3:1** สำหรับข้อความขนาดใหญ่และ UI Controls

2. **Operable (ใช้งานได้)**: ส่วนควบคุมและ Navigation ต้องใช้งานได้ผ่านทุกอุปกรณ์ป้อนข้อมูล
   - รองรับการใช้งานผ่าน **Keyboard 100%** โดยไม่มี Keyboard Trap
   - ผู้ใช้มีเวลาเพียงพอในการอ่านและทำรายการ
   - ไม่มีเนื้อหาที่กะพริบถี่เกิน 3 ครั้งต่อวินาที (ป้องกันอาการชักจากแสงกระตุ้น)

3. **Understandable (เข้าใจได้)**: ข้อมูลและการทำงานของหน้าเว็บต้องเข้าใจง่ายและคาดเดาได้
   - ระบุภาษาของหน้าเว็บชัดเจน เช่น `<html lang="th">`
   - การทำงานสม่ำเสมอ คาดเดาตำแหน่งเมนูได้
   - มีคำแนะนำและข้อความแจ้งข้อผิดพลาด (Form Error Messages) ที่ชัดเจนและบอกวิธีแก้ไข

4. **Robust (แข็งแกร่ง/เข้ากันได้)**: โค้ดต้องถูกต้องตามมาตรฐานเพื่อให้อุปกรณ์และเทคโนโลยีช่วยเหลือ (Assistive Technologies เช่น Screen Readers) ตีความได้อย่างถูกต้อง
   - ใช้ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<button>`)
   - กำหนด `name`, `role`, และ `value` ให้ถูกต้องหากใช้ Custom Components

---

## ⚡️ เจาะลึก 9 เกณฑ์ใหม่ใน WCAG 2.2

ใน WCAG 2.2 มีการเพิ่มเกณฑ์ความสำเร็จใหม่ (Success Criteria) 9 ข้อ โดยเน้นเรื่อง **ผู้ใช้งานอุปกรณ์พกพา (Mobile & Pointer Users)**, **ผู้ใช้งานคีย์บอร์ด (Keyboard Users)**, และ **ผู้มีความบกพร่องทางสติปัญญา/ความจำ (Cognitive Disabilities)**:

### 1. 🔍 2.4.11 Focus Not Obscured (Minimum) (ระดับ AA)
เมื่อปุ่มหรือช่องกรอกข้อมูลได้รับโฟกัสจากคีย์บอร์ด **ต้องไม่ถูกบดบังทั้งหมด** โดยเนื้อหาที่เว็บสร้างขึ้น (เช่น Sticky Header, Cookie Banner, หรือ Floating Chat Widget)

```css
/* กำหนดระยะห่างให้เบราว์เซอร์เลื่อนองค์ประกอบที่โฟกัสหลบ Header ที่ติดตรึงอยู่ */
html {
  scroll-padding-top: 80px; /* ความสูงของ Sticky Navigation Bar */
  scroll-padding-bottom: 40px;
}
```

### 2. 🔍 2.4.12 Focus Not Obscured (Enhanced) (ระดับ AAA)
องค์ประกอบที่ได้รับโฟกัสต้อง **ไม่ถูกบดบังแม้แต่ส่วนหนึ่งส่วนใด** (Zero Obscuring)

### 3. ✨ 2.4.13 Focus Appearance (ระดับ AAA)
เส้น Focus Indicator ต้องมองเห็นได้อย่างชัดเจน:
- มีค่า Contrast ระหว่างสถานะ Focus และ Unfocused อย่างน้อย **3:1**
- พื้นที่เส้น Focus ต้องมีความหนาอย่างน้อย 2 CSS Pixels ตลอดแนวขอบ

```css
/* ห้ามเขียน outline: none เด็ดขาดโดยไม่มีตัวแทน */
:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 4. 👆 2.5.7 Dragging Movements (ระดับ AA)
ฟังก์ชันที่ใช้การลาก (Dragging) เช่น Drag & Drop อัปโหลดไฟล์, การจัดเรียงการ์ด Kanban, หรือ Slider **ต้องมีทางเลือกแบบแตะ/คลิกครั้งเดียว (Single-Pointer)** ควบคู่เสมอ
- ตัวอย่าง: ข้างๆ จุดลาก ให้มีปุ่ม `[เลื่อนขึ้น]` และ `[เลื่อนลง]` เพื่อให้ผู้ใช้ที่ไม่สามารถลากเมาส์ได้สามารถคลิกปุ่มแทนได้

### 5. 🎯 2.5.8 Target Size (Minimum) (ระดับ AA)
ขนาดของเป้าหมายการคลิก/แตะ (Touch Target) ต้องมีขนาดอย่างน้อย **24x24 CSS Pixels** หรือมีระยะห่างรอบตัวชดเชยที่เพียงพอ (ยกเว้นลิงก์ที่อยู่ในประโยคข้อความทั่วไป)

```css
/* ขยายขนาดปุ่มไอคอนให้ไม่เล็กกว่า 24x24px และมีพื้นที่สัมผัสที่ดี */
.icon-btn {
  min-width: 24px;
  min-height: 24px;
  padding: 8px; /* พื้นที่รวมจะกลายเป็นอย่างน้อย 40x40px */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### 6. ❓ 3.2.6 Consistent Help (ระดับ A)
หากหน้าเว็บมีช่องทางติดต่อช่วยเหลือ (เช่น เบอร์โทร, อีเมล, ลิงก์ FAQ, Live Chat) ในหลายๆ หน้า ช่องทางช่วยเหลือเหล่านั้น **ต้องวางอยู่ในลำดับสัมพัทธ์เดิมเสมอ** ในโครงสร้าง DOM ของแต่ละหน้า

### 7. 📝 3.3.7 Redundant Entry (ระดับ A)
ในกระบวนการทำงานที่มีหลายขั้นตอน (Multi-step Form เช่น ระบบสั่งซื้อสินค้า) ข้อมูลที่ผู้ใช้เคยกรอกไปแล้วในขั้นตอนก่อนหน้า **ต้องกรอกให้อัตโนมัติ (Auto-populate)** หรือมีตัวเลือกให้คลิกเลือกได้ โดยไม่ต้องให้ผู้ใช้พิมพ์ซ้ำ
- ตัวอย่าง: ช่องทำเครื่องหมาย *"ที่อยู่ออกใบเสร็จเหมือนกับที่อยู่จัดส่ง"*

### 8. 🔐 3.3.8 Accessible Authentication (Minimum) (ระดับ AA)
การเข้าสู่ระบบ **ต้องไม่บังคับให้ผู้ใช้ผ่าน Cognitive Function Test** (เช่น การจำรหัสผ่านที่ซับซ้อนโดยไม่อนุญาตให้วาง, การแก้โจทย์เลข, หรือการถอดรหัสภาพปริศนา CAPTCHA) เว้นแต่จะมีทางเลือกช่วยเหลือ:
- **ห้ามบล็อกการ Paste**: ต้องอนุญาตให้วางรหัสผ่านจาก Password Manager ได้ (ห้ามใส่ `onpaste="return false"`)
- รองรับ **WebAuthn / Passkeys / Biometrics** (สแกนลายนิ้วมือหรือใบหน้า)
- รองรับ **Magic Link** ทางอีเมล
- ใช้ระบบยืนยันตัวตนที่ไม่ต้องใช้ความคิด เช่น Cloudflare Turnstile หรือ reCAPTCHA v3

### 9. 🔐 3.3.9 Accessible Authentication (Enhanced) (ระดับ AAA)
ไม่มีบททดสอบทางความคิดใดๆ ทั้งสิ้น รวมถึงการจดจำรูปภาพหรือวัตถุ

*(หมายเหตุ: ใน WCAG 2.2 ได้ทำการยกเลิกเกณฑ์ 4.1.1 Parsing ออกไป เนื่องจากเบราว์เซอร์และเครื่องมือสมัยใหม่จัดการ HTML parsing ได้สมบูรณ์แล้ว)*

---

## 🛠️ เครื่องมือทดสอบความถูกต้องของ Accessibility

1. **axe DevTools (Browser Extension)**: เครื่องมือยอดนิยมสำหรับสแกนหาข้อผิดพลาด a11y โดยตรงในหน้าเว็บ
2. **Playwright / Jest Integration**:
   ```typescript
   import { test, expect } from '@playwright/test';
   import AxeBuilder from '@axe-core/playwright';

   test('หน้าเว็บต้องผ่านการตรวจ WCAG 2.2 AA', async ({ page }) => {
     await page.goto('https://example.com');
     const scanResults = await new AxeBuilder({ page })
       .withTags(['wcag2a', 'wcag2aa', 'wcag22aa'])
       .analyze();

     expect(scanResults.violations).toEqual([]);
   });
   ```
3. **Screen Readers ประจำระบบปฏิบัติการ**:
   - **VoiceOver**: Built-in บน macOS (กด `Cmd + F5`) และ iOS
   - **NVDA / JAWS**: บนระบบปฏิบัติการ Windows
   - **TalkBack**: บนระบบปฏิบัติการ Android
