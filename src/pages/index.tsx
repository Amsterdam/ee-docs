import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import { Grid, Paragraph, Screen, UnorderedList } from '@amsterdam/design-system-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import PlainLayout from '../components/PlainLayout/PlainLayout';

// For Design System
import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';

import styles from './index.module.css';

function HomepageHeader(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const Home: FunctionComponent = () => (
  <PlainLayout title="Welcome" description="City of Amsterdam technology standards and guidance">
    <HomepageHeader />
    <main>
      <Screen maxWidth="wide">
        <Grid gapVertical="small" paddingVertical="medium">
          <Grid.Cell span={12}>
            <Paragraph>
              <a href="https://developers.amsterdam" target="_blank" rel="noreferrer">
                developers.amsterdam
              </a>{' '}
              is a new initiative brought to you from Engineering Enablement, Gemeente Amsterdam.
              The Engineering Enablement team provides and maintains:
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={12}>
            <UnorderedList>
              <UnorderedList.Item>Reusable software components</UnorderedList.Item>
              <UnorderedList.Item>Shared standards</UnorderedList.Item>
              <UnorderedList.Item>Best Practices</UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          <HomepageFeatures />
        </Grid>
      </Screen>
    </main>
  </PlainLayout>
);

export default Home;
