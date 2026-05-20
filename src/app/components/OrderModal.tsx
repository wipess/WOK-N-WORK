import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { CartItem } from './Cart';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  translations: any;
  onClearCart: () => void;
}

export function OrderModal({ isOpen, onClose, items, total, translations, onClearCart }: OrderModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupType: 'takeaway',
    time: '',
    payment: 'cash',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = 'WOK' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setOrderNumber(orderNum);
    setOrderPlaced(true);
    setTimeout(() => {
      onClearCart();
      setOrderPlaced(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        pickupType: 'takeaway',
        time: '',
        payment: 'cash',
      });
    }, 5000);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div
          className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!orderPlaced ? (
            <>
              <div className="flex items-center justify-between p-6 border-b border-accent/20">
                <h2 className="text-2xl font-bold text-accent">{translations.order.title}</h2>
                <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition">
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-foreground mb-2">
                    {translations.order.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-input-background border border-accent/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2">
                    {translations.order.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-input-background border border-accent/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2">
                    {translations.order.pickupType}
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="pickupType"
                        value="takeaway"
                        checked={formData.pickupType === 'takeaway'}
                        onChange={(e) => setFormData({ ...formData, pickupType: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-foreground">{translations.order.takeaway}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="pickupType"
                        value="dinein"
                        checked={formData.pickupType === 'dinein'}
                        onChange={(e) => setFormData({ ...formData, pickupType: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-foreground">{translations.order.dinein}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-foreground mb-2">
                    {translations.order.time}
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-input-background border border-accent/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label className="block text-foreground mb-2">
                    {translations.order.payment}
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={formData.payment === 'online'}
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-foreground">{translations.order.online}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={formData.payment === 'cash'}
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-foreground">{translations.order.cash}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={formData.payment === 'card'}
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        className="accent-primary"
                      />
                      <span className="text-foreground">{translations.order.card}</span>
                    </label>
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">{translations.cart.total}:</span>
                    <span className="text-2xl font-bold text-accent">
                      {total} {translations.menu.price}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition"
                >
                  {translations.order.submit}
                </button>
              </form>
            </>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-[#1a0000]" />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-4">
                {translations.order.success}
              </h3>
              <p className="text-foreground mb-2">
                {translations.order.orderNumber}: <span className="font-bold text-accent">{orderNumber}</span>
              </p>
              <p className="text-muted-foreground">
                {translations.order.pickupIn}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
