import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Seat from './Seat';

describe('Seat', () => {
  const onSeatClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    render(<Seat seat={0} seatIndex={0} onSeatClick={onSeatClick} />);
    const seatElement = screen.getByTestId('seat-0');

    expect(seatElement).toBeInTheDocument();
  });

  it('should not be clickable when the seat is occupied', () => {
    render(<Seat seat={1} seatIndex={0} onSeatClick={onSeatClick} />);
    const seatElement = screen.getByTestId('seat-0');

    fireEvent.click(seatElement);

    expect(onSeatClick).not.toHaveBeenCalled();
  });

  it('should be clickable when the seat is not occupied', () => {
    render(<Seat seat={0} seatIndex={0} onSeatClick={onSeatClick} />);
    const seatElement = screen.getByTestId('seat-0');

    fireEvent.click(seatElement);

    expect(onSeatClick).toHaveBeenCalled();
  });
});
