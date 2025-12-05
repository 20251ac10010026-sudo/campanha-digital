import { CampaignData, ContentFormat } from './types';
import { Sparkles, Heart, Users, MapPin, Droplets, Smile } from 'lucide-react';

export const CAMPAIGN_DATA: CampaignData = {
  objective: "Aumentar a venda do 'Combo Dr. Botica' (Sabonete + Loção) e atrair novos clientes.",
  concept: "Transforme o banho em um momento mágico.",
  persona: {
    who: "Mães, pais, avós e tios de crianças (0 a 8 anos).",
    painPoints: [
      "Dificuldade na hora do banho",
      "Pele ressecada da criança",
      "Busca por produtos seguros e cheirosos"
    ],
    interests: ["Maternidade", "Cuidados infantis", "Promoções locais", "Presentes"],
    location: "Assis Chateaubriand, PR"
  },
  pillars: [
    {
      title: "Sensorial e Benefícios",
      description: "Cheirinho de maçã verde, hidratação 48h e texturas.",
      icon: "Droplets"
    },
    {
      title: "Lúdico/Mágico",
      description: "Personagem Mago Dr. Botica. Banho é diversão.",
      icon: "Sparkles"
    },
    {
      title: "Prova Social",
      description: "Repost de clientes e uso real do produto.",
      icon: "Users"
    }
  ],
  calendar: [
    {
      day: "Segunda",
      format: ContentFormat.REELS,
      idea: "Vídeo curto mostrando as texturas: espuma e absorção. ASMR ou música suave.",
      cta: "Começando a semana com cheirinho de maçã verde! 🍏 Quem ama esse combo?"
    },
    {
      day: "Terça",
      format: ContentFormat.STORIES,
      idea: "Enquete: Banho Mágico 🧙‍♂️ vs Batalha ⚔️. Foto do produto como solução.",
      cta: "Vote na enquete!"
    },
    {
      day: "Quarta",
      format: ContentFormat.CAROUSEL,
      idea: "Foto 1: Mago. Foto 2: Pele limpa. Foto 3: Hidratação 48h.",
      cta: "O segredo do Dr. Botica para uma pele macia? Arraste para o lado."
    },
    {
      day: "Quinta",
      format: ContentFormat.STORIES,
      idea: "Bastidores na loja montando kit presente com sacola bonita.",
      cta: "Presente perfeito? Chama no Direct para reservar."
    },
    {
      day: "Sexta",
      format: ContentFormat.PHOTO,
      idea: "Foto produzida do combo com brinquedos de banho ao fundo.",
      cta: "Sextou com banho divertido! 🛀 Garanta o combo para o fim de semana."
    },
    {
      day: "Sábado",
      format: ContentFormat.REELS,
      idea: "Visitando a loja: Mostre onde fica na prateleira.",
      cta: "Venha sentir esse cheirinho aqui na loja! Estamos abertos."
    },
    {
      day: "Domingo",
      format: ContentFormat.STORIES,
      idea: "Repost de clientes ou foto relaxante.",
      cta: "Desejamos uma semana mágica para todos os pequenos!"
    }
  ]
};