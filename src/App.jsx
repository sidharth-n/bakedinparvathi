import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home, Coffee, Tent } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import LandingPage from './views/LandingPage';
import AltitudeScroll from './components/AltitudeScroll';
import Cart from './components/Cart';
import Menu from './views/Menu';
import Stays from './views/Stays';
import Treks from './views/Treks';

// Bottom Navigation for Mobile / Fixed Top for Desktop
const Navigation = () => {
  const navItems = [
    { id: '/menu', label: 'Menu', icon: Coffee },
    { id: '/stays', label: 'Stays', icon: Home },
    { id: '/treks', label: 'Treks', icon: Tent },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-stone-900/90 backdrop-blur-md border-t border-white/10 p-2 pb-safe z-50 md:bottom-auto md:top-0 md:border-t-0 md:border-b">
      <div className="flex justify-around items-center max-w-md mx-auto md:max-w-3xl md:h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.id}
            className={({ isActive }) =>
              `flex flex-col md:flex-row items-center gap-1 p-2 md:px-6 md:py-2 rounded-xl transition-all ${
                isActive ? 'text-amber-400 bg-white/5 shadow-inner' : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`
            }
          >
            <item.icon size={20} className="md:mb-0 mb-1" />
            <span className="text-[10px] md:text-sm font-medium tracking-wide font-body uppercase">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

const AppLayout = ({ cart, setCart }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className={`bg-[#0D1B2A] min-h-screen text-white ${!isLanding ? 'md:pt-16 pt-12' : ''}`}>
      {/* Only show navigation and global UI on the App tabs */}
      {!isLanding && (
        <>
          <Navigation />
          <AltitudeScroll />
        </>
      )}

      {/* Route Views */}
      <div className={`relative z-30`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/treks" element={<Treks />} />
          </Routes>
        </AnimatePresence>
      </div>

      {/* Floating Cart & Checkout */}
      {!isLanding && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
};

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <AppLayout cart={cart} setCart={setCart} />
    </Router>
  );
}

export default App;
