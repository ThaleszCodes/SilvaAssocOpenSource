import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-navy-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-gold-500 font-bold tracking-widest text-sm uppercase mb-3">Fale Conosco</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">Estamos prontos para ouvir você.</h3>
            <p className="text-gray-300 mb-10 text-lg">
              Agende uma consulta para analisarmos seu caso com a atenção que ele merece. Garantimos sigilo absoluto.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone / WhatsApp</p>
                  <p className="text-lg font-semibold">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold">contato@advocaciamodelo.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="text-lg font-semibold">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <h4 className="text-navy-900 text-xl font-bold mb-6">Envie sua mensagem</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Breve relato do caso</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-slate-900 bg-slate-50"
                  placeholder="Descreva brevemente como podemos ajudar..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-md transition-all duration-300 shadow-lg hover:shadow-gold-500/30"
              >
                Solicitar Atendimento
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}