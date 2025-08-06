import React, { type FC } from 'react';
import {
  Grid,
  Heading,
  Icon,
  LinkList,
  PageFooter,
  Paragraph,
} from '@amsterdam/design-system-react';
import { ChevronForwardIcon } from '@amsterdam/design-system-react-icons';
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

  const { links } = footer;

  const columns = links.map((column) => {
    const navItems = (column.items as FooterLinkItem[]).map((item) => {
      if (item.to) {
        return (
          <li key={uuidv4()}>
            <Link to={item.to} className="ams-link-list__link ams-link-list__link--small">
              <Icon svg={ChevronForwardIcon} size="small" />
              {item.label}
            </Link>
          </li>
        );
      }

      return (
        <li key={uuidv4()}>
          <Link
            href={item.href}
            target="_blank"
            className="ams-link-list__link ams-link-list__link--small"
          >
            <Icon svg={ChevronForwardIcon} size="small" />
            {item.label}
          </Link>
        </li>
      );
    });

    return (
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 7 }} key={uuidv4()}>
        <div className={styles.col}>
          <Heading color="inverse" level={2} size="level-4" className="ams-mb-xs">
            {column.title}
          </Heading>
          <LinkList>{navItems}</LinkList>
        </div>
      </Grid.Cell>
    );
  });

  return (
    <PageFooter>
      <PageFooter.Spotlight>
        <Heading className="ams-visually-hidden" color="inverse" level={1}>
          Colofon
        </Heading>
        <Grid gapVertical="large" paddingVertical="large" className={styles.grid}>
          {columns}
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 5 }}>
            <div className={styles.col}>
              <Paragraph color="inverse">
                <Link to="/">
                  <strong>developers.amsterdam</strong>
                </Link>{' '}
                is a new initiative brought to you from Engineering Enablement, Gemeente Amsterdam
              </Paragraph>
            </div>
          </Grid.Cell>
        </Grid>
      </PageFooter.Spotlight>
      <PageFooter.Menu>
        <PageFooter.MenuLink href="https://www.amsterdam.nl/privacy/" target="_blank">
          Privacy
        </PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  );
};

export default Footer;
