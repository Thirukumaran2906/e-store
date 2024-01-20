import React, { useEffect } from 'react';
import './Header.css';
import { RiMenu2Line } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import headerLogo from '../item/logo.avif';
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector('.nav').classList.remove('active');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = () => {
    document.querySelector('.nav').classList.remove('active');
  };

  return (
    <header className="header">
      <div>
        <Link to='/'>
          <img src={headerLogo} className="logo" alt="Cafe" />
        </Link>
      </div>

      <ul className="nav">
        <li>
          <Link to="/" onClick={handleNavItemClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={handleNavItemClick}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={handleNavItemClick}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/past" onClick={handleNavItemClick}>
            PastOrders
          </Link>
        </li>
      </ul>
      <div className="icon">
        <Link to='/cart'>
          <FaShoppingCart className="cart-btn" />
        </Link>
        <RiMenu2Line
          className="menu-btn"
          onClick={() => document.querySelector('.nav').classList.toggle('active')}
        />
      </div>
    </header>
  );
};

export default Header;
