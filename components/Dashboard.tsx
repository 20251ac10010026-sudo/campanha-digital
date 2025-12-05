import React from 'react';
import { CAMPAIGN_DATA } from '../constants';
import { Target, Users, MapPin, Sparkles, Droplets, Smile } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { objective, concept, persona, pillars } = CAMPAIGN_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Droplets: <Droplets className="w-6 h-6 text-blue-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-purple-500" />,
    Users: <Users className="w-6 h-6 text-green-500" />
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Visão Geral da Campanha</h2>
        <p className="text-slate-500 mt-2">Estratégia para Combo Dr. Botica (Sabonete + Loção)</p>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target size={120} />
          </div>
          <h3 className="text-purple-200 font-semibold mb-2 flex items-center gap-2">
            <Target size={18} /> Objetivo Principal
          </h3>
          <p className="text-xl font-bold leading-relaxed">{objective}</p>
          <div className="mt-4 pt-4 border-t border-purple-500/30">
            <p className="text-sm text-purple-200">Conceito Criativo:</p>
            <p className="text-lg font-serif italic">"{concept}"</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
           <div>
            <h3 className="text-slate-500 font-semibold mb-4 flex items-center gap-2">
              <Users size={18} /> Persona Alvo
            </h3>
            <div className="flex items-start gap-4 mb-4">
               <div className="bg-slate-100 p-3 rounded-full">
                 <Smile size={24} className="text-slate-600"/>
               </div>
               <div>
                 <h4 className="font-bold text-slate-800 text-lg">{persona.who}</h4>
                 <div className="flex items-center text-sm text-slate-500 mt-1">
                   <MapPin size={14} className="mr-1" />
                   {persona.location}
                 </div>
               </div>
            </div>
           </div>
           
           <div className="space-y-2">
             <p className="text-xs font-semibold text-slate-400 uppercase">Principais Dores</p>
             <div className="flex flex-wrap gap-2">
               {persona.painPoints.map((pain, idx) => (
                 <span key={idx} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                   {pain}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </div>

      {/* Pillars */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4">Pilares de Conteúdo</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-slate-50 w-12 h-12 rounded-xl flex items-center justify-center">
                {iconMap[pillar.icon]}
              </div>
              <h4 className="font-bold text-lg text-slate-800 mb-2">{pillar.title}</h4>
              <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;