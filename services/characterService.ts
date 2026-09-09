import { Character, CharacterRequest } from "../types/Character";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

export async function gerarPersonagem(
  dados: CharacterRequest,
): Promise<Character> {
  if (!API_KEY) {
    throw new Error("Chave da API Gemini não configurada.");
  }

  const prompt = `
    Você é um criador de personagens para RPG de fantasia inspirado em Dungeons & Dragons.

    Crie um personagem original usando as seguintes informações:

    Raça: ${dados.raca}
    Classe: ${dados.classe}
    Estilo da história: ${dados.estilo}
    Ideia adicional: ${dados.ideia || "Nenhuma. Seja criativo."}

    Retorne SOMENTE um JSON válido, sem markdown, comentários ou texto adicional.

    Use exatamente esta estrutura:

    {
    "nome": "",
    "raca": "${dados.raca}",
    "classe": "${dados.classe}",
    "personalidade": "",
    "aparencia": "",
    "historia": "",
    "motivacao": "",
    "medo": "",
    "segredo": "",
    "ganchoAventura": ""
    }

    Crie uma história interessante, coerente e adequada para um personagem que possa ser usado em uma campanha de RPG.
    `;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY,
      },

      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    },
  );

  if (!response.ok) {
    const error = await response.text();

    console.error("Status Gemini:", response.status);
    console.error("Resposta Gemini:", error);

    throw new Error(`Erro Gemini (${response.status}): ${error}`);
  }

  const data = await response.json();

  const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!texto) {
    throw new Error("O Gemini não retornou um personagem.");
  }

  // Caso o modelo coloque ```json mesmo após pedirmos para não colocar.
  const jsonLimpo = texto
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(jsonLimpo) as Character;
}
