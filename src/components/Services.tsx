import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  ArrowRight, // Added for mobile CTA
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { services } from "@/data/services";

// 1. Mobile Detection Utility (Best practice: move to a hook later)
const isMobileApp = typeof navigator !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      onClick={() => navigate(`/services/${service.slug}`)}
      initial={isMobileApp ? { opacity: 0, x: 20 } : { opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.4, delay: isMobileApp ? index * 0.05 : index * 0.15 }}
      // MOBILE: Remove 'glass-card-hover' (no hover on touch), add 'active:scale-98' for haptic feel
      className={`group overflow-hidden transition-all ${
        isMobileApp 
        ? "bg-secondary/10 rounded-2xl mb-4 active:scale-[0.98] active:opacity-90" 
        : "glass-card-hover"
      }`}
    >
      <div className={`relative ${isMobileApp ? 'h-48' : 'h-64'} overflow-hidden`}>
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover ${!isMobileApp && 'group-hover:scale-110'} transition-transform duration-700`}
        />
        <div className="service-overlay absolute inset-0" />
        
        {/* MOBILE: Smaller price tag for screen real estate */}
        <div className={`absolute top-3 right-3 bg-primary/95 text-primary-foreground font-semibold rounded-full ${isMobileApp ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-sm'}`}>
          {service.price}
        </div>

        <div className="absolute bottom-3 left-3 p-2.5 bg-background/90 backdrop-blur-md rounded-full border border-primary/20">
          <service.icon className={`${isMobileApp ? 'w-4 h-4' : 'w-5 h-5'} text-primary`} />
        </div>
      </div>

      <div className={`${isMobileApp ? 'p-4' : 'p-6'}`}>
        <div className="flex justify-between items-center">
          <h3 className={`font-serif font-semibold text-foreground ${isMobileApp ? 'text-lg' : 'text-xl group-hover:text-primary transition-colors'}`}>
            {service.title}
          </h3>
          {isMobileApp && <ArrowRight className="w-4 h-4 text-primary/50" />}
        </div>
        <p className={`text-muted-foreground leading-relaxed mt-1 ${isMobileApp ? 'text-xs line-clamp-2' : 'text-sm'}`}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const carouselRef = useRef<HTMLDivElement>(null);

  // Web-only scroll functions
  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <section
      id="services"
      // MOBILE: Reduce vertical padding to keep content dense
      className={`${isMobileApp ? 'py-6' : 'py-16 md:py-24'} bg-background relative overflow-hidden`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-radial opacity-10 pointer-events-none" />

      <div className={`${isMobileApp ? 'px-4' : 'container mx-auto px-6'} relative`}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          className={`${isMobileApp ? 'text-left' : 'text-center'} mb-8`}
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
            Premium Grooming
          </span>
          <h2 className={`${isMobileApp ? 'text-3xl' : 'text-4xl md:text-6xl'} font-serif font-bold mb-4`}>
            {isMobileApp ? "Our " : "Explore Our "}<span className="gold-text">Services</span>
          </h2>
          {!isMobileApp && <div className="section-divider mx-auto mb-6" />}
        </motion.div>

        {/* 🔥 SERVICES LAYOUT */}
        {isMobileApp ? (
          /* MOBILE: Vertical Stack for easier one-handed browsing */
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        ) : (
          /* WEB: Carousel with Arrows */
          <div className="relative mb-16">
            <button onClick={scrollLeft} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-xl">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollRight} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-xl">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth px-1 scrollbar-hide">
              {services.map((service, index) => (
                <div key={service.title} className="min-w-[320px] lg:min-w-[380px]">
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Services - Refactored as a "Native Card" */}
        <motion.div
          className={`${isMobileApp ? 'mt-6 bg-secondary/5 border-primary/10' : 'glass-card'} p-6 rounded-3xl border`}
        >
          <div className={`flex ${isMobileApp ? 'flex-col items-center text-center' : 'justify-between'} gap-4`}>
            <div>
              <h3 className="font-serif text-xl font-semibold">Specialty Services</h3>
              <p className="text-muted-foreground text-xs mt-1">Pedicures, Home Services & Coloring</p>
            </div>
            <a
              href="/services"
              // MOBILE: Full width button for thumbs
              className={`btn-gold text-sm font-bold tracking-wide transition-transform active:scale-95 ${isMobileApp ? 'w-full py-4 rounded-xl' : 'px-8 py-3'}`}
            >
              FULL PRICE LIST
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
