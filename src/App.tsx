/**
 * This is the main component of the React application.
 * It utilizes React Router for managing routes in the application.
 * It includes two main routes: the index route ('/') which renders the `SelectSeats` component and '/confirm' which renders the `ConfirmPurchase` component.
 * Both routes are wrapped with the `Layout` component.
 *
 * React Router's `Routes` and `Route` components are used to configure the routing.
 * `Layout`, `SelectSeats`, and `ConfirmPurchase` are custom components imported from local files.
 *
 * `Layout` is a component that provides a common layout for its child components.
 * `SelectSeats` is a page component where users can select their seats.
 * `ConfirmPurchase` is a page component where users can confirm their purchase.
 *
 * The application is a TypeScript React functional component (React.FC).
 *
 * @returns JSX.Element - A `Routes` component that contains the application's routes.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SelectSeats from './pages/SelectSeats/SelectSeats';
import ConfirmPurchase from './pages/ConfirmPurchase/ConfirmPurchase';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SelectSeats />} />
        <Route path="confirm" element={<ConfirmPurchase />} />
      </Route>
    </Routes>
  );
};

export default App;
