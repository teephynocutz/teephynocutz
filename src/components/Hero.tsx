import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import salonInterior from '@/assets/vid-bg-ios.mp4';
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {});
    };
    attemptPlay();

    // iOS fallback: play after first user interaction
    document.addEventListener("touchstart", attemptPlay, { once: true });

    return () => {
      document.removeEventListener("touchstart", attemptPlay);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
       <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
        disablePictureInPicture
        controls={false}
        className="w-full h-full object-cover object-center"

      >
        <source src={salonInterior} ></source>
      </video>


        {/* Fallback image for browsers that don't support video */}
        
      </motion.div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Gold Radial Glow */}
      <div className="absolute inset-0 bg-gold-radial opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 mt-16"
        >
          <span className="inline-block px-4 py-2 border border-primary/40 rounded-full text-primary text-xs uppercase tracking-[0.3em] font-medium">
            Premium Grooming Experience
          </span>
        </motion.div>

        <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
>
  You ask.
  <br />
  <span className="gold-text-shimmer">We cut.</span>
  <br />
  <span className="text-primary/90">You glow.</span>
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 font-light leading-relaxed"
        >
          Elevate your style with us where precision meets artistry. Experience luxury grooming at Cape Town's 
          most exclusive unisex salon, where every cut and hair styling tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#booking" className="btn-gold">
            Book Appointment
          </a>
          <a href="#services" className="btn-ghost">
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xl mx-auto px-4"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '5K+', label: 'Happy Clients' },
            { value: '15+', label: 'Expert Stylists' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
