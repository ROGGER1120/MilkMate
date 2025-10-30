import { X, Gift, TrendingUp, Truck, Bell } from 'lucide-react';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';

/**
 * @typedef {Object} NotificationPanelProps
 * @property {boolean} isOpen - Whether the notification panel is open
 * @property {function(): void} onClose - Function to close the notification panel
 */

/**
 * Notification panel component
 * @param {NotificationPanelProps} props
 */
export default function NotificationPanel({ isOpen, onClose }) {
  const notifications = {
    system: [
      { id: 1, title: 'System Update', message: 'New features added to your dashboard', time: '2h ago', icon: Bell },
      { id: 2, title: 'Profile Updated', message: 'Your profile information has been saved', time: '1d ago', icon: Bell },
    ],
    offers: [
      { id: 3, title: 'Pongal Special', message: 'Add Ghee Bundle - 20% off!', time: '3h ago', icon: Gift },
      { id: 4, title: 'Weekend Deal', message: 'Free delivery on orders above ₹500', time: '1d ago', icon: Gift },
    ],
    delivery: [
      { id: 5, title: 'Delivery Complete', message: 'Your morning order has been delivered', time: '1h ago', icon: Truck },
      { id: 6, title: 'Delivery Scheduled', message: 'Tomorrow 6:30 AM - Fresh Milk 1L', time: '5h ago', icon: Truck },
    ],
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3>Notifications</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="system" className="flex-1 flex flex-col">
            <TabsList className="mx-6 mt-4">
              <TabsTrigger value="system" className="flex-1">System</TabsTrigger>
              <TabsTrigger value="offers" className="flex-1">Offers</TabsTrigger>
              <TabsTrigger value="delivery" className="flex-1">Delivery</TabsTrigger>
            </TabsList>

            <ScrollArea className="flex-1 px-6">
              <TabsContent value="system" className="space-y-4 mt-4">
                {notifications.system.map((notif) => (
                  <NotificationItem key={notif.id} {...notif} />
                ))}
              </TabsContent>

              <TabsContent value="offers" className="space-y-4 mt-4">
                {notifications.offers.map((notif) => (
                  <NotificationItem key={notif.id} {...notif} />
                ))}
              </TabsContent>

              <TabsContent value="delivery" className="space-y-4 mt-4">
                {notifications.delivery.map((notif) => (
                  <NotificationItem key={notif.id} {...notif} />
                ))}
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </div>
    </>
  );
}

/**
 * @typedef {Object} NotificationItemProps
 * @property {string} title - Notification title
 * @property {string} message - Notification message
 * @property {string} time - Notification time
 * @property {import('lucide-react').LucideIcon} icon - Notification icon
 */

/**
 * Notification item component
 * @param {NotificationItemProps} props
 */
function NotificationItem({ 
  title, 
  message, 
  time, 
  icon: Icon 
}) {
  return (
    <div className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="truncate">{title}</h4>
            <Badge variant="secondary" className="flex-shrink-0">
              {time}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1" style={{ fontSize: '0.875rem' }}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
