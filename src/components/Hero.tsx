import { motion } from 'framer-motion';
import { ChevronDown, Star, Scissors } from 'lucide-react';
import salonInterior from '@/assets/vid-bg-ios.mp4';
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-banner.png';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobileApp = navigator.userAgent.includes("TeephynoCutzApp-1.0");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const attemptPlay = () => { video.play().catch(() => {}); };
    attemptPlay();
    document.addEventListener("touchstart", attemptPlay, { once: true });
    return () => document.removeEventListener("touchstart", attemptPlay);
  }, []);

  return (
    <section id="home" className={`relative ${isMobileApp ? 'h-[92vh]' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Background Video - Optimized for App Performance */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <video
          ref={videoRef}
          muted loop playsInline autoPlay
          disablePictureInPicture
          className="w-full h-full object-cover grayscale-[20%]"
        >
          <source src={salonInterior} type="video/mp4" />
        </video>
        {/* Darker Overlay for App readability */}
        <div className={`absolute inset-0 ${isMobileApp ? 'bg-black/60' : 'hero-overlay'}`} />
        <div className="absolute inset-0 bg-gold-radial opacity-40" />
      </motion.div>

      {/* Content Container */}
      <div className={`relative z-10 w-full px-6 text-center ${isMobileApp ? 'pt-10' : 'py-4'}`}>
        
        {/* App Logo & Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={isMobileApp ? "mb-4" : "mb-6 mt-16"}
        >
          {isMobileApp && (
            <div className="flex flex-col items-center mb-6">
              <img src={logo} alt="Teephyno Cutz" className="h-20 w-auto drop-shadow-2xl mb-4" />
              <div className="h-px w-12 bg-primary/50" />
            </div>
          )}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 bg-primary/5 backdrop-blur-md rounded-full text-primary text-[10px] uppercase tracking-[0.3em] font-bold">
            {isMobileApp && <Star size={10} fill="currentColor" />}
            Premium Grooming
          </span>
        </motion.div>

        {/* Punchy App Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`font-serif font-bold text-foreground leading-[1.1] ${isMobileApp ? 'text-5xl mb-8' : 'text-4xl md:text-8xl mb-6'}`}
        >
          {isMobileApp ? (
            <>
              You ask. <span className="gold-text">We cut.</span> <br/>
              <span className="text-primary/90 italic">You glow.</span>
            </>
          ) : (
            <>You ask. <br /> <span className="gold-text-shimmer">We cut.</span> <br /> <span className="text-primary/90">You glow.</span></>
          )}
        </motion.h1>

        {/* Mobile Action Buttons - Thumb Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`flex flex-col gap-4 max-w-xs mx-auto ${isMobileApp ? 'mt-4' : 'sm:flex-row justify-center'}`}
        >
          <Link to="/booking" className={`btn-gold flex items-center justify-center gap-3 active:scale-95 transition-transform ${isMobileApp ? 'py-5 rounded-2xl text-sm' : ''}`}>
            {isMobileApp && <Scissors size={18} />}
            BOOK APPOINTMENT
          </Link>

          <Link to="/services" className={`font-bold uppercase tracking-widest active:opacity-60 transition-opacity ${isMobileApp ? 'text-white/70 text-xs py-2' : 'btn-ghost'}`}>
            Explore Services
          </Link>
        </motion.div>

        {/* Stats Refactor - High Density for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`grid grid-cols-3 gap-2 max-w-sm mx-auto ${isMobileApp ? 'mt-12 bg-white/5 backdrop-blur-sm p-4 rounded-3xl border border-white/10' : 'mt-20'}`}
        >
          {[
            { value: '10+', label: 'Years' },
            { value: '5K+', label: 'Clients' },
            { value: '15+', label: 'Artists' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${isMobileApp ? 'text-xl' : 'text-4xl'} font-serif font-bold text-primary`}>
                {stat.value}
              </div>
              <div className="text-[8px] text-white/50 uppercase font-black tracking-tighter leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hide Scroll Indicator in-app to keep UI clean */}
      {!isMobileApp && (
        <motion.a
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/60"
        >
          <ChevronDown size={32} />
        </motion.a>
      )}
    </section>
  );
};

export default Hero;
