import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { SkipToContentFallbackId, ThemeClassNames } from '@docusaurus/theme-common';
import ErrorPageContent from '@theme/ErrorPageContent';
import type { Props } from '@theme/Layout';
import PageShell from '../PageShell/PageShell';
import styles from '../PageShell/PageShell.module.css';

/**
 * The layout for pages that lay out their own grid, such as the homepage.
 *
 * Theme Layout wraps its children in a Grid, which is right for doc pages but would nest a Grid
 * inside a Grid Cell here. Both layouts share the same page anatomy through PageShell.
 */
export default function PlainLayout(props: Props): JSX.Element {
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
      {/* A main element here: pages using this layout do not render one of their own. */}
      <main
        id={SkipToContentFallbackId}
        className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </main>
    </PageShell>
  );
}
