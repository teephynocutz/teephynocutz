"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format, addHours, isBefore } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import Navbar from "@/components/Navbar"

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
        { name: "Adult Haircut", price: 120 },
        { name: "Kids Haircut", price: 80 },
      ],
    },
    {
      category: "Hair Styling",
      services: [
        { name: "Wash & Style", price: 150 },
        { name: "Braids", price: 300 },
        { name: "Dreadlocks", price: 500 },
      ],
    },
    {
      category: "Nails",
      services: [
        { name: "Manicure", price: 150 },
        { name: "Pedicure", price: 200 },
      ],
    },
  ],

  vip: [
    {
      category: "Haircut",
      services: [
        { name: "VIP Haircut", price: 250 },
        { name: "VIP Beard Trim", price: 180 },
      ],
    },
    {
      category: "Hair Styling",
      services: [
        { name: "VIP Wash & Style", price: 300 },
        { name: "VIP Braids", price: 600 },
      ],
    },
  ],

  home: [
    {
      category: "Home Haircut",
      services: [
        { name: "Adult Home Haircut", price: 300 },
        { name: "Kids Home Haircut", price: 200 },
      ],
    },
    {
      category: "Home Beauty",
      services: [
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
    return !isBefore(selected, addHours(new Date(), 12))
  }

  const totalPrice = form.services.reduce((sum, s) => sum + s.price, 0)

  /* ───────── Render ───────── */

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {/* HERO */}
      <div
        className="relative h-[120px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/interior-pool-table.jpg')", // replace with your image
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        
      </div>

      {/* CONTENT */}
      <div className="max-w-md mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
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
                    className="rounded-2xl border border-border bg-card overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenCategory(
                          openCategory === cat.category
                            ? null
                            : cat.category
                        )
                      }
                      className="w-full px-4 py-4 flex justify-between items-center text-sm font-medium"
                    >
                      {cat.category}
                      <span className="text-lg">
                        {openCategory === cat.category ? "−" : "+"}
                      </span>
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
                                <span className="font-semibold">
                                  R{s.price}
                                </span>
                              </button>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* DATE */}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full py-4 rounded-2xl border border-border bg-card text-left px-4">
                    {form.date
                      ? format(form.date, "EEE, dd MMM")
                      : "Select date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Calendar
                    mode="single"
                    selected={form.date}
                    onSelect={(d) => setForm({ ...form, date: d })}
                    disabled={(d) => d < new Date()}
                  />
                </PopoverContent>
              </Popover>

              {/* TIME */}
              <input
                type="time"
                className="w-full py-4 px-4 rounded-2xl border border-border bg-card"
                value={form.time}
                onChange={(e) =>
                  setForm({ ...form, time: e.target.value })
                }
              />

              {!validTime() && form.time && (
                <p className="text-xs text-red-400">
                  Time must be at least 12 hours from now
                </p>
              )}

              <button
                disabled={
                  !form.services.length || !form.date || !validTime()
                }
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
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="space-y-6"
            >
              <div className="rounded-3xl p-6 bg-card border border-border space-y-2">
                <p className="text-xs uppercase text-muted-foreground">
                  {form.type} booking
                </p>

                {form.services.map((s) => (
                  <div
                    key={s.name}
                    className="flex justify-between text-sm"
                  >
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
                <div className="space-y-3">
                  <input
                    placeholder="Full name"
                    className="w-full py-4 px-4 rounded-2xl border border-border bg-card"
                  />
                  <input
                    placeholder="Email"
                    className="w-full py-4 px-4 rounded-2xl border border-border bg-card"
                  />
                  <input
                    placeholder="Phone"
                    className="w-full py-4 px-4 rounded-2xl border border-border bg-card"
                  />
                </div>
              )}

              <button className="w-full py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-deep text-primary-foreground font-semibold">
                Confirm & Book
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
      </div>
    </div>
  )
}
