import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useReveal from '../../hooks/useReveal';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Timothy Browns',
    role: 'CMO',
    company: 'Nexaflow Inc.',
    quote:
      "Working with Matteo was a transformative experience. He didn't just design a logo — he built an entire brand architecture that resonated deeply with our audience. The strategy-first approach made every decision intentional.",
    photo: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/6519c9b2b5934542e3f7c249_timothy-browns-client-review-matteo-fabbiani.webp',
  },
  {
    id: 2,
    name: 'Eric Billings',
    role: 'CMO',
    company: 'Prismatic Labs',
    quote:
      "The website Matteo built for us loads in under a second and converts like crazy. His Webflow development skills are unmatched — every animation, every interaction feels purposeful and polished.",
    photo: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/6519c9b2d51e49055a4e54ee_eric-billings-client-review-matteo-fabbiani.webp',
  },
  {
    id: 3,
    name: 'Monica Lentini',
    role: 'Co-Founder',
    company: 'Bloom Health',
    quote:
      "Matteo has a rare gift for combining strategic thinking with exceptional design execution. Our brand identity went from forgettable to unforgettable. The investment paid for itself within two months.",
    photo: 'https://cdn.prod.website-files.com/5e821153625dc77630c8cfd1/6519c9b2b8c55792944fe85a_monica-lentini-client-review-matteo-fabbiani.webp',
  },
];

export default function Testimonials() {
  const sectionRef = useReveal(0.1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [20, -1400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [20, -600]);

  return (
    <section className="testimonials" ref={containerRef}>
      <div className="testimonials__marquee-wrapper">
        <motion.div className="testimonials__marquee testimonials__marquee--orange" style={{ x: x1 }}>
          <h2>
            Some nice words from my past clients — Some nice words from my past clients
          </h2>
        </motion.div>
        <motion.div className="testimonials__marquee testimonials__marquee--black" style={{ x: x2 }}>
          <h2>
            Some nice words from my past clients — Some nice words from my past clients
          </h2>
        </motion.div>
      </div>

      <div className="container" ref={sectionRef}>
        <div className="testimonials__grid reveal-up">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--orange-1)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-card__quote">
                "{t.quote}"
              </blockquote>
              <div className="testimonial-card__footer">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="testimonial-card__avatar"
                />
                <div className="testimonial-card__info">
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__role">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
