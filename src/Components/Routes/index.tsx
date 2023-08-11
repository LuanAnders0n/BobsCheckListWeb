import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Store from '../../Pages/Store';
import Kiosk from '../../Pages/Kiosk';
import Test from '../../Pages/Test';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/kiosk" element={<Kiosk />} />
      <Route path="/teste" element={<Test />} />
    </Routes>
  );
};

export default RoutesComponent;
