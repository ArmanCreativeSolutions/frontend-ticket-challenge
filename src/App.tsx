import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SelectSeats from './SelectSeats';
import ConfirmPurchase from './ConfirmPurchase';
import Layout from './Layout';

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
