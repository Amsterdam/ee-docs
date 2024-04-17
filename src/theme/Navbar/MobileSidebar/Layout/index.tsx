import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/Navbar/MobileSidebar/Layout';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import MobileSidebarFixedNav from '@site/src/components/MobileSidebarFixedNav';

export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}: Props): JSX.Element {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <div className="navbar-sidebar">
      {header}
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <div className="navbar-sidebar__item menu">
          {primaryMenu}
          <MobileSidebarFixedNav />
        </div>
        <div className="navbar-sidebar__item menu">
          {secondaryMenu}
          <MobileSidebarFixedNav />
        </div>
      </div>
    </div>
  );
}
