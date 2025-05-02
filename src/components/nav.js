import React from 'react'

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
        <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/shop" style={{ color: 'white', textDecoration: 'none' }}>Shop</a></li>
        <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
