// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GoogoraMap',
  tagline: '手軽に地図からゴルフ場を検索',
  url: 'https://googoramap.github.io',
  baseUrl: '/pages/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'googoramap', // Usually your GitHub org/user name.
  projectName: 'pages', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GoogoraMap',
        logo: {
          alt: 'GoogoraMap Logo',
          src: 'img/googoramap.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Top',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://apps.apple.com/jp/app/googoramap/id1618663821',
            label: 'AppStore',
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
                label: 'Top',
                to: '/docs/tutorial',
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
                label: 'AppStore',
                href: 'https://apps.apple.com/jp/app/googoramap/id1618663821',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GoogoraMap Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
