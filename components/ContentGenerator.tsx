import React, { useState } from 'react';
import { generateCampaignContent } from '../services/geminiService';
import { ContentFormat } from '../types';
import { CAMPAIGN_DATA } from '../constants';
import { Wand2, Copy, Check, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

const ContentGenerator: React.FC = () => {
  const [format, setFormat] = useState<ContentFormat>(ContentFormat.REELS);
  const [topic, setTopic] = useState('');
  const [extraContext, setExtraContext] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    
    setIsLoading(true);
    setGeneratedContent('');
    
    try {
      const content = await generateCampaignContent(format, topic, extraContext);
      setGeneratedContent(content);
    } catch (e) {
      console.error(e);
      setGeneratedContent('Erro ao gerar conteúdo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleQuickFill = (idea: string) => {
    setTopic(idea);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-12">
      <header>
        <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
          <Wand2 className="text-purple-600" />
          Gerador Mágico de Conteúdo
        </h2>
        <p className="text-slate-500 mt-2">
          Use a IA para criar legendas, roteiros e mensagens personalizadas para o Mago Dr. Botica.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Formato do Conteúdo</label>
            <div className="flex flex-wrap gap-2">
              {Object.values(ContentFormat).map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setFormat(fmt)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    format === fmt 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <label className="block text-sm font-semibold text-slate-700 mb-2">Sobre o que vamos falar?</label>
            <textarea
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all h-24 resize-none"
              placeholder="Ex: Benefícios da hidratação, diversão no banho..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            
            {/* Quick Suggestions */}
            <div className="mt-3">
              <p className="text-xs text-slate-400 mb-2 uppercase font-bold tracking-wider">Sugestões do Calendário</p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {CAMPAIGN_DATA.calendar.slice(0, 3).map((day, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickFill(day.idea)}
                    className="flex-shrink-0 text-xs bg-purple-50 text-purple-700 px-3 py-1.5 rounded-full border border-purple-100 hover:bg-purple-100 whitespace-nowrap"
                  >
                    {day.day}: {day.idea.substring(0, 20)}...
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <label className="block text-sm font-semibold text-slate-700 mb-2">Detalhes Extras (Opcional)</label>
             <input 
                type="text"
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                placeholder="Ex: Mencionar promoção de fim de semana, focar nas avós..."
                value={extraContext}
                onChange={(e) => setExtraContext(e.target.value)}
             />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || isLoading}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 ${
              !topic || isLoading
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/30'
            }`}
          >
            {isLoading ? (
              <>
                <RefreshCw className="animate-spin" /> Criando Mágica...
              </>
            ) : (
              <>
                <Wand2 /> Gerar Conteúdo
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl text-slate-100 flex flex-col min-h-[500px]">
          <div className="flex justify-between items-center mb-4 border-b border-slate-700 pb-4">
            <h3 className="font-bold flex items-center gap-2">
              <Sparkles className="text-yellow-400" size={18} /> 
              Resultado Mágico
            </h3>
            {generatedContent && (
              <button 
                onClick={handleCopy}
                className="text-xs flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                {isCopied ? <Check size={14} className="text-green-400"/> : <Copy size={14} />}
                {isCopied ? 'Copiado!' : 'Copiar'}
              </button>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {generatedContent ? (
              <div className="whitespace-pre-wrap leading-relaxed font-sans text-slate-300">
                {generatedContent}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4">
                <Wand2 size={48} className="opacity-20" />
                <p className="text-center max-w-xs">
                  Seu conteúdo mágico aparecerá aqui. Selecione um formato e tópico ao lado.
                </p>
              </div>
            )}
          </div>

          {!process.env.API_KEY && (
            <div className="mt-4 p-3 bg-red-900/50 border border-red-800 rounded-lg flex items-start gap-2 text-xs text-red-200">
              <AlertCircle size={14} className="mt-0.5 shrink-0" />
              <p>Aviso: API Key não encontrada. O gerador pode não funcionar corretamente no ambiente de demonstração.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;