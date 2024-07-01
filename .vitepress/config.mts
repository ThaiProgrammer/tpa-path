import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TPA Paths",
  description: "Paths of Thai Programmer",
  themeConfig: {
    logo: 'https://res.cloudinary.com/dqizuot8q/image/upload/v1719638409/logo_c9ju7d.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar:{
        '/paths/aspnet-core': { base: '/paths/aspnet-core/', items: sidebarASPNetCore()},
        '/paths/devops': { base: '/paths/devops/', items: sidebarDevOps()},
        '/paths/java': { base: '/paths/java/', items: sidebarJava()},
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThaiProgrammer/tpa-path' }
    ]
  }
})

function sidebarASPNetCore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ASP.NET Core', 
      items: [
        { 
          text: '2024 Bonus Track', 
          collapsed: true,
          base: '/paths/aspnet-core/000-2024-bonus-track/',
          items: [
            { text: 'C# Fundamentals', link: '100-2024-bonus-track-01' },
            { text: 'Test Driven Development (TDD)', link: '100-2024-bonus-track-02' },
            { text: 'เริ่มต้นอีกครั้งกับ .NET 6 Web API', link: '100-2024-bonus-track-03' },
            { text: 'Clean Architecture', link: '100-2024-bonus-track-04' },
            { text: 'Beginner Playlist', link: '100-2024-bonus-track-05' },
            { text: 'Awesome .NET', link: '100-2024-bonus-track-06' },
          ]
        },
        { 
          text: 'เรื่องพื้นฐานที่ควรรู้เกี่ยวกับ C#', 
          collapsed: true,
          base: '/paths/aspnet-core/100-basics-of-csharp/',
          items: [
            { text: 'ภาษา C# คืออะไร', link: '100-csharp' },
            { text: 'Dotnet คืออะไร', link: '101-dotnet' },
            { text: 'Dotnet CLI คืออะไร', link: '102-dotnet-cli' },
          ]
        },
        { 
          text: 'ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น', 
          collapsed: true,
          base: '/paths/aspnet-core/101-general-development-skills/',
          items: [
            { text: 'ความรู้เบื้องต้นที่สำคัญที่ช่วยในการศึกษา C# ได้ดียิ่งขึ้น', link: '000-index' },
            { text: 'Git', link: '100-git' },
            { text: 'Azure Devops Services', link: '101-azure-devops-services' },
            { text: 'Repo Hosting Services', link: '102-vcs-hosting-services' },
            { text: 'HTTPS', link: '103-http-https' },
            { text: 'Data Structures', link: '104-datastructures-and-algorithms' },
          ]
        },
        { 
          text: 'Database fundamentals', 
          collapsed: true,
          base: '/paths/aspnet-core/102-database-fundamentals/',
          items: [
            { text: 'Database fundamentals', link: '000-index' },
            { text: 'Database design basics', link: '100-database-design-basics' },
            { text: 'Sql basics', link: '101-sql-basics' },
            { text: 'Stored Procedures', link: '102-stored-procedures' },
            { text: 'Constraints', link: '103-constraints' },
            { text: 'Triggers', link: '104-triggers' },
          ]
        },
      ]
    }
  ]
}

function sidebarDevOps(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'DevOps',
      items: [
        { 
          text: 'Language', 
          collapsed: false,
          base: '/paths/devops/100-language/',
          items: [
            { text: 'python', link: '100-python' },
            { text: 'ruby', link: '101-ruby' },
            { text: 'javascript', link: '102-javascript' },
            { text: 'go', link: '103-go' },
            { text: 'rust', link: '104-rust' },
          ]
        },
      ]
    }
  ]
}
function sidebarJava(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Java',
      items: [
        { 
          text: 'Java fundamentals', 
          collapsed: false,
          base: '/paths/java/100-java-fundamentals/',
          items: [
            { text: 'Basic Syntax', link: '100-basic-syntax' },
            { text: 'Data Type Variable', link: '101-data-types-variables' },
            { text: 'Conditionals', link: '102-conditionals' },
            { text: 'Functions', link: '103-functions' },
            { text: 'Datastructures', link: '104-datastructures' },
            { text: 'OOP', link: '105-oop' },
            { text: 'Files and APIs', link: '106-files-and-apis' },
            { text: 'Packages', link: '106-packages' },
            { text: 'loops', link: '107-loops' },
            { text: 'Exception Handling', link: '108-exception-handling' },
          ]
        },
      ]
    }
  ]
}
