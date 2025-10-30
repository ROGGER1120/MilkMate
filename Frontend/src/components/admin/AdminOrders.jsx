import { useState } from 'react';
import { Search, Filter, Clock, CheckCircle, XCircle, Package, Bike, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { toast } from '../ui/sonner';

// ----- Sample Order Data -----
const initialOrders = [
  { id: '1', orderNumber: 'ORD-2024-1001', customer: 'Rajesh Kumar', provider: 'Amit Patel Dairy', partner: 'Vikram Singh', product: 'Full Cream Milk 1L', quantity: 2, amount: 100, status: 'delivered', date: '2024-10-14', location: 'Mumbai, MH' },
  { id: '2', orderNumber: 'ORD-2024-1002', customer: 'Priya Sharma', provider: 'Sneha Reddy Dairy', partner: 'Rahul Mehta', product: 'Fresh Curd 500g', quantity: 1, amount: 40, status: 'delivering', date: '2024-10-15', location: 'Delhi, DL' },
  { id: '3', orderNumber: 'ORD-2024-1003', customer: 'Kavita Desai', provider: 'Amit Patel Dairy', partner: 'Vikram Singh', product: 'Pure Ghee 500ml', quantity: 1, amount: 100, status: 'confirmed', date: '2024-10-15', location: 'Bangalore, KA' },
  { id: '4', orderNumber: 'ORD-2024-1004', customer: 'Rajesh Kumar', provider: 'Sneha Reddy Dairy', partner: 'Rahul Mehta', product: 'Paneer 250g', quantity: 2, amount: 120, status: 'pending', date: '2024-10-15', location: 'Mumbai, MH' },
  { id: '5', orderNumber: 'ORD-2024-1005', customer: 'Priya Sharma', provider: 'Amit Patel Dairy', partner: 'Vikram Singh', product: 'Toned Milk 500ml', quantity: 3, amount: 120, status: 'delivered', date: '2024-10-13', location: 'Delhi, DL' },
  { id: '6', orderNumber: 'ORD-2024-1006', customer: 'Kavita Desai', provider: 'Sneha Reddy Dairy', partner: 'Rahul Mehta', product: 'Buttermilk 500ml', quantity: 2, amount: 60, status: 'cancelled', date: '2024-10-14', location: 'Bangalore, KA' },
  { id: '7', orderNumber: 'ORD-2024-1007', customer: 'Rajesh Kumar', provider: 'Amit Patel Dairy', partner: 'Vikram Singh', product: 'Skimmed Milk 1L', quantity: 1, amount: 45, status: 'delivered', date: '2024-10-12', location: 'Mumbai, MH' },
  { id: '8', orderNumber: 'ORD-2024-1008', customer: 'Priya Sharma', provider: 'Sneha Reddy Dairy', partner: 'Rahul Mehta', product: 'Cheese Slices 200g', quantity: 1, amount: 80, status: 'delivering', date: '2024-10-15', location: 'Delhi, DL' },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filter orders by search and status
  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Status configuration
  const getStatusConfig = (status) => {
    const configs = {
      pending: { color: 'bg-amber-100 text-amber-700', icon: Clock, label: 'Pending' },
      confirmed: { color: 'bg-sky-100 text-sky-700', icon: Package, label: 'Confirmed' },
      delivering: { color: 'bg-purple-100 text-purple-700', icon: Bike, label: 'Delivering' },
      delivered: { color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle, label: 'Delivered' },
      cancelled: { color: 'bg-red-100 text-red-700', icon: XCircle, label: 'Cancelled' },
    };
    return configs[status];
  };

  // Order statistics
  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    confirmed: orders.filter(o => o.status === 'confirmed').length,
    delivering: orders.filter(o => o.status === 'delivering').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    totalRevenue: orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + o.amount, 0),
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Order Management</h1>
        <p className="text-muted-foreground">Track and manage all orders across the platform</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
        {[
          { label: 'Total', value: orderStats.total, icon: Package, color: 'text-muted-foreground' },
          { label: 'Pending', value: orderStats.pending, icon: Clock, color: 'text-amber-600' },
          { label: 'Confirmed', value: orderStats.confirmed, icon: Package, color: 'text-sky-600' },
          { label: 'Delivering', value: orderStats.delivering, icon: Bike, color: 'text-purple-600' },
          { label: 'Delivered', value: orderStats.delivered, icon: CheckCircle, color: 'text-emerald-600' },
          { label: 'Cancelled', value: orderStats.cancelled, icon: XCircle, color: 'text-red-600' },
        ].map((stat, i) => (
          <Card key={i} className={stat.label === 'Pending' ? 'bg-amber-50' : ''}>
            <CardContent className="pt-6">
              <div className="text-center">
                <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <p className="text-muted-foreground mb-1 text-xs">{stat.label}</p>
                <p className="text-foreground text-lg font-semibold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-gradient-to-br from-primary/10 to-emerald-50 col-span-2 sm:col-span-1">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground text-xs mb-1">Revenue</p>
            <p className="text-primary font-semibold text-lg">₹{orderStats.totalRevenue}</p>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
          <CardDescription>View and manage order status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="delivering">Delivering</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden lg:table-cell">Provider</TableHead>
                    <TableHead className="hidden md:table-cell">Product</TableHead>
                    <TableHead className="hidden sm:table-cell">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden xl:table-cell">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map(order => {
                    const statusConfig = getStatusConfig(order.status);
                    const StatusIcon = statusConfig.icon;
                    return (
                      <TableRow key={order.id}>
                        <TableCell>
                          <p className="font-semibold">{order.orderNumber}</p>
                          <p className="text-xs text-muted-foreground xl:hidden">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs">
                                {order.customer.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">{order.customer}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {order.location}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden lg:table-cell">{order.provider}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {order.product}
                          <p className="text-xs text-muted-foreground">Qty: {order.quantity}</p>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell font-semibold">₹{order.amount}</TableCell>
                        <TableCell>
                          <Badge className={statusConfig.color}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {statusConfig.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden xl:table-cell">
                          {new Date(order.date).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
