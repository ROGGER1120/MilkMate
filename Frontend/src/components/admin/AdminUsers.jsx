import { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Ban,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner';

const initialUsers = [
  { id: '1', name: 'Rajesh Kumar', email: 'rajesh.k@email.com', phone: '+91 98765 43210', role: 'customer', status: 'active', joinDate: '2024-01-15', totalOrders: 45, location: 'Mumbai, MH' },
  { id: '2', name: 'Priya Sharma', email: 'priya.s@email.com', phone: '+91 98765 43211', role: 'customer', status: 'active', joinDate: '2024-02-20', totalOrders: 32, location: 'Delhi, DL' },
  { id: '3', name: 'Amit Patel', email: 'amit.p@email.com', phone: '+91 98765 43212', role: 'provider', status: 'active', joinDate: '2024-01-10', totalRevenue: 125000, location: 'Ahmedabad, GJ' },
  { id: '4', name: 'Sneha Reddy', email: 'sneha.r@email.com', phone: '+91 98765 43213', role: 'provider', status: 'active', joinDate: '2024-03-05', totalRevenue: 98000, location: 'Hyderabad, TS' },
  { id: '5', name: 'Vikram Singh', email: 'vikram.s@email.com', phone: '+91 98765 43214', role: 'partner', status: 'active', joinDate: '2024-02-12', totalOrders: 189, location: 'Pune, MH' },
  { id: '6', name: 'Kavita Desai', email: 'kavita.d@email.com', phone: '+91 98765 43215', role: 'customer', status: 'inactive', joinDate: '2024-04-01', totalOrders: 12, location: 'Bangalore, KA' },
  { id: '7', name: 'Rahul Mehta', email: 'rahul.m@email.com', phone: '+91 98765 43216', role: 'partner', status: 'active', joinDate: '2024-01-25', totalOrders: 234, location: 'Chennai, TN' },
  { id: '8', name: 'Anita Joshi', email: 'anita.j@email.com', phone: '+91 98765 43217', role: 'provider', status: 'suspended', joinDate: '2024-03-15', totalRevenue: 45000, location: 'Jaipur, RJ' },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState('view');

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery);
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setDialogMode('view');
    setIsDialogOpen(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setDialogMode('edit');
    setIsDialogOpen(true);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    toast.success('User deleted successfully');
  };

  const handleToggleStatus = (userId) => {
    setUsers(users.map(u => {
      if (u.id === userId) {
        const newStatus = u.status === 'active' ? 'suspended' : 'active';
        toast.success(`User ${newStatus === 'active' ? 'activated' : 'suspended'} successfully`);
        return { ...u, status: newStatus };
      }
      return u;
    }));
  };

  const handleAddUser = () => {
    setSelectedUser({
      id: String(users.length + 1),
      name: '',
      email: '',
      phone: '',
      role: 'customer',
      status: 'active',
      joinDate: new Date().toISOString().split('T')[0],
      location: '',
    });
    setDialogMode('add');
    setIsDialogOpen(true);
  };

  const handleSaveUser = () => {
    if (selectedUser) {
      if (dialogMode === 'add') {
        setUsers([...users, selectedUser]);
        toast.success('User added successfully');
      } else {
        setUsers(users.map(u => u.id === selectedUser.id ? selectedUser : u));
        toast.success('User updated successfully');
      }
      setIsDialogOpen(false);
    }
  };

  const getRoleBadge = (role) => {
    const colors = {
      customer: 'bg-emerald-100 text-emerald-700',
      provider: 'bg-amber-100 text-amber-700',
      partner: 'bg-sky-100 text-sky-700',
    };
    return colors[role];
  };

  const getStatusBadge = (status) => {
    const colors = {
      active: 'bg-emerald-100 text-emerald-700',
      inactive: 'bg-gray-100 text-gray-700',
      suspended: 'bg-red-100 text-red-700',
    };
    return colors[status];
  };

  const userStats = {
    total: users.length,
    customers: users.filter(u => u.role === 'customer').length,
    providers: users.filter(u => u.role === 'provider').length,
    partners: users.filter(u => u.role === 'partner').length,
    active: users.filter(u => u.status === 'active').length,
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>User Management</h1>
          <p className="text-muted-foreground">Manage all users across the platform</p>
        </div>
        <Button onClick={handleAddUser} className="bg-primary hover:bg-primary/90 shrink-0">
          <Plus className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Add User</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </div>

      {/* ... (rest of your table, dialog, and layout remains exactly the same) */}
    </div>
  );
}
