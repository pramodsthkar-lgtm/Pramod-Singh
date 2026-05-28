import { Utensils, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 relative overflow-hidden bg-[#020202]">
      {/* Decorative large logo watermark */}
      <div className="absolute right-[-10%] bottom-[-20%] text-[20rem] font-serif font-bold text-white/[0.02] pointer-events-none select-none italic z-0">
        Zaika
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-serif text-4xl font-bold text-gold">Zaika</span>
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Experience the royal culinary heritage of India in an atmosphere of modern elegance. Where tradition meets luxury.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Menu', 'Gallery', 'Services'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">123 Royal Food Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-white/60 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-white/60 text-sm">info@zaikarestaurant.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-6 text-white">Updates</h4>
            <p className="text-white/60 font-light text-sm mb-4">
              Subscribe for exclusive offers and seasonal menu announcements.
            </p>
            <div className="flex items-center gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border border-white/20 outline-none rounded-lg px-4 py-3 w-full text-white text-sm focus:border-gold transition-colors"
              />
              <button className="bg-white/10 hover:bg-gold hover:text-black border border-white/20 hover:border-gold text-white px-4 py-3 rounded-lg font-semibold transition-all">
                Send
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Zaika Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
