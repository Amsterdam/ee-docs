import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
// import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import { Grid, PageHeader as AmsPageHeader } from '@amsterdam/design-system-react';
import { v4 as uuidv4 } from 'uuid';
import PageHeader from '@site/src/components/DesignSystem/PageHeader';

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
    <AmsPageHeader.MenuLink key={uuidv4()} href={item.to} lang="en">
      {item.label}
    </AmsPageHeader.MenuLink>
  ));

  return (
    <Grid>
      <Grid.Cell span="all">
        <PageHeader menuItems={navItems} brandName="Developers" />
      </Grid.Cell>
    </Grid>
  );
}
