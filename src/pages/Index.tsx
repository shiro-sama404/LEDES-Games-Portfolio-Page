import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameGrid from '@/components/GameGrid';
import InstitutionalSection from '@/components/InstitutionalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <GameGrid />
      <InstitutionalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;