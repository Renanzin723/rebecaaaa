import React, { useState } from 'react';
import { generateComfortMessage } from '../services/geminiService';
import { ComfortTheme } from '../types';
import { Button } from './Button';
import { Sparkles, Quote } from 'lucide-react';

export const GeminiInteract: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ComfortTheme>(ComfortTheme.Hope);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name.trim()) return;
    setLoading(true);
    const msg = await generateComfortMessage(name, selectedTheme);
    setMessage(msg);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-stone-100 border-y border-stone-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="mb-10">
          <Sparkles className="w-10 h-10 text-rose-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-stone-800 mb-4">Um Momento de Paz</h2>
          <p className="text-stone-600">
            O livro traz reflexões profundas. Experimente receber uma mensagem personalizada inspirada nos temas que abordo na obra.
            Digite seu nome e escolha um sentimento.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg mx-auto">
          {!message ? (
            <div className="space-y-6">
              <div>
                <label className="block text-left text-sm font-medium text-stone-700 mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-200 focus:border-rose-400 outline-none transition-colors"
                  placeholder="Ex: Maria"
                />
              </div>

              <div>
                <label className="block text-left text-sm font-medium text-stone-700 mb-2">O que seu coração busca hoje?</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.values(ComfortTheme).map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setSelectedTheme(theme)}
                      className={`px-3 py-2 rounded-md text-sm transition-colors ${selectedTheme === theme ? 'bg-rose-100 text-rose-800 border-rose-200 border' : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-transparent'}`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerate} 
                className="w-full mt-4" 
                disabled={!name.trim()}
                isLoading={loading}
              >
                Receber Mensagem
              </Button>
            </div>
          ) : (
            <div className="fade-in">
              <Quote className="w-8 h-8 text-rose-300 mb-4 opacity-50" />
              <p className="serif text-xl text-stone-800 italic leading-relaxed mb-8">
                "{message}"
              </p>
              <Button variant="outline" onClick={() => setMessage(null)}>
                Criar outra mensagem
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};