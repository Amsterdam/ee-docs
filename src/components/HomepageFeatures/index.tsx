import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from '@docusaurus/Link';
import { Grid, Heading, Paragraph, UnorderedList } from '@amsterdam/design-system-react';

interface FeatureItem {
  title: string;
  to?: string;
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
    description:
      'Include documentation in your project that facilitates understanding, usage, and maintenance of your code.',
  },
];

export default function HomepageFeatures(): JSX.Element {
  const list = featureList.map((listItem) => (
    <div key={uuidv4()}>
      <UnorderedList>
        <UnorderedList.Item>
          {listItem.to ? (
            <Heading size="level-5">
              <Link to={listItem.to}>{listItem.title}</Link>
            </Heading>
          ) : (
            <Heading size="level-5">{listItem.title}</Heading>
          )}{' '}
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
