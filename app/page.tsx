import Hero from '@/components/Hero';
import About from '@/components/About';
import DietPlans from '@/components/DietPlans';
import Benefits from '@/components/Benefits';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ConsultationForm from '@/components/ConsultationForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DietPlans />
      <Benefits />
      <WhyChooseUs />
      <Testimonials />
      <ConsultationForm />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}