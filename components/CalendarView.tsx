import React from 'react';
import { CAMPAIGN_DATA } from '../constants';
import { ContentFormat } from '../types';
import { Video, Image, Camera, MessageCircle, Layers } from 'lucide-react';

const CalendarView: React.FC = () => {
  const { calendar } = CAMPAIGN_DATA;

  const getIcon = (format: ContentFormat) => {
    switch (format) {
      case ContentFormat.REELS: return <Video size={16} />;
      case ContentFormat.STORIES: return <Camera size={16} />;
      case ContentFormat.CAROUSEL: return <Layers size={16} />;
      case ContentFormat.PHOTO: return <Image size={16} />;
      case ContentFormat.WHATSAPP: return <MessageCircle size={16} />;
      default: return <Image size={16} />;
    }
  };

  const getColor = (format: ContentFormat) => {
    switch (format) {
      case ContentFormat.REELS: return 'bg-pink-100 text-pink-700 border-pink-200';
      case ContentFormat.STORIES: return 'bg-amber-100 text-amber-700 border-amber-200';
      case ContentFormat.CAROUSEL: return 'bg-blue-100 text-blue-700 border-blue-200';
      case ContentFormat.PHOTO: return 'bg-purple-100 text-purple-700 border-purple-200';
      case ContentFormat.WHATSAPP: return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <header>
        <h2 className="text-3xl font-bold text-slate-800">Calendário Semanal</h2>
        <p className="text-slate-500 mt-2">Cronograma sugerido para engajamento máximo.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {calendar.map((dayData, index) => (
          <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all duration-300">
            <div className={`px-4 py-3 border-b flex justify-between items-center ${getColor(dayData.format)} bg-opacity-30`}>
              <span className="font-bold">{dayData.day}</span>
              <div className={`px-2 py-1 rounded text-xs font-bold flex items-center gap-1 bg-white bg-opacity-60`}>
                {getIcon(dayData.format)}
                {dayData.format}
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Ideia de Conteúdo</h4>
              <p className="text-slate-700 mb-4 flex-1 text-sm leading-relaxed">
                {dayData.idea}
              </p>
              
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <p className="text-xs font-bold text-purple-600 mb-1">CTA / Legenda</p>
                <p className="text-xs text-slate-600 italic">"{dayData.cta}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100 flex flex-col md:flex-row items-center gap-6">
        <div className="bg-green-100 p-4 rounded-full text-green-600">
          <MessageCircle size={32} />
        </div>
        <div>
          <h4 className="font-bold text-green-800 text-lg">Dica para WhatsApp</h4>
          <p className="text-green-700 text-sm mt-1">
            Lembre-se de postar os Stories também no Status do WhatsApp da loja. Na sexta-feira, utilize a Lista de Transmissão para fechar vendas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;