import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
// import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import { PageHeader as AmsPageHeader } from '@amsterdam/design-system-react';
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
    <AmsPageHeader.MenuLink key={uuidv4()} href={item.to} lang="en" fixed>
      {item.label}
    </AmsPageHeader.MenuLink>
  ));

  // The Page Header is a direct child of Page in the Design System page anatomy: it brings its own
  // padding, so wrapping it in a Grid Cell would indent it past the content below.
  // navigationLabel and logoLinkTitle default to Dutch; this site is English throughout.
  return (
    <PageHeader
      menuItems={navItems}
      brandName="Developers"
      logoLinkTitle="Go to the Developers homepage"
      navigationLabel="Main menu"
    />
  );
}
