import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Sparkles, Shirt, Layers } from 'lucide-react';

export default function Navbar({ cartCount = 0, onOpenCart }) {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-white/10 px-4 sm:px-8 py-4 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
            <Shirt size={18} className="text-white" />
          </div>
          <div>
            <span className="text-base sm:text-lg font-black tracking-tight text-white font-mono flex items-center gap-1.5">
              Impri<span className="text-emerald-400">Style</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">LAB</span>
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors ${
              location.pathname === '/' ? 'text-emerald-400 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Studio & Accueil
          </Link>
          <Link
            to="/produits"
            className={`transition-colors ${
              location.pathname === '/produits' ? 'text-emerald-400 font-bold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Collection Streetwear
          </Link>
        </div>

        {/* Cart Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-200 hover:text-white transition-all cursor-pointer relative"
          >
            <ShoppingBag size={15} className="text-emerald-400" />
            <span className="text-xs font-semibold hidden sm:inline">Panier</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-black text-[10px] font-black flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
