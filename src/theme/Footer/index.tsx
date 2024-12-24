import React, { type FC } from 'react';
import {
  Footer as AmsFooter,
  Card,
  Grid,
  Heading,
  PageMenu,
  Paragraph,
} from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import type { FooterLinkItem, MultiColumnFooter } from '@docusaurus/theme-common';
import styles from './styles.module.css';

const Footer: FC | null = () => {
  const { footer } = useThemeConfig() as { footer: MultiColumnFooter | null };

  if (footer == null) {
    return null;
  }

  const footerLinks = footer.links.length
    ? footer.links[0].items.map((item: FooterLinkItem) => {
        if (item.to) {
          return (
            <Link to={item.to} className="ams-page-menu__link" key={uuidv4()}>
              {item.label}
            </Link>
          );
        }

        return (
          <PageMenu.Link href={item.href} target="_blank" key={uuidv4()}>
            {item.label}
          </PageMenu.Link>
        );
      })
    : [];

  return (
    <AmsFooter>
      <div className={`ams-spotlight ams-footer__top ${styles.top}`}>
        <Grid gapVertical="small" paddingVertical="medium">
          <Grid.Cell span={12}>
            <Heading inverseColor level={2} size="level-3">
              Projects
            </Heading>
          </Grid.Cell>
        </Grid>
        <Grid gapVertical="small">
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link href="https://data.amsterdam.nl" target="_blank">
                  data.amsterdam
                </Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link
                  href="https://www.amsterdam.nl/veelgevraagd/De-Amsterdam-App-kp"
                  target="_blank"
                >
                  De Amsterdam App
                </Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link href="https://bomen.amsterdam.nl/" target="_blank">
                  De Bomenkaart
                </Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link href="https://maps.developers.amsterdam" target="_blank">
                  Maps
                </Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link href="https://mijn.amsterdam.nl" target="_blank">
                  mijn.amsterdam
                </Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
            <Card>
              <Heading size="level-4">
                <Card.Link href="https://meldingen.amsterdam.nl">Signalen</Card.Link>
              </Heading>
              <Paragraph>Short description of the project and development team</Paragraph>
            </Card>
          </Grid.Cell>
        </Grid>
      </div>
      <AmsFooter.Bottom>
        <Heading className="ams-visually-hidden" level={2}>
          Documentation
        </Heading>
        <Grid paddingVertical="small">
          <Grid.Cell span="all">
            <PageMenu>{footerLinks}</PageMenu>
          </Grid.Cell>
        </Grid>
      </AmsFooter.Bottom>
    </AmsFooter>
  );
};

export default Footer;
