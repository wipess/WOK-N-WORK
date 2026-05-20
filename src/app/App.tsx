import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Cart, CartItem } from './components/Cart';
import { OrderModal } from './components/OrderModal';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { AdminOrders } from './components/AdminOrders';
import { translations, Language } from '../i18n/translations';
import { MenuItem } from '../data/menuData';

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const t = translations[language];

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderModalOpen(true);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        translations={t}
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Hero translations={t} />
      <Menu language={language} translations={t} onAddToCart={handleAddToCart} />
      <HowItWorks translations={t} />
      <About translations={t} />
      <Contacts translations={t} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        language={language}
        translations={t}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        items={cartItems}
        total={cartTotal}
        translations={t}
        onClearCart={handleClearCart}
      />

      <footer className="bg-card border-t border-accent/20 py-8 text-center">
        <p className="text-muted-foreground">© 2026 Wok'n'work. {t.about.text}</p>
      </footer>
    </div>
  );
}