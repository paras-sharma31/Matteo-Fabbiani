import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;

    const updateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      const p = Math.min((elapsed / duration) * 100, 100);

      const easeOut = 1 - Math.pow(1 - p / 100, 4);

      setProgress(Math.floor(easeOut * 100));

      if (elapsed < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    requestAnimationFrame(updateCounter);

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader__top">
        <div className="preloader__brand preloader__placeholder">Matteo Fabbiani</div>
        <div className="preloader__tags preloader__placeholder">BRAND STRATEGY &bull; BRAND IDENTITY &bull; WEBSITE EXPERIENCE</div>

        <div
          className="preloader__top-progress"
          style={{ width: `${progress}%` }}
        >
          <div className="preloader__top-inner">
            <div className="preloader__brand">Matteo Fabbiani</div>
            <div className="preloader__tags">BRAND STRATEGY &bull; BRAND IDENTITY &bull; WEBSITE EXPERIENCE</div>
          </div>
        </div>
      </div>
      <div className="preloader__main">
        <div className="preloader__counter">
          {progress}
        </div>
      </div>
    </motion.div>
  );
}
