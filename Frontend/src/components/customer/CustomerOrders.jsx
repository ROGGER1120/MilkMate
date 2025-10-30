import { Package, Clock, CheckCircle, Truck, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';

export default function CustomerOrders() {
  const orders = {
    active: [
      {
        id: 'ORD-2401',
        items: ['Fresh Milk 1L', 'Curd 500g'],
        status: 'out-for-delivery',
        total: 100,
        eta: '15 mins',
        partner: 'Arjun Singh',
        partnerRating: 4.8,
      },
    ],
    scheduled: [
      {
        id: 'ORD-2402',
        items: ['Fresh Milk 1L'],
        date: 'Tomorrow',
        time: '6:30 AM',
        total: 60,
      },
      {
        id: 'ORD-2403',
        items: ['Fresh Milk 1L'],
        date: 'Oct 9, 2025',
        time: '6:30 AM',
        total: 60,
      },
    ],
    completed: [
      {
        id: 'ORD-2400',
        items: ['Fresh Milk 1L', 'Paneer 200g'],
        date: 'Today',
        time: '6:30 AM',
        total: 150,
        deliveredBy: 'Arjun Singh',
      },
      {
        id: 'ORD-2399',
        items: ['Fresh Milk 1L'],
        date: 'Yesterday',
        time: '6:30 AM',
        total: 60,
        deliveredBy: 'Priya Sharma',
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>My Orders</h2>
        <p className="text-muted-foreground">Track and manage your orders</p>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">
            Active
            {orders.active.length > 0 && (
              <Badge className="ml-2 bg-primary">{orders.active.length}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4 mt-6">
          {orders.active.map((order) => (
            <Card key={order.id} className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      Order #{order.id}
                      <Badge className="bg-primary">Out for Delivery</Badge>
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>₹{order.total}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Delivery Status */}
                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p>Arriving in {order.eta}</p>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                      Your delivery is on the way
                    </p>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="flex items-center justify-between p-4 border rounded-xl">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-accent text-white">
                        {order.partner.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p>{order.partner}</p>
                      <div className="flex items-center gap-1 text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        <span>⭐</span>
                        <span>{order.partnerRating}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Track
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4 mt-6">
          {orders.scheduled.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      Order #{order.id}
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>₹{order.total}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span>{order.date} at {order.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-6">
          {orders.completed.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      Order #{order.id}
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Delivered
                      </Badge>
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {order.items.join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ fontSize: '1.25rem', fontWeight: 600 }}>₹{order.total}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">
                    <p style={{ fontSize: '0.875rem' }}>
                      {order.date} at {order.time}
                    </p>
                    <p style={{ fontSize: '0.875rem' }}>
                      Delivered by {order.deliveredBy}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Reorder
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
