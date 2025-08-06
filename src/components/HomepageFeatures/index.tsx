import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, Grid, Heading, Paragraph } from '@amsterdam/design-system-react';

import DocumentationIcon from '@site/static/img/Documentation.svg';
import GitHubIcon from '@site/static/img/github-mark.svg';
import ReactIcon from '@site/static/img/React.svg';
import SharedIcon from '@site/static/img/shared.svg';
import SourceControlIcon from '@site/static/img/source-control.svg';
import TestingIcon from '@site/static/img/testing.svg';
import ThirdPartyIcon from '@site/static/img/third_party.svg';
import Link from '@docusaurus/Link';

interface FeatureItem {
  title: string;
  to: string;
  description: string;
  image?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const featureList: FeatureItem[] = [
  {
    image: ReactIcon,
    title: 'Languages & Frameworks',
    to: '/docs/general/languages-and-frameworks',
    description:
      'An overview of the approved programming languages and frameworks used within the City of Amsterdam.',
  },
  {
    image: SharedIcon,
    title: 'Secure coding',
    to: '/docs/general/secure-coding',
    description: 'Code must be developed in accordance with the security-by-design principle.',
  },
  {
    image: DocumentationIcon,
    title: 'Documentation',
    to: '/docs/general/project-documentation',
    description:
      'Include documentation in your project that facilitates understanding, usage, and maintenance of your code.',
  },
  {
    image: SourceControlIcon,
    title: 'Storing source code',
    to: '/docs/general/storing-source-code',
    description: 'We use Git to store our source code.',
  },
  {
    image: TestingIcon,
    title: 'Testing',
    to: '/docs/general/testing',
    description: 'What to test and how.',
  },
  {
    image: GitHubIcon,
    title: 'Using Git',
    to: '/docs/general/using-git',
    description: 'Our policy how to use Git.',
  },
  {
    image: ThirdPartyIcon,
    title: 'Third party dependencies',
    to: '/docs/general/third-party-dependencies',
    description: 'A guideline on how to choose third party frameworks and libraries.',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <Grid paddingBottom="2x-large">
      <Grid.Cell span="all">
        <Heading className="ams-mb-sm" level={3} size="level-3">
          Guidelines
        </Heading>
      </Grid.Cell>
      {featureList.map((listItem) => (
        <Grid.Cell key={uuidv4()} span={{ narrow: 4, medium: 4, wide: 4 }}>
          <Card>
            {listItem.image &&
              React.createElement(listItem.image, {
                width: 62,
                height: 62,
                preserveAspectRatio: 'xMinYMin',
                className:
                  listItem.title === 'Using Git' ? 'dark-mode-github-icon' : 'ams-card__image',
              })}
            <Heading level={4} size="level-4">
              <Link to={listItem.to} className="ams-card__link">
                {listItem.title}
              </Link>
            </Heading>
            <Paragraph size="small">{listItem.description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid>
  );
}
