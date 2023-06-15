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
