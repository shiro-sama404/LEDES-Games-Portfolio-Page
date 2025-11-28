import { useState } from 'react';
import { motion } from 'framer-motion';
import GameModal from './GameModal';
import pantanalWorldImg from '@/assets/game-pantanal-world.jpg';
import pantanalWordImg from '@/assets/game-pantanal-word.jpg';
import theseusImg from '@/assets/game-theseus.jpg';
import museumImg from '@/assets/game-museum.jpg';
import cosmicRunnerImg from '@/assets/game-cosmic-runner.jpg';
import codeQuestImg from '@/assets/game-code-quest.jpg';

const games = [
  {
    id: 1,
    title: 'Pantanal World 3D',
    description: 'Uma aventura de exploração e criatividade ambientada no bioma do Pantanal.',
    longDescription: 'Explore um mundo aberto em low poly inspirado no Pantanal brasileiro. Construa, descubra segredos e interaja com a fauna local em uma experiência sandbox única.',
    tags: ['Sandbox', 'Exploração', 'Low Poly'],
    image: pantanalWorldImg,
  },
  {
    id: 2,
    title: 'Pantanal Word',
    description: 'Jogo educativo de palavras ambientado no Pantanal.',
    longDescription: 'Aprenda sobre o vocabulário do Pantanal enquanto se diverte com desafios de palavras. Um jogo educativo que combina aprendizado com entretenimento.',
    tags: ['Educativo', 'Puzzle', 'Palavras'],
    image: pantanalWordImg,
  },
  {
    id: 3,
    title: "Theseu's Odyssey",
    description: 'Aventura mitológica inspirada na Grécia Antiga.',
    longDescription: 'Embarque em uma jornada épica através da mitologia grega. Viva a lendária odisséia de Teseu e enfrente criaturas lendárias! Tudo isso com opções de acessibilidade.',
    tags: ['Aventura', 'Mitologia', 'Ação'],
    image: theseusImg,
  },
  {
    id: 4,
    title: 'Museu das Mulheres Negras',
    description: 'Experiência cultural e educativa interativa.',
    longDescription: 'Uma experiência imersiva que celebra as contribuições de mulheres negras na história. Explore galerias virtuais e aprenda histórias inspiradoras.',
    tags: ['Educativo', 'Cultural', 'Interativo'],
    image: museumImg,
  },
  {
    id: 5,
    title: 'Jogo exemplo: Cosmic Runner',
    description: 'Corrida espacial em alta velocidade.',
    longDescription: 'Navegue através de nebulosas coloridas e desvie de asteroides neste endless runner espacial. Colete power-ups e quebre recordes.',
    tags: ['Ação', 'Arcade', 'Espacial'],
    image: cosmicRunnerImg,
  },
  {
    id: 6,
    title: 'Jogo exemplo: Code Quest',
    description: 'Aprenda programação jogando.',
    longDescription: 'Resolva desafios de programação em um ambiente gamificado. Perfeito para iniciantes que querem aprender lógica e algoritmos de forma divertida.',
    tags: ['Educativo', 'Programação', 'Puzzle'],
    image: codeQuestImg,
  },
];

const GameGrid = () => {
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

  return (
    <>
      <section id="games" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossos Jogos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedGame(game)}
                className="group cursor-pointer h-full" // Garante que o container ocupe toda altura da grid
              >
                <div className="bg-card border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col">
                  
                  <div className="relative aspect-square overflow-hidden shrink-0">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-primary font-medium">Ver Detalhes →</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    
                    <p className="text-foreground/70 text-sm mb-4 flex-1">
                      {game.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {game.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GameModal
        isOpen={!!selectedGame}
        onClose={() => setSelectedGame(null)}
        game={selectedGame}
      />
    </>
  );
};

export default GameGrid;