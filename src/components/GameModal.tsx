import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';

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
  } | null;
}

const GameModal = ({ isOpen, onClose, game }: GameModalProps) => {
  if (!game) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-card border-border w-full">
        
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

            <div className="flex gap-3 mt-auto">
              <Button className="gap-2">
                <Play className="w-4 h-4" />
                Jogar Agora
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Saiba Mais
              </Button>
            </div>
          </div>

          <div className="relative aspect-video bg-muted rounded-md overflow-hidden self-center w-full shadow-sm border border-border/50">
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Button size="lg" variant="secondary" className="gap-2 shadow-lg">
                <Play className="w-6 h-6" />
                Ver Trailer
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameModal;