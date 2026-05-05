import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useReveal from '../../hooks/useReveal';
import servicesPlaceholder from '../../assets/services_placeholder.png';
import './Services.css';

const services = [
  {
    id: 'brand-strategy',
    label: 'Brand Strategy',
    title: 'Brand strategy',
    body: "Strategy is the foundation of any branding project. It's impossible to intentionally reach any kind of business goal without doing strategy first. Brand strategy is understanding goals, the target and customer profiles, the market, where the brand currently is and where it wants to be in the future.",
    image: servicesPlaceholder
  },
  {
    id: 'brand-identity',
    label: 'Brand Identity',
    title: 'Brand Identity',
    body: "Brand identity is not just about the logo. Brand identity is the set of elements through which the brand influences people's perception of itself. The visual style has to reflect the soul of the brand, to better connect with its target audience.",
    image: servicesPlaceholder
  },
  {
    id: 'web-design',
    label: 'Web Design',
    title: 'UX/UI design',
    body: "A website is not just a crucial marketing tool. Today, people live on the internet. Your website can't just be pretty and salesy, but it's supposed to be a unique experience for the user. That's why my web design process has a strong focus on Strategy and User Experience.",
    image: servicesPlaceholder
  },
  {
    id: 'webflow-dev',
    label: 'Webflow Developement',
    title: 'Web development',
    body: "Fast, flexible and lean web development with the most powerful development platform, Webflow. My approach is to create 100% custom experiences for your users, without any technical limits. I never use any kind of template for website building.",
    image: servicesPlaceholder
  },
];

const textVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -24 : 24,
    opacity: 0,
    transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
  }),
};

const imageVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

export default function Services() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const sectionRef = useReveal(0.05);

  const handleTabClick = (i) => {
    if (i === active) return;
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <section id="home-services-anchor" className="services" ref={sectionRef}>

      <div className="services__header reveal-up">
        <h2 className="services__main-title">How I can help you</h2>
      </div>

      <div className="services__inner">
        <div className="services__tabs-wrapper reveal-up" style={{ transitionDelay: '0.1s' }}>
          <div className="services__tabs container">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`services__tab ${active === i ? 'services__tab--active' : ''}`}
                onClick={() => handleTabClick(i)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="services__panel-container reveal-up">
          <div className="services__panel">
            <div className="services__panel-left">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  src={services[active].image}
                  alt={services[active].title}
                  className="services__image"
                />
              </AnimatePresence>
            </div>

            <div className="services__panel-right">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="services__text-content"
                >
                  <h3 className="services__panel-title">{services[active].title}</h3>
                  <p className="services__panel-body">{services[active].body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
