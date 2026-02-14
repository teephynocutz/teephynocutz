import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Crown,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { services } from "@/data/services"; 

const additionalServices = [
  { name: "Pedicure", price: "From R220" },
  { name: "Wig Installation", price: "From R500" },
  { name: "Hair Coloring", price: "From R400" },
  { name: "Home Services", price: "Prices Vary", icon: Home },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: typeof services[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
   const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      onClick={() => navigate(`/services/${service.slug}`)}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group glass-card-hover overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="service-overlay absolute inset-0" />

        {/* Price */}
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-sm text-sm font-semibold">
          {service.price}
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 left-4 p-3 bg-background/80 backdrop-blur-sm rounded-full border border-primary/30">
          <service.icon className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
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

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="py-8 sm:py-16 md:py-20 lg:py-24 bg-background relative"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-radial opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium block mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the pinnacle of grooming excellence with our curated
            selection of premium services.
          </p>
        </motion.div>

        {/* 🔥 SERVICES CAROUSEL */}
        <div className="relative mb-16">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border hover:border-primary transition"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border hover:border-primary transition"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-1 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[340px]"
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold mb-2">
                Additional Services
              </h3>
              <p className="text-muted-foreground text-sm">
                Explore more ways we can elevate your look
              </p>
            </div>
            <a
              href="/services"
              className="btn-gold text-sm px-6 py-3 text-center"
            >
              View All Prices
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* {additionalServices.map((service) => (
              <div
                key={service.name}
                className="p-4 rounded-sm border border-border/50 hover:border-primary/50 bg-background/50 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  {service.icon && (
                    <service.icon className="w-4 h-4 text-primary" />
                  )}
                  <span className="font-medium group-hover:text-primary transition">
                    {service.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {service.price}
                </span>
              </div>
            ))} */}
            {/* <h2>Comming Soon</h2> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
