import React from 'react';
import { useSidebarBreadcrumbs } from '@docusaurus/theme-common/internal';
import { Breadcrumb } from '@amsterdam/design-system-react';

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <Breadcrumb>
      {breadcrumbs.map((item, idx) => {
        const isLast = idx === breadcrumbs.length - 1;
        const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;

        return (
          <Breadcrumb.Item href={!isLast ? href : '#'} key={idx}>
            {item.label}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}
