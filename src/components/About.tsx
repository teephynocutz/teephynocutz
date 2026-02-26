import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Star, Gem, CheckCircle2 } from 'lucide-react';

import salonInside from '@/assets/salon-inside.jpg';

// 1. Mobile Detection Logic
const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

const features = [
  {
    icon: Award,
    title: 'Award-Winning Team',
    description: 'Internationally trained and certified professionals.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    description: 'The finest grooming products from luxury brands.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every client receives a customized consultation.',
  },
  {
    icon: Star,
    title: 'Exceptional Results',
    description: 'Complete satisfaction with your final look.',
  },
];

const About = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section 
      id="about" 
      className={`${isMobileApp ? 'py-10 pb-20' : 'py-16 md:py-32'} bg-background-secondary relative overflow-hidden`}
    >
      {/* Decorative Gradient Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`grid ${isMobileApp ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8 items-center`}>
          
          {/* 1. CONTENT BLOCK (Top on Mobile for Context) */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={isMobileApp ? 'order-1' : 'order-1 lg:order-2'}
          >
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2 block">
              Our Legacy
            </span>
            <h2 className={`font-serif ${isMobileApp ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold text-foreground mb-4 leading-tight`}>
              Crafting <span className="gold-text">Confidence</span> Since 2014
            </h2>
            <div className={`section-divider mb-6 ${isMobileApp ? '!mx-0 w-16' : '!mx-0'}`} />
            
            <div className={`space-y-4 text-muted-foreground leading-relaxed ${isMobileApp ? 'text-sm' : 'text-base'}`}>
              <p>
                At Teephyno Cutz, we believe grooming is an experience. Based in 
                <span className="text-foreground font-medium"> Long Street, Cape Town</span>, 
                we've set the standard for luxury for over a decade.
              </p>
              {isMobileApp && (
                <div className="bg-primary/5 border-l-2 border-primary p-3 rounded-r-xl italic text-xs">
                  "Combining traditional techniques with contemporary trends."
                </div>
              )}
            </div>

            {/* MOBILE FEATURE LIST (Simplified) */}
            {isMobileApp ? (
              <div className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-background/50 p-3 rounded-2xl border border-border/40"
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* DESKTOP FEATURE GRID */
              <div className="grid grid-cols-2 gap-6 mt-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* 2. IMAGE BLOCK (Bottom on Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative ${isMobileApp ? 'order-2 mt-6' : 'order-2 lg:order-1'}`}
          >
            <div className="relative z-10">
              <img
                src={salonInside}
                alt="Teephyno Cutz Interior"
                className={`w-full object-cover shadow-2xl ${isMobileApp ? 'h-[250px] rounded-3xl' : 'h-[500px] rounded-sm'}`}
              />
            </div>

            {/* EXPERIENCE BADGE (Refactored for App) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className={`absolute z-20 bg-primary p-4 shadow-xl ${
                isMobileApp ? '-top-4 -right-4 rounded-2xl' : '-bottom-8 -left-8 glass-card rounded-sm'
              }`}
            >
              <div className={`${isMobileApp ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-white`}>10+</div>
              <div className={`${isMobileApp ? 'text-[8px]' : 'text-sm'} text-white/80 uppercase tracking-widest font-bold`}>Years</div>
            </motion.div>

            {!isMobileApp && (
               <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-sm z-0" />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
