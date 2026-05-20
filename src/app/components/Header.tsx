import { ShoppingCart, Globe } from 'lucide-react';
import { Language } from '../../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  translations: any;
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ language, onLanguageChange, translations, cartItemsCount, onCartClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a0000]/95 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="font-bold text-[#1a0000]">W</span>
            </div>
            <h1 className="text-xl text-accent font-bold">Wok'n'work</h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('menu')} className="text-foreground hover:text-accent transition">
              {translations.header.menu}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-foreground hover:text-accent transition">
              {translations.header.howItWorks}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition">
              {translations.header.about}
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition">
              {translations.header.contacts}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-card rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('ru')}
                className={`px-2 py-1 rounded text-sm transition ${
                  language === 'ru' ? 'bg-accent text-[#1a0000]' : 'text-foreground hover:text-accent'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded text-sm transition ${
                  language === 'en' ? 'bg-accent text-[#1a0000]' : 'text-foreground hover:text-accent'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('cn')}
                className={`px-2 py-1 rounded text-sm transition ${
                  language === 'cn' ? 'bg-accent text-[#1a0000]' : 'text-foreground hover:text-accent'
                }`}
              >
                中文
              </button>
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 bg-primary hover:bg-primary/80 rounded-lg transition"
            >
              <ShoppingCart className="w-5 h-5 text-white" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-[#1a0000] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
