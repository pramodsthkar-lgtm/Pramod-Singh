import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210" // Replace with real WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] transform hover:scale-110 transition-all group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Ripple animation bg */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75 group-hover:hidden"></div>
      
      <MessageCircle size={32} />
    </motion.a>
  );
}
