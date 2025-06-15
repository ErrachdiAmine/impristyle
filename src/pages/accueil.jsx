import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-20 py-16">
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bienvenue chez <span className="text-indigo-600">ImpriStyle</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Votre destination Print‑on‑Demand pour des créations uniques et personnalisées.
          </motion.p>
          <Link
            to="/produits"
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Découvrir nos produits
          </Link>
        </div>
        <motion.img
          src="/hero-image.png"
          alt=""
          className="w-full md:w-1/2 rounded-lg shadow-2xl mb-8 md:mb-0 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi ImpriStyle ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Personnalisable', text: 'Créez des designs uniques qui vous ressemblent.' },
            { title: 'Qualité Premium', text: 'Impression haute définition sur matériaux durables.' },
            { title: 'Livraison Rapide', text: 'Service express pour toutes vos commandes.' }
          ].map((item) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              whileHover={{ translateY: -5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
