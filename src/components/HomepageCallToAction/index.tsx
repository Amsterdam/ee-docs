import React from 'react';
import Link from '@docusaurus/Link';
import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react';

const HomepageCallToAction = () => (
  <Grid.Cell span={12}>
    <Heading size="level-4">Greetings!</Heading>
    <Paragraph>
      Welcome to our website. Here, you&apos;ll discover an overview of all the standards and shared
      components maintained by the municipality of Amsterdam. While the website is still under
      development, we cordially invite contributions from our developers. Let&apos;s collaborate to
      enhance this platform together!{' '}
    </Paragraph>
    <Paragraph>
      {' '}
      Discover how you can contribute on{' '}
      <Link to="/docs/intro">our page called &quot;Collaborating on standards&quot;.</Link>
    </Paragraph>
  </Grid.Cell>
);

export default HomepageCallToAction;
