import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import Home from './pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay" />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        className="page-wrapper"
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: 'opacity 0.6s ease',
          pointerEvents: isLoading ? 'none' : 'auto'
        }}
      >
        <Navbar />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
