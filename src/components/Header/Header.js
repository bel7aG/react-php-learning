import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/practicle-work">Practicle File Php</NavLink>
  </div>
);

export default Header;
