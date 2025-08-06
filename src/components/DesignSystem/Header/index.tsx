/**
 * This component is forked because we need to place the search button next
 * to the menu button and handle it responsively to avoid rebuilding the
 * Docusaurus mobile sidebar to include seach on mobile
 *
 */
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { Logo, LogoBrand } from '@amsterdam/design-system-react';
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
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

// This component is a fork of amsterdam-design-system header with some
// props and megaMenu functionality removed
// @see https://github.com/Amsterdam/design-system/tree/develop/packages/react/src/PageHeader
export type HeaderProps = {
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand;
  /** The url for the link on the logo. */
  logoLink?: string;
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string;
  /** A button to toggle the visibility of a Mega Menu. */
  menu?: ReactNode;

  /** A slot for the menu items. Use PageHeader.MenuLink here. */
  menuItems?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Header = forwardRef(
  (
    {
      className,
      menuItems,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    console.log({ menu });
    return (
      <>
        <header {...restProps} className={clsx('ams-page-header', className)} ref={ref}>
          <a href={logoLink} className="ams-page-header__logo-link">
            <LogoLinkContent
              brandName="Developers"
              logoAccessibleName="Gemeente Amsterdam logo"
              logoBrand={logoBrand}
            />
            <span className="ams-visually-hidden">{logoLinkTitle}</span>
          </a>

          <nav aria-labelledby="primary-navigation" className="ams-page-header__navigation">
            <h2 aria-hidden className="ams-visually-hidden" id="primary-navigation">
              Hoofdnavigatie
            </h2>

            <div
              aria-hidden
              className="ams-page-header__logo-link ams-page-header__logo-link--hidden"
              hidden
            >
              <LogoLinkContent brandName="Developers" logoBrand={logoBrand} />
            </div>
            <ul className="ams-page-header__menu">
              <SearchBar />
              {menuItems}
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
            </ul>
          </nav>
        </header>
      </>
    );
  },
);

Header.displayName = 'Header';

export default Header;
