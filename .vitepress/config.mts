import { defineConfig, type DefaultTheme } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🚀 เส้นทางโปรแกรมเมอร์",
  description: "Programmer's Roadmap & Career Paths · เส้นทางการเรียนรู้และการเติบโตสำหรับโปรแกรมเมอร์",
  themeConfig: {
    // logo: "https://res.cloudinary.com/dqizuot8q/image/upload/v1719638409/logo_c9ju7d.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "จุดเริ่มต้น", link: "/" },
      { text: "ร่วมพัฒนา", link: "/contrib/contributing.md" },
      { text: "Tech Calendar", link: "https://th.techcal.dev/" },
    ],

    sidebar: {
      "/paths/aspnet-core": {
        base: "/paths/aspnet-core/",
        items: sidebarASPNetCore(),
      },
      "/paths/devops": { base: "/paths/devops/", items: sidebarDevOps() },
      "/paths/typescript": { base: "/paths/typescript/", items: sidebarTypeScript() },
      "/paths/java": { base: "/paths/java/", items: sidebarJava() },
      "/paths/azure": { base: "/paths/azure/", items: sidebarAzure() },
      "/paths/cloud-computing": {
        base: "/paths/cloud-computing/",
        items: sidebarCloudComputing(),
      },
      "/paths/web-guideline": {
        base: "/paths/web-guideline/",
        items: sidebarWebGuideline(),
      },
      "/paths/sourcecodecontrol": {
        base: "/paths/sourcecodecontrol/",
        items: sidebarSourceCodeControl(),
      },
      "/paths/ai-application-development": {
        base: "/paths/ai-application-development/",
        items: sidebarAIApplicationDevelopment(),
      },
      "/paths/mobile-development": {
        base: "/paths/mobile-development/",
        items: sidebarMobileApplicationDevelopment(),
      },
      "/paths/practices": {
        base: "/paths/practices/",
        items: sidebarPractices()
      },
      "/paths/software-architecture": {
        base: "/paths/software-architecture/",
        items: sidebarSoftwareArchitecture()
      },
      "/paths/career": {
        base: "/paths/career/",
        items: sidebarCareer()
      },
      "/paths/meetup": {
        base: "/paths/meetup/",
        items: sidebarTechMeetup()
      },
      "/paths/wordpress": {
        base: "/paths/wordpress/",
        items: sidebarWordPress()
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/ThaiProgrammer/tpa-path" },
      { icon: "facebook", link: "https://www.facebook.com/ThaiProgrammerSociety" },
      { icon: "youtube", link: "https://www.youtube.com/@ThaiProgrammer" }
    ],
    search: {
      provider: "local",
    },
    footer: {
      message: 'สร้างด้วย <a href="https://vitepress.dev" target="blank">VitePress</a>  ·  ให้บริการโดย<a href="https://thaiprogrammer.org?ref=tpa-roadmap" target="blank">สมาคมโปรแกรมเมอร์ไทย</a>  ·  ร่วมพัฒนาโดยคนไทย 🇹🇭',
      copyright: '· ไม่สงวนลิขสิทธิ์ ·'
    }
  },
  lang: 'th-TH',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/assets/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-9C4TR30ETP' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9C4TR30ETP');`
    ]
  ]
});

function sidebarASPNetCore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ASP.NET Core",
      items: [
        {
          text: "2024 Bonus Track",
          collapsed: true,
          base: "/paths/aspnet-core/2024-bonus-track/",
          items: [
            { text: "C# Fundamentals", link: "fundamentals" },
            { text: "Test Driven Development (TDD)", link: "tdd" },
            { text: "เริ่มต้นอีกครั้งกับ .NET 6 Web API", link: "webapi" },
            { text: "Clean Architecture", link: "clean-architecture" },
            { text: "Beginner Playlist", link: "playlist" },
            { text: "Awesome .NET", link: "awesome" },
          ],
        },
        {
          text: "เรื่องพื้นฐานที่ควรรู้เกี่ยวกับ C#",
          collapsed: true,
          base: "/paths/aspnet-core/basics-of-csharp/",
          items: [
            { text: "ภาษา C# คืออะไร", link: "100-csharp" },
            { text: "Dotnet คืออะไร", link: "101-dotnet" },
            { text: "Dotnet CLI คืออะไร", link: "102-dotnet-cli" },
          ],
        },
        {
          text: "ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น",
          collapsed: true,
          base: "/paths/aspnet-core/general-development-skills/",
          items: [
            {
              text: "ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น",
              link: "000-index",
            },
            { text: "Git", link: "100-git" },
            {
              text: "Azure Devops Services",
              link: "101-azure-devops-services",
            },
            { text: "Repo Hosting Services", link: "102-vcs-hosting-services" },
            { text: "HTTPS", link: "103-http-https" },
            {
              text: "Data Structures",
              link: "104-datastructures-and-algorithms",
            },
          ],
        },
        {
          text: "Database fundamentals",
          collapsed: true,
          base: "/paths/aspnet-core/database-fundamentals/",
          items: [
            { text: "Database fundamentals", link: "000-index" },
            {
              text: "Database design basics",
              link: "100-database-design-basics",
            },
            { text: "Sql basics", link: "101-sql-basics" },
            { text: "Stored Procedures", link: "102-stored-procedures" },
            { text: "Constraints", link: "103-constraints" },
            { text: "Triggers", link: "104-triggers" },
          ],
        },
      ],
    },
  ];
}
function sidebarDevOps(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "DevOps",
      items: [
        {
          text: "Language",
          collapsed: true,
          base: "/paths/devops/100-language/",
          items: [
            { text: "python", link: "100-python" },
            { text: "ruby", link: "101-ruby" },
            { text: "javascript", link: "102-javascript" },
            { text: "go", link: "103-go" },
            { text: "rust", link: "104-rust" },
          ],
        },
      ],
    },
  ];
}
function sidebarJava(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Java",
      items: [
        {
          text: "Java fundamentals",
          collapsed: true,
          base: "/paths/java/100-java-fundamentals/",
          items: [
            { text: "Basic Syntax", link: "100-basic-syntax" },
            { text: "Data Type Variable", link: "101-data-types-variables" },
            { text: "Conditionals", link: "102-conditionals" },
            { text: "Functions", link: "103-functions" },
            { text: "Datastructures", link: "104-datastructures" },
            { text: "OOP", link: "105-oop" },
            { text: "Files and APIs", link: "106-files-and-apis" },
            { text: "Packages", link: "106-packages" },
            { text: "loops", link: "107-loops" },
            { text: "Exception Handling", link: "108-exception-handling" },
          ],
        },
      ],
    },
  ];
}
function sidebarAzure(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Azure",
      items: [
        {
          text: "Fundamentals",
          collapsed: true,
          base: "/paths/azure/fundamental/",
          items: [
            { text: "Introduction", link: "000-index" },
            { text: "Cloud Concepts", link: "001-cloud-concepts" },
            {
              text: "Azure Account, Support Options, Architecture, Service Guarantees, Manage Services Tools",
              link: "002-architecture-service-guarantees",
            },
            {
              text: "Core Cloud Services (Compute Options, Data Storage Options, Networking Options)",
              link: "003-core-cloud-services",
            },
            {
              text: "Security, Responsibility and Trust in Azure",
              link: "004-security-responsibility-trust",
            },
            {
              text: "Standards Infrastructure, Resources Organization",
              link: "005-standards-infrastructure",
            },
            {
              text: "Predict Costs and Optimize Spending",
              link: "006-predict-optimize-costs",
            },
          ],
        },
        {
          text: "Certifications Path",
          collapsed: true,
          base: "/paths/azure/certification/",
          items: [{ text: "Certifications Path", link: "000-index" }],
        },
      ],
    },
  ];
}
function sidebarCloudComputing(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Cloud Computing",
      items: [
        {
          text: "Fundamentals",
          collapsed: true,
          base: "/paths/cloud-computing/fundamental/",
          items: [{ text: "Fundamental", link: "fundamental" }],
        },
      ],
    },
  ];
}
function sidebarWebGuideline(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Web Development Guideline",
      items: [
        {
          text: "Introduction",
          collapsed: true,
          base: "/paths/web-guideline/intro/",
          items: [
            { text: "ทำเว็บต้องรู้อะไรบ้าง", link: "intro" },
            { text: "ภาษาอังกฤษ", link: "english" },
            { text: "เตรียมเครื่องให้พร้อม", link: "setupgear" },
            { text: "Learning Path", link: "learningpath" },
            { text: "Software Engineer", link: "softwareengineer" },
            { text: "Salary Report", link: "devreport" },
            { text: "พิมพ์สัมผัส", link: "typing" },
            { text: "Soft Skills", link: "softskill" },
          ],
        },
        {
          text: "Front End",
          collapsed: true,
          base: "/paths/web-guideline/frontend/",
          items: [
            { text: "Front End", link: "intro" },
            { text: "HTML", link: "html" },
            { text: "CSS", link: "css" },
            { text: "JavaScript", link: "javascript" },
            { text: "Typescript", link: "typescript" },
            { text: "React", link: "react" },
            { text: "Next.js", link: "nextjs" },
          ],
        },
        {
          text: "Back End",
          collapsed: true,
          base: "/paths/web-guideline/backend/",
          items: [
            { text: "Back End", link: "intro" },
            { text: "Problem Solving", link: "problemsolving" },
            { text: "RESTful Web API", link: "restful" },
            { text: "Node.js", link: "nodejs" },
            { text: "ASP.NET", link: "aspnet" },
            { text: "Typescript", link: "typescript" },
          ],
        },
        {
          text: "Database",
          collapsed: true,
          base: "/paths/web-guideline/database/",
          items: [
            { text: "Fundamental", link: "database" },
            { text: "Microsoft SQL Server", link: "mssql" },
            { text: "Database Design", link: "design" },
            { text: "SQL", link: "sql" },
            { text: "Stored Procedures", link: "storedprocedures" },
            { text: "Constraint", link: "constraint" },
            { text: "Trigger", link: "trigger" },
            { text: "PostgreSQL", link: "postgresql" },
            { text: "MongoDB", link: "mongodb" },
          ],
        },
        {
          text: "Source Code Control",
          collapsed: true,
          base: "/paths/web-guideline/scm/",
          items: [
            { text: "Source Code Control", link: "scm" },
            { text: "Git and GitHub", link: "git" },
          ],
        },
        {
          text: "Deployment",
          collapsed: true,
          base: "/paths/web-guideline/deployment/",
          items: [
            { text: "Deployment", link: "deployment" },
            { text: "FTP/SFTP", link: "ftp" },
            { text: "CI/CD", link: "cicd" },
            { text: "Git", link: "git" },
            { text: "Cloud", link: "cloud" },
            { text: "Container", link: "container" },
            { text: "Static Site", link: "staticsite" },
          ],
        },
        {
          text: "Cloud Computing",
          collapsed: true,
          base: "/paths/web-guideline/cloudcomputing/",
          items: [
            { text: "Cloud Computing", link: "cloudcomputing" },
            { text: "Microsoft Azure", link: "azure" },
          ],
        },
        {
          text: "SSH",
          collapsed: true,
          base: "/paths/web-guideline/ssh/",
          items: [{ text: "SSH", link: "ssh" }],
        },
        {
          text: "Community",
          collapsed: true,
          base: "/paths/web-guideline/community/",
          items: [{ text: "Community", link: "community" }],
        },
      ],
    },
  ];
}
function sidebarSourceCodeControl(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Source Code Control",
      items: [
        {
          text: "Git ขั้นพื้นฐาน",
          collapsed: true,
          base: "/paths/sourcecodecontrol/git-basics/",
          items: [
            {
              text: "Version Control คืออะไร",
              link: "what-is-version-control",
            },
            { text: "Git คืออะไร", link: "what-is-git" },
            { text: "Git common terms", link: "git-common-terms" },
            {
              text: "การ Setup Git และ GitHub ให้พร้อมสำหรับการทำงานร่วมกับทีม",
              link: "setup-git-and-github",
            },
            { text: "คำสั่ง Git ที่จำเป็น", link: "git-essential-commands" },
            { text: "Conventional Commits", link: "conventional-commits" },
            {
              text: "เริ่มต้นสร้าง Pull Request แรกกัน!",
              link: "create-first-pull-request",
            },
          ],
        },
      ],
    },
  ];
}
function sidebarAIApplicationDevelopment(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "AI Application Developer",
      items: [
        {
          text: "Introduction",
          collapsed: true,
          base: "/paths/ai-application-development/introduction/",
          items: [
            { text: "Introduction", link: "introduction" },
            { text: "Tools and Services", link: "tools-and-services" },
          ],
        },
      ],
    },
  ];
}
function sidebarMobileApplicationDevelopment(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Mobile Application Development",
      items: [
        {
          text: "Frameworks",
          collapsed: true,
          base: "/paths/mobile-application-development/",
          items: [
            {
              text: "Flutter Development",
              collapsed: true,
              base: "/paths/mobile-development/flutter-fundamentals/",
              items: [{ text: "Flutter คืออะไร", link: "what-is-flutter" }],
            },
          ],
        },
      ],
    },
  ];
}
function sidebarPractices(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Software Development Practices",
      items: [
        {
          text: "Design Practices",
          collapsed: true,
          base: "/paths/practices/design/",
          items: [
            { text: "Design Patterns", link: "design-patterns" }
          ]
        },
      ]
    }
  ]
}
function sidebarSoftwareArchitecture(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Software Architecture",
      items: [
        {
          text: "Introduction",
          collapsed: true,
          base: "/paths/software-architecture/introduction/",
          items: [
            { text: "What is software architecture?", link: "software-architecture-intro" },
            { text: "Styles & Patterns", link: "styles-n-patterns" },
          ]
        }
      ]
    }
  ]
}
function sidebarTypeScript(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "TypeScript",
      items: [
        {
          text: "Types ที่ใช้งานเป็นประจำ",
          collapsed: true,
          base: "/paths/typescript/everyday-types/",
          items: [
            { text: "Type คือข้อมูลชนิดหนึ่ง", link: "type-is-data" },
            { text: "การจัดการกับ Object", link: "object-manipulation" },
            { text: "Type Assertions", link: "runtime-type" },
            { text: "จัดการ Try-Catch Error", link: "catch-error" },
            { text: "จัดการ Runtime Type", link: "runtime-type" },
          ],
        },
        {
          text: "คู่มือ TypeScript",
          collapsed: true,
          base: "/paths/typescript/handbook/",
          items: [
            { text: "Generics", link: "generics" },
            { text: "Utility Types", link: "utility-types" },
            { text: "conditional types (แบบมีเงื่อนไข)", link: "conditional-types" },
            { text: "Function Overload", link: "function-overload" },
            { text: "Enum", link: "enum" },
            { text: "Keyof", link: "keyof" },
            { text: "Narrowing Type", link: "narrowing-type" },
            { text: "Mapped Types", link: "mapped-types" },
            { text: "การปรับแต่ง Type", link: "type-manipulation" },
          ]
        },
        {
          text: "Cookbook",
          collapsed: true,
          base: "/paths/typescript/cookbook/",
          items: [
            { text: "สร้าง enum ใช้เอง แบบที่ Key กับ Value เหมือกัน", link: "create-own-enum-string" },
            { text: "เลือกบาง Property จาก Record", link: "filter-some-property-of-record" },
            { text: "สร้าง Builder Pattern แบบ Type-Safe ", link: "type-safe-builder-pattern" },
            { text: "สร้าง union type from array", link: "create-union-type-from-array" },
            { text: "เพิ่ม Prefix ในแต่ละ Property Key ใน Object", link: "append-prefix-object-property-key" },
            { text: "Data Validation ด้วย Zod ใช้คู่กับ TypeScript ได้", link: "zod-typescript-integration" },
          ]
        }
      ],
    },
  ];
}
function sidebarCareer(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ตำแหน่งสายงาน IT",
      items: [
        {
          text: "Management",
          collapsed: true,
          base: "/paths/career/management/",
          items: [
            { text: "Chief Technology Officer", link: "cto" },
            { text: "Chief Information Officer", link: "cio" },
            { text: "Cyber Security Officer", link: "cso" },
            { text: "IT Director", link: "director" },
            { text: "Product Owner", link: "po" },
            { text: "IT Project Manager", link: "pm" },
            { text: "IT Security Manager", link: "securitymanager" },
            { text: "IT Auditor", link: "auditor" },
          ],
        },
        {
          text: "Designer",
          collapsed: true,
          base: "/paths/career/designer/",
          items: [
            { text: "Product Designer", link: "product" },
            { text: "UX Designer ", link: "ux" },
            { text: "UI Designer", link: "ui" },

          ],
        },
        {
          text: "Analyst",
          collapsed: true,
          base: "/paths/career/analyst/",
          items: [
            { text: "Business Analyst", link: "ba" },
            { text: "System Analyst", link: "sa" },
          ],
        },
        {
          text: "Developer",
          collapsed: true,
          base: "/paths/career/developer/",
          items: [
            { text: "Software Engineer", link: "engineer" },
            { text: "Front-end Developer", link: "frontend" },
            { text: "Back-end Developer", link: "backend" },
            { text: "Full-stack Developer", link: "fullstack" },
            { text: "Mobile Developer", link: "mobile" },
            { text: "Game Developer", link: "game" },
            { text: "IoT Developer", link: "iot" },
            { text: "DevOps Engineer", link: "devops" },
            { text: "Platform Engineer", link: "platform" },
            { text: "AI Engineer", link: "aiengineer" },
            { text: "Blockchain Developer", link: "blockchain" },
          ],
        },
        {
          text: "Data",
          collapsed: true,
          base: "/paths/career/data/",
          items: [
            { text: "Data Engineer", link: "de" },
            { text: "Data Scientist", link: "ds" },
            { text: "Data Analyst", link: "da" },
            { text: "Business Intelligence Analyst", link: "bi" },
          ],
        },
        {
          text: "QA/Tester",
          collapsed: true,
          base: "/paths/career/qa/",
          items: [
            { text: "Manual Tester", link: "manual" },
            { text: "Automation Tester", link: "automation" },
            { text: "QA Lead / QA Manager", link: "manager" },
            { text: "Performance Tester", link: "performance" },
          ],
        },
        {
          text: "Security",
          collapsed: true,
          base: "/paths/career/security/",
          items: [
            { text: "Security Analyst", link: "analyst" },
            { text: "Security Engineer", link: "engineer" },
            { text: "Security Consultant", link: "consultant" },
            { text: "Security Architect", link: "architect" },
            { text: "Penetration Tester", link: "pentest" },
          ],
        },
        {
          text: "Infrastructure",
          collapsed: true,
          base: "/paths/career/infrastructure/",
          items: [
            { text: "System Administrator", link: "systemadministrator" },
            { text: "Network Administrator", link: "networkadministrator" },
            { text: "Database Administrator", link: "dba" },
            { text: "Cloud Engineer", link: "cloudengineer" },
          ],
        },
        {
          text: "Support",
          collapsed: true,
          base: "/paths/career/support/",
          items: [
            { text: "Application Support", link: "application" },
            { text: "IT Support", link: "it" },
            { text: "IT Helpdesk", link: "helpdesk" },
          ],
        },
        {
          text: "Consulting & Sales",
          collapsed: true,
          base: "/paths/career/consulting/",
          items: [
            { text: "Pre-sale Consultant", link: "presale" },
            { text: "Sales Engineer", link: "sale" },
            { text: "Solution Architect", link: "solution" },
            { text: "Technical Consultant", link: "technical" },
          ],
        }
      ],
    },
  ];
}
function sidebarTechMeetup(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "ตำแหน่งสายงาน IT",
      items: [
        {
          text: "AI",
          collapsed: true,
          base: "/paths/meetup/ai/",
          items: [
            { text: "MLOps in action", link: "20240718.mlops" },
            { text: "AI ทำให้โปรแกรมเมอร์ตกงานจริงหรือ", link: "20240530.humanandai" },
            { "text": "เจาะลึก Generative AI", "link": "20231028.generativeai" },
            { "text": "Finetune OpenThaiGPT", "link": "20231010.finetuneopenthaigpt" },
            { "text": "ChatGPT Advanced Data Analysis", "link": "20231028.advanceddataanalysis" }
          ],
        },
        {
          text: "Developer",
          collapsed: true,
          base: "/paths/meetup/dev/",
          items: [
            { text: "Elysia Maintainer Meetup", link: "20240524.elysia" },
            { text: "นายก็เป็นได้นะ คนทำงานสายงานไอทีน่ะ", link: "20240430.itlife" },
            { text: "Webmaster ยังมีอยู่ไหม", link: "20240423.webmaster" },
            { text: "Software Dev and Game Dev", link: "20240326.gamedev" },
          ],
        },
        {
          text: "Data",
          collapsed: true,
          base: "/paths/meetup/data/",
          items: [
            { text: "Data Analyst เทรน 2024", link: "20240306.datatrend" },
            { "text": "Data Science เพื่อภาครัฐ", "link": "20231003.datasciencegov" },
          ],
        },
        {
          text: "Designer",
          collapsed: true,
          base: "/paths/meetup/designer/",
          items: [
            { text: "Exploring Tech Careers in the VFX Industry", link: "20240227.vfxcareer" },
            { text: "กระบวนการผลิต Animation จาก Script to Screen", link: "20240220.animation.md" },
          ],
        },
        {
          text: "IoT",
          collapsed: true,
          base: "/paths/meetup/iot/",
          items: [
            { text: "เรียนรู้ IoT และเทคโนโลยีเกี่ยวข้อง", link: "20240129.iot101.md" },
            { text: "การเรียนรู้เทคโนโลยีไอโอที", link: "20240119.iotintro" },
          ],
        },
        {
          text: "Infrastructure",
          collapsed: true,
          base: "/paths/meetup/infra/",
          items: [
            { "text": "Bangkok HashiCorp User Group Meetup", "link": "20231030.hashicorp" }
          ],
        },
        {
          text: "Management",
          collapsed: true,
          base: "/paths/meetup/management/",
          items: [
            { "text": "Project Estimation", "link": "20231015.projectestimation" },
          ],
        },
        {
          text: "MarTech",
          collapsed: true,
          base: "/paths/meetup/martech/",
          items: [
            { "text": "งานสาย MarTech EP.2", "link": "20231114.martech02" },
            { "text": "งานสาย MarTech EP.1", "link": "20231107.martech01" }
          ],
        },
        {
          text: "Open Source",
          collapsed: true,
          base: "/paths/meetup/opensource/",
          items: [
            { "text": "ThaiUI Introduction", "link": "20231014.thaiui" }
          ],
        },
        {
          text: "QA / Tester",
          collapsed: true,
          base: "/paths/meetup/qa/",
          items: [
            { text: "QA Meetup 2024", link: "20240528.qameetup" },
          ],
        },
        {
          text: "Soft Skills",
          collapsed: true,
          base: "/paths/meetup/softskills/",
          items: [
            { text: "จิตวิทยากับการเขียนโปรแกรม", link: "20240521.happyprogrammer" },
            { text: "การปรับตัวในยุค Digital Disruption", link: "20231219.digitallife" },
            { text: "การ Learning Path ของสายงาน Tech", link: "20231212.techreskill" }
          ],
        },
      ],
    },
  ];
}
function sidebarWordPress(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "WordPress",
      base: "/paths/wordpress/",
      items: [
        { text: "WordPress คืออะไร?", link: "what-is-wordpress" },
        { text: "โครงสร้างของ WordPress", link: "structures" },
        { text: "การติดตั้ง WordPress", link: "installation" },
        { text: "เครื่องมือสำหรับนักพัฒนา", link: "developer-tools" },
        { text: "การพัฒนา Theme", link: "theme-development" },
        { text: "การพัฒนา Plugin", link: "plugin-development" },
        { text: "การปรับแต่งระบบ", link: "customization" },
        { text: "Security", link: "security" },
      ],
    },
  ];
}