import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Sparkles, Filter, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATALOG = [
  {
    id: 'tee-cyber',
    name: 'T-Shirt Boxy Cyberpunk Tokyo',
    category: 'T-Shirts',
    price: 249,
    weight: '240 GSM Coton Bio',
    color: 'Onyx Noir',
    hex: '#12131a',
    tag: 'Bestseller',
  },
  {
    id: 'hoodie-vibe',
    name: 'Hoodie Oversized Vibe Architect',
    category: 'Hoodies',
    price: 449,
    weight: '380 GSM Molleton',
    color: 'Sauge Vintage',
    hex: '#445648',
    tag: 'Drop Limité',
  },
  {
    id: 'tee-minimal',
    name: 'T-Shirt Minimalist Geometry 001',
    category: 'T-Shirts',
    price: 249,
    weight: '240 GSM Coton Bio',
    color: 'Crème Vintage',
    hex: '#f4efe6',
    tag: 'Nouveau',
  },
  {
    id: 'tote-canvas',
    name: 'Tote Bag Canvas Raw 300 GSM',
    category: 'Accessoires',
    price: 149,
    weight: 'Toile Coton Brut',
    color: 'Crème Naturelle',
    hex: '#eae5d9',
    tag: 'Éco-Responsable',
  },
  {
    id: 'hoodie-midnight',
    name: 'Hoodie Boxy Midnight Protocol',
    category: 'Hoodies',
    price: 449,
    weight: '380 GSM Heavyweight',
    color: 'Bleu Minuit',
    hex: '#1e2438',
    tag: 'Signature',
  },
  {
    id: 'mug-matte',
    name: 'Mug Céramique Minimalist 350ml',
    category: 'Accessoires',
    price: 99,
    weight: 'Céramique Mate',
    color: 'Noir Intense',
    hex: '#0d0e14',
    tag: 'Desk Essential',
  },
];

export default function Produits() {
  const { addToCart } = useOutletContext() || {};
  const onAddToCart = addToCart;
  const [filter, setFilter] = useState('Tous');
  const [addedId, setAddedId] = useState(null);

  const categories = ['Tous', 'T-Shirts', 'Hoodies', 'Accessoires'];

  const filtered = filter === 'Tous' ? CATALOG : CATALOG.filter((p) => p.category === filter);

  const handleAdd = (item) => {
    if (onAddToCart) {
      onAddToCart({
        id: `${item.id}-${Date.now()}`,
        product: item,
        color: { name: item.color, hex: item.hex },
        size: 'L',
        price: item.price,
      });
    }
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="min-h-screen text-neutral-100 px-4 sm:px-8 max-w-7xl mx-auto py-12">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-mono mb-4">
          <Sparkles size={13} className="text-emerald-400" />
          <span>COLLECTION STREETWEAR</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Nos Pièces <span className="gradient-text-emerald">Signatures</span>
        </h1>
        <p className="text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
          Chaque vêtement est confectionné avec des cotons denses soigneusement sélectionnés et imprimé sur commande dans notre lab.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-500 text-black font-black shadow-lg shadow-emerald-500/25 scale-105'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                {/* Visual Garment Mock Card */}
                <div
                  style={{ background: item.hex }}
                  className="w-full h-56 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden mb-5 shadow-inner"
                >
                  <span className="text-4xl font-black font-mono text-white/30 tracking-widest uppercase select-none">
                    {item.category}
                  </span>
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-emerald-400 border border-white/10">
                    {item.tag}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-1">
                  <span>{item.weight}</span>
                  <span className="text-emerald-400 font-bold">{item.color}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.name}
                </h3>
              </div>

              <div className="pt-5 border-t border-white/5 mt-6 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Prix</div>
                  <div className="text-xl font-black text-white font-mono">{item.price} MAD</div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to="/"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
                    title="Personnaliser dans le Lab"
                  >
                    Customizer
                  </Link>

                  <button
                    onClick={() => handleAdd(item)}
                    className="px-3.5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 cursor-pointer"
                  >
                    {addedId === item.id ? (
                      <>
                        <Check size={14} />
                        <span>Ajouté</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={14} />
                        <span>Ajouter</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
