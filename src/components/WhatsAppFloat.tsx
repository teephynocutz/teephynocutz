"use client"

import { useEffect, useState } from "react"

export default function WhatsappFloat() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const message = `
  Hi Teephyno cutz 💇‍♂️ 💇‍♀️ 💅💅 💈
  I'd like to book an appointment.
  Please let me know your available time slots.
  Thank you.`

  const whatsappUrl = `https://web.whatsapp.com/send?phone=27698490110&text=${encodeURIComponent(
    message
  )}`

  if (!show) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Chat with Teephyno cutz on WhatsApp"
    >
      💬
    </a>
  )
}
