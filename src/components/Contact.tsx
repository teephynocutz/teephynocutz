import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, MessageCircle } from 'lucide-react';
import { SiTiktok } from "react-icons/si";

// 1. Mobile Detection Logic
const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

const Contact = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // 2. Actionable Links for App Feel
  const handleCall = (num: string) => window.open(`tel:${num.replace(/\s/g, '')}`, '_system');
  const handleMap = () => window.open(`https://www.google.com`, '_system');
  const handleEmail = () => window.open(`mailto:teephynocutz@gmail.com`, '_system');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['105 Long Street', 'Cape Town, 8001'],
      action: handleMap,
      actionLabel: 'Open Maps'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+27 69 849 0110', '+27 75 174 0778'],
      action: () => handleCall('+27698490110'),
      actionLabel: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['teephynocutz@gmail.com'],
      action: handleEmail,
      actionLabel: 'Write Us'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Sat: 9AM - 12AM', 'Sun: 12PM - 12AM'],
      action: null,
    },
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/teephyno_cutz', label: 'Instagram' },
    { icon: SiTiktok, href: 'https://www.tiktok.com/@teephynobarber', label: 'Tiktok' },
  ];

  return (
    <section id="contact" className={`${isMobileApp ? 'py-10 pb-28' : 'py-16 md:py-32'} bg-background relative`}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          className={`${isMobileApp ? 'text-left' : 'text-center'} mb-10`}
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
            Connect With Us
          </span>
          <h2 className={`font-serif ${isMobileApp ? 'text-3xl' : 'text-4xl md:text-6xl'} font-bold text-foreground`}>
            Visit <span className="gold-text">The Salon</span>
          </h2>
          {!isMobileApp && <div className="section-divider mx-auto mt-6" />}
        </motion.div>

        <div className={`grid ${isMobileApp ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
          
          {/* CONTACT ACTIONS LIST */}
          <div className="space-y-4">
            <div className={`grid ${isMobileApp ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  onClick={info.action || undefined}
                  className={`glass-card p-5 border border-border/40 ${info.action ? 'active:scale-[0.98] active:bg-secondary/10 transition-all cursor-pointer' : ''}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    {isMobileApp && info.action && (
                      <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-tighter">
                        {info.actionLabel} <ExternalLink size={10} />
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground mb-1">{info.title}</h4>
                  {info.details.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-xs leading-relaxed">{line}</p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Social & WhatsApp App CTA */}
            <div className={`flex flex-col gap-4 ${isMobileApp ? 'mt-2' : ''}`}>
               {isMobileApp && (
                  <button 
                    onClick={() => window.open('https://wa.me', '_system')}
                    className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold active:scale-95 transition-transform"
                  >
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </button>
               )}
               
               <div className="glass-card p-5 flex items-center justify-between">
                  <span className="font-serif font-bold italic">Join the community</span>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <a key={social.label} href={social.href} className="p-2.5 bg-background border border-border rounded-full text-primary active:scale-90 transition-transform">
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* MAP BLOCK - Refactored for Mobile */}
          <motion.div
            className={`relative rounded-3xl overflow-hidden ${isMobileApp ? 'h-[250px] border-2 border-primary/10' : 'h-full min-h-[400px]'}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8908913454714!2d18.41768031521095!3d-33.92138398063774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676f1a97f7b7%3A0x8a9c0a9c0a9c0a9c!2sLong%20Street%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: isMobileApp ? 'none' : 'grayscale(100%) invert(92%) contrast(85%)' }}
              allowFullScreen
              loading="lazy"
            />
            {isMobileApp && (
              <div 
                onClick={handleMap}
                className="absolute inset-0 bg-black/10 flex items-center justify-center cursor-pointer"
              >
                <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-2">
                  <MapPin size={14} /> Tap to Navigate
                </span>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
