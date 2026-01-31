import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import confetti from "canvas-confetti"


type Product = {
  name: string
  price: number
  image: string
}

const PRODUCTS: Product[] = [
  {
    name: "Premium Beard Oil",
    price: 180,
    image: "/products/beard-oil.jpg",
  },
  {
    name: "Hair Growth Serum",
    price: 250,
    image: "/products/hair-serum.jpg",
  },
  {
    name: "Luxury Hair Cap",
    price: 120,
    image: "/products/hair-cap.jpg",
  },
  {
    name: "Wig Maintenance Spray",
    price: 200,
    image: "/products/wig-spray.jpg",
  },
]

export default function BookingSuccessPage() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    })
  }

  useEffect(() => {
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.55 },
  })

  const duration = 1200
  const end = Date.now() + duration

  const frame = () => {
    confetti({
      particleCount: 5,
      spread: 70,
      startVelocity: 28,
      origin: { x: 0.1, y: 0.6 },
    })
    confetti({
      particleCount: 5,
      spread: 70,
      startVelocity: 28,
      origin: { x: 0.9, y: 0.6 },
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }

  frame()
}, [])


  

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HERO CONFIRMATION */}
      <section className="px-5 pt-16 pb-12 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="w-14 h-14 text-primary" />
        </motion.div>

        <h1 className="text-2xl font-serif font-bold mb-2">
          Booking Confirmed
        </h1>
        <p className="text-muted-foreground text-sm">
          Thank you for choosing Teephyno Cutz ✂️  
          We’ll contact you shortly.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-2xl
                     bg-gradient-to-br from-primary to-primary-deep
                     text-primary-foreground font-semibold"
        >
          Back to Home
        </Link>
      </section>

      {/* FIXED BACKGROUND BRAND SECTION */}
      <section
        className="relative h-56 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/salon-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="relative z-10 text-white font-serif text-xl font-semibold">
          Grooming Beyond the Chair
        </h2>
      </section>

      {/* PRODUCTS SLIDER */}
      <section className="px-5 py-10 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">
            Popular Products
          </h3>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.03 }}
              className="min-w-[220px] rounded-3xl border border-border bg-card overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-36 w-full object-cover"
              />
              <div className="p-4 space-y-1">
                <p className="font-medium text-sm">{p.name}</p>
                <p className="text-primary font-semibold">R{p.price}</p>
                <button
                  className="mt-2 w-full py-2 rounded-xl
                             bg-primary/10 text-primary text-sm font-medium"
                >
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="px-5 pb-12 space-y-3">
        <Link
          to="/services"
          className="block w-full py-4 rounded-2xl border border-border text-center font-medium"
        >
          Explore Services
        </Link>

        <Link
          to="/gallery"
          className="block w-full py-4 rounded-2xl border border-border text-center font-medium"
        >
          View Gallery
        </Link>
      </section>
    </div>
  )
}
