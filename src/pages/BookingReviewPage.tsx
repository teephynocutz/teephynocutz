import { useLocation, useNavigate } from "react-router-dom"
import { format } from "date-fns"

export default function BookingReviewPage() {
  const navigate = useNavigate()
  const { state } = useLocation()

  if (!state) {
    navigate("/booking")
    return null
  }

  const { services, homeService, date, time } = state

  return (
    <div className="min-h-screen px-4 py-6 max-w-md mx-auto">
      <h1 className="text-xl font-semibold text-center mb-6">
        Review Booking
      </h1>

      {/* SERVICES */}
      <section className="mb-5">
        <p className="text-xs uppercase text-muted-foreground mb-2">
          Services
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((service: string) => (
            <span
              key={service}
              className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* DATE & TIME */}
      <section className="mb-5">
        <p className="text-xs uppercase text-muted-foreground mb-2">
          Appointment
        </p>
        <div className="rounded-2xl border p-4 space-y-2">
          <Row label="Date" value={format(new Date(date), "EEEE, dd MMM yyyy")} />
          <Row label="Time" value={time} />
          <Row
            label="Service Type"
            value={homeService ? "Home Service" : "In-Store"}
          />
        </div>
      </section>

      {/* INFO */}
      <section className="mb-8">
        <p className="text-xs text-muted-foreground text-center">
          Please confirm all details before submitting your booking.
        </p>
      </section>

      {/* ACTIONS */}
      <div className="space-y-3">
        <button
          className="w-full py-4 rounded-2xl bg-black text-white text-sm font-semibold"
          onClick={() => {
            // 🔥 NEXT STEP: send to backend
            console.log("Confirmed booking:", state)
          }}
        >
          Confirm Booking
        </button>

        <button
          className="w-full py-3 rounded-2xl bg-muted text-sm"
          onClick={() => navigate(-1)}
        >
          Edit Booking
        </button>
      </div>
    </div>
  )
}

/* ───────── Small helper row ───────── */

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
