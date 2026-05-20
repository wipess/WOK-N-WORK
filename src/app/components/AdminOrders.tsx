import { useState, useEffect } from 'react';
import { RefreshCw, Package, X } from 'lucide-react';
import { projectId, publicAnonKey } from '../../../utils/supabase/info';

interface Order {
  orderNumber: string;
  customerName: string;
  phone: string;
  pickupType: string;
  time: string;
  payment: string;
  items: any[];
  total: number;
  status: string;
  createdAt: string;
}

interface AdminOrdersProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminOrders({ isOpen, onClose }: AdminOrdersProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchOrders = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-e72c237a/orders`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data.orders || []);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err instanceof Error ? err.message : 'Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchOrders();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />

      <div className="fixed inset-4 md:inset-10 bg-card z-50 shadow-2xl flex flex-col rounded-lg">
        <div className="flex items-center justify-between p-6 border-b border-accent/20">
          <h2 className="text-2xl font-bold text-accent flex items-center gap-2">
            <Package className="w-6 h-6" />
            Заказы (Admin)
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchOrders}
              disabled={loading}
              className="p-2 hover:bg-muted rounded-lg transition"
            >
              <RefreshCw className={`w-5 h-5 text-foreground ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {error && (
            <div className="bg-destructive/10 border border-destructive text-destructive-foreground p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          {loading && orders.length === 0 ? (
            <div className="text-center py-12">
              <RefreshCw className="w-12 h-12 text-muted-foreground mx-auto mb-4 animate-spin" />
              <p className="text-muted-foreground">Загрузка заказов...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Заказов пока нет</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {orders.map((order) => (
                <div key={order.orderNumber} className="bg-background rounded-lg p-4 border border-accent/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-accent text-lg">
                        #{order.orderNumber}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.createdAt).toLocaleString('ru-RU')}
                      </p>
                    </div>
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Имя:</span>
                      <span className="text-foreground font-medium">{order.customerName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Телефон:</span>
                      <span className="text-foreground font-medium">{order.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Тип:</span>
                      <span className="text-foreground font-medium">
                        {order.pickupType === 'takeaway' ? 'С собой' : 'В зале'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Время:</span>
                      <span className="text-foreground font-medium">{order.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Оплата:</span>
                      <span className="text-foreground font-medium">
                        {order.payment === 'online' ? 'Онлайн' : order.payment === 'cash' ? 'Наличные' : 'Карта'}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-accent/20 pt-3">
                    <p className="text-sm text-muted-foreground mb-2">Состав заказа:</p>
                    <div className="space-y-1">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-foreground">
                            {item.name.ru || item.name} x{item.quantity}
                          </span>
                          <span className="text-accent font-medium">{item.price * item.quantity} ₽</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between font-bold text-lg mt-2 pt-2 border-t border-accent/20">
                      <span className="text-foreground">Итого:</span>
                      <span className="text-accent">{order.total} ₽</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
