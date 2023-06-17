// Import necessary dependencies and types
import React from 'react';
import { render, screen } from '@testing-library/react';
import Ticket from './Ticket';

describe('Ticket', () => {
  const mockMap = {
    id: '1',
    name: 'Map',
    // additional fields if any
  };

  it('renders the ticket header title with the correct map id', () => {
    render(<Ticket row={1} seat={2} map={mockMap} />);
    const mapIdElement = screen.getByTestId('ticketHeaderTitle');
    expect(mapIdElement).toBeInTheDocument();
    expect(mapIdElement.textContent).toContain('Map: 1');
  });

  it('renders the ticket header date', () => {
    render(<Ticket row={1} seat={2} map={mockMap} />);
    const dateElement = screen.getByTestId('ticketHeaderDate');
    expect(dateElement).toBeInTheDocument();
    const date = new Date();
    expect(dateElement.textContent).toContain(date.toLocaleDateString('us-EN'));
  });

  it('renders the ticket body seats with correct row and seat numbers', () => {
    render(<Ticket row={1} seat={2} map={mockMap} />);
    const seatsElement = screen.getByTestId('ticketBodySeats');
    expect(seatsElement).toBeInTheDocument();
    expect(seatsElement.textContent).toContain('Seats: row: 1 - seat: 2');
  });

  it('renders the ticket body price', () => {
    render(<Ticket row={1} seat={2} map={mockMap} />);
    const priceElement = screen.getByText('Price: 99999');
    expect(priceElement).toBeInTheDocument();
  });
});
