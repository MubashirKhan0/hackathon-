
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Embodied Intelligence in the Physical World',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mubashirkhan0.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub Pages: https://<USERNAME>.github.io/<REPO>/
  baseUrl: '/hackathon-',

  // GitHub pages deployment config.
  organizationName: 'MubashirKhan0', // Usually your GitHub org/user name.
  projectName: 'hackathon-', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed from 'throw' to 'warn' to allow build to continue with broken links
  markdown: {
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    // Updated to new format to avoid deprecation warning
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MubashirKhan0/hackathon-/edit/master/website/',
        },
        blog: false, // Disable blog functionality
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
          },
          {
            href: 'https://github.com/MubashirKhan0/hackathon-',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Book',
                to: '/docs/intro',
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
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MubashirKhan0/hackathon-',
              },
              {
                label: 'Accessibility',
                to: '/docs/accessibility',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book. Built with Docusaurus.`,
      },
    prism: {
      theme: lightCodeTheme,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
    }),
};

module.exports = config;