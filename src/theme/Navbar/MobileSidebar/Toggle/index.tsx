import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { Icon } from '@amsterdam/design-system-react';
import { MenuIcon } from '@amsterdam/design-system-react-icons';
import styles from './styles.module.css';

export default function MobileSidebarToggle(): JSX.Element {
  const { toggle, shown } = useNavbarMobileSidebar();

  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className={`${styles.button} clean-btn`}
      type="button"
    >
      <Icon svg={MenuIcon} />
    </button>
  );
}
