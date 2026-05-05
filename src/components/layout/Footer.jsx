import { Mail, Phone } from 'lucide-react';

function InstagramIcon({ size = 20, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resources', href: '#resources' },
];

function BehanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.27-4h4.888c-.088-1.469-1.063-2.088-2.179-2.088-1.406 0-2.376.617-2.71 2.088zM8.23 7.193c.542 0 1.027.078 1.452.234.425.156.786.381 1.085.671.297.291.531.638.699 1.039.168.4.252.839.252 1.314 0 .583-.119 1.083-.355 1.5-.237.418-.587.77-1.048 1.055.671.214 1.176.594 1.518 1.137.342.543.514 1.199.514 1.968 0 .527-.1 1.011-.297 1.45-.198.44-.483.82-.856 1.137a4.02 4.02 0 01-1.339.724 5.474 5.474 0 01-1.605.228H3V7h5.23zm-.411 5.047c.443 0 .797-.11 1.063-.332.265-.22.397-.555.397-.999 0-.471-.14-.816-.418-1.035-.277-.219-.648-.328-1.111-.328H5.89v2.694h1.93zm.101 5.142c.539 0 .958-.141 1.255-.423.297-.281.444-.65.444-1.105 0-.432-.152-.786-.458-1.06-.306-.275-.73-.413-1.27-.413H5.89v3h2.03z" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer ">
      <div className="container footer__inner">
        <div className="footer__top ">

          <div className="footer__brand">
            <h2 className="footer__logo">Matteo Fabbiani</h2>
            <p className="footer__desc">
              Are you an agency or a freelancer? I always welcome new
              opportunities to exchange ideas and to explore collaborations
            </p>
            <a href="#" className="footer__cta">
              <span className="footer__cta-arrow">→</span>
              GO TO MY OFFICIAL WEBSITE
            </a>
            <div className="footer__socials footer__socials--brand">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <InstagramIcon size={30} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link" aria-label="Behance">
                <BehanceIcon size={30} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <LinkedinIcon size={30} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="footer__nav--contact">
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__nav-link"
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer__contact">
              <div className="footer__contact-item">
                <div className="footer__contact-icon"><Mail size={40} strokeWidth={1} /></div>
                <p className="footer__contact-label">Email</p>
                <a href="mailto:info@example.com" className="footer__contact-val">
                  info@example.com
                </a>
              </div>
              <div className="footer__contact-item">
                <div className="footer__contact-icon"><Phone size={40} strokeWidth={1} /></div>
                <p className="footer__contact-label">Phone</p>
                <a href="tel:+393334445566" className="footer__contact-val">
                  +39 333 444 55 66
                </a>
              </div>
            </div>

          </div>

        </div>

        <div className="footer__bottom">
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <InstagramIcon size={30} strokeWidth={1.5} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Behance">
              <BehanceIcon size={30} strokeWidth={1.5} />
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <LinkedinIcon size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className="footer__bottom-right">
            <p className="footer__copy">
              Copyright © 2023 Fabbiani Matteo - All Rights reserved • matteo.fabbiani@hotmail.it • P.I. 02916640358 •
              <a href="#" className="footer__legal-link">Privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
