import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400 py-12 border-t border-gray-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h5 className="text-white font-serif font-bold text-lg mb-1">SILVA & ASSOCIADOS</h5>
            <p className="text-xs uppercase tracking-widest text-gold-600">OAB/SP 00.000</p>
          </div>

          <div className="text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-xs text-gray-500">
              * Este é um site modelo/exemplo. As informações aqui contidas são fictícias.
            </p>
          </div>

          <div className="text-center md:text-right">
            <p>
              Desenvolvido por{' '}
              <a 
                href="https://axium-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-white transition-colors font-semibold"
              >
                Axium Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}