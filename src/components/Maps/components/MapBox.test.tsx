import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MapBox from './MapBox';
import '@testing-library/jest-dom/extend-expect';
import { Map } from '../../../types';

describe('<MapBox />', () => {
  const mockMapSource: Map = { id: 'testMap1', name: 'testMap1' };
  const mockOnMapClick = jest.fn();

  const TestMapBox = () => (
    <MapBox mapSource={mockMapSource} onMapClick={mockOnMapClick} />
  );

  const setUp = () => {
    const utils = render(<TestMapBox />);
    const mapBox = screen.getByText(mockMapSource.id);
    return {
      ...utils,
      mapBox,
    };
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { mapBox } = setUp();
    expect(mapBox).toBeInTheDocument();
  });

  it('calls onMapClick when clicked', () => {
    const { mapBox } = setUp();
    fireEvent.click(mapBox);
    expect(mockOnMapClick).toHaveBeenCalledTimes(1);
  });

  it('passes the correct arguments to onMapClick when clicked', () => {
    const { mapBox } = setUp();
    fireEvent.click(mapBox);
    expect(mockOnMapClick).toHaveBeenCalledWith(
      expect.anything(),
      mockMapSource,
    );
  });
});
