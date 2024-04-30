import React from 'react';
import Link from '@docusaurus/Link';
import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react';

const linkForCTA = {
  title: 'our page "Collaborating on standards"',
  to: '/docs/intro',
};

export default function HomepageCallToAction(): JSX.Element {
  return (
    <>
      <Grid.Cell span={12}>
        <Heading size="level-4">Call to Action!</Heading>
        <Paragraph>
          This website provides an overview of all the standards and shared components that the
          municipality of Amsterdam maintains. The website is still a work in progress and we
          welcome all contributions of the developers of the city of Amsterdam.{' '}
        </Paragraph>
        <Paragraph>
          {' '}
          How you can contribute is explained on <Link to={linkForCTA.to}>{linkForCTA.title}</Link>.
        </Paragraph>
      </Grid.Cell>
    </>
  );
}
