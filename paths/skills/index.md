---
outline: [2, 3]
title: '⚡️ AI Agent Skills Hub'
description: 'ศูนย์รวม SKILLs สำหรับ AI Coding Assistants (Claude Code, Antigravity, Cursor, Copilot) ครบทุกสายงานความรู้ใน TPA Roadmap'
---

# ⚡️ AI Agent Skills Hub (ศูนย์รวม SKILLs สำหรับ AI)

ยินดีต้อนรับสู่ **TPA AI Skills Hub** แหล่งรวบรวม **Agent Skills (SKILL.md)** ตามมาตรฐานสากล ที่ออกแบบมาเพื่อยกระดับ AI Coding Assistants ของคุณ (เช่น **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, **GitHub Copilot**, **ChatGPT**) ให้มีความรู้ ความเชี่ยวชาญ และ Best Practices เฉพาะด้านตามแนวทางของสมาคมโปรแกรมเมอร์ไทย

ทุกหัวข้อความรู้ในโปรเจกต์นี้มี Skill ที่สามารถ **คัดลอก (Copy)** หรือ **ดาวน์โหลด (Download)** นำไปติดตั้งในเครื่องของคุณได้ทันที!

---

## 🧭 วิธีนำ SKILL ไปติดตั้งใน AI Tool แต่ละตัว

::: details 🤖 Google Antigravity / Agentic IDE
สร้างโฟลเดอร์และบันทึกไฟล์ไว้ที่:
```bash
.agents/skills/<skill-name>/SKILL.md
```
หรือหากต้องการใช้ทุกโปรเจกต์ (Global):
```bash
~/.gemini/config/skills/<skill-name>/SKILL.md
```
:::

::: details 🟣 Claude Code
สร้างโฟลเดอร์และบันทึกไฟล์ไว้ที่:
```bash
.claude/skills/<skill-name>/SKILL.md
```
หรือหากต้องการใช้ทุกโปรเจกต์ (Global):
```bash
~/.claude/skills/<skill-name>/SKILL.md
```
:::

::: details ⚡️ Cursor & Windsurf
1. คัดลอกเนื้อหาทั้งหมดใน SKILL
2. นำไปวางในไฟล์ `.cursorrules` (สำหรับ Cursor) หรือ `.windsurfrules` (สำหรับ Windsurf) ในรูทของโปรเจกต์
3. หรือวางในส่วน **Project Rules** ในหน้า Settings
:::

::: details 🐙 GitHub Copilot & ChatGPT
- **GitHub Copilot**: วางเนื้อหาไว้ในไฟล์ `.github/copilot-instructions.md` ใน Repository ของคุณ
- **ChatGPT / Claude Projects**: วางเนื้อหาในช่อง **Custom Instructions** หรือ **Project Knowledge / System Prompt**
:::

---

## 📦 คลัง SKILLs ทั้งหมด (ค้นหาและดาวน์โหลดได้ทันที)

<SkillsCatalog />
