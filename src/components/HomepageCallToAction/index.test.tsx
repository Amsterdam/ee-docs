import { render, screen } from '@testing-library/react';
import HomepageCallToAction from '.';
import React from 'react';

describe('HomepageCallToAction', () => {
  it('it must show the title, paragraph and the img', async () => {
    render(<HomepageCallToAction />);

    const title = await screen.findByText('Contribute');
    const paragraph = await screen.findByText(
      /developers\.amsterdam offers an overview of the standards and shared components maintained by the municipality of amsterdam/i,
    );

    expect(title).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    const image = await screen.getByRole('img', { hidden: true }); // Voor een afbeelding zonder alt-tekst
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'img/aanzicht_Amsterdam.png');
  });
});
