import React from 'react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">A Carta de Bruno</h2>
          <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg prose-stone mx-auto text-stone-600 leading-loose">
          <p className="text-xl serif italic text-stone-800 text-center mb-12">
            "Não existe dor maior do que o silêncio num quarto que costumava ser cheio de risadas."
          </p>

          <p>
            Olá, meu nome é <strong>Bruno</strong>.
          </p>
          <p>
            Há poucos dias, meu mundo parou. Perdi minha filha, <strong>Rebeca</strong>, em um acidente trágico. 
            Nenhum pai deveria ter que escrever essas palavras. Nenhum pai deveria ter que se despedir.
          </p>
          <p>
            Nos dias que se seguiram, encontrei consolo na única coisa que me restava: <strong>as memórias</strong>. 
            Comecei a escrever. Escrevi sobre o sorriso dela, sobre nossos sonhos, sobre a dor dilacerante da ausência 
            e sobre o amor que sinto e que continuará vivo para sempre.
          </p>
          <p>
            O que começou como um diário de luto se transformou em um livro. 
            <strong>"Para Rebeca"</strong> não é apenas sobre a morte; é sobre a vida. 
            É sobre como continuamos a amar aqueles que já não podemos abraçar.
          </p>
          <p>
            Decidi compartilhar essas páginas com o mundo por um valor simbólico de <strong>15 reais</strong>. 
            Não busco riqueza, busco compartilhar essa mensagem de amor e talvez, apenas talvez, 
            ajudar outros corações que também estejam quebrados.
          </p>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="text-center">
               <img src="https://picsum.photos/100/100?grayscale" alt="Bruno" className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-rose-200 object-cover" />
               <p className="font-serif italic text-stone-800">Com carinho, Bruno.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};