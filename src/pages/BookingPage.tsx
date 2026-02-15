"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format, addHours, isBefore } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { bookingSchema } from "@/validation/bookingSchema"
import Navbar from "@/components/Navbar"
import { api } from "@/lib/api"
import { useNavigate } from "react-router-dom"
import PhoneInput from 'react-phone-number-input'



type BookingType = "normal" | "vip" | "home"

type ServiceItem = {
  name: string
  price: number
}

type ServiceCategory = {
  category: string
  services: ServiceItem[]
}

const PRICING: Record<BookingType, ServiceCategory[]> = {
  normal: [
    {
      category: "Haircut",
      services: [
        { name: "Barbing", price: 300 },
        { name: "Trimming", price: 150 },
        { name: "Beard Trimming", price: 150 },
        { name: "Full Dye", price: 200 },
        { name: "Trimming Dye", price: 100 },
      ],
    },
    {
      category: "TINT",
      services: [
        { name: "Bleach", price: 400 },
        { name: "Color", price: 800 },
      ],
    },
    
    {
      category: "Dreads",
      services: [
        { name: "Afro Palm Rolling", price: 800.00 },
        { name: "Full Palm Rolling", price: 1000.00 },
        { name: "Afro Crochet", price: 1000.00 },
        { name: "Spot Waving", price: 500.00 },
        { name: "Waxing (Beard)", price: 300.00 },
      ],
    },
    {
      category: "Washing & Relaxing",
      services: [
        { name: "Hair Wash", price: 100 },
        { name: "Relaxing", price: 200 },
      ],
    },
  ],
  vip: [
    {
      category: "VIP Grooming",
      services: [
        { name: "VIP Haircut", price: 250 },
        { name: "VIP Beard Trim", price: 180 },
      ],
    },
    {
      category: "VIP Styling",
      services: [
        { name: "VIP Wash & Style", price: 300 },
        { name: "VIP Braids", price: 600 },
      ],
    },
  ],
  home: [
    {
      category: "Home Service",
      services: [
        { name: "Adult Home Haircut", price: 300 },
        { name: "Kids Home Haircut", price: 200 },
        { name: "Home Manicure", price: 300 },
        { name: "Home Pedicure", price: 350 },
      ],
    },
  ],
}

