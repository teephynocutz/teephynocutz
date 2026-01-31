import { z } from "zod"

export const bookingSchema = z.object({
  type: z.enum(["normal", "vip", "home"]),
  services: z
    .array(
      z.object({
        name: z.string(),
        price: z.number().positive(),
      })
    )
    .min(1, "At least one service is required"),

  date: z.coerce.date(),
  time: z.string().min(1),

  fullName: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
})
