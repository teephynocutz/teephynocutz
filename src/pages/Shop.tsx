import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ShoppingBag, Sparkles, Home, Palette, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const shopCategories = [
  {
    id: 'wigs',
    name: 'Wigs',
    icon: Sparkles,
    description: 'Premium quality wigs for every style and occasion',
    items: [
      { 
        name: 'Bone Straight 5 by 5 wig', 
        price: 'R5,000', 
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400' 
      },
      { name: 'Lace Front Straight Wig', price: 'R3,200', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400' },
      { name: 'Curly Bob Wig', price: 'R1,800', image: 'https://images.unsplash.com/photo-1605980625600-88d6a5894a49?w=400' },
      { name: 'Deep Wave HD Lace Wig', price: 'R4,500', image: 'https://images.unsplash.com/photo-1560869713-bf6f1ce88db3?w=400' },
      { name: 'Pixie Cut Wig', price: 'R1,500', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400' },
      { name: 'Long Straight Silk Wig', price: 'R3,800', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400' },
    ],
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    icon: Palette,
    description: 'Professional hair coloring services and products',
    items: [
      { name: 'Full Color Treatment', price: 'R850', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
      { name: 'Highlights & Lowlights', price: 'R1,200', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400' },
      { name: 'Balayage Treatment', price: 'R1,500', image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400' },
      { name: 'Ombre Coloring', price: 'R1,300', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400' },
      { name: 'Vivid Fashion Colors', price: 'R1,800', image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400' },
      { name: 'Color Correction', price: 'R2,000', image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400' },
    ],
  },
  {
    id: 'home-services',
    name: 'Home Services',
    icon: Home,
    description: 'Luxury salon experience at your doorstep',
    items: [
      { name: 'Home Haircut & Styling', price: 'R450', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400' },
      { name: 'Home Braiding Service', price: 'R800', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400' },
      { name: 'Bridal Home Package', price: 'R2,500', image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400' },
      { name: 'Home Manicure & Pedicure', price: 'R600', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400' },
      { name: 'Event Styling Package', price: 'R3,000', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400' },
      { name: 'Full Glam Home Package', price: 'R4,500', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400' },
    ],
  },
  {
    id: 'polish-nails',
    name: 'Polish & Nails',
    icon: Star,
    description: 'Stunning nail art and polish services',
    items: [
      { name: 'Classic Manicure', price: 'R180', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400' },
      { name: 'Gel Polish Nails', price: 'R350', image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400' },
      { name: 'Acrylic Full Set', price: 'R550', image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400' },
      { name: 'Nail Art Design', price: 'R400', image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=400' },
      { name: 'Spa Pedicure', price: 'R280', image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400' },
      { name: 'Chrome & Ombre Nails', price: 'R480', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400' },
    ],
  },
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('wigs');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const currentCategory = shopCategories.find((cat) => cat.id === activeCategory);

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
              Premium Products & Services
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="gold-text-shimmer">Shop</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Discover premium wigs, professional hair coloring, luxurious nail services, 
              and convenient home services tailored for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-4 sm:py-6 md:py-8 border-y border-border/30 sticky top-16 sm:top-20 bg-background/95 backdrop-blur-lg z-30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {shopCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background-secondary text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/50'
                }`}
              >
                <category.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          {currentCategory && (
            <>
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  {currentCategory.name}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">{currentCategory.description}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                {currentCategory.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card group overflow-hidden"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                        {item.name}
                      </h3>
                      <button className="w-full btn-gold text-xs sm:text-sm py-2 sm:py-3 flex items-center justify-center gap-2">
                        <ShoppingBag size={16} />
                        Add to Cart
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-radial opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Need Something <span className="gold-text">Custom?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
              Contact us for custom wig orders, special packages, or personalized services 
              tailored to your unique needs.
            </p>
            <a href="/contact" className="btn-gold inline-block">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
