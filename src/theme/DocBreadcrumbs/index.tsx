import React from 'react';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { Breadcrumb } from '@amsterdam/design-system-react';
import styles from './styles.module.css';

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Breadcrumb className={styles.container}>
      {breadcrumbs.map((item, idx) => {
        const isLast = idx === breadcrumbs.length - 1;
        const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;

        return (
          <Breadcrumb.Link href={!isLast ? href : '#'} key={idx}>
            {item.label}
          </Breadcrumb.Link>
        );
      })}
    </Breadcrumb>
  );
}
