import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import BookingSteps from './booking/BookingSteps';
import ServiceSelection, { Service } from './booking/ServiceSelection';
import DateSelection from './booking/DateSelection';
import TimeSelection from './booking/TimeSelection';
import BookingConfirmation, { CustomerInfo } from './booking/BookingConfirmation';
import BookingSuccess from './booking/BookingSuccess';

const services: Service[] = [
  { id: 'haircut', name: 'Precision Haircut', duration: '45 min', price: 'R150', description: 'Expert cut tailored to your style and face shape' },
  { id: 'shave', name: 'Hot Towel Shave', duration: '30 min', price: 'R180', description: 'Classic barber shave with hot towels and premium products' },
  { id: 'manicure', name: 'Luxury Manicure', duration: '60 min', price: 'R200', description: 'Complete nail care with massage and polish' },
  { id: 'pedicure', name: 'Premium Pedicure', duration: '60 min', price: 'R220', description: 'Relaxing foot treatment with exfoliation' },
  { id: 'braids', name: 'Braids & Styling', duration: '2-4 hrs', price: 'R300+', description: 'Custom braiding styles from traditional to trendy' },
  { id: 'combo', name: 'Haircut + Shave', duration: '75 min', price: 'R280', description: 'Complete grooming package for the perfect look' },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00',
];

const steps = ['Service', 'Date', 'Time', 'Confirm'];

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const canProceed = () => {
    switch (currentStep) {
      case 0: return !!selectedService;
      case 1: return !!selectedDate;
      case 2: return !!selectedTime;
      default: return true;
    }
  };

  const handleNext = () => {
    if (canProceed() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = async (customerInfo: CustomerInfo) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Booking confirmed! We look forward to seeing you.');
  };

  const handleNewBooking = () => {
    setCurrentStep(0);
    setSelectedService(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setIsSuccess(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  const renderStepContent = () => {
    if (isSuccess) {
      return (
        <BookingSuccess
          service={selectedServiceData}
          date={selectedDate}
          time={selectedTime}
          onNewBooking={handleNewBooking}
        />
      );
    }

    switch (currentStep) {
      case 0:
        return (
          <ServiceSelection
            services={services}
            selectedService={selectedService}
            onSelect={setSelectedService}
          />
        );
      case 1:
        return (
          <DateSelection
            selectedDate={selectedDate}
            currentMonth={currentMonth}
            onSelectDate={setSelectedDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
          />
        );
      case 2:
        return (
          <TimeSelection
            timeSlots={timeSlots}
            selectedTime={selectedTime}
            onSelectTime={setSelectedTime}
          />
        );
      case 3:
        return (
          <BookingConfirmation
            service={selectedServiceData}
            date={selectedDate}
            time={selectedTime}
            onConfirm={handleConfirm}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return 'Choose Your Service';
      case 1: return 'Pick a Date';
      case 2: return 'Select Time';
      case 3: return 'Confirm Details';
      default: return '';
    }
  };

  return (
    <section id="booking" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gold-radial opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gold-radial opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.2em] font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            Reserve Your Spot
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Book Your <span className="gold-text">Experience</span>
          </h2>
          <div className="section-divider mb-3 sm:mb-4" />
          <p className="text-muted-foreground max-w-md mx-auto text-sm px-4">
            Select your service, date, and time. Confirmation is instant.
          </p>
        </motion.div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl">
            {/* Steps Indicator */}
            {!isSuccess && <BookingSteps currentStep={currentStep} steps={steps} />}

            {/* Step Title */}
            {!isSuccess && (
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground text-center mb-5">
                {getStepTitle()}
              </h3>
            )}

            {/* Step Content */}
            <div className="min-h-[300px] sm:min-h-[350px]">
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            {!isSuccess && currentStep < 3 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center gap-1 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
