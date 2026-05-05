import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import useReveal from '../../hooks/useReveal';
import './Statement.css';

const text = "I work with design driven companies and startups on designing meaningful brands and creating high end Webflow websites";

export default function Statement() {
  const containerRef = useRef(null);
  const sectionRef = useReveal(0.1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const words = text.split(" ");

  return (
    <section className="statement" ref={containerRef} id="about">
      <div className="statement__inner reveal-up" ref={sectionRef}>
        <h2 className="statement__text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <Word key={i} progress={smoothProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>
      </div>
    </section>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span>
      <motion.span className="statement__word" style={{ opacity }}>
        {children}
      </motion.span>
      {" "}
    </span>
  );
}
