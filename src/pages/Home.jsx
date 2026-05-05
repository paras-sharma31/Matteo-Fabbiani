import Hero from '../components/sections/Hero';
import Statement from '../components/sections/Statement';
import Services from '../components/sections/Services';
import Work from '../components/sections/Work';
import WhyWebflow from '../components/sections/WhyWebflow';
import Testimonials from '../components/sections/Testimonials';
import Checklist from '../components/sections/Checklist';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <Services />
      <Work />
      <WhyWebflow />
      <Testimonials />
      <Checklist />
      <FAQ />
    </main>
  );
}
