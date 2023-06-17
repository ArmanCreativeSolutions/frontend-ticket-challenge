// app.test.js
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';

describe('App', () => {
  let user: UserEvent;

  beforeAll(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    cleanup();
  });

  test('full app rendering/navigating', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('select-seats')).toBeInTheDocument();
  });
  test('navigates to /confirm', async () => {
    render(
      <MemoryRouter initialEntries={['/confirm']}>
        <App />
      </MemoryRouter>,
    );
    // Verify the ConfirmPurchase component is rendered
    expect(screen.getByTestId('confirm-purchase')).toBeInTheDocument();
  });
});
