import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import heroProfile from '../../assets/hero_profile.png';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });
  const y = useTransform(smoothProgress, [0, 1], ['0%', '10%']);
  const width = useTransform(smoothProgress, [0, 0.6], ['40%', '100%']);
  const leftOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: custom * 0.15 }
    })
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero__sticky">
        <div className="hero__split">
          <div className="hero__left">
            <div className="hero__left-content">
              <motion.h1
                className="hero__headline"
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                Webflow Designer &amp;<br />
                Developer crafting<br />
                custom experiences
              </motion.h1>

              <motion.div
                className="hero__ctas"
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <a href="#" className="checklist__btn">
                  GO TO MY NEW WEBSITE
                  <span className="checklist__btn-icon-wrap">
                    <svg className="checklist__btn-icon checklist__btn-icon--dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                    <svg className="checklist__btn-icon checklist__btn-icon--white" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </a>
                <a href="https://www.matteofabbiani.com/" className="hero__cta hero__cta--text">
                  BOOK A FREE CONSULTATION CALL
                  <span className="work__underline" />

                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="hero__right"
            style={{ width }}
          >
            <motion.div
              className="hero__image-container"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.img
                src={heroProfile}
                alt="Matteo Fabbiani sitting on a bench"
                className="hero__image"
                style={{ y }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="hero__scroll-dot"></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
