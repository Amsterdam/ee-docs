import React, { type ReactNode } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { IconButton } from '@amsterdam/design-system-react';
import { MenuIcon } from '@amsterdam/design-system-react-icons';

export default function MobileSidebarToggle(): ReactNode {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <IconButton
      label="Toggle navigation menu"
      svg={MenuIcon}
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
    />
  );
}
