import React, {type ReactNode} from 'react';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { Header, PageMenu } from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.css';

// Docusaurus type definition for NavbarItemConfig contradicts their own docusaurus.config 🤷
// so make our own
type NavbarItemConfig = {
  label: string;
  to: string;
  position?: string;
  type?: string;
};

// TODO eslint
// TODO prettier
// TODO documentation as a link reloads the page on click
// TODO mobile
// TODO search nav item
// TODO cleanup imports
// TODO Change default stylesheet colours to match amsterdam design system?
export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];

  const searchBarItem = items.find((item) => item.type === 'search');
  console.log({ items })
  const navItems = items.map((item) => <PageMenu.Link href={item.to} key={uuidv4()}>{item.label}</PageMenu.Link>);

  return (
    <Header
      links={<PageMenu alignEnd>{navItems}</PageMenu>}
      title="Developers"
    />
  );
}
