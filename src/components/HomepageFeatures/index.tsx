import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from '@docusaurus/Link';
import { Grid, Heading, Paragraph, UnorderedList } from '@amsterdam/design-system-react';

interface FeatureItem {
  title: string;
  to: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    title: 'Accessibility',
    to: '/docs/frontend/accessibility',
    description:
      'In accordance with the Digital Government Act, the municipality of Amsterdam is required to build all its websites and applications in compliance with the Web Content Accessibility Guidelines (WCAG) at levels A and AA.',
  },
  {
    title: 'Documentation',
    to: '/docs/general/project-documentation',
    description:
      'Include documentation in your project that facilitates understanding, usage, and maintenance of your code.',
  },
  {
    title: 'Code Reviews (Not yet formatted to meet the required standard.)',
    to: '/docs/general/code-review',
    description: 'Code reviews are required before merging to main',
  },
  {
    title: 'Storing source code (Not yet formatted to meet the required standard.)',
    to: '/docs/general/storing-source-code',
    description: 'We use Git to store our source code. ',
  },
  {
    title: 'Testing (Not yet formatted to meet the required standard.)',
    to: '/docs/general/testing',
    description: 'A summation of libraries used by the developers of the city of Amsterdam',
  },
  {
    title: 'Third party dependencies (Not yet formatted to meet the required standard.)',
    to: '/docs/general/third-party-dependencies',
    description: 'A guideline on how to choose',
  },
  {
    title: 'Using Git (Not yet formatted to meet the required standard.)',
    to: '/docs/general/using-git',
    description: 'Our policy how to use Git',
  },
  {
    title: 'Languages and Frameworks (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/languages-and-frameworks',
    description:
      'For all frontend projects within de Municipality of Amsterdam we choose to work with React and its ecosystem.',
  },
  {
    title: 'Shared components (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/shared-components',
    description:
      'A list of components that our being used by the developers of the city of Amsterdam',
  },
  {
    title:
      ' Third party dependencies for Front-End (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/third-party-dependencies',
    description:
      ' A list of recommended packages and set guidelines for choosing a package which is not on the list.',
  },
  {
    title: 'Testing for Front-end (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/testing',
    description: 'A guideline to testing for front-enders.',
  },
];

export default function HomepageFeatures(): JSX.Element {
  const list = featureList.map((listItem) => (
    <div key={uuidv4()}>
      <UnorderedList>
        <UnorderedList.Item>
          <Heading size="level-5">
            <Link to={listItem.to}>{listItem.title}</Link>
          </Heading>
          <Paragraph>{listItem.description}</Paragraph>
        </UnorderedList.Item>
      </UnorderedList>
    </div>
  ));

  return (
    <>
      <Grid.Cell span={12}>
        <Heading size="level-4">Current Documented Standards</Heading>
      </Grid.Cell>
      <Grid.Cell span={12}>
        <div>{list}</div>
      </Grid.Cell>
    </>
  );
}
