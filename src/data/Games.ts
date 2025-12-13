import pantanalWorldImg from '@/assets/game-pantanal-world.jpg';
import pantanalWordImg from '@/assets/game-pantanal-word.jpg';
import theseusImg from '@/assets/game-theseus.jpg';
import museumImg from '@/assets/game-museum.jpg';

export interface Game {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  videoUrl?: string;
  playUrl?: string;
  isFeatured?: boolean;
  developmentDates?: {
    start: string;
    release: string;
  };
  team?: {
    name: string;
    role: string;
  }[];
}

export const games: Game[] = [
  {
    id: 1,
    title: 'Museu das Mulheres Negras',
    description: 'Experiência cultural e educativa interativa.',
    longDescription: 'Uma experiência imersiva que celebra as contribuições de mulheres negras na história.',
    tags: ['Educativo', 'Cultural', 'Interativo'],
    image: museumImg,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    playUrl: 'https://itch.io',
    developmentDates: {
      start: 'Fevereiro 2024',
      release: 'Dezembro 2024'
    },
    team: [
      { name: 'Nome 1', role: 'Programador, UI Designer' },
      { name: 'Nome 2', role: 'Game Designer' },
      { name: 'Nome 3', role: 'Sound Designer' }
    ]
  },
  {
    id: 2,
    title: 'Pantanal Word',
    description: 'Jogo educativo de palavras ambientado no Pantanal.',
    longDescription: 'Aprenda sobre o vocabulário do Pantanal enquanto se diverte com desafios de palavras.',
    tags: ['Educativo', 'Puzzle', 'Palavras'],
    image: pantanalWordImg,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    playUrl: 'https://itch.io',
    developmentDates: {
      start: 'Fevereiro 2024',
      release: 'Dezembro 2024'
    },
    team: [
      { name: 'Nome 1', role: 'Programador, UI Designer' },
      { name: 'Nome 2', role: 'Game Designer' },
      { name: 'Nome 3', role: 'Sound Designer' }
    ]
  },
  {
    id: 3,
    title: "Theseu's Odyssey",
    description: 'Aventura mitológica inspirada na Grécia Antiga.',
    longDescription: 'Embarque em uma jornada épica através da mitologia grega.',
    tags: ['Aventura', 'Mitologia', 'Ação'],
    image: theseusImg,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    playUrl: 'https://itch.io',
    developmentDates: {
      start: 'Março 2025',
      release: 'Dezembro 2025'
    },
    team: [
      { name: 'Nome 1', role: 'Programador, UI Designer' },
      { name: 'Nome 2', role: 'Game Designer' },
      { name: 'Nome 3', role: 'Sound Designer' }
    ]
  },
  {
    id: 4,
    title: 'Pantanal World 3D',
    isFeatured: true, 
    description: 'Uma aventura de exploração e criatividade ambientada no vasto bioma do Pantanal.',
    longDescription: 'Explore um mundo aberto em low poly inspirado no Pantanal brasileiro. Construa, descubra segredos e interaja com a fauna local em uma experiência sandbox única.',
    tags: ['Sandbox', 'Exploração', 'Low Poly'],
    image: pantanalWorldImg,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    playUrl: 'https://itch.io',
    developmentDates: {
      start: 'Fevereiro 2024',
      release: 'Dezembro 2024'
    },
    team: [
      { name: 'Nome 1', role: 'Programador, UI Designer' },
      { name: 'Nome 2', role: 'Game Designer' },
      { name: 'Nome 3', role: 'Sound Designer' }
    ]
  },
];