// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark-color text-orange p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">E-Shop</a>
        </div>
        
        {/* Navigation */}
        <nav className="space-x-4">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/products" className="hover:text-white">Products</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
