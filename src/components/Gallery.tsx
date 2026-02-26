import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Instagram, Maximize2, Share2 } from 'lucide-react';

// Assets
import salonInside from '@/assets/welcome-section.jpg';
import salonInside2 from '@/assets/hairdresser.jpg';
import salonCouch from '@/assets/salon-couch.jpg';
import banner from '@/assets/banners.jpeg';
import serviceHaircut from '@/assets/salon-sapce-3.jpg';
import serviceBraids from '@/assets/salon-inside.jpg';
import poolTable from '@/assets/interior-pool-table.jpg';

const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

const galleryImages = [
  { src: salonInside, alt: 'Salon Interior', span: 'col-span-2 row-span-2' },
  { src: serviceHaircut, alt: 'Precision Haircut', span: 'col-span-1 row-span-1' },
  { src: serviceBraids, alt: 'Expert Braiding', span: 'col-span-1 row-span-1' },
  { src: salonCouch, alt: 'Waiting Area', span: 'col-span-1 row-span-1' },
  { src: banner, alt: 'Teephyno Cutz Banner', span: 'col-span-1 row-span-1' },
  { src: poolTable, alt: 'Pool Table', span: 'col-span-1 row-span-1' },
  { src: salonInside2, alt: 'Salon View', span: 'col-span-2 row-span-1' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section 
      id="gallery" 
      className={`${isMobileApp ? 'py-10 pb-24' : 'py-16 md:py-32'} bg-background relative overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          className={`${isMobileApp ? 'text-left' : 'text-center'} mb-10`}
        >
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
            Visual Experience
          </span>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-foreground">
            The <span className="gold-text">Gallery</span>
          </h2>
          {!isMobileApp && <div className="section-divider mx-auto mt-6" />}
        </motion.div>

        {/* Gallery Grid: Refactored for Mobile App "Feed" Look */}
        <div className={`grid ${isMobileApp ? 'grid-cols-2 gap-2 auto-rows-[120px]' : 'grid-cols-4 gap-4 auto-rows-[250px]'}`}>
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: isMobileApp ? (index % 4) * 0.05 : index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden group cursor-pointer ${
                isMobileApp 
                ? (index === 0 ? 'col-span-2 row-span-2 rounded-2xl' : 'col-span-1 row-span-1 rounded-xl')
                : `${image.span} rounded-sm`
              } active:scale-[0.98] transition-transform`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              
              {/* MOBILE: Mini-icon overlay instead of text button */}
              {isMobileApp ? (
                <div className="absolute top-2 right-2 p-1.5 bg-black/20 backdrop-blur-md rounded-full">
                  <Maximize2 size={12} className="text-white/80" />
                </div>
              ) : (
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40">
                  <span className="px-5 py-2 border border-white text-white text-xs font-bold uppercase tracking-widest">
                    View Project
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA - Native App Style */}
        <motion.div className="mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${
              isMobileApp 
              ? 'bg-secondary/10 py-4 rounded-2xl border-none' 
              : 'border border-primary/40 py-3 rounded-full hover:bg-primary/10 transition-all'
            }`}
          >
            <Instagram size={isMobileApp ? 24 : 20} className="text-primary" />
            <span className={`font-bold ${isMobileApp ? 'text-sm' : 'text-xs uppercase tracking-widest'}`}>
              Follow our daily cuts
            </span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox / Native Preview Sheet */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 pt-14 pb-4">
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-white/10 rounded-full text-white"
              >
                <X size={24} />
              </button>
              <div className="flex gap-4">
                 <button className="p-2 bg-white/10 rounded-full text-white"><Share2 size={20} /></button>
              </div>
            </div>

            {/* Main Image View */}
            <div className="flex-grow flex items-center justify-center p-4">
              <motion.img
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                src={selectedImage}
                className={`max-w-full max-h-[70vh] object-contain ${isMobileApp ? 'rounded-3xl shadow-2xl' : ''}`}
              />
            </div>

            {/* Bottom App Branding */}
            {isMobileApp && (
              <div className="pb-12 text-center">
                <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-bold">Teephyno Cutz Luxury</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
