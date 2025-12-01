import React from 'react';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { BookOpen, Star, Users } from 'lucide-react';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    const element = document.getElementById('story');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBuy = () => {
    window.location.href = "https://pay.lowify.com.br/checkout.php?product_id=kq4GLo";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-xl text-stone-800">Para Rebeca</div>
          <button onClick={handleBuy} className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-700 transition-colors">
            Comprar Livro
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero onScrollToStory={scrollToStory} onBuy={handleBuy} />
        
        {/* Social Proof Bar */}
        <div className="bg-stone-50 py-8 border-y border-stone-200">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-stone-500">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-rose-400" />
              <span>+1.200 Leitores emocionados</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Avaliação média</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-rose-400" />
              <span>Disponível em PDF & EPUB</span>
            </div>
          </div>
        </div>

        <Story />
        
        {/* Feature Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-stone-50 rounded-xl text-center">
                <h3 className="serif text-xl font-bold text-stone-800 mb-3">Superação</h3>
                <p className="text-stone-600">Um guia para quem busca luz nos momentos mais escuros da vida.</p>
              </div>
              <div className="p-6 bg-rose-50 rounded-xl text-center">
                <h3 className="serif text-xl font-bold text-rose-900 mb-3">Amor Paterno</h3>
                <p className="text-rose-800/80">A visão pura e incondicional de um pai sobre sua filha amada.</p>
              </div>
              <div className="p-6 bg-stone-50 rounded-xl text-center">
                <h3 className="serif text-xl font-bold text-stone-800 mb-3">Legado</h3>
                <p className="text-stone-600">Como transformar a dor em uma força criativa e manter memórias vivas.</p>
              </div>
            </div>
          </div>
        </section>

        <Pricing onBuy={handleBuy} />
      </main>

      <Footer />
    </div>
  );
};

export default App;