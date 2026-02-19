import React, { CSSProperties, ReactNode } from 'react';
import styles from './LogoGrid.module.css';

interface LogoGridProps {
  images: ReactNode[];
  columns?: number;
  logoHeight?: number;
}

const LogoGrid = ({ images, columns = 5, logoHeight = 40 }: LogoGridProps) => (
  <div
    className={styles.root}
    style={
      {
        '--columns': columns,
        '--logo-height': `${logoHeight}px`,
      } as CSSProperties
    }
  >
    {images.map((image, index) => (
      <div key={index} className={styles.item}>
        {image}
      </div>
    ))}
  </div>
);

export default LogoGrid;
