import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Star, Gem } from 'lucide-react';

import salonInside from '@/assets/salon-inside.jpg';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Team',
    description: 'Our stylists are internationally trained and certified professionals.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    description: 'We use only the finest grooming products from luxury brands.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every client receives a customized consultation and experience.',
  },
  {
    icon: Star,
    title: 'Exceptional Results',
    description: 'We don\'t stop until you\'re completely satisfied with your look.',
  },
];

const About = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10">
              <img
                src={salonInside}
                alt="Teephyno Cutz Interior"
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-sm"
              />
            </div>
            {/* Gold Frame - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-sm z-0" />
            
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 glass-card p-6 z-20"
            >
              <div className="text-4xl font-serif font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Crafting <span className="gold-text">Confidence</span> Since 2014
            </h2>
            <div className="section-divider mb-6 sm:mb-8 !mx-0" />
            
            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
              <p>
                At Teephyno Cutz, we believe that grooming is more than just a service—it's an 
                experience. Located in the heart of Long Street, Cape Town, our luxury salon has 
                been setting the standard for premium grooming services for over a decade.
              </p>
              <p>
                Our team of master stylists brings together expertise from around the world, 
                combining traditional techniques with contemporary trends to create looks that 
                are both timeless and cutting-edge.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
