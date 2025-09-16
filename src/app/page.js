import About from '@/components/About';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Contact />
      <ScrollToTop />
    </>
  );
}
