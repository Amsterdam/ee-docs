import React, { CSSProperties, ReactNode } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './LogoGrid.module.css';

function isThemedLogo(image: unknown): image is ThemedLogo {
  return typeof image === 'object' && image !== null && 'light' in image && 'dark' in image;
}

function isSingleLogo(image: unknown): image is SingleLogo {
  return typeof image === 'object' && image !== null && 'node' in image;
}

interface LogoConfig {
  height?: number; // To override max height
  span?: number; // To override grid column span
}

interface ThemedLogo extends LogoConfig {
  light: ReactNode;
  dark: ReactNode;
}

interface SingleLogo extends LogoConfig {
  node: ReactNode;
}

type LogoItem = ReactNode | ThemedLogo | SingleLogo;

interface LogoGridProps {
  images: LogoItem[];
  center?: boolean;
  minWidth?: number; // minimum grid column width
  defaultHeight?: number; // fallback logo height
}

const LogoGrid = ({ images, minWidth = 140, defaultHeight = 48 }: LogoGridProps) => {
  const { colorMode } = useColorMode();

  return (
    <div
      className={styles.root}
      style={
        {
          '--min-width': `${minWidth}px`,
        } as CSSProperties
      }
    >
      {images.map((image, index) => {
        let content: ReactNode;
        let height = defaultHeight;
        let span = 1;

        if (isThemedLogo(image)) {
          content = colorMode === 'dark' ? image.dark : image.light;
          height = image.height ?? defaultHeight;
          span = image.span ?? 1;
        } else if (isSingleLogo(image)) {
          content = image.node;
          height = image.height ?? defaultHeight;
          span = image.span ?? 1;
        } else {
          content = image;
        }

        return (
          <div
            key={index}
            className={styles.item}
            style={{
              gridColumn: `span ${span}`,
            }}
          >
            <div className={styles.logoInner} style={{ height: `${height}px` }}>
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LogoGrid;
