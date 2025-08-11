import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import { Grid, PageHeader } from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';
import Header from '@site/src/components/DesignSystem/Header';

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
    <PageHeader.MenuLink key={uuidv4()} href={item.to} lang="en">
      {item.label}
    </PageHeader.MenuLink>
  ));

  return (
    <Grid>
      <Grid.Cell span="all">
        <Header menu={<NavbarMobileSidebarToggle />} menuItems={navItems} title="Developers" />
      </Grid.Cell>
    </Grid>
  );
}
