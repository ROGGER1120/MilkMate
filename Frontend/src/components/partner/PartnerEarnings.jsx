import { Wallet, TrendingUp, Download, ArrowUpRight, Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

export default function PartnerEarnings() {
  const weeklyData = [
    { day: 'Mon', earnings: 1125 },
    { day: 'Tue', earnings: 1300 },
    { day: 'Wed', earnings: 1200 },
    { day: 'Thu', earnings: 1375 },
    { day: 'Fri', earnings: 1550 },
    { day: 'Sat', earnings: 1775 },
    { day: 'Sun', earnings: 1450 },
  ];

  const transactions = [
    { id: 'TXN-101', date: 'Oct 7, 2025', description: 'Daily earnings', amount: 1450, type: 'credit' },
    { id: 'TXN-102', date: 'Oct 7, 2025', description: 'Bonus - 10 deliveries streak', amount: 200, type: 'bonus' },
    { id: 'TXN-103', date: 'Oct 6, 2025', description: 'Daily earnings', amount: 1775, type: 'credit' },
    { id: 'TXN-104', date: 'Oct 5, 2025', description: 'Daily earnings', amount: 1550, type: 'credit' },
    { id: 'TXN-105', date: 'Oct 4, 2025', description: 'Withdrawal to bank', amount: 5000, type: 'debit' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Earnings</h2>
        <p className="text-muted-foreground">Track your earnings and incentives</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span style={{ fontSize: '2.5rem', fontWeight: 600 }}>₹8,450</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>This Week</CardTitle>
            <CardDescription>Total earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span style={{ fontSize: '2rem', fontWeight: 600 }}>₹9,775</span>
              </div>
              <div className="flex items-center gap-2 text-primary" style={{ fontSize: '0.875rem' }}>
                <TrendingUp className="w-4 h-4" />
                <span>+12% from last week</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incentives</CardTitle>
            <CardDescription>Bonus earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-end gap-2">
                <span style={{ fontSize: '2rem', fontWeight: 600 }}>₹600</span>
              </div>
              <Badge className="bg-yellow-100 text-yellow-700">
                <Gift className="w-3 h-3 mr-1" />
                3 bonuses earned
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Earnings Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Weekly Earnings</CardTitle>
              <CardDescription>Earnings breakdown for the last 7 days</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
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
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="#8BC34A" 
                strokeWidth={3}
                dot={{ fill: '#8BC34A', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Incentive Programs */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="w-5 h-5 text-yellow-600" />
            Active Incentive Programs
          </CardTitle>
          <CardDescription>Earn extra by achieving these goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p>Weekend Warrior</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    Complete 70+ deliveries this weekend
                  </p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-700">+₹500</Badge>
              </div>
            </div>
            <div className="p-4 bg-white rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p>Perfect Rating</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    Maintain 4.8+ rating this month
                  </p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-700">+₹1000</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>Your recent transactions</CardDescription>
        </CardHeader>
        <CardContent>
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
                  <TableCell>{txn.date}</TableCell>
                  <TableCell>{txn.description}</TableCell>
                  <TableCell>
                    {txn.type === 'credit' ? (
                      <Badge className="bg-green-100 text-green-700">Credit</Badge>
                    ) : txn.type === 'bonus' ? (
                      <Badge className="bg-yellow-100 text-yellow-700">Bonus</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-700">Withdrawal</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className={txn.type === 'debit' ? 'text-red-600' : 'text-green-600'}>
                      {txn.type === 'debit' ? '-' : '+'}₹{txn.amount}
                    </span>
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
