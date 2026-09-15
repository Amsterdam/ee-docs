import React, { type ReactNode } from 'react';
import { Page } from '@amsterdam/design-system-react';
import { PageMetadata } from '@docusaurus/theme-common';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import styles from './PageShell.module.css';

type PageShellProps = {
  /** The content region of the page. Provide the element that holds it, so a page can pick main or div. */
  children: ReactNode;
  description?: string;
  noFooter?: boolean;
  title?: string;
};

/**
 * The page anatomy of the Amsterdam Design System: Page wraps the skip link, the Page Header,
 * the content region and the Page Footer.
 *
 * Page is the box that centres the page and caps its width, so everything that should line up
 * has to sit inside it. Layouts differ only in the content region they pass as children.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page--docs Page docs at Amsterdam Design System}
 */
const PageShell = ({ children, description, noFooter, title }: PageShellProps) => (
  <LayoutProvider>
    <PageMetadata title={title} description={description} />

    <Page className={styles.page}>
      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      {children}

      {!noFooter && <Footer />}
    </Page>
  </LayoutProvider>
);

export default PageShell;
