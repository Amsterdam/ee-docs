import type { ForwardedRef } from 'react';

import { forwardRef } from 'react';

import { PageHeader, type PageHeaderProps } from '@amsterdam/design-system-react';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import SearchBar from '@theme/SearchBar';
import GitHubIcon from '@site/static/img/github-mark.svg';
import styles from './styles.module.css';

/**
 * The Amsterdam Design System Page Header, with the controls this documentation site needs:
 * a search field, a link to the source repository, and the Docusaurus colour mode and sidebar toggles.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs Page Header docs at Amsterdam Design System}
 */
const DocsPageHeader = forwardRef(
  ({ menuItems, ...restProps }: PageHeaderProps, ref: ForwardedRef<HTMLElement>) => (
    <PageHeader
      {...restProps}
      menuItems={
        <>
          <li className="ams-page-header__menu-item ams-page-header__menu-item--fixed">
            <SearchBar />
          </li>
          {menuItems}
          <li className={styles.buttons}>
            <a
              aria-label="GitHub repository"
              className={styles.icon}
              href="https://github.com/Amsterdam/development-standards"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHubIcon width="24" height="24" preserveAspectRatio="xMinYMin" />
            </a>
            <NavbarColorModeToggle />
          </li>
          <li className={styles.mobile}>
            <SearchBar />
            <NavbarMobileSidebarToggle />
          </li>
        </>
      }
      ref={ref}
    />
  ),
);

DocsPageHeader.displayName = 'DocsPageHeader';

export default DocsPageHeader;
