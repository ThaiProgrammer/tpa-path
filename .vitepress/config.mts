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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

function sidebarASPNetCore(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'ASP.NET Core', link: 'index',
      items: [
        { 
          text: 'Basics of CSharp', 
          collapsed: false,
          base: '/paths/aspnet-core/100-basics-of-csharp/',
          items: [
            { text: 'CSharp', link: '100-csharp' },
            { text: 'Dotnet', link: '101-dotnet' },
            { text: 'Dotnet CLI', link: '102-dotnet-cli' },
          ]
        },
      ]
    }
  ]
}

function sidebarDevOps(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'DevOps', link: 'index',
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
      text: 'Java', link: 'index',
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
