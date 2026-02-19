/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/**
 * ee-docs changes to Amsterdam Design System PageHeader component
 * - Imports (`LogoBrandConfig`, `PageHeaderGridCellNarrowWindowOnly`, `PageHeaderMenuIcon`...) removed
 * - unused props (`menuButton*`) and related functionality removed
 * - `isWideWindow` removed
 * - `megaMenu` related functionality removed
 * - File export changed to only export single primary component
 */

import type {
  AnchorHTMLAttributes,
  ComponentType,
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { clsx } from 'clsx';
import { forwardRef } from 'react';

import { Logo, LogoBrand } from '@amsterdam/design-system-react';

import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import styles from './styles.module.css';
import GitHubIcon from '@site/static/img/github-mark.svg';
import SearchBar from '@theme/SearchBar';

const LogoLinkContent = ({
  brandName,
  logoAccessibleName,
  logoBrand,
}: {
  brandName?: string;
  logoAccessibleName?: string;
  logoBrand: LogoBrand;
}) => (
  <>
    <span
      className={clsx(
        logoBrand === 'amsterdam' && Boolean(brandName) && 'ams-page-header__logo-container',
      )}
    >
      <Logo aria-label={logoAccessibleName} brand={logoBrand} />
    </span>
    {brandName && (
      <span aria-hidden="true" className="ams-page-header__brand-name">
        {brandName}
      </span>
    )}
  </>
);

export type PageHeaderProps = {
  /** The name of the application. */
  brandName?: string;
  /** The accessible name of the logo. */
  logoAccessibleName?: string;
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand;
  /** The url for the link on the logo. */
  logoLink?: string;
  /** The React component to use for the logo link. */
  logoLinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string;
  /** A slot for the menu items. Use PageHeader.MenuLink here. */
  menuItems?: ReactNode;
  /** The accessible label for the navigation section. */
  navigationLabel?: string;
} & HTMLAttributes<HTMLElement>;

const PageHeaderRoot = forwardRef(
  (
    {
      brandName,
      children,
      className,
      logoAccessibleName,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
      logoLinkTitle = `Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`,
      menuItems,
      navigationLabel = 'Hoofdnavigatie',
      ...restProps
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const Link = logoLinkComponent;
    const hasMegaMenu = Boolean(children);

    return (
      <header {...restProps} className={clsx('ams-page-header', className)} ref={ref}>
        <Link className="ams-page-header__logo-link" href={logoLink}>
          <LogoLinkContent
            brandName={brandName}
            logoAccessibleName={logoAccessibleName}
            logoBrand={logoBrand}
          />
          <span className="ams-visually-hidden">{logoLinkTitle}</span>
        </Link>
        {(hasMegaMenu || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-page-header__navigation">
            <h2 aria-hidden className="ams-visually-hidden" id="primary-navigation">
              {navigationLabel}
            </h2>

            {/* The logo link section is recreated here, to make sure the header menu wraps at the right spot */}
            <div
              aria-hidden
              className="ams-page-header__logo-link ams-page-header__logo-link--hidden"
              hidden
            >
              <LogoLinkContent brandName={brandName} logoBrand={logoBrand} />
            </div>

            <ul className="ams-page-header__menu">
              <li className="ams-page-header__menu-item ams-page-header__menu-item--fixed">
                <SearchBar />
              </li>
              {menuItems}
            </ul>
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
            <div className={styles.mobile}>
              <SearchBar />
              <NavbarMobileSidebarToggle />
            </div>
          </nav>
        )}
      </header>
    );
  },
);

PageHeaderRoot.displayName = 'PageHeader';

export default PageHeaderRoot;

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs Page Header docs at Amsterdam Design System}
 */
