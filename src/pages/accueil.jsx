import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShoppingBag,
  Upload,
  Layers,
  ShieldCheck,
  Truck,
  Palette,
  Sliders,
  Check,
  ArrowRight,
  Zap,
} from 'lucide-react';

const PRODUCTS = [
  { id: 'tee', name: 'T-Shirt Oversized Streetwear', basePrice: 249, type: 'tee', weight: '240 GSM Coton Lourd' },
  { id: 'hoodie', name: 'Hoodie Boxy Heavyweight', basePrice: 449, type: 'hoodie', weight: '380 GSM Molleton Brossé' },
  { id: 'tote', name: 'Tote Bag Canvas Épais', basePrice: 149, type: 'tote', weight: '300 GSM Toile Bio' },
  { id: 'mug', name: 'Mug Céramique Noir Mat', basePrice: 99, type: 'mug', weight: '350ml Céramique Haute Densité' },
];

const COLORS = [
  { id: 'black', name: 'Onyx Noir', hex: '#12131a', textColor: 'text-white' },
  { id: 'cream', name: 'Crème Vintage', hex: '#f4efe6', textColor: 'text-slate-900' },
  { id: 'sage', name: 'Sauge Organique', hex: '#445648', textColor: 'text-white' },
  { id: 'indigo', name: 'Bleu Minuit', hex: '#1e2438', textColor: 'text-white' },
  { id: 'crimson', name: 'Bordeaux Deep', hex: '#3d1216', textColor: 'text-white' },
];

const PRESET_ARTWORKS = [
  { id: 'cyber', name: 'Cyberpunk Tokyo', text: 'TOKYO 2088\nサイバーパンク', style: 'font-mono text-cyan-400 font-black tracking-widest' },
  { id: 'vibe', name: 'Vibe Architect', text: 'VIBE CODER\nEST. 2026', style: 'font-mono text-emerald-400 font-bold tracking-tight' },
  { id: 'minimal', name: 'Minimal Geometry', text: '✦ ARCHIVE ✦\n001 / SERIE', style: 'font-mono text-amber-300 tracking-widest' },
  { id: 'linear', name: 'Linear Kinetic', text: 'ENGINEERED\nFOR SPEED', style: 'font-sans text-purple-300 font-extrabold tracking-tighter' },
];

import { useOutletContext } from 'react-router-dom';

