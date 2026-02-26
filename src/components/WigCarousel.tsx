import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { IconShoppingCart, IconHeart, IconFilter, IconChevronRight } from "@tabler/icons-react";

// Asset Imports
import wigLongBlack from "@/assets/wigs/5by5-28-inches-r11.jpeg";
import wig from "@/assets/wigs/5by5-inches-grey-5000.jpeg";
import wigYellow from "@/assets/wigs/12-inches-frontal-orange-4500.jpeg";
import wigOrange from "@/assets/wigs/30-inches-grey-blond-15000.jpeg";
import wigBrownBlack from "@/assets/wigs/30-inches-grey-blond-15000.jpeg";

// 1. Mobile Detection Logic
const isMobileApp = typeof window !== 'undefined' && navigator.userAgent.includes("TeephynoCutzApp-1.0");

interface WigProduct {
  productId: string;
  name: string;
  price: string;
  image: string;
  images: string[];
  video: string;
  description: string;
  inches: string[];
  colors: string[];
}

const wigProducts: WigProduct[] = [
  {
    productId: '383435ffwr434433433',
    name: 'Bone Straight 5 by 5 wig',
    price: '5000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['14 Inches'],
    colors: ['Grey']
  },
  {
    productId: '3834cvfvfv3333',
    name: 'Bone Straight frontal orange',
    price: '4500.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['12 Inches'],
    colors: ['Orange/Black']
  },
  {
    productId: '383433233',
    name: 'Bone Straight 5 by 5 wig',
    price: '4000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['12 Inches'],
    colors: ['black']
  },
  {
    productId: '383433234',
    name: 'Bone Straight 5 by 5 wig',
    price: '4500.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['14 Inches'],
    colors: ['black']
  },
  {
    productId: '383433235',
    name: 'Bone Straight 5 by 5 14 wig',
    price: '5000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['14 Inches'],
    colors: ['brown']
  },
  {
    productId: '383fkdnkfndkdn43323sdff3',
    name: 'Bone Straight 5 by 5',
    price: '11000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['28 Inches'],
    colors: ['black']
  },
  {
    productId: '38343322323233232333',
    name: 'Bone Straight Frontal Blonde',
    price: '13500.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['28 Inches'],
    colors: ['black and blonde']
  },
  {
    productId: '3834dsffddderwef33233',
    name: 'Bone Straight frontal wig',
    price: '10000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['22 Inches'],
    colors: ['black']
  },
  {
    productId: '383svjdkvvn433233',
    name: 'Bone Straight frontal wig',
    price: '10000.00',
    image: 'bone-Straight-12-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['22 Inches'],
    colors: ['black']
  },
  {
    productId: '3sdfsfkffsff8343uugv3233',
    name: 'Bone Straight 2 by 6 burgundy wig',
    price: '7000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['20 inches'],
    colors: ['burgundy']
  },
  {
    productId: 'fdree3834dsdsd33233',
    name: 'Single Donor 6 by 6 wig',
    price: '15000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['30 inches'],
    colors: ['grey', 'blond']
  },
  {
    productId: '3ad834dvbs89dsd33233',
    name: 'Single Donor 5 by 5 wig',
    price: '10000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['26 inches'],
    colors: ['brown and gold']
  },
  {
    productId: '3834dsdf90dsd33233',
    name: 'Single Donor frontal wig',
    price: '13500.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['28 inches'],
    colors: ['black']
  },
  {
    productId: '3834ds90fdddsd33233',
    name: 'Single Donor 6 by 6 wig',
    price: '15000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['30 inches'],
    colors: ['grey']
  },
  {
    productId: '3834ds90vvdsd33233',
    name: 'Bone Straight frontal wig',
    price: '13000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['28 inches'],
    colors: ['black']
  },
  {
    productId: '3834dsds90dsd33233',
    name: 'Bone Straight frontal wig',
    price: '15000.00',
    image: 'bone-Straight-1-inch-frontal-orange-b-jpg',
    images: ['bone-straight-12-inch-frontal-orange-b.jpg'],
    video: 'bone-straight-12-inch-frontal-orange-b',
    description: '',
    inches: ['28 inches'],
    colors: ['brown']
  },
];

const wigImages = [
  wigOrange, wigBrownBlack, wig, wigYellow, wigYellow, wigOrange,
  wigLongBlack, wigLongBlack, wigBrownBlack, wig, wigYellow,
  wigYellow, wigOrange, wigOrange, wigOrange, wigOrange,
];

