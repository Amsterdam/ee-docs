import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, Grid, Heading, Paragraph, Image } from '@amsterdam/design-system-react';
import GitHubIcon from '@site/static/img/github-mark.svg';
interface FeatureItem {
  title: string;
  to: string;
  description: string;
  image?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const featureList: FeatureItem[] = [
  {
    image: 'img/W3C.svg',
    title: 'Accessibility',
    to: '/docs/frontend/accessibility',
    description:
      'In accordance with the Digital Government Act, the municipality of Amsterdam is required to build all its websites and applications in compliance with the Web Content Accessibility Guidelines (WCAG) at levels A and AA.',
  },
  {
    image: 'img/Documentation.svg',
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
    image: 'img/Git.svg',
    title: 'Storing source code',
    to: '/docs/general/storing-source-code',
    description: 'We use Git to store our source code. ',
  },
<<<<<<< HEAD
  // {
  //   title: 'Testing (Not yet formatted to meet the required standard.)',
  //   to: '/docs/general/testing',
  //   description: 'A summation of libraries used by the developers of the city of Amsterdam',
  // },
=======
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
>>>>>>> a05c0ea (WIP can not get the image right)
  {
    image: GitHubIcon,
    title: 'Using Git',
    to: '/docs/general/using-git',
    description: 'Our policy how to use Git',
  },
  {
    title: 'Third party dependencies in general',
    to: '/docs/general/third-party-dependencies',
    description: 'A guideline on how to choose',
  },
  {
    title: 'Frontend - Third party dependencies',
    to: '/docs/frontend/third-party-dependencies',
    description:
      ' A list of recommended packages and set guidelines for choosing a package which is not on the list.',
  },
  {
    title: 'Frontend - Languages and Frameworks (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/languages-and-frameworks',
    description:
      'For all frontend projects within de Municipality of Amsterdam we choose to work with React and its ecosystem.',
  },
  {
    image: 'img/shared.svg',
    title: 'Frontend - Shared components (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/shared-components',
    description:
      'A list of components that our being used by the developers of the city of Amsterdam',
  },
  {
    title: 'Frontend - Testing (Not yet formatted to meet the required standard.)',
    to: '/docs/frontend/testing',
    description: 'A guideline to testing for frontenders.',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      {featureList.map((listItem) => (
        <Grid.Cell key={uuidv4()} span={4}>
          <Card>
            {listItem.image &&
              (typeof listItem.image === 'string' ? (
                <Image alt={listItem.title} src={listItem.image} loading="lazy" />
              ) : (
                React.createElement(listItem.image, {
                  width: 62,
                  height: 62,
                  preserveAspectRatio: 'xMinYMin',
                })
              ))}
            <Heading size="level-4">
              {listItem.title}
              <Card.Link href={listItem.to} />
            </Heading>
            <Paragraph size="small">{listItem.description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </>
  );
}
