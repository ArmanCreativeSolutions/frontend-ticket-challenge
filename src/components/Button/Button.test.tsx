import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const mockFunction = jest.fn();

  it('renders the button with the correct text', () => {
    render(<Button text="Test Button" onClick={mockFunction} classNames="" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<Button text="Test Button" onClick={mockFunction} classNames="" />);
    fireEvent.click(screen.getByText('Test Button'));
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('applies the correct classes', () => {
    render(
      <Button
        text="Test Button"
        onClick={mockFunction}
        classNames="test-class"
      />,
    );
    expect(screen.getByText('Test Button')).toHaveClass('test-class');
  });

  it('renders children when passed in', () => {
    render(
      <Button onClick={mockFunction} classNames="">
        <div>Test Child</div>
      </Button>,
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is true', () => {
    render(
      <Button
        text="Test Button"
        onClick={mockFunction}
        classNames=""
        disabled
      />,
    );
    expect(screen.getByText('Test Button')).toBeDisabled();
  });
});