export default function BookingPage() {
  const isAuthenticated = false

  const [step, setStep] = useState<1 | 2>(1)
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [apiError, setApiError] = useState("")
  const [showErrorDialog, setShowErrorDialog] = useState(false)
  // Set yesterday restriction
  const today = new Date();
  today.setHours(0, 0, 0, 0);


  const [form, setForm] = useState({
    type: "normal" as BookingType,
    services: [] as ServiceItem[],
    date: undefined as Date | undefined,
    time: "",
    fullName: "",
    email: "",
    phone: "",
  })

  /* ───────── Helpers ───────── */

  const toggleService = (service: ServiceItem) => {
    setForm((f) => ({
      ...f,
      services: f.services.some((s) => s.name === service.name)
        ? f.services.filter((s) => s.name !== service.name)
        : [...f.services, service],
    }))
  }

  const validTime = () => {
    if (!form.date || !form.time) return false
    const [h, m] = form.time.split(":").map(Number)
    const selected = new Date(form.date)
    selected.setHours(h, m)
    return !isBefore(selected, addHours(new Date(), 0))
  }


  const submitBooking = async () => {
  try {
    setSubmitting(true)
    setApiError("")

    const payload = {
      type: form.type.toUpperCase(),
      services: form.services,
      date: form.date?.toISOString(),
      time: form.time,
      totalPrice,

      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
    }

    console.log("BOOKING PAYLOAD →", payload)

    const res = await api.post("https://teephynocutz-backend.vercel.app/api/bookings", payload)

    console.log("BOOKING SUCCESS →", res.data)
    setSuccess(true)

    navigate("/booking-success")

  } catch (err) {
    console.error("BOOKING API ERROR →", err)
    setShowErrorDialog(true)
  } finally {
    setSubmitting(false)
  }
}


  const totalPrice = form.services.reduce((sum, s) => sum + s.price, 0)

  const canConfirm =
    isAuthenticated ||
    (form.fullName.trim() &&
      form.email.trim() &&
      form.phone.trim())

  /* ───────── Submit (Zod only added) ───────── */



  /* ───────── Render ───────── */

  return (
    <div className="min-h-screen max-w-md mx-auto px-4 py-12 md:py-28 bg-background text-foreground">
      <Navbar />
      {/* HERO */}
      <div className="relative pt-12 pb-8 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <h1 className="relative z-10 font-serif text-3xl font-bold">
          Book <span className="gold-text-shimmer">Appointment</span>
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* TABS */}
            <div className="grid grid-cols-3 gap-2">
              {(["normal", "vip", "home"] as BookingType[]).map((t) => (
                <button
                  key={t}
                  onClick={() =>
                    setForm({ ...form, type: t, services: [] })
                  }
                  className={`py-3 rounded-xl text-xs font-semibold uppercase transition-all
                    ${
                      form.type === t
                        ? "bg-gradient-to-br from-primary to-primary-deep text-primary-foreground shadow-lg"
                        : "bg-card border border-border"
                    }`}
                >
                  {t === "home" ? "Home Service" : t}
                </button>
              ))}
            </div>

            {/* SERVICES */}
            <div className="space-y-3">
              {PRICING[form.type].map((cat) => (
                <div
                  key={cat.category}
                  className="rounded-2xl border border-border bg-card"
                >
                  <button
                    onClick={() =>
                      setOpenCategory(
                        openCategory === cat.category ? null : cat.category
                      )
                    }
                    className="w-full px-4 py-4 flex justify-between items-center text-sm font-medium"
                  >
                    {cat.category.toUpperCase()}
                    <span>{openCategory === cat.category ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {openCategory === cat.category && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 pb-4 space-y-2"
                      >
                        {cat.services.map((s) => {
                          const selected = form.services.some(
                            (x) => x.name === s.name
                          )
                          return (
                            <button
                              key={s.name}
                              onClick={() => toggleService(s)}
                              className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-sm transition-all
                                ${
                                  selected
                                    ? "bg-primary/20 border border-primary text-primary"
                                    : "bg-background border border-border"
                                }`}
                            >
                              <span>{s.name}</span>
                              <span className="font-semibold">R{s.price}</span>
                            </button>
                          )
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* DATE + TIME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="py-4 rounded-2xl border border-border bg-card text-left px-4">
                    {form.date
                      ? format(form.date, "dd MMM")
                      : "Select date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 border-border bg-card" align="start">
                  <Calendar
                
                    mode="single"
                    selected={form.date}
                    onSelect={(d) => {
                      if (d) setForm({ ...form, date: d });
                    }}
                    // 1. Restriction: Today and onwards
                    // disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                    disabled={{ before: today }}
                    // 2. Fix Double Highlight: Remove the "today" highlight entirely
                    modifiers={{
                      today: [] // Overrides the internal 'today' list so it doesn't get special styling
                    }}
                    // 3. Prevent unselecting
                    required
                    initialFocus
                    className="bg-card text-foreground"
/>


                </PopoverContent>
              </Popover>
              <div className="w-full">
                <label className="flex sm:hidden">Time</label>
                <input
                   type="time"
                    value={form.time}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setForm({ ...form, time: e.target.value })
                    }
                    className={`
                    w-full py-4 px-4 rounded-2xl border border-border bg-black 
                    text-white outline-none transition-all
                    focus:ring-2 focus:ring-primary/20 focus:border-primary
                    accent-primary cursor-pointer
                    
                    /* 1. Make Clock Icon White */
                    [&::-webkit-calendar-picker-indicator]:invert
                    [&::-webkit-calendar-picker-indicator]:brightness-200
                    [&::-webkit-calendar-picker-indicator]:cursor-pointer
                    
                    /* 2. Handle Placeholder Appearance */
                    ${!form.time ? "text-white/40" : "text-white"}
                  `}
                 />
              </div>

            </div>

            <button
              disabled={!form.services.length || !form.date || !validTime()}
              onClick={() => setStep(2)}
              className="w-full py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-semibold disabled:opacity-40"
            >
              Review • R{totalPrice}
            </button>
          </motion.div>
        )}

        {/* REVIEW */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="rounded-3xl p-6 bg-card border border-border space-y-2">
              {form.services.map((s) => (
                <div key={s.name} className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span>R{s.price}</span>
                </div>
              ))}
              <div className="flex justify-between font-semibold pt-3 border-t border-border">
                <span>Total</span>
                <span>R{totalPrice}</span>
              </div>
            </div>

            {!isAuthenticated && (
              <div className="rounded-3xl border border-border bg-card p-5 space-y-4">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full py-4 px-4 rounded-2xl border border-border bg-background"
                />
                <label className="text-sm font-medium">Email</label>
                <input
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full py-4 px-4 rounded-2xl border border-border bg-background"
                />

                {/* GUEST INFO SECTION (Example Step 2) */}
                <div className=" space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground ml-1">
                      Phone Number
                    </label>
                    <div>
                      <PhoneInput
                        international
                        defaultCountry="ZA" // South Africa
                        placeholder="Enter mobile number"
                        value={form.phone}
                        onChange={(val) => setForm({ ...form, phone: val || "" })}
                        className="relative flex items-center gap-2"
                        numberInputProps={{
        className: "w-full rounded-md border-gray-300 p-2 focus:ring-blue-500 focus:border-blue-500" // Tailwind classes for the input
      }}
                      />
                    </div>
                  </div>
                </div>          
              </div>
            )}

            {success && (
              <div className="rounded-2xl bg-green-500/10 border border-green-500 p-4 text-sm text-green-600">
                Booking successful! We’ll contact you shortly.
              </div>
            )}

            <button
              disabled={!canConfirm || submitting}
              onClick={submitBooking}
              className="w-full py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-semibold disabled:opacity-40"
            >
              {submitting ? "Booking…" : "Confirm & Book"}
            </button>


            <button
              onClick={() => setStep(1)}
              className="w-full py-3 text-sm text-muted-foreground"
            >
              Edit booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
      {showErrorDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            className="w-full max-w-sm rounded-3xl bg-background p-6 text-center shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-2">
              Oops 😔
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              We’re currently experiencing a temporary issue while processing
              bookings.
              <br />
              <br />
              Don’t worry — our team is ready to help you immediately.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/+27698490110"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-full py-4 rounded-2xl bg-green-500 text-white font-semibold overflow-hidden"
            >
              <span className="absolute inset-0 animate-ping bg-green-400 opacity-20 rounded-2xl" />
              💚 Chat with us on WhatsApp
            </a>

            <button
              onClick={() => setShowErrorDialog(false)}
              className="mt-4 text-sm text-muted-foreground"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  )
}
