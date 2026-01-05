import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = [
  {
    q: "A primeira consulta é cobrada?",
    a: "Seguimos a tabela da OAB e valorizamos o tempo de análise técnica do seu caso. No entanto, o valor da consulta inicial pode ser abatido dos honorários finais caso você decida nos contratar para conduzir o processo."
  },
  {
    q: "Quanto tempo demora um processo?",
    a: "O tempo de duração de um processo varia muito conforme a complexidade da causa, a comarca e o tipo de ação. Nosso compromisso é trabalhar com agilidade máxima em todas as etapas que dependem do escritório."
  },
  {
    q: "Vocês atendem online?",
    a: "Sim! Realizamos atendimentos por videoconferência (WhatsApp, Zoom ou Google Meet) para clientes de todo o Brasil e do exterior, com a mesma qualidade e segurança do atendimento presencial."
  },
  {
    q: "Como faço para agendar um horário?",
    a: "Você pode entrar em contato conosco clicando no botão do WhatsApp nesta página ou preenchendo o formulário de contato abaixo. Nossa equipe retornará o mais breve possível."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">Esclareça suas principais questões antes de iniciar o atendimento.</p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy-900">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gold-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 py-4 border-t border-slate-100' : 'max-h-0'
                }`}
              >
                <p className="text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}