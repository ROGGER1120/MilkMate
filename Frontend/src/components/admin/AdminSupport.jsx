import { useState } from 'react';
import { MessageSquare, AlertCircle, CheckCircle, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { toast } from 'sonner';

const initialTickets = [
  {
    id: '1',
    ticketNumber: 'TICKET-001',
    subject: 'Payment not processed',
    description: 'My payment for order #1234 was deducted but order not confirmed',
    user: 'Rajesh Kumar',
    userRole: 'customer',
    email: 'rajesh.k@email.com',
    priority: 'high',
    status: 'open',
    category: 'billing',
    createdDate: '2024-10-15',
    lastUpdate: '2024-10-15',
    messages: [
      { sender: 'Rajesh Kumar', message: 'My payment was deducted but order not confirmed', timestamp: '2024-10-15 10:30 AM', isAdmin: false },
    ],
  },
  {
    id: '2',
    ticketNumber: 'TICKET-002',
    subject: 'Delivery delayed',
    description: 'Order scheduled for morning not delivered yet',
    user: 'Priya Sharma',
    userRole: 'customer',
    email: 'priya.s@email.com',
    priority: 'medium',
    status: 'in-progress',
    category: 'delivery',
    createdDate: '2024-10-15',
    lastUpdate: '2024-10-15',
    messages: [
      { sender: 'Priya Sharma', message: 'Order not delivered yet', timestamp: '2024-10-15 09:00 AM', isAdmin: false },
      { sender: 'Admin', message: 'We are checking with delivery partner', timestamp: '2024-10-15 09:30 AM', isAdmin: true },
    ],
  },
  {
    id: '3',
    ticketNumber: 'TICKET-003',
    subject: 'Cannot update product stock',
    description: 'Getting error when trying to update inventory',
    user: 'Amit Patel',
    userRole: 'provider',
    email: 'amit.p@email.com',
    priority: 'urgent',
    status: 'in-progress',
    category: 'technical',
    createdDate: '2024-10-14',
    lastUpdate: '2024-10-15',
    messages: [
      { sender: 'Amit Patel', message: 'Cannot update stock, shows error 500', timestamp: '2024-10-14 02:00 PM', isAdmin: false },
      { sender: 'Admin', message: 'We are investigating the issue', timestamp: '2024-10-14 03:00 PM', isAdmin: true },
    ],
  },
  {
    id: '4',
    ticketNumber: 'TICKET-004',
    subject: 'Earnings not reflected',
    description: 'Completed deliveries but earnings not showing',
    user: 'Vikram Singh',
    userRole: 'partner',
    email: 'vikram.s@email.com',
    priority: 'high',
    status: 'open',
    category: 'billing',
    createdDate: '2024-10-15',
    lastUpdate: '2024-10-15',
    messages: [
      { sender: 'Vikram Singh', message: 'My earnings for yesterday not updated', timestamp: '2024-10-15 11:00 AM', isAdmin: false },
    ],
  },
  {
    id: '5',
    ticketNumber: 'TICKET-005',
    subject: 'Product quality issue',
    description: 'Received spoiled milk',
    user: 'Kavita Desai',
    userRole: 'customer',
    email: 'kavita.d@email.com',
    priority: 'high',
    status: 'resolved',
    category: 'product',
    createdDate: '2024-10-13',
    lastUpdate: '2024-10-14',
    messages: [
      { sender: 'Kavita Desai', message: 'Received spoiled milk', timestamp: '2024-10-13 08:00 AM', isAdmin: false },
      { sender: 'Admin', message: 'We sincerely apologize. Refund processed', timestamp: '2024-10-13 09:00 AM', isAdmin: true },
      { sender: 'Kavita Desai', message: 'Thank you for quick resolution', timestamp: '2024-10-14 10:00 AM', isAdmin: false },
    ],
  },
];

export default function AdminSupport() {
  const [tickets, setTickets] = useState(initialTickets);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || ticket.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsDialogOpen(true);
  };

  const handleSendReply = () => {
    if (!replyMessage.trim() || !selectedTicket) return;

    const updatedTicket = {
      ...selectedTicket,
      messages: [
        ...selectedTicket.messages,
        {
          sender: 'Admin',
          message: replyMessage,
          timestamp: new Date().toLocaleString(),
          isAdmin: true,
        },
      ],
      lastUpdate: new Date().toISOString().split('T')[0],
      status: 'in-progress',
    };

    setTickets(tickets.map(t => t.id === selectedTicket.id ? updatedTicket : t));
    setSelectedTicket(updatedTicket);
    setReplyMessage('');
    toast.success('Reply sent successfully');
  };

  const handleChangeStatus = (ticketId, newStatus) => {
    setTickets(tickets.map(t => t.id === ticketId ? { ...t, status: newStatus } : t));
    toast.success(`Ticket status changed to ${newStatus}`);
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'bg-blue-100 text-blue-700',
      medium: 'bg-amber-100 text-amber-700',
      high: 'bg-orange-100 text-orange-700',
      urgent: 'bg-red-100 text-red-700',
    };
    return colors[priority];
  };

  const getStatusColor = (status) => {
    const colors = {
      open: 'bg-sky-100 text-sky-700',
      'in-progress': 'bg-purple-100 text-purple-700',
      resolved: 'bg-emerald-100 text-emerald-700',
      closed: 'bg-gray-100 text-gray-700',
    };
    return colors[status];
  };

  const stats = {
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    urgent: tickets.filter(t => t.priority === 'urgent').length,
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Support Tickets</h1>
        <p className="text-muted-foreground">Manage customer support requests and inquiries</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-sky-50 border-sky-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Open</p>
                <p className="text-sky-700 text-2xl">{stats.open}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-sky-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">In Progress</p>
                <p className="text-purple-700 text-2xl">{stats.inProgress}</p>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Resolved</p>
                <p className="text-emerald-700 text-2xl">{stats.resolved}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-1 text-sm">Urgent</p>
                <p className="text-red-700 text-2xl">{stats.urgent}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ticket Table Section */}
      {/* (keep rest same as your original; no type syntax is used now) */}
    </div>
  );
}
