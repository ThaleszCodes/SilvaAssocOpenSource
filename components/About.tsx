import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-navy-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-800/30 skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-3">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Compromisso com a justiça e a transparência.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Fundado sob os pilares da ética e da excelência técnica, o escritório Silva & Associados nasceu com o propósito de oferecer uma advocacia acessível, porém sofisticada.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Entendemos que por trás de cada processo existe uma história de vida, uma família ou um negócio. Por isso, nosso atendimento vai além da técnica jurídica: buscamos acolher, entender e traçar a melhor estratégia para o seu caso específico.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-white">Missão</h5>
                  <p className="text-sm text-gray-400">Proporcionar segurança jurídica através de soluções ágeis e eficazes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold-500 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-white">Valores</h5>
                  <p className="text-sm text-gray-400">Ética, Transparência, Humanidade e Combatividade.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Assinatura_exemplo.png" 
                    alt="Assinatura do Sócio Fundador" 
                    className="h-16 invert opacity-80"
                />
                <p className="text-sm text-gold-500 mt-2 font-serif italic">Dr. Carlos Silva - Sócio Fundador</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-navy-800">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                alt="Sala de reuniões" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-navy-900/20"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-gold-600 p-6 rounded-lg shadow-xl hidden md:block max-w-xs">
                <p className="text-white font-serif text-lg italic">
                    "A justiça é a constante e perpétua vontade de dar a cada um o que é seu."
                </p>
                <p className="text-white/80 text-xs mt-2 text-right">— Ulpiano</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}