import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import EditPage from './pages/EditPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/search" element={<SearchPage />} exact />
            <Route path='/edit' element={<EditPage />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;