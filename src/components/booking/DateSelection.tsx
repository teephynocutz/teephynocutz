import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DateSelectionProps {
  selectedDate: Date | null;
  currentMonth: Date;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const DateSelection = ({
  selectedDate,
  currentMonth,
  onSelectDate,
  onPrevMonth,
  onNextMonth,
}: DateSelectionProps) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (Date | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onPrevMonth}
          className="p-2 hover:bg-muted rounded-full transition-colors active:scale-95"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="font-serif text-base sm:text-lg text-foreground font-medium">
          {formatMonth(currentMonth)}
        </span>
        <button
          onClick={onNextMonth}
          className="p-2 hover:bg-muted rounded-full transition-colors active:scale-95"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day, index) => (
          <div key={index} className="text-center text-xs text-muted-foreground py-2 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {getDaysInMonth(currentMonth).map((date, index) => (
          <div key={index} className="aspect-square p-0.5">
            {date && (
              <button
                onClick={() => !isPast(date) && onSelectDate(date)}
                disabled={isPast(date)}
                className={cn(
                  "w-full h-full flex items-center justify-center rounded-full text-sm transition-all duration-200 active:scale-90",
                  isPast(date)
                    ? "text-muted-foreground/30 cursor-not-allowed"
                    : selectedDate?.toDateString() === date.toDateString()
                    ? "bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                    : isToday(date)
                    ? "border-2 border-primary text-primary font-medium"
                    : "hover:bg-muted text-foreground active:bg-primary/20"
                )}
              >
                {date.getDate()}
              </button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DateSelection;
