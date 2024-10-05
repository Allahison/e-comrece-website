import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hussain E-Shop</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
