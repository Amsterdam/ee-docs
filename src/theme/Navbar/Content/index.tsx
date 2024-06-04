import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import { Grid, Header, PageMenu, Screen } from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';
import GitHubIcon from '@site/static/img/github-mark.svg';

import styles from './styles.module.css';

// Docusaurus type definition for NavbarItemConfig contradicts their own docusaurus.config 🤷
// so make our own
interface NavbarItemConfig {
  label: string;
  to?: string;
  href?: string;
  position?: string;
  type?: string;
}

export default function NavbarContent(): JSX.Element {
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];

  const navItems = items.map((item) => (
    <li key={uuidv4()}>
      <NavbarNavLink {...item} />
    </li>
  ));

  return (
    <Screen maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <Header
            links={
              <PageMenu alignEnd>
                {navItems}
                <div className={styles.buttons}>
                  <a
                    href="https://github.com/Amsterdam/development-standards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                    aria-label="GitHub repository"
                  >
                    <GitHubIcon width="24" height="24" preserveAspectRatio="xMinYMin" />
                  </a>
                  <NavbarColorModeToggle />
                </div>
              </PageMenu>
            }
            menu={<NavbarMobileSidebarToggle />}
            title="Developers"
          />
        </Grid.Cell>
      </Grid>
    </Screen>
  );
}
