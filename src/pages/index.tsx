import React, { type FunctionComponent } from 'react';
import clsx from 'clsx';
import { Grid, Screen } from '@amsterdam/design-system-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCallToAction from '@site/src/components/HopepageCallToAction';
import Heading from '@theme/Heading';
import PlainLayout from '@site/src/components/PlainLayout/PlainLayout';

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
    <main className={styles.container}>
      <Screen maxWidth="wide">
        <Grid gapVertical="small" paddingVertical="medium">
          <HomepageCallToAction />
          <HomepageFeatures />
        </Grid>
      </Screen>
    </main>
  </PlainLayout>
);

export default Home;
