import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Long Street', 'Cape Town, 8001', 'South Africa'],
      action: { label: 'Get Directions', href: 'https://maps.google.com' },
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+27 12 345 6789', '+27 98 765 4321'],
      action: { label: 'Call Now', href: 'tel:+27123456789' },
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@teephynocutz.com', 'bookings@teephynocutz.com'],
      action: { label: 'Send Email', href: 'mailto:info@teephynocutz.com' },
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 9:00 AM - 6:00 PM', 'Sun: 10:00 AM - 4:00 PM'],
      action: { label: 'Book Appointment', href: '/#booking' },
    },
  ];

  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram', handle: '@teephynocutz' },
    { icon: Facebook, href: '#', label: 'Facebook', handle: 'Teephyno Cutz' },
    { icon: Twitter, href: '#', label: 'Twitter', handle: '@teephynocutz' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-10 sm:pb-12 md:pb-16 lg:pb-24 relative">
        <div className="absolute inset-0 bg-gold-radial opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium mb-3 sm:mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6">
              Contact <span className="gold-text-shimmer">Us</span>
            </h1>
            <div className="section-divider mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a question or ready to book? Reach out to us and experience 
              the Teephyno Cutz difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-10 md:py-12 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 sm:p-5 md:p-6 text-center"
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <info.icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary" />
                </div>
                <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {info.title}
                </h3>
                <div className="space-y-0.5 sm:space-y-1 mb-3 sm:mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-xs sm:text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.action.href}
                  className="text-primary text-xs sm:text-sm font-medium hover:underline"
                >
                  {info.action.label} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                Send Us a <span className="gold-text">Message</span>
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-border/50 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-border/50 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background-secondary border border-border/50 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="+27 12 345 6789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background-secondary border border-border/50 rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Services Question</option>
                      <option value="products">Product Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background-secondary border border-border/50 rounded-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative rounded-sm overflow-hidden h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8908913454714!2d18.41768031521095!3d-33.92138398063774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676f1a97f7b7%3A0x8a9c0a9c0a9c0a9c!2sLong%20Street%2C%20Cape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(85%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Teephyno Cutz Location"
                />
                <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-sm" />
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-sm bg-background-secondary/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <social.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{social.label}</p>
                        <p className="text-muted-foreground text-sm">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/27123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-green-600 hover:bg-green-700 text-white rounded-sm transition-colors"
              >
                <MessageCircle size={24} />
                <span className="font-semibold">Chat on WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
