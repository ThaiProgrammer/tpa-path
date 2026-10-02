import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicSkillsDir = path.join(rootDir, 'public', 'skills');

const meta = [
  {
    id: "it-career-starter",
    title: "IT Career Starter & Junior Developer Mentor",
    badge: "🧭 Career Starter",
    category: "Career & Fundamentals",
    description: "คู่มือคำแนะนำสำหรับผู้เริ่มต้นหรือย้ายสายงานสู่ IT: วิเคราะห์ Learning Roadmap, Logic & Problem Solving, พื้นฐาน Git, การทำ Portfolio และการเตรียมตัวสัมภาษณ์งาน",
    pathLink: "/paths/getting-started/",
    tags: ["Career", "Junior Dev", "Roadmap", "Fundamentals", "Git", "Interview Prep"]
  },
  {
    id: "it-role-navigator",
    title: "IT Roles & Career Progression Navigator",
    badge: "💼 Career Roles",
    category: "Career & Fundamentals",
    description: "วิเคราะห์ตำแหน่งและหน้าที่ในสายงาน IT ครอบคลุม 7 สายหลัก (Management, Dev, QA, Design, Analyst, Data, Infra) พร้อมเกณฑ์ประเมินระดับ Junior, Middle, Senior, Staff",
    pathLink: "/paths/career/",
    tags: ["Career Paths", "Roles", "Seniority", "Salary", "Job Description"]
  },
  {
    id: "software-engineering-practices",
    title: "Software Engineering Practices Specialist",
    badge: "☑️ Engineering Practices",
    category: "Engineering & Practices",
    description: "ผู้เชี่ยวชาญด้าน Best Practices วิศวกรรมซอฟต์แวร์: Test-Driven Development (TDD), Domain-Driven Design (DDD), Clean Architecture, Refactoring, CI/CD และ Code Review",
    pathLink: "/paths/practices/",
    tags: ["TDD", "DDD", "Refactoring", "Clean Code", "CI/CD", "Code Review"]
  },
  {
    id: "software-architecture-designer",
    title: "Software Architecture Designer",
    badge: "🏗️ Architecture",
    category: "Engineering & Practices",
    description: "ผู้ออกแบบสถาปัตยกรรมระบบซอฟต์แวร์: Clean Architecture, Hexagonal / Ports & Adapters, Microservices, Event-Driven Architecture, CQRS และ C4 Modeling",
    pathLink: "/paths/software-architecture/",
    tags: ["Architecture", "Clean Architecture", "Microservices", "CQRS", "Event-Driven", "C4"]
  },
  {
    id: "ai-application-developer",
    title: "AI Application & LLM Engineer",
    badge: "🤖 AI Engineering",
    category: "AI & Data",
    description: "ผู้เชี่ยวชาญการสร้าง AI Application ด้วย LLMs: RAG (Retrieval-Augmented Generation), Vector Database, Embeddings, Prompt Engineering, Agentic Workflows และ Evaluation",
    pathLink: "/paths/ai-application-development/",
    tags: ["AI", "RAG", "Vector Search", "LLMs", "Prompt Engineering", "Agents"]
  },
  {
    id: "modern-web-developer",
    title: "Modern Fullstack Web Developer",
    badge: "💡 Web Development",
    category: "Web & Mobile",
    description: "แนวทางการพัฒนา Modern Web ครบวงจร: Frontend (HTML5, Modern CSS, Responsive), Web Accessibility (WCAG 2.2 AA), Backend REST APIs, Web Security (OWASP Top 10) และ Core Web Vitals",
    pathLink: "/paths/web-guideline/",
    tags: ["Web Dev", "Frontend", "Backend", "Security", "WCAG 2.2", "Performance", "REST APIs"]
  },
  {
    id: "wcag-accessibility-specialist",
    title: "WCAG 2.2 Web Accessibility Specialist",
    badge: "♿️ WCAG 2.2",
    category: "Web & Mobile",
    description: "คู่มือและมาตรฐานการพัฒนาเว็บและแอปพลิเคชันตาม WCAG 2.2 (Level AA & AAA): POUR Principles, 9 เกณฑ์ใหม่ของ WCAG 2.2, การทำ Focus State, Touch Target (24x24px), Accessible Auth, ARIA และ Automated a11y Testing",
    pathLink: "/paths/web-guideline/frontend/accessibility-wcag",
    tags: ["Accessibility", "a11y", "WCAG 2.2", "ARIA", "Color Contrast", "Inclusive Design", "axe-core"]
  },
  {
    id: "mobile-app-developer",
    title: "Mobile Application Developer (Flutter & React Native)",
    badge: "📱 Mobile Development",
    category: "Web & Mobile",
    description: "คู่มือพัฒนา Mobile Application ครอบคลุม Flutter (Dart 3, Riverpod/Bloc), React Native (Expo), iOS (Swift/SwiftUI) และ Android (Kotlin/Jetpack Compose)",
    pathLink: "/paths/mobile-development/",
    tags: ["Mobile", "Flutter", "React Native", "iOS", "Android", "Offline First"]
  },
  {
    id: "typescript-expert",
    title: "Advanced TypeScript Architect",
    badge: "📘 TypeScript",
    category: "Languages & Frameworks",
    description: "การเขียน TypeScript คุณภาพสูงระดับโปรดักชัน: Type-Safe Programming, Generics, Discriminated Unions, Strict tsconfig, Zod Schema Validation และ Utility Types",
    pathLink: "/paths/typescript/",
    tags: ["TypeScript", "Type Safety", "Generics", "Zod", "Utility Types"]
  },
  {
    id: "aspnet-core-architect",
    title: "ASP.NET Core & Modern C# Architect",
    badge: "🟣 .NET & C#",
    category: "Languages & Frameworks",
    description: "สถาปัตยกรรมการพัฒนา Web API และ Enterprise Services ด้วย C# 12+ และ .NET 8/9, Entity Framework Core, Dependency Injection, Minimal APIs และ Clean Architecture",
    pathLink: "/paths/aspnet-core/",
    tags: [".NET", "C#", "ASP.NET Core", "Web API", "EF Core", "Clean Architecture"]
  },
  {
    id: "devops-sre-engineer",
    title: "DevOps, SRE & Platform Engineer",
    badge: "⚙️ DevOps & SRE",
    category: "Cloud & DevOps",
    description: "ผู้เชี่ยวชาญด้าน DevOps & SRE: Docker Containerization, Kubernetes Orchestration, CI/CD Pipelines (GitHub Actions/GitLab), Terraform IaC และ Observability",
    pathLink: "/paths/devops/",
    tags: ["DevOps", "Docker", "Kubernetes", "CI/CD", "Terraform", "Observability"]
  },
  {
    id: "java-spring-master",
    title: "Modern Java & Spring Boot Specialist",
    badge: "☕️ Java & Spring",
    category: "Languages & Frameworks",
    description: "การพัฒนา Enterprise Application ด้วย Java 21+ (Virtual Threads, Records, Pattern Matching), Spring Boot 3+, Spring Data JPA, Microservices และ Unit Testing",
    pathLink: "/paths/java/",
    tags: ["Java", "Spring Boot", "Java 21", "JPA", "Microservices", "JUnit 5"]
  },
  {
    id: "cloud-solutions-architect",
    title: "Cloud Solutions Architect",
    badge: "☁️ Cloud Computing",
    category: "Cloud & DevOps",
    description: "การออกแบบระบบบน Cloud Computing (AWS/Azure/GCP): High Availability, Scalability, Serverless, Disaster Recovery, Well-Architected Framework และ FinOps Cost Optimization",
    pathLink: "/paths/cloud-computing/",
    tags: ["Cloud", "AWS", "GCP", "Well-Architected", "High Availability", "FinOps"]
  },
  {
    id: "azure-cloud-specialist",
    title: "Microsoft Azure Cloud Specialist",
    badge: "🔷 Azure Cloud",
    category: "Cloud & DevOps",
    description: "สถาปัตยกรรมและการพัฒนาบน Microsoft Azure: Azure App Services, Azure Functions, Container Apps, Entra ID (Azure AD), Cosmos DB และ Azure DevOps",
    pathLink: "/paths/azure/",
    tags: ["Azure", "Cloud", "Entra ID", "Serverless", "Cosmos DB", "Azure DevOps"]
  },
  {
    id: "microsoft-security-defender",
    title: "Microsoft Cybersecurity & Zero Trust Specialist",
    badge: "🛡️ Cybersecurity",
    category: "Security & Governance",
    description: "ความมั่นคงปลอดภัยไซเบอร์บน Microsoft Ecosystem: Zero Trust Architecture, Microsoft Defender XDR, Sentinel SIEM/SOAR, Entra ID Security และ Cloud Compliance",
    pathLink: "/paths/MicrosoftSecurity/",
    tags: ["Security", "Zero Trust", "Microsoft Defender", "Sentinel", "Compliance"]
  },
  {
    id: "git-version-control-expert",
    title: "Git & Version Control Workflow Expert",
    badge: "🐙 Source Control",
    category: "Engineering & Practices",
    description: "กลยุทธ์การบริหาร Source Code: GitFlow vs Trunk-based Development, Conventional Commits, Pull Request Review Standards, Interactive Rebase และ Conflict Resolution",
    pathLink: "/paths/sourcecodecontrol/",
    tags: ["Git", "Branching Strategy", "Conventional Commits", "Code Review", "CI"]
  },
  {
    id: "wordpress-developer",
    title: "WordPress & WooCommerce Developer",
    badge: "🌐 WordPress",
    category: "Web & Mobile",
    description: "การพัฒนา WordPress ระดับมืออาชีพ: Custom Theme (Block Themes / FSE), Plugin Architecture, Hooks/Filters, REST API, Headless WordPress และ Performance Optimization",
    pathLink: "/paths/wordpress/",
    tags: ["WordPress", "PHP", "Themes", "Plugins", "Headless WP", "WooCommerce"]
  },
  {
    id: "tech-community-speaker",
    title: "Tech Community Speaker & Knowledge Sharing Coach",
    badge: "🎤 Tech Meetup",
    category: "Community & Sharing",
    description: "คู่มือการเตรียมตัวเป็นวิทยากรและแบ่งปันความรู้ใน Tech Meetup: การเขียน Call for Papers (CFP), การจัดโครงสร้างสไลด์, เทคนิค Live Coding/Demo และการสื่อสารกับ Community",
    pathLink: "/paths/meetup/",
    tags: ["Public Speaking", "Meetup", "CFP", "Slides", "Live Demo", "Community"]
  }
];

const result = {};

for (const item of meta) {
  const filePath = path.join(publicSkillsDir, item.id, 'SKILL.md');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8').trim();
    result[item.id] = {
      ...item,
      content
    };
    console.log(`✓ Loaded skill ${item.id} (${content.length} chars)`);
  } else {
    console.error(`✕ Missing skill file: ${filePath}`);
  }
}

const targetJson = path.join(rootDir, 'components', 'skillsData.json');
fs.writeFileSync(targetJson, JSON.stringify(result, null, 2), 'utf-8');
console.log(`Successfully generated ${targetJson}`);
