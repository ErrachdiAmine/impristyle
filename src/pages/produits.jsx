import React from 'react';
import { motion } from 'framer-motion';
import tshirtImg from '../assets/tshirt.jpg';
import cupImg from '../assets/img2.jpg';
import bagImg from '../assets/img3.jpg';

const productData = [
  {
    name: 'T-shirt personnalisé',
    description: 'Conception unique imprimée sur un coton de haute qualité.',
    image: tshirtImg
  },
  {
    name: 'Mug design',
    description: 'Idéal pour le café du matin ou un cadeau original.',
    image: cupImg
  },
  {
    name: 'Tote bag personnalisé',
    description: 'Un sac tendance pour vos courses et sorties.',
    image: bagImg
  }
];

const Produits = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Produits</h1>
      {/* Center the grid and its items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto justify-center">
        {productData.map((product, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 rounded-md object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1 text-center">{product.name}</h3>
            <p className="text-sm text-gray-600 text-center">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Produits;
