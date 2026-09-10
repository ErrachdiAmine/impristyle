import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
import { ShoppingBag, X, Trash2, ArrowRight, Check, Sparkles } from 'lucide-react';

export default function Scaffolder() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price || 0), 0);
  const total = Math.max(0, subtotal - discount);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VIBE10') {
      setDiscount(subtotal * 0.1);
    } else {
      alert('Code promo invalide. Essayez "VIBE10" pour 10% de réduction.');
    }
  };

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setIsCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#090a0f] text-neutral-100 selection:bg-emerald-500 selection:text-neutral-950 font-sans">
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-grow">
        <Outlet context={{ addToCart }} />
      </main>

      <Footer />

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Body */}
          <div className="relative w-full max-w-md bg-[#0f111a] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-emerald-400" size={18} />
                  <h2 className="text-base font-bold text-white font-mono">Votre Panier ({cart.length})</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3 text-neutral-500">
                  <ShoppingBag size={40} className="mx-auto text-neutral-600" />
                  <p className="text-sm">Votre panier est vide pour le moment.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          style={{ background: item.color?.hex || '#12131a' }}
                          className="w-10 h-10 rounded-xl border border-white/10 shrink-0"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-white leading-tight">
                            {item.product?.name || 'Article Personnalisé'}
                          </h4>
                          <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                            {item.size || 'L'} • {item.color?.name}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-emerald-400 font-mono">
                          {item.price} MAD
                        </span>
                        <button
                          onClick={() => removeFromCart(idx)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer Checkout */}
            {cart.length > 0 && (
              <div className="pt-6 border-t border-white/10 space-y-4">
                {/* Promo Code Input */}
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder='Code promo (ex: VIBE10)'
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white uppercase font-mono"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white cursor-pointer"
                  >
                    Appliquer
                  </button>
                </form>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>Sous-total</span>
                    <span className="font-mono">{subtotal} MAD</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Réduction Promo (10%)</span>
                      <span className="font-mono">-{discount.toFixed(0)} MAD</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-400">
                    <span>Livraison</span>
                    <span className="text-emerald-400 font-semibold">Offerte (Gratuite)</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/5">
                    <span>Total</span>
                    <span className="font-mono text-emerald-400">{total.toFixed(0)} MAD</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckoutSuccess}
                  className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 cursor-pointer"
                >
                  {isCheckoutSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Commande Confirmée !</span>
                    </>
                  ) : (
                    <>
                      <span>Commander ({total.toFixed(0)} MAD)</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
