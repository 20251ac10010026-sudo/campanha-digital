import React from 'react';
import { Smartphone, Palette, Megaphone, CheckCircle } from 'lucide-react';

const StrategyGuide: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-5xl">
      <header>
        <h2 className="text-3xl font-bold text-slate-800">Guia de Estratégia</h2>
        <p className="text-slate-500 mt-2">Dicas visuais, tráfego pago e canais de atuação.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Traffic Strategy */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Megaphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Tráfego Pago (Ads)</h3>
          </div>
          
          <div className="space-y-4">
             <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
               <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Botão Turbinar</span>
               <h4 className="font-bold text-slate-800 mt-1">Configuração da Campanha</h4>
               <ul className="mt-3 space-y-2 text-sm text-slate-600">
                 <li className="flex items-start gap-2">
                   <CheckCircle size={16} className="text-green-500 mt-0.5" />
                   <span><strong>Objetivo:</strong> Mensagens no Direct ou WhatsApp.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle size={16} className="text-green-500 mt-0.5" />
                   <span><strong>Localização:</strong> Assis Chateaubriand (+10km).</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle size={16} className="text-green-500 mt-0.5" />
                   <span><strong>Público:</strong> Mulheres, 25-55 anos.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <CheckCircle size={16} className="text-green-500 mt-0.5" />
                   <span><strong>Interesses:</strong> Maternidade, Johnson's, Huggies, Brinquedos.</span>
                 </li>
               </ul>
             </div>
             <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
               <p className="font-bold text-blue-800">Chamada do Anúncio:</p>
               <p className="text-blue-700 italic">"Clique para pedir o seu combo com cheirinho de maçã verde."</p>
             </div>
          </div>
        </section>

        {/* Visual Identity */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Identidade Visual</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Paleta de Cores</h4>
              <div className="flex gap-4">
                <div className="flex-1 text-center">
                  <div className="h-12 bg-purple-600 rounded-lg shadow-sm mb-2"></div>
                  <span className="text-xs text-slate-500 font-medium">Roxo Dr. Botica</span>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-12 bg-green-500 rounded-lg shadow-sm mb-2"></div>
                  <span className="text-xs text-slate-500 font-medium">Verde Maçã</span>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-12 bg-yellow-400 rounded-lg shadow-sm mb-2"></div>
                  <span className="text-xs text-slate-500 font-medium">Amarelo Mágico</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-700 mb-3">Elementos & GIFs</h4>
              <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                <span className="px-3 py-1 bg-slate-100 rounded-full">Bolhas de sabão 🧼</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">Estrelas ✨</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">Maçã Verde 🍏</span>
                <span className="px-3 py-1 bg-slate-100 rounded-full">Mago 🧙‍♂️</span>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Strategy */}
        <section className="md:col-span-2 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
           <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-200 p-2 rounded-full text-green-700">
              <Smartphone size={20} />
            </div>
            <h3 className="text-lg font-bold text-green-800">Estratégia WhatsApp</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             <div>
               <h4 className="font-bold text-green-800 text-sm mb-2">Status do WhatsApp</h4>
               <p className="text-sm text-green-700 leading-relaxed">
                 Poste as mesmas fotos dos Stories no Status. O público local visualiza muito essa ferramenta. Mantenha atualizado diariamente.
               </p>
             </div>
             <div>
               <h4 className="font-bold text-green-800 text-sm mb-2">Lista de Transmissão (Sexta-feira)</h4>
               <div className="bg-white bg-opacity-60 p-3 rounded-lg text-sm italic text-green-800 border border-green-200">
                 "Olá! 🍏 O Mago Dr. Botica passou por aqui para avisar que o kit de Maçã Verde está disponível. Deixa a pele do seu pequeno hidratada por 48h! Quer que eu separe um para você?"
               </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StrategyGuide;