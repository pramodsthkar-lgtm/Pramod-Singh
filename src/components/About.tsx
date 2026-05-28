import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] glass-panel p-2">
              <img 
                src="https://images.unsplash.com/photo-1585937421606-afa5c5f082e6?auto=format&fit=crop&w=800&q=80" 
                alt="Chef preparing royal food" 
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-3xl"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl font-serif text-gold mb-1">15+</span>
                <span className="text-sm uppercase tracking-widest text-white/70">Years of</span>
                <span className="text-xs font-bold text-white">Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold" />
              <span className="text-gold tracking-widest uppercase text-sm font-semibold">Our Story</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              A Legacy of <span className="text-gold italic">Flavors</span> & Tradition
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-light">
              Welcome to Zaika Restaurant. Established in the heart of the city, we have been serving royalty-inspired Indian cuisine that bridges the gap between tradition and modern dining. 
            </p>
            
            <p className="text-white/70 text-lg leading-relaxed mb-10 font-light">
              We pride ourselves on using meticulously sourced <span className="text-white font-medium">fresh ingredients</span>, signature ground spices, and maintaining a warm, <span className="text-white font-medium">family-friendly environment</span> where every meal becomes a celebration of quality food.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-gold font-serif text-2xl font-bold mb-1">Fresh</div>
                <div className="text-white/60 text-sm">Farm-to-table spices & greens</div>
              </div>
              <div>
                <div className="text-gold font-serif text-2xl font-bold mb-1">Authentic</div>
                <div className="text-white/60 text-sm">Traditional cooking methods</div>
              </div>
            </div>

            <a href="#menu" className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-black px-8 py-3 rounded-full font-semibold transition-all">
              Discover Our Menu
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
