import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Mock } from 'vitest';
import { useColorMode } from '@docusaurus/theme-common';

import TechStack from './TechStack';

vi.mock('@docusaurus/theme-common', () => ({
  useColorMode: vi.fn(),
}));

vi.mock('@docusaurus/useBaseUrl', () => ({
  default: (url: string) => url,
}));

// Mock LogoGrid so we don't retest it
vi.mock('../LogoGrid/LogoGrid', () => ({
  default: ({ images }: { images: unknown[] }) => (
    <div data-testid="logo-grid">{images.length} logos</div>
  ),
}));

const mockUseColorMode = useColorMode as Mock;

describe('TechStack', () => {
  beforeEach(() => {
    mockUseColorMode.mockReturnValue({ colorMode: 'light' });
  });

  it('renders intro text', () => {
    render(<TechStack />);
    expect(
      screen.getByText(/this is a visual overview of the city of Amsterdam/i),
    ).toBeInTheDocument();
  });

  it('renders all section headings', () => {
    render(<TechStack />);

    expect(screen.getByText('Frontend languages')).toBeInTheDocument();
    expect(screen.getByText('Frontend libraries/frameworks')).toBeInTheDocument();
    expect(screen.getByText('Backend languages')).toBeInTheDocument();
    expect(screen.getByText('Backend frameworks')).toBeInTheDocument();
    expect(screen.getByText('Low Code')).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
    expect(screen.getByText('API')).toBeInTheDocument();
    expect(screen.getByText('Hosting/System deployment')).toBeInTheDocument();
    expect(screen.getByText('Repo/CICD/Backlog')).toBeInTheDocument();
  });

  it('renders multiple LogoGrid sections', () => {
    render(<TechStack />);
    expect(screen.getAllByTestId('logo-grid').length).toBeGreaterThan(1);
  });

  it('applies white paragraph color in dark mode', () => {
    mockUseColorMode.mockReturnValue({ colorMode: 'dark' });

    render(<TechStack />);
    const paragraph = screen.getByText(/this is a visual overview of the city of Amsterdam/i);

    expect(paragraph).toHaveStyle({ color: '#fff' });
  });

  it('uses inherit paragraph color in light mode', () => {
    mockUseColorMode.mockReturnValue({ colorMode: 'light' });

    render(<TechStack />);
    const paragraph = screen.getByText(/this is a visual overview of the city of Amsterdam/i);

    expect(paragraph).toHaveStyle({ color: 'inherit' });
  });
});
