/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Services />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
