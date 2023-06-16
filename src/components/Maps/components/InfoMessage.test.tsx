import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoMessage from './InfoMessage';

describe('<InfoMessage />', () => {
  it('should render "No map data available..."', () => {
    render(<InfoMessage />);
    expect(screen.getByText('No map data available...')).toBeInTheDocument();
  });
});
