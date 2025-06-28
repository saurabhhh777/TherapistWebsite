import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Services from '@/components/Services.jsx';
import FAQ from '@/components/FAQ.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import Footer from '@/components/Footer.jsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}