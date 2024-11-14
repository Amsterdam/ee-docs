import { fireEvent, render, screen } from '@testing-library/react';
import SearchButton from './index';

describe('searchbutton', () => {
  it('renders the component', () => {
    const { container } = render(<SearchButton />);
    expect(container.firstChild).toBeDefined();
  });

  it('calls the expected onclick prop', async () => {
    const mockFn = vi.fn();
    render(<SearchButton onClick={mockFn} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockFn).toHaveBeenCalled();
  });
});
