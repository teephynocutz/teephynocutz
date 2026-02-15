import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WigCarousel from '@/components/WigCarousel';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-banner.png';

const Index = () => {
  
  const isMobileApp = navigator.userAgent.includes("TeephynoCutzApp-1.0");

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      {isMobileApp && <Link to="/" className="flex items-center">
            <img src={logo} alt="Teephyno Cutz" className="h-16 h-16 w-auto" />
          </Link>},
      <Hero />
      <Services />
      <WigCarousel />
      <Gallery />
      {/* <Booking /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
