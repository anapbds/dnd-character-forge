import { Character, CharacterRequest } from "../types/Character";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

export async function gerarPersonagem(
  dados: CharacterRequest,
): Promise<Character> {
  // Verifica se a chave da API foi configurada antes de realizar a requisição.
  if (!API_KEY) {
    throw new Error("Chave da API Gemini não configurada.");
  }

  /*
   * Prompt enviado para a inteligência artificial.
   *
   * Os dados informados pelo usuário são inseridos no prompt
   * para que o Gemini possa gerar um personagem personalizado.
   */
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

  /*
   * Realiza a chamada para a API do Gemini utilizando fetch.
   * A resposta da IA será utilizada para montar o personagem
   * que será exibido na tela de resultado.
   */
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

  /*
   * O Gemini retorna a resposta dentro de uma estrutura de candidatos
   * e partes de conteúdo. Aqui extraímos somente o texto gerado pela IA.
   */
  const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!texto) {
    throw new Error("O Gemini não retornou um personagem.");
  }

  /*
   * Remove possíveis blocos de markdown caso a IA retorne
   * o JSON dentro de ```json ... ```.
   */
  const jsonLimpo = texto
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  // Converte o JSON retornado pela IA para o objeto Character.
  return JSON.parse(jsonLimpo) as Character;
}
