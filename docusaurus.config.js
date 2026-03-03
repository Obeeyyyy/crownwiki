// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crown Wiki',
  tagline: 'Documentation for our Products',
  favicon: 'img/crown.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://wiki.obeeyyyy.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'crownwiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebar.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Crown',
        logo: {
          alt: 'Crown Logo',
          src: 'img/crown.png',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'Plugins',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'CrownCore',
                docId: 'plugins/crowncore/intro',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Guides',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'How to install a Plugin 101',
                docId: 'guides/how-to-install-a-plugin-101',
              },
              {
                type: 'doc',
                label: 'YAML 101',
                docId: 'guides/yaml',
              },
            ]
          },
          {
            type: 'doc',
            label: 'License System',
            docId: 'guides/license',
          },
          {
            href: 'https://github.com/Obeeyyyy?tab=repositories',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.com/invite/bJQRV5GeZg',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://builtbybit.com/creators/obeeyyyy.427256/',
            label: 'BuiltByBit',
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
                label: 'CrownCore',
                to: '/docs/plugins/crowncore/intro',
              },
              {
                label: 'License System',
                to: '/docs/guides/license',
              },
            ],
          },
          {

          },
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/bJQRV5GeZg',
              },
              {
                label: 'BuiltByBit',
                href: 'https://builtbybit.com/creators/obeeyyyy.427256/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Obeeyyyy?tab=repositories',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crown.`,
      },
      prism: {
        theme: prismThemes.gruvboxMaterialLight,
        darkTheme: prismThemes.gruvboxMaterialDark,
      },
    }),
};

export default config;