// Product Modal Content (Refactored for App Feel)
const ProductContent = ({ product }: { product: WigProduct }) => {
  return (
    <div className={`space-y-6 ${isMobileApp ? 'pb-10' : ''}`}>
      <div className={`rounded-3xl ${isMobileApp ? 'p-4 bg-transparent' : 'p-8 md:p-14 bg-product-content'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {product.inches.map((inch, i) => (
              <span key={i} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                {inch}
              </span>
            ))}
          </div>
          
          <p className="text-muted-foreground text-sm md:text-xl mb-8 leading-relaxed">
            Premium luxury {product.name}. Hand-selected 100% human hair.
          </p>
          
          <div className="flex flex-col gap-3">
            <Button className="w-full h-14 text-lg font-bold rounded-2xl active:scale-95 transition-transform" variant="default">
              <IconShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - R{parseFloat(product.price).toLocaleString()}
            </Button>
            {isMobileApp && (
               <Button className="w-full h-14 rounded-2xl active:scale-95 transition-transform" variant="outline">
                 <IconHeart className="mr-2 h-5 w-5" /> Save to Wishlist
               </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile-Only Grid Card
const MobileAppCard = ({ product, index }: { product: WigProduct, index: number }) => (
  <div className="flex flex-col group active:scale-[0.98] transition-transform duration-200">
    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border/40">
      <img 
        src={wigImages[index % wigImages.length]} 
        className="w-full h-full object-cover" 
        alt={product.name} 
      />
      <div className="absolute top-2 right-2">
        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white active:bg-red-500">
          <IconHeart size={16} />
        </button>
      </div>
      <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-white font-bold uppercase tracking-tighter">
        {product.inches[0]}
      </div>
    </div>
    <div className="mt-2 px-1">
      <h3 className="text-[13px] font-bold text-foreground line-clamp-1 italic">{product.name}</h3>
      <p className="text-primary font-black text-sm mt-0.5">R{parseFloat(product.price).toLocaleString()}</p>
    </div>
  </div>
);

const WigsSection = () => {
  // Prep cards for Desktop Apple Carousel
  const webCards = wigProducts.map((product, index) => (
    <Card 
      key={product.productId} 
      card={{
        src: wigImages[index % wigImages.length],
        title: product.name,
        category: `R${parseFloat(product.price).toLocaleString()}`,
        content: <ProductContent product={product} />,
      }} 
      index={index} 
    />
  ));

  if (isMobileApp) {
    return (
      <div className="bg-background min-h-screen select-none pb-20">
        {/* MOBILE APP STICKY HEADER */}
        <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 px-5 pt-12 pb-4 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black font-serif tracking-tight leading-none uppercase">Wig <span className="gold-text">Store</span></h1>
            <p className="text-[10px] text-muted-foreground font-bold tracking-widest mt-1">TEEPHYNO LUXURY</p>
          </div>
          <button className="p-2.5 bg-secondary/30 rounded-2xl active:bg-primary/20">
            <IconFilter size={20} className="text-primary" />
          </button>
        </div>

        {/* NATIVE PRODUCT GRID (2 COLUMNS) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 p-4">
          {wigProducts.map((product, index) => (
            <MobileAppCard key={product.productId} product={product} index={index} />
          ))}
        </div>

        {/* MOBILE STICKY FOOTER CTA */}
        <div className="fixed bottom-6 left-4 right-4 z-50">
          <button className="w-full bg-primary text-white py-4 rounded-2xl shadow-2xl shadow-primary/40 flex items-center justify-between px-6 active:scale-95 transition-transform">
            <div className="flex items-center gap-3">
              <IconShoppingCart size={20} />
              <span className="font-bold text-sm uppercase tracking-widest">My Bag</span>
            </div>
            <div className="flex items-center gap-1 font-black">
              <span>0 Items</span>
              <IconChevronRight size={18} />
            </div>
          </button>
        </div>
      </div>
    );
  }

  // DESKTOP VERSION
  return (
    <div className="w-full h-full py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-3 block">The Collection</span>
        <h2 className="max-w-7xl mx-auto text-4xl md:text-6xl font-bold text-foreground font-serif">
          Luxury <span className="gold-text">Wigs</span>
        </h2>
      </div>
      <Carousel items={webCards} />
    </div>
  );
};

export default WigsSection;
