import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useReveal from '../../hooks/useReveal';
import './FAQ.css';

const faqs = [
  {
    q: 'How long does it take to rebrand my company?',
    a: "The timeline for a rebrand (strategy and design) depends on the project scope, the size of the brand, its goals, and how deep we go with the strategy. On average, it could take anywhere from 3 to 8 weeks.",
  },
  {
    q: 'How long does it take build a website?',
    a: "The time required to build a website depends on several factors, such as complexity, strategy, number of pages, development, and specific integrations. Generally, the project can take anywhere from 3 to 12 weeks.",
  },
  {
    q: "What's your process?",
    a: "Learn, Strategy, Create. I start by deeply understanding your business and goals, then craft a strategic direction, and finally bring everything to life through exceptional design and development.",
  },
  {
    q: 'How much does it cost?',
    a: "I don't have a price list. The projects I work on are all unique and different, as are the services I offer. This implies that the prices are also customized according to the scope of work. To get an idea of the price, jump on a call with me.",
  },
];

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([]);
  const sectionRef = useReveal(0.05);

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faq" ref={sectionRef}>
      <div className="container">
        <h2 className="faq__title reveal-up">FAQs</h2>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndices.includes(i)}
              onToggle={() => toggleIndex(i)}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle, delay }) {
  return (
    <div
      className={`faq-item ${isOpen ? ' faq-item--open' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <button className="faq-item__q" onClick={onToggle}>
        <span className="faq-item__q-text">{faq.q}</span>
        <div className="faq-item__icon">
          <span className="faq-item__plus">+</span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-item__a"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              className="faq-item__a-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {faq.a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
