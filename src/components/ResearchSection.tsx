import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, ExternalLink, Calendar } from 'lucide-react';
import { publications } from '@/data/Publications';

const Research = () => {
  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pesquisas e Publicações</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Não apenas desenvolvemos games! Também contribuímos ativamente para a ciência e engenharia de software aplicada ao entretenimento digital.
          </p>
        </motion.div>

        {/* Lista de Publicações */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="font-normal">
                          {pub.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {pub.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl md:text-2xl text-primary">
                        {pub.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/60 text-sm font-medium">
                        {pub.conference} • {pub.authors}
                      </CardDescription>
                    </div>
                    
                    <Button variant="outline" size="sm" className="shrink-0 gap-2" asChild>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4" />
                        Ler Publicação
                        <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    {pub.abstract}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Research;