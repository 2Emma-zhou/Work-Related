// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'supOS Industrial Operating System',
  tagline: 'Welcome to my documentation',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'https://wordpressfreezonex.oss-accelerate.aliyuncs.com/Favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [ 
     [
       'classic',
       
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
         sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // pages: {
        //   path: 'src/pages',
        //   include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        // },
        
      }),
    ],
  ],

  themeConfig:
  // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // style:'primary',
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'supOS',
          },
          
          {
            type: 'dropdown',
            label: 'Applications',
            position: 'left',
            items: [
              {
                type:'doc',
                label: 'X-Collector',
                docId: 'Getting Started/System Requirements sc',
              },
              {
                type: 'doc',
                label: 'X-DAM',
                docId: 'Getting Started/System Requirements sd',
              },
              {
                type: 'doc',
                label: 'X-ETL',
                docId: 'Getting Started/System Requirements se',
              },
              {
                type: 'doc',
                label: 'X-Edge',
                docId: 'Getting Started/System Requirements sedge',
              },
              {
                type:'doc',
                label: 'X-BD',
                docId: 'Getting Started/System Requirements sb',
              },
              {
                type:'doc',
                label: 'supLink',
                docId: 'Getting Started/System Requirements sl',
              },
              
            ],
            
          },
          {
            type: 'docSidebar',
            sidebarId: 'video',
            position: 'left',
            label: 'Video Demonstration',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            position: 'left',
            label: 'API Reference',
          },
          
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'release_notes',
            label: 'Release Notes',
            position: 'right',
          },
       
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '29I8LAXY53',
  
        // Public API key: it is safe to commit it
        apiKey: '420807d466741ad059d2c9aa0d68e28d',
  
        indexName: 'work-related',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      title: 'My site',
  // ...
  themes: ['@docusaurus/theme-search-algolia'],
  stylesheets: [
    {
      // ...
      href: './src/css/custom.css',
      // ...
    },
  ],
  themeConfig: {
    // ...
  },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
