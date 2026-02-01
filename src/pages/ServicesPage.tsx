import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scissors, Sparkles, Crown, Wind, Home, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import serviceHaircut from '@/assets/service-haircut.jpg';
import serviceManicure from '@/assets/service-manicure.jpg';
import serviceBraids from '@/assets/service-braids.jpg';
import serviceShaving from '@/assets/service-shaving.jpg';

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
    image: serviceBraids,
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

      {/* Hero Section */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-28 md:pb-12 lg:pt-36 lg:pb-16 relative">
        <div className="absolute inset-0 bg-gold-radial opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-2 sm:mb-4 block">
              What We Offer
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 sm:mb-6">
              Our <span className="gold-text-shimmer">Services</span>
            </h1>
            <div className="section-divider mb-4 sm:mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
              Experience the pinnacle of grooming excellence with our curated selection 
              of premium services designed for the modern individual.
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
            {/* {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {service.description}
                  </p>
                </div>
                <span className="text-primary font-semibold text-sm sm:text-base whitespace-nowrap">
                  {service.price}
                </span>
              </motion.div>
            ))} */}
            <h2>Coming Soon</h2>
          </div>
        </div>
      </section>

      {/* Home Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gold-radial opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 md:mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium">
                Convenience at Your Doorstep
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-4">
              Home <span className="gold-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xl mx-auto">
              Experience our luxury salon services in the comfort of your own home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* {homeServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover p-4 sm:p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                  {service.description}
                </p>
                <Link to="/contact" className="text-primary text-xs sm:text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Book Home Visit
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))} */}
            <h2>Comming Soon</h2>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-radial opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to <span className="gold-text">Transform</span> Your Look?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-5 sm:mb-6 md:mb-8 text-xs sm:text-sm md:text-base px-4">
              Book your appointment today and experience the Teephyno Cutz difference
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="/#booking" className="btn-gold w-full sm:w-auto">
                Book Appointment
              </a>
              <Link to="/contact" className="btn-ghost w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
