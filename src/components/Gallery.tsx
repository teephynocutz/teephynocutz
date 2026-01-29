import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Instagram } from 'lucide-react';

import salonInside from '@/assets/salon-inside.jpg';
import salonInside2 from '@/assets/salon-inside-2.jpg';
import salonCouch from '@/assets/salon-couch.jpg';
import banner from '@/assets/banner.jpg';
import serviceHaircut from '@/assets/service-haircut.jpg';
import serviceBraids from '@/assets/service-braids.jpg';

const galleryImages = [
  { src: salonInside, alt: 'Salon Interior', span: 'col-span-2 row-span-2' },
  { src: serviceHaircut, alt: 'Precision Haircut', span: 'col-span-1 row-span-1' },
  { src: serviceBraids, alt: 'Expert Braiding', span: 'col-span-1 row-span-1' },
  { src: salonCouch, alt: 'Waiting Area', span: 'col-span-1 row-span-1' },
  { src: banner, alt: 'Teephyno Cutz Banner', span: 'col-span-1 row-span-1' },
  { src: salonInside2, alt: 'Salon View', span: 'col-span-2 row-span-1' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background-secondary relative overflow-hidden">
      {/* Subtle Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
            Our Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            The <span className="gold-text">Gallery</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of luxury grooming. Every image tells 
            the story of transformation and attention to detail.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`gallery-item cursor-pointer ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 border border-primary/40 rounded-full text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Instagram size={20} />
            <span className="text-sm font-medium">Follow Us on Instagram</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
