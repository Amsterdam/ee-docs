import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Mock } from 'vitest';
import LogoGrid from './LogoGrid';
import { useColorMode } from '@docusaurus/theme-common';

vi.mock('@docusaurus/theme-common', () => ({
  useColorMode: vi.fn(),
}));

const mockUseColorMode = useColorMode as Mock;

describe('LogoGrid', () => {
  beforeEach(() => {
    mockUseColorMode.mockReturnValue({ colorMode: 'light' });
  });

  it('renders plain ReactNode logos', () => {
    render(
      <LogoGrid
        images={[
          <div data-testid="logo-1" key="1">
            Logo 1
          </div>,
          <div data-testid="logo-2" key="2">
            Logo 2
          </div>,
        ]}
      />,
    );

    expect(screen.getByTestId('logo-1')).toBeInTheDocument();
    expect(screen.getByTestId('logo-2')).toBeInTheDocument();
  });

  it('applies default height when none provided', () => {
    render(<LogoGrid defaultHeight={50} images={[{ node: <div data-testid="logo" /> }]} />);

    const wrapper = screen.getByTestId('logo').parentElement;
    expect(wrapper).toHaveStyle({ height: '50px' });
  });

  it('applies custom height when provided', () => {
    render(<LogoGrid images={[{ node: <div data-testid="logo" />, height: 80 }]} />);

    const wrapper = screen.getByTestId('logo').parentElement;
    expect(wrapper).toHaveStyle({ height: '80px' });
  });

  it('applies grid column span', () => {
    render(<LogoGrid images={[{ node: <div data-testid="logo" />, span: 2 }]} />);

    const item = screen.getByTestId('logo').closest('div')?.parentElement?.parentElement;
    expect(item).toHaveStyle({ gridColumn: 'span 2' });
  });

  it('renders light variant logo in light mode', () => {
    mockUseColorMode.mockReturnValue({ colorMode: 'light' });

    render(
      <LogoGrid
        images={[
          {
            light: <div data-testid="light-logo" />,
            dark: <div data-testid="dark-logo" />,
          },
        ]}
      />,
    );

    expect(screen.getByTestId('light-logo')).toBeInTheDocument();
    expect(screen.queryByTestId('dark-logo')).not.toBeInTheDocument();
  });

  it('renders dark variant logo in dark mode', () => {
    mockUseColorMode.mockReturnValue({ colorMode: 'dark' });

    render(
      <LogoGrid
        images={[
          {
            light: <div data-testid="light-logo" />,
            dark: <div data-testid="dark-logo" />,
          },
        ]}
      />,
    );

    expect(screen.getByTestId('dark-logo')).toBeInTheDocument();
    expect(screen.queryByTestId('light-logo')).not.toBeInTheDocument();
  });

  it('applies minWidth CSS variable', () => {
    render(<LogoGrid minWidth={200} images={[<div key="1">Logo</div>]} />);

    const root = screen.getByText('Logo').closest('[class]');
    expect(root?.parentElement?.parentElement).toHaveStyle({
      '--min-width': '200px',
    });
  });
});
