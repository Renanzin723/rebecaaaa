import React from 'react';
import { Button } from './Button';
import { BookHeart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onScrollToStory: () => void;
  onBuy: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToStory, onBuy }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 to-stone-100">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Texture" 
          className="object-cover w-full h-full mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20 pb-12 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2 space-y-8 fade-in">
            <span className="inline-block px-4 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-2">
              Uma História Real de Amor
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
              Para Rebeca: <br />
              <span className="text-rose-600 italic font-serif font-light">Um Amor que Transcende o Tempo</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              Quando perdi minha filha, pensei que as palavras tinham acabado. Mas escrevi este livro para provar que o amor de um pai nunca diz adeus. Um relato de dor, mas acima de tudo, de esperança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={onBuy} className="text-lg px-8 py-4">
                Adquirir por R$ 15,00
                <BookHeart className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" onClick={onScrollToStory} className="text-lg">
                Conheça a História
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-64 md:w-80 aspect-[2/3] bg-white shadow-2xl rounded-r-lg transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 border-l-4 border-stone-200">
                {/* Book Cover Simulation */}
                <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center p-8 text-center border border-stone-200 rounded-r-lg overflow-hidden">
                   <div className="w-full h-full absolute top-0 left-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]"></div>
                   <h2 className="serif text-3xl text-stone-800 mb-2 relative z-10">Para Rebeca</h2>
                   <div className="w-16 h-0.5 bg-rose-400 mb-4 relative z-10"></div>
                   <p className="text-sm uppercase tracking-widest text-stone-500 mb-12 relative z-10">Memórias de um Pai</p>
                   
                   <div className="mt-auto text-stone-800 font-medium relative z-10">Bruno</div>
                </div>
                {/* Book Spine Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-stone-300 to-transparent opacity-50 z-20 pointer-events-none"></div>
            </div>
            {/* Soft Glow behind book */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-rose-200 rounded-full blur-[80px] -z-10 opacity-50"></div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
};