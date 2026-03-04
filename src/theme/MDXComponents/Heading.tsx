import React from 'react';
import type { Props as DocusaurusHeadingProps } from '@theme/Heading';
import { Heading as AmsHeading } from '@amsterdam/design-system-react';
import clsx from 'clsx';

const levelMap: Record<string, 1 | 2 | 3 | 4> = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 4,
  h6: 4,
};

export default function Heading({ as, className, children }: DocusaurusHeadingProps) {
  const level = levelMap[as];

  return (
    <AmsHeading level={level} size={`level-${level}`} className={clsx('ams-mb-m', className)}>
      {children}
    </AmsHeading>
  );
}
