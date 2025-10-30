import { Wallet, TrendingUp, Download, ArrowUpRight, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export default function ProviderEarnings() {
  const weeklyData = [
    { day: 'Mon', earnings: 4500 },
    { day: 'Tue', earnings: 5200 },
    { day: 'Wed', earnings: 4800 },
    { day: 'Thu', earnings: 5500 },
    { day: 'Fri', earnings: 6200 },
    { day: 'Sat', earnings: 7100 },
    { day: 'Sun', earnings: 6800 },
  ];

  const transactions = [
    { id: 'TXN-001', date: 'Oct 7, 2025', amount: 6800, type: 'credit', description: 'Daily sales settlement' },
    { id: 'TXN-002', date: 'Oct 6, 2025', amount: 7100, type: 'credit', description: 'Daily sales settlement' },
    { id: 'TXN-003', date: 'Oct 5, 2025', amount: 6200, type: 'credit', description: 'Daily sales settlement' },
    { id: 'TXN-004', date: 'Oct 4, 2025', amount: 5000, type: 'debit', description: 'Withdrawal to bank' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Earnings & Wallet</h2>
        <p className="text-muted-foreground">Track your revenue and manage payouts</p>
      </div>

      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span style={{ fontSize: '3rem', fontWeight: 600 }}>₹24,350</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <Button className="bg-primary hover:bg-primary/90 shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Withdraw to Bank</span>
                  <span className="sm:hidden">Withdraw</span>
                </Button>
                <Button variant="outline" className="shrink-0">
                  <Download className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Export Statement</span>
                  <span className="sm:hidden">Export</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>This Month</CardTitle>
            <CardDescription>Total earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span style={{ fontSize: '2rem', fontWeight: 600 }}>₹1,48,500</span>
              </div>
              <div className="flex items-center gap-2 text-primary" style={{ fontSize: '0.875rem' }}>
                <TrendingUp className="w-4 h-4" />
                <span>+15% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Earnings Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Earnings</CardTitle>
          <CardDescription>Earnings breakdown for the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px' 
                }}
              />
              <Bar dataKey="earnings" fill="#8BC34A" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3>Transaction History</h3>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="credit">Credits</TabsTrigger>
            <TabsTrigger value="debit">Debits</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((txn) => (
                    <TableRow key={txn.id}>
                      <TableCell>{txn.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          {txn.date}
                        </div>
                      </TableCell>
                      <TableCell>{txn.description}</TableCell>
                      <TableCell>
                        {txn.type === 'credit' ? (
                          <Badge className="bg-green-100 text-green-700">Credit</Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-700">Debit</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <span className={txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                          {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credit">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Filter applied: Showing credit transactions only
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debit">
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              Filter applied: Showing debit transactions only
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
