import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { SkipToContentFallbackId, ThemeClassNames } from '@docusaurus/theme-common';
import { Grid } from '@amsterdam/design-system-react';
import ErrorPageContent from '@theme/ErrorPageContent';
import type { Props } from '@theme/Layout';
import PageShell from '@site/src/components/PageShell/PageShell';
import styles from '@site/src/components/PageShell/PageShell.module.css';

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  return (
    <PageShell title={title} description={description} noFooter={noFooter}>
      {/*
       * A div rather than a main: doc pages render their own main element, and nesting one inside
       * another is invalid and confuses assistive technology.
       */}
      <div
        id={SkipToContentFallbackId}
        className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}
      >
        <Grid>
          <Grid.Cell span="all">
            <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
              {children}
            </ErrorBoundary>
          </Grid.Cell>
        </Grid>
      </div>
    </PageShell>
  );
}
