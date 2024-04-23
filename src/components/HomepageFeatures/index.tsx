import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from '@docusaurus/Link';
import { Heading, Paragraph } from '@amsterdam/design-system-react';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  to?: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    title: 'Accessibility',
    to: '/docs/frontend/fe-accessibility',
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
      <ul className="text--left">
        <li>
          {listItem.to ? (
            <Link to={listItem.to}>{listItem.title}</Link>
          ) : (
            <span>{listItem.title}</span>
          )}{' '}
          <Paragraph>{listItem.description}</Paragraph>
        </li>
      </ul>
    </div>
  ));

  return (
    <section className={styles.container}>
      <div>
        <Heading size="level-3">Current Standards</Heading>
        <div className={styles.featureList}>{list}</div>
      </div>
    </section>
  );
}
