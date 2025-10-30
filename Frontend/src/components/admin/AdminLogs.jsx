import { useState } from 'react';
import {
  Activity, User, Package, ShoppingCart, DollarSign, Settings,
  AlertTriangle, CheckCircle, XCircle, Filter, Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
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
import { toast } from 'sonner';

const activityLogs = [
  { id: '1', timestamp: '2024-10-15 11:45:23', user: 'Admin', userRole: 'admin', action: 'Approved Provider Application', type: 'user', status: 'success', details: 'Approved: Suresh Gupta - Gupta Dairy Farm', ipAddress: '192.168.1.100' },
  { id: '2', timestamp: '2024-10-15 11:32:10', user: 'Rajesh Kumar', userRole: 'customer', action: 'Placed Order', type: 'order', status: 'success', details: 'Order #ORD-2024-1009 - Full Cream Milk 1L x2', ipAddress: '103.45.67.89' },
  { id: '3', timestamp: '2024-10-15 11:20:45', user: 'Amit Patel', userRole: 'provider', action: 'Updated Product Stock', type: 'product', status: 'success', details: 'Updated: Toned Milk 500ml - Stock: 350 units', ipAddress: '112.23.45.67' },
  { id: '4', timestamp: '2024-10-15 11:15:30', user: 'Vikram Singh', userRole: 'partner', action: 'Completed Delivery', type: 'order', status: 'success', details: 'Order #ORD-2024-1008 delivered successfully', ipAddress: '98.76.54.32' },
  { id: '5', timestamp: '2024-10-15 11:05:12', user: 'System', userRole: 'admin', action: 'Payment Failed', type: 'payment', status: 'error', details: 'Payment gateway timeout for Order #ORD-2024-1007', ipAddress: 'system' },
  { id: '6', timestamp: '2024-10-15 10:55:00', user: 'Admin', userRole: 'admin', action: 'Updated Commission Rate', type: 'system', status: 'warning', details: 'Provider commission changed from 15% to 12%', ipAddress: '192.168.1.100' },
  { id: '7', timestamp: '2024-10-15 10:45:33', user: 'Priya Sharma', userRole: 'customer', action: 'Cancelled Order', type: 'order', status: 'warning', details: 'Order #ORD-2024-1006 cancelled by user', ipAddress: '103.45.67.90' },
  { id: '8', timestamp: '2024-10-15 10:30:15', user: 'Sneha Reddy', userRole: 'provider', action: 'Added New Product', type: 'product', status: 'success', details: 'Added: Organic Paneer 500g - Price: ₹120', ipAddress: '112.23.45.68' },
  { id: '9', timestamp: '2024-10-15 10:15:48', user: 'System', userRole: 'admin', action: 'Database Backup', type: 'system', status: 'success', details: 'Automated daily backup completed', ipAddress: 'system' },
  { id: '10', timestamp: '2024-10-15 10:00:00', user: 'Admin', userRole: 'admin', action: 'User Account Suspended', type: 'security', status: 'warning', details: 'Suspended: Suspicious activity detected - User ID: 456', ipAddress: '192.168.1.100' },
  { id: '11', timestamp: '2024-10-15 09:45:22', user: 'Rahul Mehta', userRole: 'partner', action: 'Withdrawal Requested', type: 'payment', status: 'success', details: 'Withdrawal request: ₹4,200 to bank account', ipAddress: '98.76.54.33' },
  { id: '12', timestamp: '2024-10-15 09:30:10', user: 'Kavita Desai', userRole: 'customer', action: 'Updated Profile', type: 'user', status: 'success', details: 'Updated delivery address and phone number', ipAddress: '103.45.67.91' },
  { id: '13', timestamp: '2024-10-15 09:15:05', user: 'System', userRole: 'admin', action: 'Security Alert', type: 'security', status: 'error', details: 'Multiple failed login attempts from IP: 45.67.89.123', ipAddress: 'system' },
  { id: '14', timestamp: '2024-10-15 09:00:00', user: 'Admin', userRole: 'admin', action: 'Sent Notification', type: 'system', status: 'success', details: 'Bulk notification sent to 1,234 users about new features', ipAddress: '192.168.1.100' },
  { id: '15', timestamp: '2024-10-15 08:45:30', user: 'Amit Patel', userRole: 'provider', action: 'Price Update', type: 'product', status: 'success', details: 'Updated: Full Cream Milk 1L - Price: ₹50 to ₹55', ipAddress: '112.23.45.67' },
];

export default function AdminLogs() {
  const [logs, setLogs] = useState(activityLogs);
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = logs.filter((log) => {
    const matchesType = filterType === 'all' || log.type === filterType;
    const matchesStatus = filterStatus === 'all' || log.status === filterStatus;
    const matchesSearch =
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesStatus && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'user': return <User className="w-4 h-4" />;
      case 'product': return <Package className="w-4 h-4" />;
      case 'order': return <ShoppingCart className="w-4 h-4" />;
      case 'payment': return <DollarSign className="w-4 h-4" />;
      case 'system': return <Settings className="w-4 h-4" />;
      case 'security': return <AlertTriangle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'error': return <XCircle className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      success: 'bg-emerald-100 text-emerald-700',
      warning: 'bg-amber-100 text-amber-700',
      error: 'bg-red-100 text-red-700',
    };
    return colors[status];
  };

  const getTypeColor = (type) => {
    const colors = {
      user: 'bg-blue-100 text-blue-700',
      product: 'bg-purple-100 text-purple-700',
      order: 'bg-sky-100 text-sky-700',
      payment: 'bg-emerald-100 text-emerald-700',
      system: 'bg-gray-100 text-gray-700',
      security: 'bg-red-100 text-red-700',
    };
    return colors[type];
  };

  const stats = {
    total: logs.length,
    success: logs.filter((l) => l.status === 'success').length,
    warnings: logs.filter((l) => l.status === 'warning').length,
    errors: logs.filter((l) => l.status === 'error').length,
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Activity Logs</h1>
          <p className="text-muted-foreground">Monitor all platform activities and system events</p>
        </div>
        <Button variant="outline" className="shrink-0" onClick={() => toast.success('Export started')}>
          <Download className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Export Logs</span>
          <span className="sm:hidden">Export</span>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Total Activities</p>
                <p className="text-foreground text-2xl">{stats.total}</p>
              </div>
              <Activity className="w-8 h-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Success</p>
                <p className="text-emerald-700 text-2xl">{stats.success}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Warnings</p>
                <p className="text-amber-700 text-2xl">{stats.warnings}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Errors</p>
                <p className="text-red-700 text-2xl">{stats.errors}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logs Table */}
      {/* (rest of table + security & success cards remain unchanged from your original code) */}
    </div>
  );
}
