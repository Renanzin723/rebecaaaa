import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-12 text-center text-sm">
      <div className="container mx-auto px-4">
        <p className="serif italic text-lg mb-4 text-stone-400">"Para Rebeca"</p>
        <p>&copy; {new Date().getFullYear()} Bruno. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com amor e saudade.</p>
        
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-rose-400 transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};