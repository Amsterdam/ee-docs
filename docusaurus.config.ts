import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Amsterdam Developers',
  tagline: 'City of Amsterdam technology standards and guidance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://developers.amsterdam',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Amsterdam', // Usually your GitHub org/user name.
  projectName: 'ee-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Amsterdam/development-standards/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/ams-overrides.css',
            './src/css/doc-overrides.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Amsterdam Developers',
      logo: {
        alt: 'Amsterdam Developers',
        src: 'img/logo.svg',
      },
      items: [
        // FYI Position is not implemented in component
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
          to: '/docs/intro',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Developers',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Vacancies',
              href: 'https://werkenbij.amsterdam.nl/',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'NEXCQE76IQ',

      // Public API key: it is safe to commit it
      apiKey: '3ac1105b8b8b09af920cad8af52be9d0',

      indexName: 'developers',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,
    },
  } satisfies Preset.ThemeConfig,

  // Handle v3.6 @docusaurus/faster
  // @see https://docusaurus.io/blog/releases/3.6#adoption-strategy
  future: {
    v4: true,
    experimental_faster: true,
  },

  plugins: [
    async function piwikProAnalytics() {
      const containerId = 'e63312c0-0efe-4c4f-bba1-3ca1f05374a8';

      return {
        name: 'docusaurus-plugin-piwik-pro-analytics',

        injectHtmlTags() {
          return {
            preBodyTags: [
              {
                tagName: 'script',
                innerHTML: `(function(window, document, dataLayerName, id) {window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');function stgCreateCookie(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+24*c*60*60*1e3),d="; expires="+e.toUTCString()}document.cookie=a+"="+b+d+"; path=/"} var isStgDebug=(window.location.href.match("stg_debug")||document.cookie.match("stg_debug"))&&!window.location.href.match("stg_disable_debug");stgCreateCookie("stg_debug",isStgDebug?1:"",isStgDebug?14:-1);var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName),isStgDebug&&qP.push("stg_debug");var qPString=qP.length>0?("?"+qP.join("&")):"";tags.async=!0,tags.src="https://dap.amsterdam.nl/containers/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);!function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);})(window, document, 'dataLayer', '${containerId}');`,
              },
            ],
          };
        },
      };
    },
  ],
};

export default config;
