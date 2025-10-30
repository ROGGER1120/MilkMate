import { Search, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';

export default function ProviderCustomers() {
  const customers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      address: 'HSR Layout, Bangalore',
      subscription: 'Fresh Milk 1L',
      status: 'active',
      joinedDate: 'Jan 2025',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya@example.com',
      phone: '+91 98765 43211',
      address: 'Koramangala, Bangalore',
      subscription: 'Fresh Milk 1L',
      status: 'active',
      joinedDate: 'Feb 2025',
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit@example.com',
      phone: '+91 98765 43212',
      address: 'Whitefield, Bangalore',
      subscription: 'Milk 2L + Curd',
      status: 'active',
      joinedDate: 'Mar 2025',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha@example.com',
      phone: '+91 98765 43213',
      address: 'Indiranagar, Bangalore',
      subscription: 'Fresh Milk 1L',
      status: 'paused',
      joinedDate: 'Apr 2025',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Customer List</h2>
        <p className="text-muted-foreground">Manage your customer base</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input placeholder="Search customers..." className="pl-10" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Total Customers</p>
                <p style={{ fontSize: '2rem', fontWeight: 600 }}>248</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Active</p>
                <p style={{ fontSize: '2rem', fontWeight: 600 }}>235</p>
              </div>
              <Badge className="bg-green-100 text-green-700">95%</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">Paused</p>
                <p style={{ fontSize: '2rem', fontWeight: 600 }}>13</p>
              </div>
              <Badge variant="secondary">5%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customers Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Subscription</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-white">
                          {customer.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p>{customer.name}</p>
                        <p className="text-muted-foreground flex items-center gap-1" style={{ fontSize: '0.875rem' }}>
                          <MapPin className="w-3 h-3" />
                          {customer.address}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        <Mail className="w-3 h-3" />
                        {customer.email}
                      </p>
                      <p className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        <Phone className="w-3 h-3" />
                        {customer.phone}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{customer.subscription}</TableCell>
                  <TableCell>
                    {customer.status === 'active' ? (
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    ) : (
                      <Badge variant="secondary">Paused</Badge>
                    )}
                  </TableCell>
                  <TableCell>{customer.joinedDate}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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
