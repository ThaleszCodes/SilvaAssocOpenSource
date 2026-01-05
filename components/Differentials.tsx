import React from 'react';
import { MessageCircle, Clock, ShieldCheck, UserCheck } from 'lucide-react';

const differentials = [
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Atendimento Humanizado",
    description: "Você não é apenas um número de processo. Tratamos cada caso com empatia e atenção individualizada."
  },
  {
    icon: <MessageCircle className="w-10 h-10" />,
    title: "Comunicação Clara",
    description: "Sem 'juridiquês'. Explicamos cada etapa do seu processo de forma simples e direta para que você entenda seus direitos."
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Ética e Transparência",
    description: "Análise honesta sobre os riscos e possibilidades de êxito. Trabalhamos com a verdade, sempre."
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Agilidade Processual",
    description: "Utilizamos tecnologia de ponta para acompanhar os prazos e impulsionar o andamento do seu caso."
  }
];

export default function Differentials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Por que escolher nosso escritório?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acreditamos que a advocacia moderna exige mais do que conhecimento técnico; exige proximidade e clareza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-20 h-20 rounded-full bg-white border-2 border-gold-500/20 flex items-center justify-center text-gold-600 mb-6 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}