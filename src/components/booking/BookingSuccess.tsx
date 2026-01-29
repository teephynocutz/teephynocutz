import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, Scissors, MapPin, Phone } from 'lucide-react';
import type { Service } from './ServiceSelection';

interface BookingSuccessProps {
  service: Service | undefined;
  date: Date | null;
  time: string | null;
  onNewBooking: () => void;
}

const BookingSuccess = ({ service, date, time, onNewBooking }: BookingSuccessProps) => {
  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="text-center py-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"
      >
        <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-2">
          Booking Confirmed!
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          We've sent a confirmation to your phone. See you soon!
        </p>
      </motion.div>

      {/* Booking Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-4 sm:p-6 bg-muted/30 rounded-xl border border-border/50 text-left mb-6"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Scissors className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Service</p>
              <p className="text-sm font-medium text-foreground">{service?.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Date</p>
              <p className="text-sm font-medium text-foreground">{date ? formatDate(date) : '-'}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Time</p>
              <p className="text-sm font-medium text-foreground">{time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">Ndzalama Salon</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
      >
        <Phone className="w-4 h-4" />
        <span>Need to reschedule? Call us at +27 12 345 6789</span>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={onNewBooking}
        className="btn-ghost w-full"
      >
        Book Another Appointment
      </motion.button>
    </motion.div>
  );
};

export default BookingSuccess;
