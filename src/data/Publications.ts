export interface Publication {
  id: number;
  title: string;
  abstract: string;
  authors: string;
  conference: string;
  date: string;
  type: string;
  link: string;
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Design Sprint aplicada ao desenvolvimento de jogos e gamificações",
    abstract: "Um estudo de caso sobre o desenvolvimento do game 'Pantanal World'.",
    authors: "Nome, A., Nome, B.",
    conference: "SBGames 2026",
    date: "Novembro 2025",
    type: "Artigo Completo",
    link: "#"
  },
  {
    id: 2,
    title: "Acessibilidade em Jogos Digitais",
    abstract: "Análise das principais técnicas de acessibilidade visual e auditiva utilizadas no jogo Theseu's Odissey.",
    authors: "Nome, A., Nome, B.",
    conference: "SBGames  2026",
    date: "Outubro 2025",
    type: "Short Paper",
    link: "#"
  },
];