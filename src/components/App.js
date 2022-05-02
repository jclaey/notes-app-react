import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/search" element={<Search />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;