import React from 'react';
import { Users, Building2, Scale, Briefcase, HeartHandshake, ScrollText } from 'lucide-react';

const areas = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Direito de Família",
    description: "Divórcios, guarda, pensão alimentícia e inventários. Tratamos conflitos familiares com a sensibilidade e discrição necessárias."
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Direito Trabalhista",
    description: "Defesa dos direitos do trabalhador e assessoria preventiva para empresas. Rescisões, horas extras e assédio moral."
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Direito Previdenciário",
    description: "Planejamento previdenciário, aposentadorias, auxílio-doença e revisões de benefícios junto ao INSS."
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, indenizações e direito do consumidor. Soluções para conflitos do dia a dia."
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-3">Nossa Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Atuação Jurídica Especializada</h3>
          <p className="text-gray-600 leading-relaxed">
            Oferecemos suporte jurídico completo, combinando conhecimento técnico aprofundado com uma abordagem prática para resolver seus problemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 hover:bg-white border border-slate-100 hover:border-gold-500/30 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold-500 group-hover:h-full transition-all duration-500"></div>
              <div className="text-gold-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h4 className="text-xl font-serif font-bold text-navy-900 mb-3">{area.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}