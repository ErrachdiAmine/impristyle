import React from 'react';
import { motion } from 'framer-motion';

const productData = [
  {
    name: 'T-shirt personnalisé',
    description: 'Conception unique imprimée sur un coton de haute qualité.',
    image: '/products/tshirt.png'
  },
  {
    name: 'Mug design',
    description: 'Idéal pour le café du matin ou un cadeau original.',
    image: '/products/mug.png'
  },
  {
    name: 'Coque de téléphone',
    description: 'Protection élégante et personnalisée pour votre smartphone.',
    image: '/products/phonecase.png'
  },
  {
    name: 'Tote bag personnalisé',
    description: 'Un sac tendance pour vos courses et sorties.',
    image: '/products/totebag.png'
  }
];

const Produits = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Nos Produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {productData.map((product, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Produits;
