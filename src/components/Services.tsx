import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Wind, Crown, Home, Clock } from 'lucide-react';

import serviceHaircut from '@/assets/beard-oil-2.jpg';
import serviceManicure from '@/assets/service-manicure.jpg';
import serviceBraids from '@/assets/service-braids.jpg';
import serviceShaving from '@/assets/service-shaving.jpg';

const services = [
  {
    title: 'Beard Oil',
    description: 'Organic and natural hair grooming oil.',
    price: 'From R200',
    duration: '45 min',
    image: serviceHaircut,
    icon: Scissors,
  },
  {
    title: 'Luxury Manicure',
    description: 'Pamper your hands with our premium nail care treatments using top-tier products.',
    price: 'From R200',
    duration: '60 min',
    image: serviceManicure,
    icon: Sparkles,
  },
  {
    title: 'Braids & Dreadlocks',
    description: 'Master braiders creating intricate styles from box braids to locs maintenance.',
    price: 'From R300',
    duration: '2-4 hrs',
    image: serviceBraids,
    icon: Crown,
  },
  {
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium grooming products.',
    price: 'From R180',
    duration: '30 min',
    image: serviceShaving,
    icon: Wind,
  },
];

const additionalServices = [
  { name: 'Pedicure', price: 'From R220' },
  { name: 'Wig Installation', price: 'From R500' },
  { name: 'Hair Coloring', price: 'From R400' },
  { name: 'Home Services', price: 'Prices Vary', icon: Home },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
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
        
        {/* Price Badge */}
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
        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
          <Clock size={14} />
          <span>{service.duration}</span>
        </div>
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
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-gold-radial opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Our <span className="gold-text">Services</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the pinnacle of grooming excellence with our curated selection 
            of premium services, designed for those who demand nothing but the best.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-5 sm:p-6 md:p-8 lg:p-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-1 sm:mb-2">
                Additional Services
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Explore more ways we can elevate your look
              </p>
            </div>
            <a href="#booking" className="btn-gold text-xs px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto text-center">
              View All Prices
            </a>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={service.name}
                className="p-4 rounded-sm border border-border/50 hover:border-primary/50 bg-background/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  {service.icon && <service.icon className="w-4 h-4 text-primary" />}
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{service.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
