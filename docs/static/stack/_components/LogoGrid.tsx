import React, { CSSProperties, ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './LogoGrid.module.css';

interface LogoGridProps {
  images: (ReactNode | { light: ReactNode; dark: ReactNode })[];
  columns?: number;
  logoHeight?: number;
}

const LogoGrid = ({ images, columns = 5, logoHeight = 40 }: LogoGridProps) => {
  const { colorMode } = useColorMode();
  const logoElements = images.map((image, index) => {
    if (!image) return;

    if (
      Object.prototype.hasOwnProperty.call(image, 'light') &&
      Object.prototype.hasOwnProperty.call(image, 'dark')
    ) {
      if (colorMode === 'dark') {
        return (
          <div key={index} className={styles.item}>
            {image.dark}
          </div>
        );
      }

      return (
        <div key={index} className={styles.item}>
          {image.light}
        </div>
      );
    }

    return (
      <div key={index} className={styles.item}>
        {image}
      </div>
    );
  });

  return (
    <div
      className={styles.root}
      style={
        {
          '--columns': columns,
          '--logo-height': `${logoHeight}px`,
        } as CSSProperties
      }
    >
      {logoElements}
      {/* {images.map((image, index) => (
        <div key={index} className={styles.item}>
          {image}
        </div>
      ))} */}
    </div>
  );
};

export default LogoGrid;
