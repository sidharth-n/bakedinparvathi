import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data';
import { Plus, Minus } from 'lucide-react';

const Menu = ({ cart, setCart }) => {
  // Group menu items by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === itemId);
      if (existing.qty === 1) {
        return prev.filter((cartItem) => cartItem.id !== itemId);
      }
      return prev.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
      );
    });
  };

  const getQty = (itemId) => {
    const item = cart.find((c) => c.id === itemId);
    return item ? item.qty : 0;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-display text-amber-500 mb-4 drop-shadow-md">Menu</h2>
        <p className="text-stone-300 font-body text-sm md:text-base max-w-xl mx-auto">
          Wood-fired, hand-tossed, and altitude-baked. Select your items to order via WhatsApp.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="space-y-16">
        {Object.entries(groupedMenu).map(([category, items], idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="chalkboard p-6 md:p-8"
          >
            <h3 className="text-3xl font-chalk text-amber-400 border-b-2 border-white/10 pb-4 mb-6 text-center tracking-widest uppercase">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start gap-4 hover:bg-white/5 p-2 rounded-lg transition-colors group">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-body font-medium text-white">{item.name}</h4>
                      {item.isAltitudeBaked && (
                        <span className="text-[9px] bg-amber-900/50 text-amber-200 border border-amber-700/50 px-2 py-0.5 rounded-full uppercase tracking-widest hidden md:inline-block">
                          Altitude Baked
                        </span>
                      )}
                    </div>
                    {item.description && <p className="text-xs text-gray-400 mt-1 italic">{item.description}</p>}
                    <span className="text-amber-500 font-mono mt-1 block">₹{item.price}</span>
                  </div>

                  {/* Add to Cart Controls */}
                  <div className="flex items-center gap-3 bg-stone-900/50 rounded-full border border-white/10 p-1">
                    <AnimatePresence>
                      {getQty(item.id) > 0 ? (
                        <>
                          <motion.button 
                            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                            onClick={() => removeFromCart(item.id)}
                            className="bg-stone-800 hover:bg-stone-700 text-white rounded-full p-1.5 transition-colors"
                          >
                            <Minus size={14} />
                          </motion.button>
                          <motion.span 
                            key="qty"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-sm font-bold w-4 text-center text-white font-mono"
                          >
                            {getQty(item.id)}
                          </motion.span>
                        </>
                      ) : null}
                    </AnimatePresence>
                    <button 
                      onClick={() => addToCart(item)}
                      className="bg-amber-600 hover:bg-amber-500 text-stone-900 rounded-full p-1.5 transition-colors shadow-lg"
                    >
                      <Plus size={14} className="stroke-[3]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
