import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-extrabold text-gray-900 hover:text-gray-700 transition-colors">
          ImpriStyle
        </Link>

        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/produits"
              className="text-gray-700 font-medium hover:text-gray-900 transition-colors"
            >
              Produits
            </Link>
          </li>
        </ul>

        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );

}
