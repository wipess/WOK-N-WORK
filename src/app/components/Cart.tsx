import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Language } from '../../i18n/translations';

export interface CartItem {
  id: string;
  name: {
    ru: string;
    en: string;
    cn: string;
  };
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  language: Language;
  translations: any;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Cart({
  isOpen,
  onClose,
  items,
  language,
  translations,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-card z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <h2 className="text-2xl font-bold text-accent flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            {translations.cart.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{translations.cart.empty}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-background rounded-lg p-4 border border-accent/20">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name[language]}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">
                        {item.name[language]}
                      </h3>
                      <p className="text-accent font-bold">
                        {item.price} {translations.menu.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive hover:bg-destructive/10 p-1 rounded h-fit"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-muted rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-background rounded-lg transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-background rounded-lg transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-bold text-accent">
                      {item.price * item.quantity} {translations.menu.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-accent/20 bg-background">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium text-foreground">
                {translations.cart.total}:
              </span>
              <span className="text-2xl font-bold text-accent">
                {total} {translations.menu.price}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition"
            >
              {translations.cart.checkout}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
