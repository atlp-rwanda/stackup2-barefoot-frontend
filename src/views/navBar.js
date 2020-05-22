import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <div>
      <spna>Barefoot</spna>
      <span>Nomad</span>
    </div>
    <div>
      <Link to="/login">Sign in</Link>
    </div>
  </div>
);

export default NavBar;
