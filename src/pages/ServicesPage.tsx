import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Crown, Wind, Home, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import serviceHaircut from '@/assets/service-haircut.jpg';
import serviceManicure from '@/assets/service-manicure.jpg';
import Braids from '@/assets/services/braids.jpeg';
import serviceShaving from '@/assets/service-shaving.jpg';

// 1. Mobile App Detection
const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");



const mainServices = [
  {
    title: 'Precision Haircuts',
    description: 'Expert cuts tailored to your face shape and personal style. From classic fades to modern designs, our master barbers deliver perfection every time.',
    price: 'From R150',
    duration: '45 min',
    image: serviceHaircut,
    icon: Scissors,
    features: ['Consultation included', 'Hot towel finish', 'Styling products'],
  },
  {
    title: 'Luxury Manicure',
    description: 'Pamper your hands with our premium nail care treatments using top-tier products. Includes cuticle care, massage, and your choice of polish.',
    price: 'From R200',
    duration: '60 min',
    image: serviceManicure,
    icon: Sparkles,
    features: ['Hand massage', 'Cuticle care', 'Premium polish'],
  },
  {
    title: 'Braids & Dreadlocks',
    description: 'Master braiders creating intricate styles from box braids to locs maintenance. We specialize in protective styles that last.',
    price: 'From R300',
    duration: '2-4 hrs',
    image: Braids,
    icon: Crown,
    features: ['Custom designs', 'Scalp treatment', 'Long-lasting styles'],
  },
  {
    title: 'Hot Towel Shave',
    description: 'Traditional straight razor shave with hot towels and premium grooming products. The ultimate relaxation experience for the modern gentleman.',
    price: 'From R180',
    duration: '30 min',
    image: serviceShaving,
    icon: Wind,
    features: ['Hot towel prep', 'Premium oils', 'Aftercare included'],
  },
];

const price_lists = [
  { 
    category: 'Wigs',
    products: [
      {
        productId: '383435ffwr434433433',
        name: 'Bone Straight 5 by 5 wig',
        price: '5000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['14 Inches'],
        colors: ['Grey']
      },
      {
        productId: '3834 cvfvfv3333',
        name: 'Bone Straight  frontal orange',
        price: '4500.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['12 Inches'],
        colors: ['Orange/Black']
      },
      {
        productId: '383433233',
        name: 'Bone Straight 5 by 5 wig',
        price: '4000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['12 Inches'],
        colors: ['black']
      },
      {
        productId: '383433233',
        name: 'Bone Straight 5 by 5 wig',
        price: '4500.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['14 Inches'],
        colors: ['black']
      },
      {
        productId: '383433233',
        name: 'Bone Straight 5 by 5 14 wig',
        price: '5000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['14 Inches'],
        colors: ['brown']
      },
      {
        productId: '383fkdnkfndkdn43323sdff3',
        name: 'Bone Straight 5 by 5',
        price: '11000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['28 Inches'],
        colours: ['black']
      },
      {
        productId: '38343322323233232333',
        name: 'Bone Straight Frontal Blonde',
        price: '13500.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['28 Inches'],
        colors: ['black and blonde']
      },
      {
        productId: '3834dsffddderwef33233',
        name: 'Bone Straight frontal wig',
        price: '10000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['22 Inches'],
        colors: ['black']
      },
         {
        productId: '383svjdkvvn433233',
        name: 'Bone Straight  frontal wig',
        price: '10000.00',
        image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['22 Inches'],
        colors: ['black']
      },
      {
        productId: '3sdfsfkffsff8343uugv3233',
        name: 'Bone Straight  2 by 6 burgundy wig',
        price: '7000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['20 inches'],
        colors: ['burgundy']
      },
       {
        productId: 'fdree3834dsdsd33233',
        name: 'Single Donor 6 by 6 wig',
        price: '15000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['30 inches'],
        colors: ['grey', 'blond',]
      },
       {
        productId: '3ad834dvbs89dsd33233',
        name: 'Single Donor 5 by 5 wig',
        price: '10000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['26 inches'],
        colors: ['brown and gold']
      },
       {
        productId: '3834dsdf90dsd33233',
        name: 'Single Donor frontal wig',
        price: '13500.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['28 inches'],
        colors: ['black']
      },
       {
        productId: '3834ds90fdddsd33233',
        name: 'Single Donor 6 by 6 wig',
        price: '15000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['30 inches'],
        colors: ['grey']
      },
       {
        productId: '3834ds90vvdsd33233',
        name: 'Bone Straight frontal wig',
        price: '13000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['28 inches'],
        colors: ['black']
      },
       {
        productId: '3834dsds90dsd33233',
        name: 'Bone Straight frontal wig',
        price: '15000.00',
        image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
        images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
        video: 'bone-straight-12-inch-frontal-orange-b',
        description: '',
        inches: ['28 inches'],
        colors: ['brown']
      },
    ]
    
  },
  
]

