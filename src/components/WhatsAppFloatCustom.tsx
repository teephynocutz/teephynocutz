"use client"


interface Props {
  service?: string
  date?: Date
  time?: string
}

export default function WhatsappFloatCustom({ service, date, time }: Props) {
 
  const formattedDate = date
    ? date.toLocaleDateString("en-ZA", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : ""

  const message = `Hi Teephynocutz 💅🪮 💇‍♀️ 

I'd like to book an appointment.

Service: ${service ?? "Not selected"}
Date: ${formattedDate || "Not selected"}
Time: ${time ?? "Not selected"}

Please confirm availability.`

  const whatsappUrl = `https://web.whatsapp.com/send?phone=27831234567&text=${encodeURIComponent(
    message
  )}`



  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
    >
      💬
    </a>
  )
}
