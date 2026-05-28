import { motion } from 'motion/react';
import { menuItems } from '../data';
import { ShoppingCart } from 'lucide-react';

export default function Menu() {
  return (
    <section id="menu" className="py-24 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-widest uppercase text-sm font-semibold">Exquisite</span>
            <div className="h-[1px] w-12 bg-gold" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold"
          >
            Our Popular <span className="text-gold italic">Menu</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-panel p-4 rounded-3xl group relative overflow-hidden"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 border border-glass-border right-4 z-20 glass-panel px-3 py-1 rounded-full text-xs font-bold text-gold tracking-wider">
                  {item.category}
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">{item.name}</h3>
                  <span className="text-gold text-xl font-semibold shrink-0">{item.price}</span>
                </div>
                <p className="text-white/60 text-sm mb-6 line-clamp-2">{item.desc}</p>
                
                <button className="w-full bg-white/5 hover:bg-gold text-white hover:text-black border border-white/10 hover:border-gold py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group/btn">
                  <ShoppingCart size={16} className="group-hover/btn:-translate-y-1 transition-transform" />
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
