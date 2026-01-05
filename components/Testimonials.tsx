import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Profissionais extremamente competentes. Me senti acolhida desde o primeiro atendimento. Resolveram meu divórcio com muita sensibilidade.",
      author: "Maria S.",
      role: "Cliente Direito de Família"
    },
    {
      text: "O escritório conseguiu reverter uma situação trabalhista complexa. A clareza nas explicações me deixou muito seguro durante todo o processo.",
      author: "Roberto A.",
      role: "Cliente Trabalhista"
    },
    {
      text: "Ética e profissionalismo definem. Não prometeram milagres, mas trabalharam duro para conseguir o melhor resultado possível na minha causa.",
      author: "Fernanda L.",
      role: "Cliente Cível"
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">O que dizem nossos clientes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-lg relative">
              <Quote className="absolute top-6 left-6 text-gold-500/20 h-10 w-10" />
              <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                "{t.text}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-navy-900">{t.author}</p>
                <p className="text-xs text-gold-600 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 max-w-2xl mx-auto">
                * Respeitando o Código de Ética e Disciplina da OAB, preservamos a identidade completa dos clientes e não garantimos resultados, pois cada caso possui suas particularidades jurídicas.
            </p>
        </div>
      </div>
    </section>
  );
}