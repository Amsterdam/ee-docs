import React from 'react';
import { Grid, Heading, Image, Paragraph } from '@amsterdam/design-system-react';
import styles from './styles.module.css';

const HomepageCallToAction = () => {
  return (
    <Grid paddingTop="large" paddingBottom="large">
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 7 }}>
        <Heading className="ams-mb-sm" level={2} size="level-2">
          Contribute
        </Heading>
        <Paragraph>
          Developers.amsterdam offers an overview of the standards and shared components maintained
          by the municipality of Amsterdam. Contributions to enhance the platform are encouraged,
          with resources available to learn how to get involved.
        </Paragraph>
        <br />
        <a href="/docs/intro" className={`${styles.link} ams-button ams-button--primary`}>
          Share your input
        </a>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 5 }}>
        <Image
          sizes="(max-width: 480px) 100vw,
          (max-width: 800px) 50vw,
          33vw"
          srcSet="img/aanzicht_Amsterdam_480w.png 480w, img/aanzicht_Amsterdam_800w.png 800w, img/aanzicht_Amsterdam_1200w.png 1200w"
          loading="lazy"
          src="img/aanzicht_Amsterdam.png"
          className={styles.image}
          alt=""
        />
      </Grid.Cell>
    </Grid>
  );
};

export default HomepageCallToAction;
