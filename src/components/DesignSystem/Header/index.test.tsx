import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Header } from './index';

vi.mock('@theme/Navbar/ColorModeToggle', () => ({
  default: () => <div data-testid="mock-color-toggle" />,
}));

// Certain docusaurus components are impossible to test thanks to the weird docusaurus import setup
vi.mock('@theme/Navbar/MobileSidebar/Toggle', () => ({
  default: () => <div data-testid="mock-mobile-sidebar-toggle" />,
}));
vi.mock('@theme/SearchBar', () => ({
  default: () => <div data-testid="mock-search-bar" />,
}));

describe('Header', () => {
  it('renders', () => {
    render(<Header />);

    const component = screen.getByRole('banner');

    expect(component).toBeInTheDocument();
    expect(component).toBeVisible();
  });

  it('renders an additional class name', () => {
    render(<Header className="extra" />);

    const component = screen.getByRole('banner');

    expect(component).toHaveClass('extra');
    expect(component).toHaveClass('ams-page-header');
  });

  it('supports ForwardRef in React', () => {
    const ref = createRef<HTMLElement>();

    render(<Header ref={ref} />);

    const component = screen.getByRole('banner');

    expect(ref.current).toBe(component);
  });

  it('renders with a logo link', () => {
    render(<Header logoLink="/home" />);

    const logoLink = screen.getAllByRole('link')[0];

    expect(logoLink).toHaveAttribute('href', '/home');
  });

  it('renders an application name', () => {
    const { container } = render(<Header />);

    const heading = (container as HTMLDivElement).querySelector('.ams-page-header__brand-name');
    expect(heading).toHaveTextContent('Developers');
  });

  it('renders with links', () => {
    render(
      <Header
        menuItems={[
          <div data-testid="mock-link-example" key="0">
            test
          </div>,
        ]}
      />,
    );

    expect(screen.getByTestId('mock-link-example')).toBeInTheDocument();
  });

  it('renders with menu button', () => {
    render(<Header />);

    expect(screen.getByTestId('mock-mobile-sidebar-toggle')).toBeInTheDocument();
  });
});
