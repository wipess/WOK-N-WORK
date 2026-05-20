import { useState } from 'react';
import { Plus, Flame, Leaf } from 'lucide-react';
import { MenuItem, MenuCategory, menuItems } from '../../data/menuData';
import { Language } from '../../i18n/translations';

interface MenuProps {
  language: Language;
  translations: any;
  onAddToCart: (item: MenuItem) => void;
}

export function Menu({ language, translations, onAddToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');

  const categories: (MenuCategory | 'all')[] = ['all', 'classic', 'spicy', 'vegetarian', 'appetizers', 'drinks'];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-accent text-center mb-12">
          {translations.menu.title}
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-accent text-[#1a0000]'
                  : 'bg-card text-foreground hover:bg-card/80 border border-accent/30'
              }`}
            >
              {translations.menu.categories[category]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-card rounded-lg overflow-hidden border border-accent/20 hover:border-accent/40 transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  {item.isSpicy && (
                    <div className="bg-primary/90 p-1.5 rounded-full">
                      <Flame className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {item.isVegetarian && (
                    <div className="bg-green-600/90 p-1.5 rounded-full">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg text-foreground mb-2">
                  {item.name[language]}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description[language]}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">
                    {item.price} {translations.menu.price}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
                  >
                    <Plus className="w-4 h-4" />
                    {translations.menu.addToCart}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
