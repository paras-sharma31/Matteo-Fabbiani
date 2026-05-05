import { useState } from 'react';
import { motion } from 'framer-motion';
import useReveal from '../../hooks/useReveal';
import './Work.css';

const CARD_WIDTH = 600;
const CARD_GAP = 32;
const PITCH = CARD_WIDTH + CARD_GAP;
const PADDING = 80;

const works = [
  {
    id: 1,
    title: 'Work #1',
    description: 'This is some text inside of a div block.',
    image: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61707dabe3605933a3e3875f_work-protecto-thumbnail.webp',
  },
  {
    id: 2,
    title: 'Work #2',
    description: 'This is some text inside of a div block.',
    image: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/604cc11713eede1822abb0b1_portfolio%20thumbnail-06-p-1600.webp',
  },
  {
    id: 3,
    title: 'Work #3',
    description: 'This is some text inside of a div block.',
    image: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61add8d71bba4f76d4f2976a_novac-work-project-p-1600.webp',
  },
  {
    id: 4,
    title: 'Work #4',
    description: 'This is some text inside of a div block.',
    image: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/61c7543de02bcc023b07e95f_opti-landing-page-project-thumbnail.webp',
  },
];

const TRACK_WIDTH = works.length * CARD_WIDTH + (works.length - 1) * CARD_GAP;

const springTransition = { type: 'spring', stiffness: 100, damping: 25 };
const textTransition  = { type: 'spring', stiffness: 120, damping: 22 };

const cardTextVariants = {
  visible: { y: '0%', opacity: 1 },
  hidden:  { y: '101%', opacity: 0 },
};

function computeTrackX(hoveredIndex) {
  const vw = window.innerWidth;
  if (hoveredIndex === null) {
    return (vw - (CARD_WIDTH + CARD_GAP + CARD_WIDTH)) / 2 - PITCH;
  }
  const idealX = PADDING - hoveredIndex * PITCH;
  const minX   = vw - TRACK_WIDTH - PADDING;
  return Math.max(minX, idealX);
}

function WorkCard({ work, isHovered }) {
  return (
    <>
      <div className="work-card__text-wrapper">
        <div className="work-card__overflow-clip">
          <motion.h3
            className="work-card__title"
            variants={cardTextVariants}
            animate={isHovered ? 'visible' : 'hidden'}
            transition={textTransition}
          >
            {work.title}
          </motion.h3>
        </div>
        <div className="work-card__overflow-clip">
          <motion.p
            className="work-card__desc"
            variants={cardTextVariants}
            animate={isHovered ? 'visible' : 'hidden'}
            transition={{ ...textTransition, delay: isHovered ? 0.04 : 0 }}
          >
            {work.description}
          </motion.p>
        </div>
      </div>
      <div className="work-card__image-wrapper">
        <img src={work.image} alt={work.title} className="work-card__image" />
      </div>
    </>
  );
}

export default function Work() {
  const sectionRef = useReveal(0.05);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x     = e.clientX - left;
    const index = Math.min(works.length - 1, Math.max(0, Math.floor((x / width) * works.length)));
    if (hoveredIndex !== index) setHoveredIndex(index);
  };

  return (
    <section id="work" className="work section-large" ref={sectionRef}>
      <div className="work__header reveal-up">
        <h2 className="work__title">Work - case studies</h2>
      </div>

      <div
        className="work__viewport reveal-up"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <motion.div
          className="work__track-hover"
          animate={{ x: computeTrackX(hoveredIndex) }}
          transition={springTransition}
        >
          {works.map((work, i) => (
            <motion.div
              key={work.id}
              className="work-card-hover"
              animate={{ y: hoveredIndex === i ? -20 : 0 }}
              transition={springTransition}
            >
              <WorkCard work={work} isHovered={hoveredIndex === i} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="work__footer reveal-up">
        <a href="#" className="work__see-more">
          See more work <span className="work__arrow">→</span>
          <span className="work__underline" />
        </a>
      </div>
    </section>
  );
}
