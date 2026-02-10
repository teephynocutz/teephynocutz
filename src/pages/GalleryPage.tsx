import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Instagram, Grid, Rows } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import salonInside from '@/assets/salon-inside.jpg';
import salonInside2 from '@/assets/salon-inside-2.jpg';
import salonCouch from '@/assets/salon-couch.jpg';
import banners from '@/assets/banners.jpeg';
import serviceBraids from '@/assets/service-braids.jpg';
import serviceManicure from '@/assets/service-manicure.jpg';
import haircutZero from '@/assets/men/haircut-0.jpeg';
import haircutOne from '@/assets/men/haircut-1.jpeg';
import haircutTwo from '@/assets/men/haircut-2.jpeg';
import haircutThree from '@/assets/men/haircut-3.jpg';
import haircutFour from '@/assets/men/haircut-4.jpg';
import haircutFive from '@/assets/men/haircut-5.jpg';
import serviceShaving from "@/assets/services/shaving.jpg"

const galleryImages = [
  { src: salonInside, alt: 'Salon Interior', category: 'Interior' },
  { src:haircutZero, alt: 'Precision Haircut', category: 'Haircuts' },
  { src: serviceBraids, alt: 'Expert Braiding', category: 'Braids' },
  { src: haircutOne, alt: 'Style Cut', category: 'Haircuts' },
  { src: salonCouch, alt: 'Waiting Area', category: 'Interior' },
  { src: banners, alt: 'Teephyno Cutz Banner', category: 'Brand' },
   { src: haircutTwo, alt: 'Style Cut', category: 'Haircuts' },
  { src: salonInside2, alt: 'Salon View', category: 'Interior' },
  { src: serviceManicure, alt: 'Nail Care', category: 'Nails' },
   { src: haircutThree, alt: 'Style Cut', category: 'Haircuts' },
  { src: serviceShaving, alt: 'Classic Shave', category: 'Grooming' },
  { src: salonInside, alt: 'Premium Space', category: 'Interior' },
   { src: haircutFour, alt: 'Style Cut', category: 'Haircuts' },
  { src: serviceBraids, alt: 'Braiding Art', category: 'Braids' },
  { src: serviceManicure, alt: 'Manicure', category: 'Nails' },
   { src: haircutFive, alt: 'Style Cut', category: 'Haircuts' },
];

const categories = ['All', 'Interior', 'Haircuts', 'Braids', 'Nails', 'Grooming', 'Brand'];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16 lg:pb-24 relative">
        <div className="absolute inset-0 bg-gold-radial opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
              Our Portfolio
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6">
              The <span className="gold-text-shimmer">Gallery</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A glimpse into our world of luxury grooming. Every image tells 
              the story of transformation and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="py-4 sm:py-6 border-y border-border/30 sticky top-16 sm:top-20 bg-background/95 backdrop-blur-lg z-30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background-secondary text-muted-foreground hover:text-foreground border border-border/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-background-secondary rounded-full p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'masonry' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                <Rows size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            layout
            className={
              viewMode === 'masonry'
                ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'
                : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            }
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.alt}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`gallery-item cursor-pointer overflow-hidden rounded-sm ${
                  viewMode === 'masonry' ? 'break-inside-avoid' : 'aspect-square'
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-500 hover:scale-110 ${
                    viewMode === 'masonry' ? 'h-auto' : 'h-full'
                  }`}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm mb-2">
                    View
                  </span>
                  <span className="text-xs text-muted-foreground">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-radial opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Instagram className="w-10 sm:w-12 h-10 sm:h-12 text-primary mx-auto mb-4 sm:mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Follow Our <span className="gold-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
              See more of our work and stay updated with the latest styles, 
              trends, and transformations on Instagram.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-gold"
            >
              <Instagram size={20} />
              <span>@teephynocutz</span>
            </a>
          </motion.div>
        </div>
      </section>

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

      <Footer />
    </div>
  );
};

export default GalleryPage;
