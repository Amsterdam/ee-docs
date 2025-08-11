// This is kind of annoying but we cannot add props to theme/Layout so duplicate the
// original layout without the amsterdam-design-sytem grid
import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { PageMetadata, SkipToContentFallbackId, ThemeClassNames } from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import type { Props } from '@theme/Layout';
import styles from '../../theme/Layout/styles.module.css';
import { Page } from '@amsterdam/design-system-react';

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <Page>
        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <main
          id={SkipToContentFallbackId}
          className={clsx(ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}
        >
          <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
            {children}
          </ErrorBoundary>
        </main>

        {!noFooter && <Footer />}
      </Page>
    </LayoutProvider>
  );
}
