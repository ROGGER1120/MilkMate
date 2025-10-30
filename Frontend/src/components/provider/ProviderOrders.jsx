import { Search, Filter, CheckCircle, Package, Truck } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export default function ProviderOrders() {
  const orders = [
    {
      id: 'ORD-2401',
      customer: 'Rajesh Kumar',
      items: 'Fresh Milk 1L, Curd 500g',
      quantity: 2,
      total: 100,
      status: 'pending',
      time: '6:30 AM',
    },
    {
      id: 'ORD-2402',
      customer: 'Priya Sharma',
      items: 'Fresh Milk 1L',
      quantity: 1,
      total: 60,
      status: 'packed',
      time: '6:30 AM',
    },
    {
      id: 'ORD-2403',
      customer: 'Amit Patel',
      items: 'Paneer 200g, Ghee 500ml',
      quantity: 2,
      total: 640,
      status: 'in-transit',
      time: '7:00 AM',
    },
    {
      id: 'ORD-2404',
      customer: 'Sneha Reddy',
      items: 'Fresh Milk 2L',
      quantity: 1,
      total: 120,
      status: 'delivered',
      time: '6:00 AM',
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'packed':
        return <Badge className="bg-blue-100 text-blue-700">Packed</Badge>;
      case 'in-transit':
        return <Badge className="bg-yellow-100 text-yellow-700">In Transit</Badge>;
      case 'delivered':
        return <Badge className="bg-green-100 text-green-700">Delivered</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getActionButton = (status) => {
    switch (status) {
      case 'pending':
        return (
          <Button size="sm" variant="outline" className="text-primary border-primary">
            <Package className="w-4 h-4 mr-2" />
            Mark Packed
          </Button>
        );
      case 'packed':
        return (
          <Button size="sm" variant="outline" className="text-primary border-primary">
            <Truck className="w-4 h-4 mr-2" />
            Request Pickup
          </Button>
        );
      case 'in-transit':
        return <Badge variant="secondary">Partner Assigned</Badge>;
      case 'delivered':
        return (
          <Badge className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Complete
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2>Orders Management</h2>
        <p className="text-muted-foreground">View and manage customer orders</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search orders..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="packed">Packed</SelectItem>
            <SelectItem value="in-transit">In Transit</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    {order.id}
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <p className="max-w-xs truncate">{order.items}</p>
                  </TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>₹{order.total}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">
                    {getActionButton(order.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
