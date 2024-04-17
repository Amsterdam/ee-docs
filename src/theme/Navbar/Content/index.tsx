import React, {type ReactNode} from 'react';
import {useThemeConfig, useColorMode, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { Grid, Header, PageMenu, Screen } from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';
import GitHubIcon from '@site/static/img/github-mark.svg';

import styles from './styles.module.css';
import clsx from 'clsx';

// Docusaurus type definition for NavbarItemConfig contradicts their own docusaurus.config 🤷
// so make our own
type NavbarItemConfig = {
  label: string;
  to?: string;
  href?: string;
  position?: string;
  type?: string;
};

// TODO eslint
// TODO prettier
// TODO mobile
// TODO search nav item
// TODO cleanup imports
export default function NavbarContent(): JSX.Element {
  const {colorMode} = useColorMode();
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];

  const searchBarItem = items.find((item) => item.type === 'search');

  const navItems = items.map((item) => (<li><NavbarNavLink {...item} /></li>))

  return (
    <Screen maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <Header
            links={
              <PageMenu alignEnd>
                {navItems}
                <div className={styles.buttons}>
                  <a href="https://github.com/Amsterdam/development-standards" target="_blank" rel="noopener noreferrer" className={colorMode === 'light' ? styles.icon : clsx([styles.icon, styles.iconInvert])} aria-label="GitHub repository"><GitHubIcon width="24" height="24" preserveAspectRatio="xMinYMin" /></a>
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
