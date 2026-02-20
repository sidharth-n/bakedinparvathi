import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data';
import { Plus, Minus } from 'lucide-react';

const Menu = ({ cart, setCart }) => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  // Group menu items by category
  const groupedMenu = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const scrollToCategory = (category) => {
    const element = document.getElementById(`category-${category}`);
    if (element) {
      // Offset for sticky navigation/padding
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuModalOpen(false);
  };

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
    <div className="max-w-4xl mx-auto px-4 py-8 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-4"
      >
        <h2 className="text-5xl font-display text-amber-500 drop-shadow-md mb-2">Menu</h2>
        <p className="text-stone-400 font-body text-sm max-w-xl mx-auto italic">
          Freshly baked in the Himalayas.
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-amber-600/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
          <div className="h-px w-12 bg-amber-600/40" />
        </div>
      </motion.div>

      {/* Categories */}
      <div className="space-y-10">
        {Object.entries(groupedMenu).map(([category, items], idx) => (
          <motion.div 
            key={category}
            id={`category-${category}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            style={{ scrollMarginTop: '100px' }}
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

      {/* Floating Menu Category Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        // Positioned bottom right. If cart is active (cart.length > 0), raise it above the cart banner.
        className={`fixed right-6 z-40 transition-all duration-300 ${cart.length > 0 ? 'bottom-[100px]' : 'bottom-20 md:bottom-24'}`}
      >
        <button 
          onClick={() => setIsMenuModalOpen(true)}
          className="bg-black text-white border border-white/10 w-16 h-16 rounded-full shadow-2xl flex flex-col items-center justify-center gap-0.5 hover:bg-stone-900 transition-colors font-body focus:outline-none"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
            <path d="M4 19h16" />
            <path d="M4 15h16" />
            <path d="M4 11h16" />
            <path d="M4 7h16" />
          </svg>
          <span className="text-[10px] font-bold tracking-wider text-gray-300">MENU</span>
        </button>
      </motion.div>

      {/* Category Navigation Bottom Sheet */}
      <AnimatePresence>
        {isMenuModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuModalOpen(false)}
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute bottom-0 left-0 w-full bg-stone-900 border-t border-white/10 rounded-t-3xl shadow-2xl max-h-[70vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Handle bar */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-white/20 rounded-full" />
              </div>
              <div className="flex justify-between items-center px-5 py-3">
                <h3 className="text-lg font-bold text-white">Browse Categories</h3>
                <button onClick={() => setIsMenuModalOpen(false)} className="bg-white/5 p-2 rounded-full text-gray-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="overflow-y-auto px-3 pb-6 flex-1">
                {Object.entries(groupedMenu).map(([category, items]) => (
                  <button
                    key={`nav-${category}`}
                    onClick={() => scrollToCategory(category)}
                    className="w-full flex justify-between items-center px-4 py-2.5 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors text-left"
                  >
                    <span className="text-gray-300 font-medium text-[15px]">{category}</span>
                    <span className="text-gray-500 text-xs font-mono">{items.length}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Menu;
