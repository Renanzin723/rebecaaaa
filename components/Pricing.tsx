import React from 'react';
import { Button } from './Button';
import { Check, ShieldCheck, Heart } from 'lucide-react';

interface PricingProps {
  onBuy: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBuy }) => {
  return (
    <section id="pricing" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 serif">Leve esta história com você</h2>
        <p className="text-stone-300 text-lg mb-12 max-w-2xl mx-auto">
          Todo o valor arrecadado ajuda a manter a memória de Rebeca viva e apoia o processo de publicação.
        </p>

        <div className="bg-white text-stone-900 rounded-3xl p-8 md:p-12 max-w-lg mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-6">
            <Heart className="text-rose-500 fill-current w-8 h-8 mr-2" />
            <span className="uppercase tracking-wide font-semibold text-rose-600">Edição Digital</span>
          </div>
          
          <div className="flex justify-center items-baseline mb-8">
            <span className="text-5xl font-bold text-stone-900">R$ 15,00</span>
            <span className="text-stone-500 ml-2">valor único</span>
          </div>

          <ul className="text-left space-y-4 mb-10 text-stone-600">
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span>Livro completo em formato PDF (E-book)</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span>Poemas exclusivos escritos por Bruno</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span>Acesso imediato após confirmação</span>
            </li>
            <li className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-3" />
              <span>Parte do valor destinado a instituições de caridade</span>
            </li>
          </ul>

          <Button onClick={onBuy} className="w-full text-lg py-4 shadow-rose-300/50">
            Comprar Agora - R$ 15,00
          </Button>

          <div className="mt-6 flex items-center justify-center text-xs text-stone-400 gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Pagamento 100% Seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};