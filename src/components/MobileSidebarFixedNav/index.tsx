import React from 'react';
import type { FunctionComponent } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import GitHubIcon from '@site/static/img/github-mark.svg';
import styles from './styles.module.css';

const MobileSidebarFixedNav: FunctionComponent = () => {
  const { colorMode, setColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  return (
    <div className={styles.container}>
      <a
        href="https://github.com/Amsterdam/development-standards"
        target="_blank"
        rel="noreferrer"
        className={`menu__link menu__link--sublist ${styles.button}`}
      >
        <>
          <GitHubIcon width="24" height="24" className={isLightMode ? '' : styles.invert} />
          <span>GitHub</span>
        </>
      </a>
      <button
        className={`menu__link menu__link--sublist ${styles.button}`}
        onClick={() => {
          setColorMode(isLightMode ? 'dark' : 'light');
        }}
      >
        {isLightMode ? (
          <>
            <IconDarkMode />
            <span>Toggle dark mode</span>
          </>
        ) : (
          <>
            <IconLightMode />
            <span>Toggle light mode</span>
          </>
        )}
      </button>
    </div>
  );
};

export default MobileSidebarFixedNav;
