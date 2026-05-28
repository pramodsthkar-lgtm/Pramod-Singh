import { motion } from 'motion/react';
import { ArrowRight, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505] z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80" 
          alt="Restaurant Ambience" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold/60" />
          <span className="text-gold tracking-widest uppercase text-sm font-semibold flex items-center gap-2">
            <Utensils size={14} /> Est. 2010
          </span>
          <div className="h-[1px] w-12 bg-gold/60" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
        >
          Welcome to <br />
          <span className="text-gold italic pr-4">Zaika</span> Restaurant
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed"
        >
          Taste the Royal Flavors. Explore an exquisite journey of authentic Indian culinary heritage, crafted with passion and premium ingredients.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <a href="#menu" className="bg-gold hover:bg-gold-hover text-black px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Explore Menu <ArrowRight size={18} />
          </a>
          <a href="#contact" className="glass-panel text-white hover:text-gold px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105">
            Book a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
