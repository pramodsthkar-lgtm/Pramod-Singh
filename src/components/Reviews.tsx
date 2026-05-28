import { motion } from 'motion/react';
import { reviews } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Testimonials</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold"
          >
            Hear From Our <span className="text-gold italic">Guests</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="glass-panel p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 pointer-events-none" />
              
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "text-gold" : "text-white/20"} 
                  />
                ))}
              </div>
              
              <p className="text-white/80 font-light italic mb-8 relative z-10 leading-relaxed text-sm md:text-base min-h-[80px]">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border border-gold/30"
                />
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-xs text-white/50">Verified Diner</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
