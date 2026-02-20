import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Send, Utensils, MapPin, Tent } from 'lucide-react';
import { cafeInfo } from '../data';

const Cart = ({ cart, setCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderType, setOrderType] = useState('Dine In'); // Dine In, Takeaway, Stay Delivery
  const [tableOrRoom, setTableOrRoom] = useState('');

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*🏔️ New Order | Baked in Parvathi*\n\n`;
    message += `Type: *${orderType}*\n`;
    if (tableOrRoom) {
      message += `Table/Room: *${tableOrRoom}*\n`;
    }
    
    message += `\n*Order Details:*\n`;
    cart.forEach(item => {
      message += `• ${item.qty}x ${item.name} (₹${item.price * item.qty})\n`;
    });

    message += `\n*Total: ₹${totalPrice}*\n`;
    message += `\n_Generated via Digital Menu_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cafeInfo.phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    // Optionally clear cart after redirect
    // setCart([]); 
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Bread Button */}
      {totalItems > 0 && (
        <motion.div 
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          className="fixed bottom-24 right-6 z-50"
        >
          <button 
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-tr from-amber-700 to-amber-500 text-stone-900 border-2 border-amber-900 p-4 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2 group"
          >
            {/* The Bread/Bun shape illusion using border radius */}
            <div className="absolute inset-0 bg-amber-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 group-hover:animate-spin-slow"></div>
            
            <ShoppingBag size={24} className="relative z-10" />
            <span className="relative z-10 font-bold font-mono text-lg">{totalItems}</span>
            
            {/* Notification Dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-300 border border-amber-800"></span>
            </span>
          </button>
        </motion.div>
      )}

      {/* Checkout Modal (Bottom Sheet) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-stone-900 border-t border-white/10 rounded-t-3xl p-6 z-[70] max-h-[85vh] overflow-y-auto flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-chalk text-amber-400 tracking-wider">Your Order</h3>
                  <p className="text-sm text-gray-400 font-body">Review & Checkout</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="bg-white/5 p-2 rounded-full hover:bg-white/10 text-gray-400">
                  <X size={20} />
                </button>
              </div>

              {/* Order Items */}
              <div className="flex-1 overflow-y-auto mb-6 pr-2 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400">₹{item.price} x {item.qty}</p>
                    </div>
                    <div className="font-mono text-amber-400 flex items-center gap-4">
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Options */}
              <div className="bg-black/30 p-4 rounded-2xl mb-6 border border-white/5">
                <label className="text-sm text-gray-400 mb-3 block">Order Type</label>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { id: 'Dine In', icon: Utensils },
                    { id: 'Takeaway', icon: MapPin },
                    { id: 'Stay Delivery', icon: Tent }
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => setOrderType(type.id)}
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-xl text-xs transition-colors border ${
                        orderType === type.id 
                          ? 'bg-amber-600/20 border-amber-500/50 text-amber-400' 
                          : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      <type.icon size={16} />
                      <span>{type.id}</span>
                    </button>
                  ))}
                </div>

                {orderType !== 'Takeaway' && (
                  <div>
                    <input 
                      type="text" 
                      placeholder={orderType === 'Dine In' ? "Table Number (Optional)" : "Room Name / Number"}
                      value={tableOrRoom}
                      onChange={(e) => setTableOrRoom(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Total & Action */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="text-gray-400">Total Amount</span>
                  <span className="text-2xl font-mono font-bold text-white">₹{totalPrice}</span>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-stone-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <Send size={20} className="fill-current" />
                  Place Order via WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-500 mt-3">You will be redirected to WhatsApp to confirm.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;
