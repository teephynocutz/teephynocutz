import { z } from "zod"
import { addHours, isBefore } from "date-fns"

export const serviceSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
})

export const bookingSchema = z.object({
  type: z.enum(["normal", "vip", "home"]),

  services: z
    .array(serviceSchema)
    .min(1, "Select at least one service"),

  date: z.date({
    required_error: "Date is required",
  }),

  time: z
    .string()
    .regex(/^\d{2}:\d{2}$/, "Invalid time format"),

  fullName: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(8, "Invalid phone number").optional(),
})
.superRefine((data, ctx) => {
  // 12 hour rule
  const [h, m] = data.time.split(":").map(Number)
  const bookingDate = new Date(data.date)
  bookingDate.setHours(h, m)

  if (isBefore(bookingDate, addHours(new Date(), 12))) {
    ctx.addIssue({
      path: ["time"],
      message: "Booking must be at least 12 hours in advance",
      code: z.ZodIssueCode.custom,
    })
  }
})
.superRefine((data, ctx) => {
  // Guest validation
  const isGuest =
    !data.fullName && !data.email && !data.phone

  if (isGuest) return

  if (!data.fullName || !data.email || !data.phone) {
    ctx.addIssue({
      path: ["fullName"],
      message: "Full name, email and phone are required",
      code: z.ZodIssueCode.custom,
    })
  }
})
