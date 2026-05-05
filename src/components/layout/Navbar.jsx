import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__inner">
          <a
            className="navbar__logo"
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          >
            <span className="navbar__logo-full"><strong>Matteo</strong></span>
            <span className="navbar__logo-short"><strong>M</strong></span>
            <span className="navbar__logo-divider">|</span>
            <span className="navbar__logo-full"><strong>Fabbiani</strong></span>
            <span className="navbar__logo-short"><strong>F</strong></span>
          </a>

          <div className="navbar__right">
            <div
              className={`navbar__hamburger-btn`}
              aria-label="Toggle menu"
            >
              <div className="navbar_menu-line-top" />
              <div className="navbar_menu-line-top" />
              <div className="navbar_menu-line-top" />
            </div>
            <a
              className="navbar__contact-pill"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            >
              CONTACT
            </a>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
