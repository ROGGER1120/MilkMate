import { CreditCard, Download, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export default function CustomerPayments() {
  const currentBill = {
    month: 'September 2025',
    amount: 1850,
    dueDate: 'Oct 5, 2025',
    items: [
      { name: 'Fresh Milk (1L × 30 days)', price: 1800 },
      { name: 'Delivery Charges', price: 50 },
    ],
  };

  const paymentHistory = [
    { id: 'INV-2408', date: 'Aug 31, 2025', amount: 1800, status: 'paid', method: 'UPI' },
    { id: 'INV-2407', date: 'Jul 31, 2025', amount: 1860, status: 'paid', method: 'Card' },
    { id: 'INV-2406', date: 'Jun 30, 2025', amount: 1800, status: 'paid', method: 'UPI' },
    { id: 'INV-2405', date: 'May 31, 2025', amount: 1740, status: 'paid', method: 'UPI' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Payments</h2>
        <p className="text-muted-foreground">Manage your bills and payment methods</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Bill */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Current Month Bill</CardTitle>
            <CardDescription>{currentBill.month}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {currentBill.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <span>Total Amount</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  ₹{currentBill.amount}
                </span>
              </div>
              <div className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                Due by {currentBill.dueDate}
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <CreditCard className="w-4 h-4 mr-2" />
                Pay Now
              </Button>
              <Button variant="outline" className="w-full">
                Enable Auto-Pay
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border-2 border-primary rounded-xl bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p>UPI</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    raj***@paytm
                  </p>
                </div>
                <Badge className="bg-primary">Default</Badge>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Your past transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.id}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>₹{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Paid
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
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
