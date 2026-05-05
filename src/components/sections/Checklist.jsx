import useReveal from '../../hooks/useReveal';
import './Checklist.css';
import Book from '../../assets/checklist-book.png'

export default function Checklist() {
  const sectionRef = useReveal(0.15);

  return (
    <section className="checklist section-large">
      <div className="container">
        <div className="checklist__inner reveal-up" ref={sectionRef}>
          <div className="checklist__content">
            <h2 className="checklist__heading">
              Download my free checklist &ldquo;7 key elements for a brand identity that works&rdquo;
            </h2>
            <a href="#" className="checklist__btn">
              Visit my new website
              <span className="checklist__btn-icon-wrap">
                <svg className="checklist__btn-icon checklist__btn-icon--dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
                <svg className="checklist__btn-icon checklist__btn-icon--white" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>

          <div className="checklist__visual">
            <div className="checklist__book">
              <div className="checklist__book-cover">
                <img src={Book} alt="checklist-book" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
