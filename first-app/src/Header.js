import React from 'react';
import littleLemonLogo from './little-lemon-logo.png';

function Header() {
  return (
    <header>
      <img src={littleLemonLogo} alt="Little Lemon logo" />
      <nav>
        {/* navigation links */}
      </nav>
    </header>
  );
}

export default Header;