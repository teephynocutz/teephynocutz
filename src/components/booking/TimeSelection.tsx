import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimeSelectionProps {
  timeSlots: string[];
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}

const TimeSelection = ({ timeSlots, selectedTime, onSelectTime }: TimeSelectionProps) => {
  // Group time slots by period
  const morningSlots = timeSlots.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour < 12;
  });

  const afternoonSlots = timeSlots.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 12 && hour < 17;
  });

  const eveningSlots = timeSlots.filter(time => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 17;
  });

  const TimeSlotGroup = ({ title, slots }: { title: string; slots: string[] }) => (
    <div className="mb-4 last:mb-0">
      <h4 className="text-xs text-muted-foreground mb-2 font-medium">{title}</h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {slots.map((time, index) => (
          <motion.button
            key={time}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.02 }}
            onClick={() => onSelectTime(time)}
            className={cn(
              "py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95",
              selectedTime === time
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-muted/50 text-foreground hover:bg-muted border border-border/50"
            )}
          >
            {time}
          </motion.button>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {morningSlots.length > 0 && <TimeSlotGroup title="Morning" slots={morningSlots} />}
      {afternoonSlots.length > 0 && <TimeSlotGroup title="Afternoon" slots={afternoonSlots} />}
      {eveningSlots.length > 0 && <TimeSlotGroup title="Evening" slots={eveningSlots} />}
    </motion.div>
  );
};

export default TimeSelection;
