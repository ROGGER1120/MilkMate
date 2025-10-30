import React, { useState } from 'react';
import { LayoutDashboard, Users, Package, ShoppingCart, Settings, Shield, BarChart3, DollarSign, MessageSquare, CheckCircle, Activity } from 'lucide-react';
import DashboardLayout from '../shared/DashboardLayout';
import AdminHome from './AdminHome';
import AdminUsers from './AdminUsers';
import AdminProducts from './AdminProducts';
import AdminOrders from './AdminOrders';
import AdminAnalytics from './AdminAnalytics';
import AdminFinance from './AdminFinance';
import AdminSupport from './AdminSupport';
import AdminApprovals from './AdminApprovals';
import AdminLogs from './AdminLogs';
import AdminSettings from './AdminSettings';

export default function AdminDashboard({ onLogout }) {
  const [currentView, setCurrentView] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'support', label: 'Support', icon: MessageSquare },
    { id: 'approvals', label: 'Approvals', icon: CheckCircle },
    { id: 'logs', label: 'Activity Logs', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <AdminHome />;
      case 'users':
        return <AdminUsers />;
      case 'products':
        return <AdminProducts />;
      case 'orders':
        return <AdminOrders />;
      case 'analytics':
        return <AdminAnalytics />;
      case 'finance':
        return <AdminFinance />;
      case 'support':
        return <AdminSupport />;
      case 'approvals':
        return <AdminApprovals />;
      case 'logs':
        return <AdminLogs />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <DashboardLayout
      userName="Admin"
      userRole="Platform Administrator"
      navigationItems={navigationItems}
      currentView={currentView}
      onNavigate={(view) => setCurrentView(view)}
      onLogout={onLogout}
      primaryGradient="from-purple-600 to-indigo-600"
      logoIcon={Shield}
    >
      {renderContent()}
    </DashboardLayout>
  );
}
