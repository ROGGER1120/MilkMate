import { Calendar, CheckCircle, Package } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export default function PartnerDeliveries() {
  const deliveries = {
    today: [
      { id: 'DEL-2401', customer: 'Rajesh Kumar', address: 'HSR Layout', time: '6:30 AM', status: 'delivered', amount: 25 },
      { id: 'DEL-2402', customer: 'Priya Sharma', address: 'Koramangala', time: '6:45 AM', status: 'delivered', amount: 25 },
      { id: 'DEL-2403', customer: 'Amit Patel', address: 'Whitefield', time: '7:00 AM', status: 'pending', amount: 25 },
      { id: 'DEL-2404', customer: 'Sneha Reddy', address: 'Indiranagar', time: '7:15 AM', status: 'pending', amount: 25 },
    ],
    week: [
      { id: 'DEL-2350', date: 'Oct 7', deliveries: 58, earnings: 1450 },
      { id: 'DEL-2320', date: 'Oct 6', deliveries: 71, earnings: 1775 },
      { id: 'DEL-2290', date: 'Oct 5', deliveries: 62, earnings: 1550 },
      { id: 'DEL-2250', date: 'Oct 4', deliveries: 55, earnings: 1375 },
      { id: 'DEL-2200', date: 'Oct 3', deliveries: 48, earnings: 1200 },
    ],
    history: [
      { id: 'DEL-2150', date: 'Sep 30', deliveries: 52, earnings: 1300 },
      { id: 'DEL-2100', date: 'Sep 29', deliveries: 45, earnings: 1125 },
      { id: 'DEL-2050', date: 'Sep 28', deliveries: 61, earnings: 1525 },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>Delivery History</h2>
        <p className="text-muted-foreground">View all your delivery records</p>
      </div>

      <Tabs defaultValue="today" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Delivery ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Earning</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.today.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell>{delivery.id}</TableCell>
                      <TableCell>{delivery.customer}</TableCell>
                      <TableCell>{delivery.address}</TableCell>
                      <TableCell>{delivery.time}</TableCell>
                      <TableCell>
                        {delivery.status === 'delivered' ? (
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Delivered
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            <Package className="w-3 h-3 mr-1" />
                            Pending
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">₹{delivery.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="week" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Deliveries</TableHead>
                    <TableHead className="text-right">Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.week.map((day) => (
                    <TableRow key={day.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          {day.date}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          {day.deliveries} deliveries
                        </div>
                      </TableCell>
                      <TableCell className="text-right text-green-600">
                        ₹{day.earnings}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Deliveries</TableHead>
                    <TableHead className="text-right">Earnings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.history.map((day) => (
                    <TableRow key={day.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          {day.date}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          {day.deliveries} deliveries
                        </div>
                      </TableCell>
                      <TableCell className="text-right text-green-600">
                        ₹{day.earnings}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
