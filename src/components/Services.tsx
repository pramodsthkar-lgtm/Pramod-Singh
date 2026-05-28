import { motion } from 'motion/react';
import { services } from '../data';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Offerings</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold"
          >
            Premium <span className="text-gold italic">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-panel p-8 rounded-3xl group hover:border-gold/30 transition-all text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                  {Icon && <Icon size={28} strokeWidth={1.5} />}
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
