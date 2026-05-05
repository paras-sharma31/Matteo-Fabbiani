import useReveal from '../../hooks/useReveal';
import './WhyWebflow.css';

const leftItems = [
  "It allows pixel perfect development",
  "It makes internal team more flexible",
  "It's 100% SEO friendly",
  "Your site will load super fast",
];

const rightItems = [
  "It makes development much faster",
  "I can make delightful interactions and animations",
  "I build with clean and efficient code, using Client-First.",
  "Hyper-secure, as standard",
];

export default function WhyWebflow() {
  const sectionRef = useReveal(0.1);

  return (
    <section className="why-webflow section-large" ref={sectionRef}>
      <div>
        <h2 className="why-webflow__title reveal-up">Why Webflow?</h2>

        <div className="why-webflow__grid">
          <div className="why-webflow__col">
            {leftItems.map((text, i) => (
              <div key={i} className="why-webflow__item reveal-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="why-webflow__dot" />
                <p className="why-webflow__text">{text}</p>
              </div>
            ))}
          </div>

          <div className="why-webflow__col">
            {rightItems.map((text, i) => (
              <div key={i} className="why-webflow__item reveal-up" style={{ transitionDelay: `${(i + 4) * 0.08}s` }}>
                <div className="why-webflow__dot" />
                <p className="why-webflow__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
