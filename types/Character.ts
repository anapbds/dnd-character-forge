// Dados enviados pelo usuário para gerar o personagem.
export interface CharacterRequest {
  raca: string;
  classe: string;
  estilo: string;
  ideia?: string;
}

// Estrutura do personagem gerado pela IA.
export interface Character {
  nome: string;
  raca: string;
  classe: string;
  personalidade: string;
  aparencia: string;
  historia: string;
  motivacao: string;
  medo: string;
  segredo: string;
  ganchoAventura: string;
}
