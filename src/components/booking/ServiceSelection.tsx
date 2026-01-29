import { motion } from 'framer-motion';
import { Check, Clock, Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface ServiceSelectionProps {
  services: Service[];
  selectedService: string | null;
  onSelect: (serviceId: string) => void;
}

const ServiceSelection = ({ services, selectedService, onSelect }: ServiceSelectionProps) => {
  return (
    <div className="space-y-3">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          onClick={() => onSelect(service.id)}
          className={cn(
            "p-4 rounded-lg border cursor-pointer transition-all duration-300 active:scale-[0.98]",
            selectedService === service.id
              ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
              : "border-border/50 bg-background/50 hover:border-primary/50 hover:bg-muted/50"
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{service.name}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {service.duration}
                </span>
                <span className="flex items-center gap-1 text-xs text-primary font-medium">
                  <Banknote className="w-3 h-3" />
                  {service.price}
                </span>
              </div>
            </div>
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all",
                selectedService === service.id
                  ? "bg-primary"
                  : "border-2 border-muted-foreground/30"
              )}
            >
              {selectedService === service.id && (
                <Check className="w-3.5 h-3.5 text-primary-foreground" />
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSelection;
