import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/places">Places</Link></li>

          {isAuthenticated ? (
            <li>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </li>
          ) : (
            <li><Link to="/signin">Sign In</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
