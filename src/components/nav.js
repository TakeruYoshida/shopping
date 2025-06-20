import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';


function Navbar() {
  return (
    <nav style={{ backgroundColor: '#3a3a3a', padding: '1rem', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, height: '40px'}}>
        <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</a></li>
        <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        <li>
          <a href="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
            <FaShoppingCart />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
