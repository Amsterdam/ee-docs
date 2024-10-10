import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here. Please be advised,
 when adding new docs to a group in the sidebar, a hash collision might happen in the routing to that
 doc (in route.js). Changing the new name of the new file should solve this.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Common standards',
      items: [
        'general/project-documentation',
        'general/readme-default',
        'general/storing-source-code',
        'general/third-party-dependencies',
        'general/using-git',
      ],
    },
    {
      type: 'category',
      label: 'Backend',
      items: ['backend/docker-usage'],
    },
    {
      type: 'category',
      label: 'Frontend',
      items: [
        'frontend/accessibility',
        'frontend/languages-and-frameworks',
        'frontend/shared-components',
        'frontend/testing',
        'frontend/third-party-dependencies',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/maps', 'projects/sso'],
    },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