const additionalServices = [
  { name: 'Premium Pedicure', price: 'From R220', description: 'Complete foot care with exfoliation' },
  { name: 'Wig Installation', price: 'From R500', description: 'Professional fitting and styling' },
  { name: 'Hair Coloring', price: 'From R400', description: 'Full color, highlights, balayage' },
  { name: 'Hair Treatment', price: 'From R350', description: 'Deep conditioning and repair' },
  { name: 'Beard Grooming', price: 'From R120', description: 'Trim, shape, and condition' },
  { name: 'Kids Haircut', price: 'From R100', description: 'Fun and friendly service for children' },
];

const homeServices = [
  { name: 'Home Haircut & Styling', price: 'R450', description: 'Professional haircut at your location' },
  { name: 'Home Braiding Service', price: 'R800', description: 'Braiding services in your comfort' },
  { name: 'Bridal Home Package', price: 'R2,500', description: 'Complete bridal styling at home' },
  { name: 'Event Styling Package', price: 'R3,000', description: 'Group styling for special occasions' },
];

const ServiceCard = ({ service, index }: { service: typeof mainServices[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    // <motion.div
    //   ref={ref}
    //   initial={{ opacity: 0, y: 40 }}
    //   animate={isInView ? { opacity: 1, y: 0 } : {}}
    //   transition={{ duration: 0.6, delay: index * 0.1 }}
    //   className="group glass-card-hover overflow-hidden"
    // >
    //   {/* Image */}
    //   <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
    //     <img
    //       src={service.image}
    //       alt={service.title}
    //       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    //     />
    //     <div className="service-overlay absolute inset-0" />
        
    //     {/* Price Badge */}
    //     <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary/90 text-primary-foreground px-2.5 py-1 sm:px-3 rounded-sm text-xs sm:text-sm font-semibold">
    //       {service.price}
    //     </div>
        
    //     {/* Icon */}
    //     <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2.5 sm:p-3 bg-background/80 backdrop-blur-sm rounded-full border border-primary/30">
    //       <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
    //     </div>
    //   </div>

    //   {/* Content */}
    //   <div className="p-4 sm:p-5 md:p-6">
    //     <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2 sm:mb-3">
    //       <Clock size={12} className="sm:w-3.5 sm:h-3.5" />
    //       <span>{service.duration}</span>
    //     </div>
    //     <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
    //       {service.title}
    //     </h3>
    //     <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
    //       {service.description}
    //     </p>
        
    //     {/* Features */}
    //     <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
    //       {service.features.map((feature) => (
    //         <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
    //           <Star className="w-3 h-3 text-primary flex-shrink-0" />
    //           <span>{feature}</span>
    //         </li>
    //       ))}
    //     </ul>
        
    //     <a href="/#booking" className="btn-gold w-full text-xs sm:text-sm py-2.5 sm:py-3 flex items-center justify-center gap-2">
    //       Book Now
    //       <ArrowRight size={14} />
    //     </a>
    //   </div>
    // </motion.div>
    <div><h1>Coming Soon</h1></div>
  );
};

const ServicesPage = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className={`${isMobileApp ? 'pt-12 pb-24' : 'pt-24 pb-32'}`}>
        {/* Hero Section */}
        <section className={`${isMobileApp ? 'pt-14 pb-6 px-4' : 'pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 lg:pt-36 lg:pb-16'} relative overflow-hidden`}>
          {/* App-Specific Glow (Smaller for less visual noise on mobile screens) */}
          <div className={`absolute inset-0 bg-gold-radial ${isMobileApp ? 'opacity-10 scale-150' : 'opacity-20'}`} />
          
          <div className={`${isMobileApp ? 'w-full' : 'container mx-auto px-4 sm:px-6'} relative z-10`}>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: isMobileApp ? 10 : 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={isMobileApp ? "text-left" : "text-center"}
            >
              {/* Mobile Badge instead of plain text span */}
              {isMobileApp ? (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold">
                    Premium Menu
                  </span>
                </div>
              ) : (
                <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-2 sm:mb-4 block">
                  What We Offer
                </span>
              )}

              <h1 className={`font-serif font-bold text-foreground mb-3 sm:mb-6 ${isMobileApp ? 'text-4xl leading-tight' : 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl'}`}>
                Our <span className={isMobileApp ? "gold-text" : "gold-text-shimmer"}>Services</span>
              </h1>

              {/* Hide divider on App to save vertical space; use left-border for text instead */}
              {!isMobileApp ? (
                <div className="section-divider mb-4 sm:mb-6" />
              ) : (
                <div className="h-0.5 w-12 bg-primary/40 rounded-full mb-4" />
              )}

              <p className={`text-muted-foreground leading-relaxed ${isMobileApp ? 'text-sm max-w-[90%] border-l-2 border-primary/10 pl-4 italic' : 'text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2'}`}>
                Experience the pinnacle of grooming excellence with our curated selection 
                of premium services.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Main Services Grid */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background-secondary relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8 md:mb-12"
            >
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
                Signature <span className="gold-text">Treatments</span>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl mx-auto">
                Our most popular services, delivered with precision and care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {mainServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8 md:mb-12"
            >
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
                Additional <span className="gold-text">Services</span>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl mx-auto">
                Complete your look with our range of supplementary treatments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            
              <h2>Coming Soon</h2>
            </div>
          </div>
        </section>

        {/* Home Services Section */}
        <section className={`${isMobileApp ? 'py-10 pb-20' : 'py-8 sm:py-20'} bg-background-secondary relative overflow-hidden`}>
          {/* App-Style Top Border for Section Separation */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className={`absolute inset-0 bg-gold-radial ${isMobileApp ? 'opacity-5' : 'opacity-10'}`} />
          
          <div className={`${isMobileApp ? 'px-4' : 'container mx-auto px-6'} relative z-10`}>
            {/* Header Refactor: App-style Left Alignment */}
            <motion.div
              initial={{ opacity: 0, x: isMobileApp ? -20 : 0, y: isMobileApp ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`${isMobileApp ? 'mb-8' : 'text-center mb-12'}`}
            >
              <div className={`inline-flex items-center gap-2 mb-3 ${isMobileApp ? 'bg-primary/10 px-3 py-1 rounded-full' : ''}`}>
                <Home className={`${isMobileApp ? 'w-4 h-4' : 'w-6 h-6'} text-primary`} />
                <span className="text-primary text-[9px] sm:text-xs uppercase tracking-[0.2em] font-black">
                  On-Demand Luxury
                </span>
              </div>
              
              <h2 className={`font-serif font-bold text-foreground mb-2 ${isMobileApp ? 'text-3xl italic' : 'text-xl sm:text-4xl'}`}>
                Home <span className="gold-text">Services</span>
              </h2>
              
              <p className={`text-muted-foreground ${isMobileApp ? 'text-xs max-w-[80%] leading-relaxed' : 'text-xs sm:text-base max-w-xl mx-auto'}`}>
                Experience our luxury salon services in the comfort of your own space. 
                {isMobileApp && <span className="block mt-1 text-primary/80 font-bold uppercase tracking-tighter">Available across Cape Town</span>}
              </p>
            </motion.div>

            {/* List Refactor: Single Column for App Browsing */}
            <div className={`grid ${isMobileApp ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto'}`}>
              {homeServices.length > 0 ? (
                homeServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${
                      isMobileApp 
                      ? 'bg-background p-5 rounded-3xl border-l-4 border-l-primary shadow-sm active:scale-[0.98]' 
                      : 'glass-card-hover p-6 border border-border/50'
                    } transition-all relative overflow-hidden`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className={`font-serif font-bold text-foreground ${isMobileApp ? 'text-lg' : 'text-base sm:text-lg'}`}>
                        {service.name}
                      </h3>
                      <span className="text-primary font-black text-sm sm:text-base whitespace-nowrap bg-primary/5 px-2 py-1 rounded-lg">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-[11px] sm:text-sm mb-4 leading-snug">
                      {service.description}
                    </p>
                    
                    <Link 
                      to="/contact" 
                      className={`inline-flex items-center gap-2 font-bold tracking-widest uppercase transition-all ${
                        isMobileApp ? 'text-[10px] text-primary' : 'text-primary text-xs sm:text-sm'
                      }`}
                    >
                      Request Home Visit
                      <ArrowRight size={14} className={isMobileApp ? 'text-primary' : ''} />
                    </Link>
                  </motion.div>
                ))
              ) : (
                /* The "Coming Soon" Refactor */
                <div className={`flex flex-col items-center justify-center p-12 text-center rounded-3xl border-2 border-dashed border-border/40 ${isMobileApp ? 'bg-secondary/5' : ''}`}>
                  <Clock className="w-8 h-8 text-primary/40 mb-3 animate-pulse" />
                  <h3 className="font-serif text-lg font-bold text-muted-foreground/60 italic">Launching Soon</h3>
                  <p className="text-[10px] text-muted-foreground/40 uppercase tracking-widest mt-1">Mobile Grooming Experience</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${isMobileApp ? 'py-12 pb-32 bg-secondary/5' : 'py-10 sm:py-20 bg-background'} relative overflow-hidden`}>
          {/* App-Specific Glow (More subtle to keep text sharp) */}
          <div className={`absolute inset-0 bg-gold-radial ${isMobileApp ? 'opacity-5 scale-125' : 'opacity-10'}`} />
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: isMobileApp ? 0.95 : 1, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`font-serif font-bold text-foreground mb-3 ${isMobileApp ? 'text-2xl leading-tight italic' : 'text-xl sm:text-4xl'}`}>
                Ready to <span className="gold-text">Transform</span> Your Look?
              </h2>
              
              <p className={`text-muted-foreground mx-auto mb-8 px-4 ${isMobileApp ? 'text-[13px] leading-relaxed max-w-xs border-l-2 border-primary/20 italic' : 'max-w-lg text-xs sm:text-base'}`}>
                Book your appointment today and experience the <span className="text-foreground font-bold">Teephyno Cutz</span> difference.
              </p>

              {/* BUTTON REFACTOR: Native App Vertical Stack vs Web Horizontal */}
              <div className={`flex flex-col items-center justify-center gap-4 ${isMobileApp ? 'w-full max-w-sm mx-auto' : 'sm:flex-row'}`}>
                <a 
                  href="/#booking" 
                  className={`btn-gold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-transform active:scale-[0.96] ${isMobileApp ? 'w-full py-4 rounded-2xl text-sm font-black tracking-widest' : 'w-full sm:w-auto px-8'}`}
                >
                  {isMobileApp && <Star size={16} fill="white" />}
                  SECURE BOOKING
                </a>
                
                <Link 
                  to="/contact" 
                  className={`flex items-center justify-center transition-all active:opacity-60 ${isMobileApp ? 'text-primary text-xs font-bold uppercase tracking-widest py-2' : 'btn-ghost w-full sm:w-auto px-8'}`}
                >
                  {isMobileApp ? 'Need Help? Contact Support' : 'Contact Us'}
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* App-Only Bottom Safe Area Spacer */}
          {isMobileApp && <div className="h-10" />}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
