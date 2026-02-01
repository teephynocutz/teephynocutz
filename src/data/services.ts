import { Crown, Sparkles } from "lucide-react";

import haircut from "@/assets/haircut.jpeg";
import serviceHaircut from "@/assets/beard-oil-2.jpg";
import serviceManicure from "@/assets/nail-artist-2.jpg";
import serviceBraids from "@/assets/service-braids.jpg";

export type Service = {
  title: string;
  slug: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  icon: React.ElementType;
};

export const services: Service[] = [
  {
    title: "Hair Cut",
    slug: "hair-cut",
    description: "Clean, precise haircuts tailored to your style—sharp, fresh, and designed to brings out the best version of you ✨.",
    price: "From R300",
    duration: "45 min",
    image: haircut,
    icon: Crown,
  },
  {
    title: "Manicure",
    slug: "manicure",
    description: "Professional manicure service. Fresh nails, fresh mood 💖 Because life’s too short for boring manicures.",
    price: "From R200",
    duration: "45 min",
    image: serviceManicure,
    icon: Sparkles,
  },
  {
    title: "Pedicure",
    slug: "pedicure",
    description:
      "A relaxing pedicure that cleans, shapes, and beautifies your feet—leaving your nails polished and your skin soft, smooth, and refreshed.",
    price: "From R250",
    duration: "60 min",
    image: serviceManicure,
    icon: Sparkles,
  },
  {
    title: "Braids",
    slug: "braids",
    description:
      "Neat, stylish braids customized to your look—designed to protect your hair while keeping it flawless, comfortable, and long-lasting.",
    price: "From R250",
    duration: "60 min",
    image: serviceManicure,
    icon: Sparkles,
  },
  {
    title: "Dreadlocks",
    slug: "dreadlocks",
    description:
      "Professional dreadlock styling and maintenance that keeps your locs clean, well-shaped, and healthy—crafted for a natural, confident look.",
    price: "From R300",
    duration: "2-4 hrs",
    image: serviceBraids,
    icon: Crown,
  },
  {
    title: "Shaving",
    slug: "shaving",
    description:
      "Gentle, precise shaving that leaves your skin smooth, clean, and refreshed with a polished, well-groomed finish.",
    price: "From R300",
    duration: "45 min",
    image: serviceBraids,
    icon: Crown,
  },
  {
    title: "Hair Style",
    slug: "hair-style",
    description:
      "Professional hairstyling for all occasions.",
    price: "From R300",
    duration: "2-4 hrs",
    image: serviceBraids,
    icon: Crown,
  },
  {
    title: "Home Service",
    slug: "home-service",
    description:
      "Professional hairstyling tailored to your look—clean, stylish, and confidence-boosting with a flawless finish.",
    price: "From R300",
    duration: "2-4 hrs",
    image: serviceBraids,
    icon: Crown,
  },
];
