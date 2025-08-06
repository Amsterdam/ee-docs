import React, { type FunctionComponent } from 'react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCallToAction from '@site/src/components/HomepageCallToAction';
import PlainLayout from '@site/src/components/PlainLayout/PlainLayout';

// For Design System
import '@amsterdam/design-system-tokens/dist/index.css';
import '@amsterdam/design-system-assets/font/index.css';
import '@amsterdam/design-system-css/dist/index.css';

import styles from './index.module.css';

const Home: FunctionComponent = () => (
  <PlainLayout title="Welcome" description="City of Amsterdam technology standards and guidance">
    <div className={styles.container}>
      <HomepageCallToAction />
      <HomepageFeatures />
    </div>
  </PlainLayout>
);

export default Home;
