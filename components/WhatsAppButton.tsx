import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999" // Replace with real number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-green-600/30 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3 text-sm font-bold">
        Falar Agora
      </span>
    </a>
  );
}