import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Map } from '../../types';
import Maps from './Maps';

describe('Maps', () => {
  const mockOnMapClick = jest.fn();
  const mockMapData: Map[] = [
    { id: 'map1', name: 'Test Map 1' },
    { id: 'map2', name: 'Test Map 2' },
  ];

  test('renders all map boxes when mapData is not empty', () => {
    render(<Maps mapData={mockMapData} onMapClick={mockOnMapClick} />);
    mockMapData.forEach((map) => {
      expect(screen.getByText(map.id)).toBeInTheDocument();
    });
  });

  test('calls onMapClick when a map box is clicked', () => {
    render(<Maps mapData={mockMapData} onMapClick={mockOnMapClick} />);
    fireEvent.click(screen.getByText(mockMapData[0].id));
    expect(mockOnMapClick).toHaveBeenCalled();
  });

  test('renders InfoMessage when mapData is empty', () => {
    render(<Maps mapData={[]} onMapClick={mockOnMapClick} />);
    expect(screen.getByText('No map data available...')).toBeInTheDocument();
  });
});
