import React from 'react';
import { NAV_ITEMS } from '../data';

function Navbar({ current, onNavigate, onDonate }) {
  return (
    <header className="navbar">
      <div className="navbar-left" onClick={() => onNavigate('home')}>
        <div className="logo-mark">
          <img src="/AandH_Logo.jpeg" alt="AANDH Foundation logo" />
        </div>
        <div className="logo-text">
          <span className="logo-title">AANDH</span>
          <span className="logo-sub">Foundation</span>
        </div>
      </div>

      <nav className="navbar-center">
        {NAV_ITEMS.filter((n) => n.id !== 'home').map((item) => (
          <button
            key={item.id}
            className={`nav-link ${current === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="navbar-right">
        <button className="btn btn-donate" onClick={onDonate}>
          Donate Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;
