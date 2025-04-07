import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Favorites from '../views/Favorites';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;