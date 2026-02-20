import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const navigate = useNavigate();
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      {/* Swiggy Style Bottom Cart Banner */}
      {totalItems > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 w-full z-50 p-4 pb-4 md:pb-4 pointer-events-none"
        >
          <div className="max-w-md mx-auto pointer-events-auto">
            <button 
              onClick={() => navigate('/cart')}
              className="w-full bg-[#1e9947] hover:bg-[#1a853d] text-white p-4 rounded-2xl shadow-xl flex items-center justify-between transition-colors font-body"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-wide">{totalItems} Item{totalItems > 1 ? 's' : ''} added</span>
              </div>
              <div className="flex items-center gap-1 font-bold">
                <span className="tracking-wide">View Cart</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Cart;
