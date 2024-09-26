import React from 'react';
import { Grid, Heading, Image, Overlap, Paragraph } from '@amsterdam/design-system-react';
import ShareButton from '@site/src/theme/Button';

interface HomepageCallToActionProps {
  isBallRolling?: boolean;
  isImageShowing?: boolean;
}
const HomepageCallToAction = ({
  isBallRolling = true,
  isImageShowing = true,
}: HomepageCallToActionProps) => {
  return (
    <Grid.Cell span={12}>
      <Overlap>
        <Grid className="ams-grid_inner">
          <Grid.Cell span={7}>
            <Heading size="level-2">
              {isBallRolling ? "Let's get the ball rollin'" : 'Contribute'}
            </Heading>
            <Paragraph>
              Developers.amsterdam offers an overview of the standards and shared components
              maintained by the municipality of Amsterdam. Contributions to enhance the platform are
              encouraged, with resources available to learn how to get involved.
            </Paragraph>
            <br />
            <ShareButton />
          </Grid.Cell>
          {isImageShowing && (
            <Grid.Cell span={5}>
              <Image
                className="ams-image_responsive"
                alt=""
                loading="lazy"
                src="img/aanzicht_Amsterdam.png"
              />
            </Grid.Cell>
          )}
        </Grid>
      </Overlap>
    </Grid.Cell>
  );
};

export default HomepageCallToAction;
