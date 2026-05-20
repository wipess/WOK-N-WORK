import { ChevronDown } from 'lucide-react';

interface HeroProps {
  translations: any;
}

export function Hero({ translations }: HeroProps) {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1768806470347-0d336287d6b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxjaGluZXNlJTIwd29rJTIwbm9vZGxlcyUyMGNvb2tpbmclMjBhc2lhbiUyMGZvb2R8ZW58MXx8fHwxNzc4NzI1OTIyfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000]/80 via-[#1a0000]/70 to-[#1a0000]/90" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-accent text-9xl opacity-20">福</div>
        <div className="absolute bottom-20 right-20 text-accent text-9xl opacity-20">味</div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-6 drop-shadow-lg">
          {translations.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          {translations.hero.subtitle}
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition transform hover:scale-105 shadow-lg border-2 border-accent/30"
        >
          {translations.hero.orderButton}
        </button>
      </div>

      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
