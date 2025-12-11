import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, X, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    image: string;
    videoUrl?: string;
    playUrl?: string;
    developmentDates?: {
      start: string;
      release: string;
    };
    team?: {
      name: string;
      role: string;
    }[];
  } | null;
}

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const GameModal = ({ isOpen, onClose, game }: GameModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Reseta os estados quando o modal fecha ou muda de jogo
  useEffect(() => {
    setIsPlaying(false);
    setShowDetails(false);
  }, [isOpen, game]);

  if (!game) return null;

  const videoId = game.videoUrl ? getYouTubeId(game.videoUrl) : null;
  const gameLink = game.playUrl || "https://itch.io/";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-border w-full transition-all duration-300">
        
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="flex flex-col justify-center pt-4">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold mb-4">{game.title}</DialogTitle>
            </DialogHeader>

            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-foreground/80 mb-4 leading-relaxed">{game.description}</p>
            <p className="text-foreground/60 mb-6 leading-relaxed">{game.longDescription}</p>

            <div className="flex gap-3 mt-auto flex-wrap">
              <Button className="gap-2" asChild>
                <a href={gameLink} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4" />
                  Jogar Agora
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {showDetails ? "Menos Detalhes" : "Saiba Mais"}
              </Button>
            </div>
          </div>

          <div className="relative aspect-video bg-muted rounded-md overflow-hidden self-center w-full shadow-sm border border-border/50">
            {isPlaying && videoId ? (
              <div className="relative w-full h-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-1 right-1 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full h-8 w-8 backdrop-blur-sm"
                  onClick={() => setIsPlaying(false)}
                >
                  <X className="w-4 h-4" />
                  <span className="sr-only">Fechar Trailer</span>
                </Button>
              </div>
            ) : (
              <>
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                {videoId && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="gap-2 shadow-lg hover:scale-105 transition-transform"
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play className="w-6 h-6" />
                      Ver Trailer
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Saiba Mais */}
        {showDetails && (
          <div className="mt-8 pt-6 border-t border-border animate-in slide-in-from-top-4 fade-in duration-300">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Cronograma */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-bold text-lg">Cronograma</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-md space-y-3">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-foreground/70 text-sm">Início do Desenvolvimento:</span>
                    <span className="font-medium">{game.developmentDates?.start || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70 text-sm">Data de Lançamento:</span>
                    <span className="font-medium">{game.developmentDates?.release || "Em breve"}</span>
                  </div>
                </div>
              </div>

              {/* Equipe */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Users className="w-5 h-5" />
                  <h3 className="font-bold text-lg">Equipe de Desenvolvimento</h3>
                </div>
                <div className="bg-muted/50 p-4 rounded-md">
                  {game.team && game.team.length > 0 ? (
                    <ul className="space-y-2">
                      {game.team.map((member, index) => (
                        <li key={index} className="flex flex-col sm:flex-row sm:justify-between text-sm">
                          <span className="font-semibold text-foreground">{member.name}</span>
                          <span className="text-foreground/60 italic">{member.role}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-foreground/60 italic">Informação de equipe não disponível.</p>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
};

export default GameModal;