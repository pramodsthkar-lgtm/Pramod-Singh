import { motion } from 'motion/react';
import { galleryImages } from '../data';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold tracking-widest uppercase text-sm font-semibold">Moments</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold"
            >
              Our Ambiance & <span className="text-gold italic">Food</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-sm"
          >
            A visual journey of premium culinary craft and elegant interior aesthetics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-3xl glass-panel p-1 group ${idx === 0 || idx === 3 ? "md:row-span-2" : ""}`}
            >
              <div className="relative w-full h-64 md:h-full min-h-[300px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={src} 
                  alt={`Gallery Image ${idx + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
