import { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { toast } from 'sonner';

const revenueData = [
  { month: 'Jan', platformFee: 2250, providerCommission: 6750, partnerCommission: 4500 },
  { month: 'Feb', platformFee: 2600, providerCommission: 7800, partnerCommission: 5200 },
  { month: 'Mar', platformFee: 2400, providerCommission: 7200, partnerCommission: 4800 },
  { month: 'Apr', platformFee: 3050, providerCommission: 9150, partnerCommission: 6100 },
  { month: 'May', platformFee: 2750, providerCommission: 8250, partnerCommission: 5500 },
  { month: 'Jun', platformFee: 3350, providerCommission: 10050, partnerCommission: 6700 },
  { month: 'Jul', platformFee: 3600, providerCommission: 10800, partnerCommission: 7200 },
];

const transactions = [
  { id: 'TXN-001', date: '2024-10-15', type: 'commission', party: 'Amit Patel Dairy', partyRole: 'provider', amount: 1250, status: 'completed', method: 'Auto-debit' },
  { id: 'TXN-002', date: '2024-10-15', type: 'withdrawal', party: 'Vikram Singh', partyRole: 'partner', amount: 3500, status: 'completed', method: 'Bank Transfer' },
  { id: 'TXN-003', date: '2024-10-14', type: 'payment', party: 'Platform Fee Collection', partyRole: 'provider', amount: 850, status: 'completed', method: 'Auto-collect' },
  { id: 'TXN-004', date: '2024-10-14', type: 'refund', party: 'Rajesh Kumar', partyRole: 'customer', amount: 120, status: 'pending', method: 'UPI' },
  { id: 'TXN-005', date: '2024-10-14', type: 'commission', party: 'Sneha Reddy Dairy', partyRole: 'provider', amount: 980, status: 'completed', method: 'Auto-debit' },
  { id: 'TXN-006', date: '2024-10-13', type: 'withdrawal', party: 'Rahul Mehta', partyRole: 'partner', amount: 4200, status: 'completed', method: 'Bank Transfer' },
  { id: 'TXN-007', date: '2024-10-13', type: 'payment', party: 'Commission Collection', partyRole: 'provider', amount: 1560, status: 'completed', method: 'Auto-collect' },
  { id: 'TXN-008', date: '2024-10-12', type: 'withdrawal', party: 'Amit Patel Dairy', partyRole: 'provider', amount: 12500, status: 'failed', method: 'Bank Transfer' },
];

export default function AdminFinance() {
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredTransactions = transactions.filter(txn => {
    const matchesType = filterType === 'all' || txn.type === filterType;
    const matchesStatus = filterStatus === 'all' || txn.status === filterStatus;
    return matchesType && matchesStatus;
  });

  const stats = {
    totalRevenue: 72000,
    platformEarnings: 3600,
    commissionsPaid: 10800,
    partnerPayouts: 7200,
    pendingWithdrawals: 8900,
    monthlyGrowth: 20.1,
  };

  const getTransactionIcon = (type) => {
    switch (type) {
      case 'commission': return <ArrowDownRight className="w-4 h-4" />;
      case 'withdrawal': return <ArrowUpRight className="w-4 h-4" />;
      case 'refund': return <ArrowUpRight className="w-4 h-4" />;
      case 'payment': return <ArrowDownRight className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      completed: 'bg-emerald-100 text-emerald-700',
      pending: 'bg-amber-100 text-amber-700',
      failed: 'bg-red-100 text-red-700',
    };
    return colors[status];
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Financial Management</h1>
          <p className="text-muted-foreground">Monitor revenue, commissions, and transactions</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 shrink-0">
          <Download className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Export Report</span>
          <span className="sm:hidden">Export</span>
        </Button>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
          <CardContent className="pt-6 text-center">
            <DollarSign className="w-6 h-6 mx-auto mb-2 text-purple-600" />
            <p className="text-muted-foreground mb-1 text-xs">Total Revenue</p>
            <p className="text-purple-700 text-lg font-semibold">₹{stats.totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
            <p className="text-muted-foreground mb-1 text-xs">Platform Earnings</p>
            <p className="text-emerald-700 text-lg font-semibold">₹{stats.platformEarnings.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
          <CardContent className="pt-6 text-center">
            <Wallet className="w-6 h-6 mx-auto mb-2 text-amber-600" />
            <p className="text-muted-foreground mb-1 text-xs">Commissions Paid</p>
            <p className="text-amber-700 text-lg font-semibold">₹{stats.commissionsPaid.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-200">
          <CardContent className="pt-6 text-center">
            <CreditCard className="w-6 h-6 mx-auto mb-2 text-sky-600" />
            <p className="text-muted-foreground mb-1 text-xs">Partner Payouts</p>
            <p className="text-sky-700 text-lg font-semibold">₹{stats.partnerPayouts.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-200">
          <CardContent className="pt-6 text-center">
            <ArrowUpRight className="w-6 h-6 mx-auto mb-2 text-orange-600" />
            <p className="text-muted-foreground mb-1 text-xs">Pending Withdrawals</p>
            <p className="text-orange-700 text-lg font-semibold">₹{stats.pendingWithdrawals.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200 col-span-2 sm:col-span-1">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-600" />
            <p className="text-muted-foreground mb-1 text-xs">Growth</p>
            <p className="text-blue-700 text-lg font-semibold">+{stats.monthlyGrowth}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Breakdown</CardTitle>
          <CardDescription>Monthly distribution of platform fees and commissions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="platformFee" name="Platform Fee" fill="#10B981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="providerCommission" name="Provider Commission" fill="#F59E0B" radius={[8, 8, 0, 0]} />
              <Bar dataKey="partnerCommission" name="Partner Commission" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transaction Table */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>All financial transactions and transfers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="commission">Commission</SelectItem>
                <SelectItem value="withdrawal">Withdrawal</SelectItem>
                <SelectItem value="refund">Refund</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-x-auto -mx-6 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Party</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead className="hidden lg:table-cell">Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((txn) => (
                    <TableRow key={txn.id}>
                      <TableCell>
                        <p className="font-semibold">{txn.id}</p>
                        <p className="text-xs text-muted-foreground md:hidden">
                          {new Date(txn.date).toLocaleDateString()}
                        </p>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {new Date(txn.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Badge className={
                          txn.type === 'commission' ? 'bg-amber-100 text-amber-700' :
                          txn.type === 'withdrawal' ? 'bg-sky-100 text-sky-700' :
                          txn.type === 'refund' ? 'bg-red-100 text-red-700' :
                          'bg-emerald-100 text-emerald-700'
                        }>
                          {getTransactionIcon(txn.type)}
                          <span className="ml-1 capitalize">{txn.type}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <p className="truncate font-medium">{txn.party}</p>
                        <p className="text-xs text-muted-foreground capitalize">{txn.partyRole}</p>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        <span className={
                          txn.type === 'commission' || txn.type === 'payment'
                            ? 'text-emerald-700'
                            : 'text-red-700'
                        }>
                          {txn.type === 'commission' || txn.type === 'payment' ? '+' : '-'}₹{txn.amount.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-sm text-muted-foreground">
                        {txn.method}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(txn.status)}>
                          {txn.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