export default function Accueil() {
  const { addToCart } = useOutletContext() || {};
  const onAddToCart = addToCart;
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(PRESET_ARTWORKS[0]);
  const [customImage, setCustomImage] = useState(null);
  const [artworkScale, setArtworkScale] = useState(100);
  const [selectedSize, setSelectedSize] = useState('L');
  const [isAdded, setIsAdded] = useState(false);
  const fileInputRef = useRef(null);

  const handleCustomUpload = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setCustomImage(e.target.result);
      setSelectedArtwork(null);
    };
    reader.readAsDataURL(file);
  };

  const handleAddToCart = () => {
    const item = {
      id: `${selectedProduct.id}-${selectedColor.id}-${Date.now()}`,
      product: selectedProduct,
      color: selectedColor,
      size: selectedSize,
      artwork: customImage ? 'Graphique Personnalisé' : selectedArtwork?.name,
      price: selectedProduct.basePrice,
    };
    if (onAddToCart) onAddToCart(item);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen text-neutral-100 flex flex-col">
      {/* Hero Header Banner */}
      <section className="relative pt-12 pb-16 px-4 sm:px-8 max-w-7xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-mono mb-4">
          <Sparkles size={13} className="text-emerald-400" />
          <span>PRINT-ON-DEMAND & STREETWEAR LAB</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
          Donnez Vie à Vos Idées. <br />
          <span className="gradient-text-emerald">Personnalisation Haute Définition.</span>
        </h1>

        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Visualisez votre merch en temps réel sur des textiles premium 100% coton lourd. Impression directe (DTG) sans compromis sur la qualité.
        </p>
      </section>

      {/* Main Interactive Studio Customizer */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          {/* Left Canvas Preview Area (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            {/* Visualizer Garment Mockup Frame */}
            <div
              style={{ background: selectedColor.hex }}
              className="relative w-full max-w-[480px] h-[480px] rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center p-8 transition-colors duration-300 overflow-hidden"
            >
              {/* Garment Silhouette Contour */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <span className="text-[140px] font-mono font-black select-none text-white/40">
                  {selectedProduct.type === 'tee' ? 'TEE' : selectedProduct.type === 'hoodie' ? 'HOOD' : selectedProduct.type === 'tote' ? 'TOTE' : 'MUG'}
                </span>
              </div>

              {/* Printable Area Target Box */}
              <div className="relative z-10 w-56 h-64 border border-dashed border-white/20 rounded-2xl flex items-center justify-center p-4">
                {customImage ? (
                  <img
                    src={customImage}
                    alt="Custom artwork"
                    style={{ transform: `scale(${artworkScale / 100})` }}
                    className="max-h-full max-w-full object-contain transition-transform"
                  />
                ) : selectedArtwork ? (
                  <div
                    style={{ transform: `scale(${artworkScale / 100})` }}
                    className={`text-center transition-transform select-none ${selectedArtwork.style}`}
                  >
                    <pre className="font-inherit whitespace-pre-wrap leading-tight text-lg">
                      {selectedArtwork.text}
                    </pre>
                  </div>
                ) : (
                  <span className="text-xs font-mono text-white/50">Zone d'impression</span>
                )}
              </div>

              {/* Badge Tag on garment */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                {selectedProduct.name} • {selectedColor.name}
              </div>
            </div>
          </div>

          {/* Right Customizer Controls (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 1. Base Garment Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                1. Modèle de Vêtement
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PRODUCTS.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      selectedProduct.id === prod.id
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-white shadow-sm'
                        : 'bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{prod.name}</div>
                    <div className="text-[11px] text-emerald-400 font-mono mt-0.5">{prod.basePrice} MAD</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Fabric Color Switcher */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-2">
                2. Couleur Textile : <span className="text-white font-normal">{selectedColor.name}</span>
              </label>
              <div className="flex items-center gap-2.5">
                {COLORS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c)}
                    style={{ background: c.hex }}
                    className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer ${
                      selectedColor.id === c.id ? 'border-emerald-400 scale-110 shadow-lg shadow-emerald-500/30' : 'border-white/20'
                    }`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* 3. Artwork Selection / Custom Upload */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                  3. Graphique & Visuel
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => handleCustomUpload(e.target.files?.[0])}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
                >
                  <Upload size={12} />
                  <span>Uploader votre visuel</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {PRESET_ARTWORKS.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      setSelectedArtwork(art);
                      setCustomImage(null);
                    }}
                    className={`p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      selectedArtwork?.id === art.id && !customImage
                        ? 'bg-emerald-500/20 border-emerald-500/40 text-white font-bold'
                        : 'bg-white/[0.03] border-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {art.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Size & Add to Cart */}
            <div className="pt-2 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-neutral-400">Taille</div>
                  <div className="flex gap-1.5 mt-1">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                          selectedSize === sz
                            ? 'bg-emerald-500 text-black font-black'
                            : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-neutral-400">Total TTC</div>
                  <div className="text-2xl font-black text-white font-mono">{selectedProduct.basePrice} MAD</div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                {isAdded ? (
                  <>
                    <Check size={18} />
                    <span>Ajouté au Panier !</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Ajouter au Panier</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Streetwear Features Grid */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-base font-bold text-white">Impression DTG Ultra Haute Définition</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Nos encres à base d'eau pénètrent la fibre pour un toucher imperceptible et une résistance certifiée à 50+ lavages.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-base font-bold text-white">Textiles 100% Coton Biologique Lourd</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Coupes boxy et oversized modernes de 240 à 380 GSM pour un tombé parfait digne des marques de streetwear japonaises.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-white/5 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4">
              <Truck size={20} />
            </div>
            <h3 className="text-base font-bold text-white">Expédition Partout au Maroc & International</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Production expresse en 48h et livraison sécurisée avec numéro de suivi en temps réel à domicile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
