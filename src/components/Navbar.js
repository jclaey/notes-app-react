import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="main-nav">
      <div id="left-nav">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
        </ul>
      </div>
      <div id="right-nav"></div>
    </nav>
  );
};

export default Navbar;