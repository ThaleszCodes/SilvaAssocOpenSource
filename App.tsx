import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Areas from './components/Areas';
import About from './components/About';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <Areas />
      <About />
      <Differentials />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}