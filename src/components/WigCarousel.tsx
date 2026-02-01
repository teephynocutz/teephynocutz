import React from "react";
import { Carousel, Card, BlurImage } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { IconShoppingCart, IconHeart } from "@tabler/icons-react";

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

// Beautiful wig images from Unsplash
const wigImages = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1769&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=1881&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1769&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596704017254-9759879c5d44?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1771&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526510747491-27fb588c5fbb?q=80&w=1887&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop",
];

const ProductContent = ({ product }: { product: WigProduct }) => {
  return (
    <div className="space-y-6">
      <div className="bg-product-content rounded-3xl p-8 md:p-14">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            {product.inches.map((inch, i) => (
              <span key={i} className="px-4 py-2 bg-badge-inch text-badge-inch-text rounded-full text-sm font-medium">
                {inch}
              </span>
            ))}
            {product.colors.map((color, i) => (
              <span key={i} className="px-4 py-2 bg-badge-color text-badge-color-text rounded-full text-sm font-medium capitalize">
                {color}
              </span>
            ))}
          </div>
          
          <p className="text-content-text text-base md:text-xl mb-6">
            Experience luxury with our premium {product.name}. Crafted with 100% human hair 
            for a natural look and feel. Perfect for any occasion, this wig offers versatility 
            and elegance that will turn heads wherever you go.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 h-14 text-lg" variant="default">
              <IconShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart - R{parseFloat(product.price).toLocaleString()}
            </Button>
            <Button className="h-14 px-6" variant="outline">
              <IconHeart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-product-content rounded-3xl p-8 md:p-14">
        <h3 className="text-2xl font-bold text-content-title mb-4">Product Features</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-content-text">
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            100% Premium Human Hair
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Pre-plucked Hairline
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Bleached Knots
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Heat Friendly (Up to 180°C)
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Can Be Dyed & Styled
          </li>
          <li className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Comfortable & Breathable Cap
          </li>
        </ul>
      </div>
    </div>
  );
};

export default function WigCarousel() {
  const cards = wigProducts.map((product, index) => (
    <Card
      key={product.productId + index}
      card={{
        src: wigImages[index % wigImages.length],
        title: product.name,
        category: `R${parseFloat(product.price).toLocaleString()} • ${product.inches[0]}`,
        content: <ProductContent product={product} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-foreground font-sans">
        Explore Our Premium Wig Collection
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-muted-foreground mt-2 text-base md:text-lg">
        Handpicked luxury wigs for the modern woman
      </p>
      <Carousel items={cards} />
    </div>
  );
}
