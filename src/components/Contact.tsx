import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Reserve</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold"
          >
            Get In <span className="text-gold italic">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 md:p-10 rounded-[2rem]"
          >
            <h3 className="font-serif text-2xl font-bold mb-6 text-white">Book a Table</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-transparent border border-white/10 focus:border-gold outline-none rounded-xl px-5 py-4 w-full text-white placeholder:text-white/40 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="bg-transparent border border-white/10 focus:border-gold outline-none rounded-xl px-5 py-4 w-full text-white placeholder:text-white/40 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="date" 
                  className="bg-transparent border border-white/10 focus:border-gold outline-none rounded-xl px-5 py-4 w-full text-white/40 focus:text-white transition-colors"
                  style={{ colorScheme: 'dark' }}
                />
                <input 
                  type="number" 
                  placeholder="Guests Number" 
                  min="1"
                  className="bg-transparent border border-white/10 focus:border-gold outline-none rounded-xl px-5 py-4 w-full text-white placeholder:text-white/40 transition-colors"
                />
              </div>
              <textarea 
                placeholder="Special Requests (Optional)" 
                rows={4}
                className="bg-transparent border border-white/10 focus:border-gold outline-none rounded-xl px-5 py-4 w-full text-white placeholder:text-white/40 transition-colors resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-black py-4 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="text-gold p-3 bg-white/5 rounded-full"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Location</h4>
                  <p className="text-sm text-white/60">123 Royal Food Street,<br/>New Delhi, India 110001</p>
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="text-gold p-3 bg-white/5 rounded-full"><Clock size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Opening Hours</h4>
                  <p className="text-sm text-white/60">Mon - Sun<br/>11:00 AM - 11:30 PM</p>
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/30 transition-colors">
                <div className="text-gold p-3 bg-white/5 rounded-full"><Phone size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Contact Us</h4>
                  <p className="text-sm text-white/60">+91 98765 43210<br/>+91 98765 43211</p>
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/30 transition-colors bg-[#25D366]/5 border-[#25D366]/20">
                <div className="text-[#25D366] p-3 bg-[#25D366]/10 rounded-full"><Mail size={20} /></div>
                <div>
                  <h4 className="font-bold mb-1 text-[#25D366]">WhatsApp</h4>
                  <p className="text-sm text-white/60">Order directly<br/>via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-1 rounded-[2rem] overflow-hidden border border-white/10 min-h-[250px] relative w-full bg-white/5">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83984627192!2d77.06889704225026!3d28.52758156108151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700661271171!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
