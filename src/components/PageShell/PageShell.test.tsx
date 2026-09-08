import { render, screen } from '@testing-library/react';
import PageShell from './PageShell';

vi.mock('@docusaurus/theme-common', () => ({
  PageMetadata: () => null,
}));

vi.mock('@theme/Layout/Provider', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock('@theme/SkipToContent', () => ({
  default: () => <a data-testid="skip-to-content" href="#content" />,
}));
vi.mock('@theme/AnnouncementBar', () => ({ default: () => null }));
vi.mock('@theme/Navbar', () => ({
  default: () => <div data-testid="navbar" />,
}));
vi.mock('@theme/Footer', () => ({
  default: () => <div data-testid="footer" />,
}));

const renderShell = (props = {}) =>
  render(
    <PageShell {...props}>
      <main data-testid="content" />
    </PageShell>,
  );

describe('PageShell', () => {
  /**
   * Page carries the width cap and the centring for the whole page. Anything rendered outside it
   * lines up differently from the content, which is what this guards against.
   */
  it('renders the skip link, header, content and footer inside Page', () => {
    const { container } = renderShell();

    const page = container.querySelector('.ams-page');

    expect(page).toBeInTheDocument();

    for (const testId of ['skip-to-content', 'navbar', 'content', 'footer']) {
      expect(page).toContainElement(screen.getByTestId(testId));
    }
  });

  it('omits the footer when asked', () => {
    renderShell({ noFooter: true });

    expect(screen.queryByTestId('footer')).not.toBeInTheDocument();
  });
});
