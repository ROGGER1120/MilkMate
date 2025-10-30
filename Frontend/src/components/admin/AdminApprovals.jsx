"use client";

import { useState } from 'react';
import { CheckCircle, XCircle, Clock, Eye, AlertCircle, Store, Bike, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

// Initial applications data
const initialApplications = [
  {
    id: '1',
    name: 'Suresh Gupta',
    email: 'suresh.g@email.com',
    phone: '+91 98765 43218',
    type: 'provider',
    status: 'pending',
    appliedDate: '2024-10-14',
    businessName: 'Gupta Dairy Farm',
    location: 'Lucknow, UP',
    experience: '5 years',
    documents: [
      { name: 'Business License', verified: true },
      { name: 'FSSAI Certificate', verified: true },
      { name: 'Tax Registration', verified: false },
    ],
  },
  {
    id: '2',
    name: 'Ramesh Yadav',
    email: 'ramesh.y@email.com',
    phone: '+91 98765 43219',
    type: 'partner',
    status: 'pending',
    appliedDate: '2024-10-15',
    location: 'Kanpur, UP',
    vehicleType: 'Two Wheeler',
    documents: [
      { name: 'Driving License', verified: true },
      { name: 'Vehicle Registration', verified: true },
      { name: 'Aadhar Card', verified: true },
    ],
  },
  {
    id: '3',
    name: 'Lakshmi Narayanan',
    email: 'lakshmi.n@email.com',
    phone: '+91 98765 43220',
    type: 'provider',
    status: 'pending',
    appliedDate: '2024-10-15',
    businessName: 'Sri Lakshmi Milk Products',
    location: 'Coimbatore, TN',
    experience: '8 years',
    documents: [
      { name: 'Business License', verified: true },
      { name: 'FSSAI Certificate', verified: true },
      { name: 'Tax Registration', verified: true },
    ],
  },
  {
    id: '4',
    name: 'Mohammed Ali',
    email: 'mohammed.a@email.com',
    phone: '+91 98765 43221',
    type: 'partner',
    status: 'approved',
    appliedDate: '2024-10-10',
    location: 'Kolkata, WB',
    vehicleType: 'Four Wheeler',
    documents: [
      { name: 'Driving License', verified: true },
      { name: 'Vehicle Registration', verified: true },
      { name: 'Aadhar Card', verified: true },
    ],
  },
  {
    id: '5',
    name: 'Geeta Devi',
    email: 'geeta.d@email.com',
    phone: '+91 98765 43222',
    type: 'provider',
    status: 'rejected',
    appliedDate: '2024-10-08',
    businessName: 'Devi Dairy',
    location: 'Patna, BR',
    experience: '2 years',
    documents: [
      { name: 'Business License', verified: false },
      { name: 'FSSAI Certificate', verified: false },
      { name: 'Tax Registration', verified: false },
    ],
  },
];

export default function AdminApprovals() {
  const [applications, setApplications] = useState(initialApplications);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');

  // Filter applications by status
  const filteredByStatus = (status) => {
    if (status === 'all') return applications;
    return applications.filter(app => app.status === status);
  };

  // Open dialog to view application
  const handleViewApplication = (app) => {
    setSelectedApp(app);
    setIsDialogOpen(true);
  };

  // Approve application
  const handleApprove = (appId) => {
    setApplications(applications.map(app =>
      app.id === appId ? { ...app, status: 'approved' } : app
    ));
    toast.success('Application approved successfully');
    setIsDialogOpen(false);
  };

  // Reject application
  const handleReject = (appId) => {
    if (!rejectionReason.trim()) {
      toast.error('Please provide a rejection reason');
      return;
    }
    setApplications(applications.map(app =>
      app.id === appId ? { ...app, status: 'rejected' } : app
    ));
    toast.success('Application rejected');
    setRejectionReason('');
    setIsDialogOpen(false);
  };

  // Stats for cards
  const stats = {
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    providers: applications.filter(a => a.type === 'provider' && a.status === 'pending').length,
    partners: applications.filter(a => a.type === 'partner' && a.status === 'pending').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Applications & Approvals</h1>
        <p className="text-muted-foreground">Review and approve provider and partner applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="pt-6 text-center">
            <Clock className="w-6 h-6 mx-auto mb-2 text-amber-600" />
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.75rem' }}>Pending</p>
            <p className="text-amber-700" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{stats.pending}</p>
          </CardContent>
        </Card>
        <Card className="bg-emerald-50 border-emerald-200">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.75rem' }}>Approved</p>
            <p className="text-emerald-700" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{stats.approved}</p>
          </CardContent>
        </Card>
        <Card className="bg-red-50 border-red-200">
          <CardContent className="pt-6 text-center">
            <XCircle className="w-6 h-6 mx-auto mb-2 text-red-600" />
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.75rem' }}>Rejected</p>
            <p className="text-red-700" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{stats.rejected}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50">
          <CardContent className="pt-6 text-center">
            <Store className="w-6 h-6 mx-auto mb-2 text-amber-600" />
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.75rem' }}>Providers</p>
            <p className="text-amber-700" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{stats.providers}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-sky-50 to-blue-50">
          <CardContent className="pt-6 text-center">
            <Bike className="w-6 h-6 mx-auto mb-2 text-sky-600" />
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.75rem' }}>Partners</p>
            <p className="text-sky-700" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{stats.partners}</p>
          </CardContent>
        </Card>
      </div>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
          <CardDescription>Review pending applications and manage approvals</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="pending" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-3">
              <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
              <TabsTrigger value="approved">Approved ({stats.approved})</TabsTrigger>
              <TabsTrigger value="rejected">Rejected ({stats.rejected})</TabsTrigger>
            </TabsList>

            {['pending', 'approved', 'rejected'].map(status => (
              <TabsContent key={status} value={status}>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Applicant</TableHead>
                          <TableHead className="hidden md:table-cell">Type</TableHead>
                          <TableHead className="hidden lg:table-cell">Business/Vehicle</TableHead>
                          <TableHead className="hidden sm:table-cell">Documents</TableHead>
                          <TableHead className="hidden xl:table-cell">Applied Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredByStatus(status).map(app => (
                          <TableRow key={app.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10 shrink-0">
                                  <AvatarImage src="" />
                                  <AvatarFallback className={`${
                                    app.type === 'provider' 
                                      ? 'bg-gradient-to-br from-amber-500 to-orange-500' 
                                      : 'bg-gradient-to-br from-sky-500 to-blue-500'
                                  } text-white`}>
                                    {app.name.split(' ').map(n => n[0]).join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="min-w-0">
                                  <p className="text-foreground truncate">{app.name}</p>
                                  <p className="text-muted-foreground text-sm truncate">{app.email}</p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{app.type.charAt(0).toUpperCase() + app.type.slice(1)}</TableCell>
                            <TableCell className="hidden lg:table-cell">
                              {app.type === 'provider' ? app.businessName : app.vehicleType || '-'}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {app.documents.filter(d => d.verified).length}/{app.documents.length} Verified
                            </TableCell>
                            <TableCell className="hidden xl:table-cell">{app.appliedDate}</TableCell>
                            <TableCell>
                              {app.status === 'pending' && <Badge variant="outline">Pending</Badge>}
                              {app.status === 'approved' && <Badge variant="success">Approved</Badge>}
                              {app.status === 'rejected' && <Badge variant="destructive">Rejected</Badge>}
                            </TableCell>
                            <TableCell className="text-right">
                              <Button size="sm" variant="outline" onClick={() => handleViewApplication(app)}>
                                <Eye className="w-4 h-4 mr-1" /> View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Application Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <DialogDescription>Review application information and documents</DialogDescription>
          </DialogHeader>
          {selectedApp && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Applicant Info</h3>
                <p>Name: {selectedApp.name}</p>
                <p>Email: {selectedApp.email}</p>
                <p>Phone: {selectedApp.phone}</p>
                <p>Type: {selectedApp.type}</p>
                {selectedApp.type === 'provider' && (
                  <>
                    <p>Business Name: {selectedApp.businessName}</p>
                    <p>Experience: {selectedApp.experience}</p>
                  </>
                )}
                {selectedApp.type === 'partner' && (
                  <p>Vehicle Type: {selectedApp.vehicleType}</p>
                )}
                <p>Location: {selectedApp.location}</p>
                <p>Applied Date: {selectedApp.appliedDate}</p>
              </div>

              <div>
                <h3 className="font-semibold">Documents</h3>
                <ul className="list-disc ml-5">
                  {selectedApp.documents.map((doc, idx) => (
                    <li key={idx}>
                      {doc.name} - {doc.verified ? 'Verified' : 'Not Verified'}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedApp.status === 'pending' && (
                <div>
                  <Label htmlFor="rejectionReason">Rejection Reason</Label>
                  <Textarea
                    id="rejectionReason"
                    value={rejectionReason}
                    onChange={(e) => setRejectionReason(e.target.value)}
                    placeholder="Provide reason if rejecting"
                  />
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            {selectedApp?.status === 'pending' && (
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="flex-1 sm:flex-none text-red-600 border-red-200 hover:bg-red-50"
                  onClick={() => selectedApp && handleReject(selectedApp.id)}
                >
                  <XCircle className="w-4 h-4 mr-2" /> Reject
                </Button>
                <Button
                  className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => selectedApp && handleApprove(selectedApp.id)}
                >
                  <CheckCircle className="w-4 h-4 mr-2" /> Approve
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
