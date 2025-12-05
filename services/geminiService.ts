import { GoogleGenAI } from "@google/genai";
import { ContentFormat } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCampaignContent = async (
  format: ContentFormat,
  topic: string,
  extraContext: string
): Promise<string> => {
  const model = "gemini-2.5-flash";
  
  const systemInstruction = `
    Você é um especialista em marketing digital e social media para "O Boticário", focado na franquia de Assis Chateaubriand, PR.
    Seu tom de voz é mágico, lúdico, acolhedor e leve, focado em pais de crianças pequenas.
    Você está criando conteúdo para a linha "Dr. Botica" (Mago), especificamente o combo de Maçã Verde.
    
    Diretrizes visuais e textuais:
    - Use Emojis mágicos e verdes (🍏, ✨, 🛀, 🧙‍♂️, 🧼).
    - Foque nos benefícios: Cheiro de maçã verde, hidratação 48h, banho divertido.
    - Localização: Mencione Assis Chateaubriand quando relevante.
    - Chame para ação (CTA) clara.
  `;

  const prompt = `
    Crie um conteúdo para o formato: ${format}.
    Tópico principal: ${topic}.
    Contexto adicional: ${extraContext}.
    
    Se for REELS, crie um roteiro curto e a legenda.
    Se for STORIES, descreva a sequência de telas e textos sobrepostos.
    Se for WHATSAPP, crie uma mensagem direta e persuasiva para lista de transmissão.
    Se for FOTO/CARROSSEL, crie a legenda completa.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
      }
    });

    return response.text || "Não foi possível gerar o conteúdo. Tente novamente.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Erro ao conectar com o Mago Dr. Botica (Erro de API). Verifique sua chave ou tente novamente mais tarde.";
  }
};