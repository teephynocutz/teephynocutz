import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ShoppingBag, Sparkles, Home, Palette, Star, Search, ChevronRight } from 'lucide-react';
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

// 1. Mobile Detection Logic
const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('wigs');
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const currentCategory = shopCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-background select-none">
      {/* 2. NAVIGATION: Hide web navbar in app */}
      {!isMobileApp && <Navbar />}

      {/* Hero Section: Drastically reduced for App version */}
      <section className={`${isMobileApp ? 'pt-14 pb-4 px-4 bg-background' : 'pt-24 pb-10 bg-gold-radial opacity-20'} relative overflow-hidden`}>
        <div className={`${isMobileApp ? 'w-full' : 'container mx-auto px-4'} relative z-10`}>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: isMobileApp ? 10 : 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className={isMobileApp ? "text-left" : "text-center"}
          >
            {isMobileApp ? (
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="font-serif text-3xl font-bold tracking-tight">Luxury <span className="gold-text">Store</span></h1>
                  <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-1">Premium Collection</p>
                </div>
                <div className="p-2 bg-secondary/20 rounded-full active:bg-primary/20 transition-colors">
                  <Search size={20} className="text-primary" />
                </div>
              </div>
            ) : (
              <>
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-4 block">Premium Products & Services</span>
                <h1 className="font-serif text-7xl font-bold text-foreground mb-6">Our <span className="gold-text-shimmer">Shop</span></h1>
                <div className="section-divider mx-auto mb-6" />
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Discover professional hair services and products tailored for you.</p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. CATEGORY CHIPS: Sticky Horizontal Scroll for Mobile */}
      <section className={`sticky ${isMobileApp ? 'top-0 pt-4' : 'top-16 py-6 border-y'} z-40 bg-background/95 backdrop-blur-xl border-border/30`}>
        <div className={`${isMobileApp ? 'px-4 pb-4' : 'container mx-auto px-4'} flex overflow-x-auto gap-2 scrollbar-hide`}>
          {shopCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all whitespace-nowrap text-xs font-bold uppercase tracking-widest ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-secondary/10 text-muted-foreground border border-transparent active:scale-95'
              }`}
            >
              <category.icon size={14} />
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. PRODUCTS GRID: 2-Column Adaptive for Mobile */}
      <section className={`${isMobileApp ? 'py-4 px-4 pb-32' : 'py-16 bg-background-secondary'}`}>
        <div className={isMobileApp ? "w-full" : "container mx-auto"}>
          {currentCategory && (
            <>
              {/* Category Subheader (App Style) */}
              {isMobileApp && (
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-serif font-black italic">{currentCategory.name}</h2>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">{currentCategory.items.length} Items</span>
                </div>
              )}

              <div className={`grid ${isMobileApp ? 'grid-cols-2 gap-3' : 'grid-cols-3 gap-8'}`}>
                {currentCategory.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: isMobileApp ? (index % 4) * 0.05 : index * 0.1 }}
                    className={`relative flex flex-col active:scale-[0.98] transition-transform ${isMobileApp ? '' : 'glass-card group overflow-hidden'}`}
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden ${isMobileApp ? 'aspect-[4/5] rounded-3xl' : 'h-64'}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover ${!isMobileApp && 'group-hover:scale-110 transition-transform duration-500'}`}
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-lg text-[10px] font-black tracking-tight">
                          {item.price}
                        </span>
                      </div>
                      {isMobileApp && (
                         <button className="absolute top-2 right-2 p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white">
                           <ShoppingBag size={14} />
                         </button>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className={isMobileApp ? 'mt-2 px-1' : 'p-6'}>
                      <h3 className={`font-serif font-bold text-foreground leading-tight ${isMobileApp ? 'text-xs line-clamp-1 italic' : 'text-xl mb-3'}`}>
                        {item.name}
                      </h3>
                      {!isMobileApp && (
                        <button className="w-full btn-gold py-3 flex items-center justify-center gap-2">
                          <ShoppingBag size={16} /> Add to Cart
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* 5. CTA Section: Persistent Footer on Mobile */}
      <section className={`${isMobileApp ? 'fixed bottom-6 left-4 right-4 z-50' : 'py-20 bg-background'}`}>
        {isMobileApp ? (
          <a href="/contact" className="w-full bg-primary text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold shadow-2xl active:scale-95 transition-transform uppercase tracking-widest text-xs">
             Get Custom Quote <ChevronRight size={16} />
          </a>
        ) : (
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">Need Something <span className="gold-text">Custom?</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-base">Contact us for personalized services tailored to your unique needs.</p>
            <a href="/contact" className="btn-gold inline-block">Get in Touch</a>
          </div>
        )}
      </section>

      {!isMobileApp && <Footer />}
    </div>
  );
};
export default Shop;
