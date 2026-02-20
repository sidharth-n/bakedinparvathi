import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Plus, Minus, Send, MapPin, Tent, Utensils, PenLine } from 'lucide-react';
import { cafeInfo } from '../data';

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState('Dine In');
  const [request, setRequest] = useState('');
  const [customerName, setCustomerName] = useState('');

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, qty: Math.max(0, c.qty + delta) };
      }
      return c;
    }).filter(c => c.qty > 0));
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*🏔️ Baked in Parvathi*\n`;
    message += `━━━━━━━━━━━━━━━\n\n`;

    cart.forEach(item => {
      message += `*${item.qty}x ${item.name}*\n`;
      message += `    ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━\n`;
    message += `*Total: ₹${totalPrice}*\n\n`;

    message += `📋 *Order Type:* ${orderType}\n`;
    if (customerName.trim()) {
      message += `👤 *Name:* ${customerName.trim()}\n`;
    }
    if (request) {
      message += `📝 *Note:* _${request}_\n`;
    }
    message += `\n_Sent via bakedinparvathi.vercel.app_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cafeInfo.phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0A1420] text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-chalk text-amber-500 mb-4 tracking-widest">Cart is empty</h2>
        <p className="text-gray-400 font-body mb-8 text-center max-w-sm">Looks like you haven't added anything to your cart yet.</p>
        <button onClick={() => navigate('/menu')} className="bg-amber-600 hover:bg-amber-500 text-stone-900 px-8 py-3 rounded-xl font-bold transition-colors">
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white pb-40 font-body">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-[#0D1B2A]/90 backdrop-blur-lg border-b border-white/10 px-4 py-3 flex items-center gap-4">
        <button onClick={() => navigate('/menu')} className="p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors">
          <ArrowLeft size={24} className="text-gray-300" />
        </button>
        <div>
          <h1 className="font-bold text-lg leading-tight tracking-wide">Baked in Parvathi</h1>
          <p className="text-xs text-gray-400">Kalga Village, Parvati Valley</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Cart Items List */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-4 shadow-lg">
          <div className="space-y-6">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-between items-start gap-4"
                >
                  <div className="flex items-start gap-2 flex-1">
                    {/* Fake Veg/Non-veg icon indicator based on Swiggy styling */}
                    <div className={`mt-1 border p-[2px] rounded-sm flex-shrink-0 ${item.category.toLowerCase().includes('chicken') || item.category.toLowerCase().includes('egg') ? 'border-red-500/50' : 'border-green-500/50'}`}>
                       <div className={`w-2 h-2 rounded-full ${item.category.toLowerCase().includes('chicken') || item.category.toLowerCase().includes('egg') ? 'bg-red-500/80' : 'bg-green-500/80'}`}></div>
                    </div>
                    <div>
                      <h3 className="font-medium text-[15px] leading-snug">{item.name}</h3>
                      <span className="text-sm text-gray-400 font-mono mt-1 block">₹{item.price}</span>
                    </div>
                  </div>

                  {/* Inline Quantity Controls and Total */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center bg-white/10 rounded-lg border border-white/5 p-1">
                      <button onClick={() => updateQty(item.id, -1)} className="p-1 px-2 hover:bg-white/10 rounded text-gray-300 transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="font-mono font-bold text-sm w-6 text-center text-amber-500">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="p-1 px-2 hover:bg-white/10 rounded text-gray-300 transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-mono text-sm font-medium">₹{item.price * item.qty}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
            <button onClick={() => navigate('/menu')} className="w-full border border-white/20 px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/5 flex flex-1 items-center justify-center gap-2 transition-colors">
              <Plus size={18} className="text-gray-400" /> 
              Add more items
            </button>
          </div>
        </div>

        {/* Order Details & Delivery Type */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-5 shadow-lg space-y-5">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400">Order Information</h3>
          
          <input 
            type="text" 
            placeholder="Your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-gray-500"
          />
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Dine In', icon: Utensils },
              { id: 'Takeaway', icon: MapPin },
              { id: 'Stay Delivery', icon: Tent }
            ].map(type => (
              <button
                key={type.id}
                onClick={() => setOrderType(type.id)}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl text-[11px] font-medium transition-all border ${
                  orderType === type.id 
                    ? 'bg-amber-600/20 border-amber-500 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.15)]' 
                    : 'bg-black/40 border-transparent text-gray-400 hover:bg-white/5'
                }`}
              >
                <type.icon size={18} className={orderType === type.id ? 'stroke-[2.5]' : 'stroke-2'} />
                <span>{type.id}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cooking Requests */}
        <div className="bg-white/5 border border-white/5 rounded-3xl p-5 shadow-lg">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
            <PenLine size={16} />
            Cooking Requests
          </h3>
          <textarea 
            placeholder="Any specific requests? (e.g. less spicy, extra cheese)"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500/50 transition-colors resize-none h-24"
          />
        </div>
      </div>

      {/* Sticky Bottom Summary and Pay Button */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0D1B2A] border-t border-white/10 p-4 pb-6 z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4 text-sm font-medium px-1">
            <span className="text-gray-400">Total to pay</span>
            <span className="font-mono text-xl text-white">₹{totalPrice}</span>
          </div>
          
          <button 
            onClick={handleWhatsAppCheckout}
            className="w-full bg-[#1e9947] hover:bg-[#1a853d] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg active:scale-[0.98]"
          >
            <span className="text-lg">Place Order on WhatsApp</span>
            <Send size={20} className="fill-current -mt-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
