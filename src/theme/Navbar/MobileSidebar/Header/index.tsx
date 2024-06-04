import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { IconButton } from '@amsterdam/design-system-react';
import NavbarLogo from '@theme/Navbar/Logo';

export default function NavbarMobileSidebarHeader(): JSX.Element {
  const { colorMode } = useColorMode();
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <IconButton
        label="Sluiten"
        onBackground={colorMode === 'light' ? 'light' : 'dark'}
        aria-label={translate({
          id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
          message: 'Close navigation bar',
          description: 'The ARIA label for close button of mobile sidebar',
        })}
        onClick={() => {
          mobileSidebar.toggle();
        }}
      />
    </div>
  );
}
