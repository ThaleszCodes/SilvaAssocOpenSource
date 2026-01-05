import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
          alt="Escritório de advocacia elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-gold-500/50 rounded-full bg-navy-900/50 backdrop-blur-sm">
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">
              Excelência e Ética Jurídica
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Defendendo seus direitos com <span className="text-gold-500 italic">estratégia</span> e humanidade.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
            Soluções jurídicas personalizadas em Direito Civil, Família e Trabalhista. 
            Atendimento transparente, focado na segurança do seu patrimônio e bem-estar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-gold-500/20 group"
            >
              Falar com um Advogado
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-white text-white font-medium rounded-sm transition-all duration-300 bg-transparent hover:bg-white/10"
            >
              Conhecer Áreas de Atuação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}