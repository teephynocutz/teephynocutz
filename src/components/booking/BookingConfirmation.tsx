import { motion } from 'framer-motion';
import { Calendar, Clock, Scissors, User, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Service } from './ServiceSelection';

interface BookingConfirmationProps {
  service: Service | undefined;
  date: Date | null;
  time: string | null;
  onConfirm: (customerInfo: CustomerInfo) => void;
  isSubmitting: boolean;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
}

const BookingConfirmation = ({
  service,
  date,
  time,
  onConfirm,
  isSubmitting,
}: BookingConfirmationProps) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const validate = () => {
    const newErrors: Partial<CustomerInfo> = {};
    if (!customerInfo.name.trim()) newErrors.name = 'Name is required';
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone is required';
    if (customerInfo.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onConfirm(customerInfo);
    }
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      {/* Booking Summary */}
      <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-3">
        <h4 className="font-serif text-sm font-semibold text-foreground mb-3">Booking Summary</h4>
        
        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Scissors className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Service</p>
            <p className="text-foreground font-medium">{service?.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Calendar className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Date</p>
            <p className="text-foreground font-medium">{date ? formatDate(date) : '-'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Time</p>
            <p className="text-foreground font-medium">{time}</p>
          </div>
        </div>

        <div className="border-t border-border/50 pt-3 mt-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-lg font-serif font-bold text-primary">{service?.price}</span>
          </div>
        </div>
      </div>

      {/* Customer Info Form */}
      <div className="space-y-3">
        <h4 className="font-serif text-sm font-semibold text-foreground">Your Details</h4>
        
        <div className="space-y-3">
          <div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Full Name *"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className={cn(
                  "w-full pl-10 pr-4 py-3 bg-background border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                  errors.name ? "border-destructive" : "border-border/50"
                )}
              />
            </div>
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                className={cn(
                  "w-full pl-10 pr-4 py-3 bg-background border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                  errors.phone ? "border-destructive" : "border-border/50"
                )}
              />
            </div>
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email (optional)"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                className={cn(
                  "w-full pl-10 pr-4 py-3 bg-background border rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50",
                  errors.email ? "border-destructive" : "border-border/50"
                )}
              />
            </div>
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="btn-gold w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
      </button>
    </motion.div>
  );
};

export default BookingConfirmation;
