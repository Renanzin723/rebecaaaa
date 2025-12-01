import { GoogleGenAI } from "@google/genai";
import { ComfortTheme } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateComfortMessage = async (name: string, theme: ComfortTheme): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Você é um assistente empático em uma página de vendas de um livro sobre luto e amor paternal chamado "Para Rebeca". 
      
      Escreva uma mensagem curta, poética e reconfortante (máximo de 3 frases) para um visitante chamado "${name}".
      O tema da mensagem deve ser: "${theme}".
      
      A mensagem deve soar como se fosse um trecho de um livro emocionante, transmitindo paz e acolhimento. Não seja clichê.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "O amor é a única coisa que cresce quando se reparte.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "Que a paz encontre seu coração nos momentos de silêncio, e que as memórias tragam um sorriso suave ao seu rosto.";
  }
};