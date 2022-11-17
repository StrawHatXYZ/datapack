import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import Favourite from './components/Favourites';
import Home from './components/Home';
import Search from './components/Search';

const Unlocked = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default Unlocked;
