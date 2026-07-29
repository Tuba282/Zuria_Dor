import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ role }) => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          Daraz Clone
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-orange-500 transition">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500 transition">About</Link>
          {role === 'user' && (
            <Link to="/cart" className="text-gray-600 hover:text-orange-500 transition">Cart</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
