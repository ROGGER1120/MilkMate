import React, { useState } from 'react';
import { Home, Package, Users, Wallet, FileText, Settings } from 'lucide-react';
import DashboardLayout from '../shared/DashboardLayout';
import ProviderHome from './ProviderHome';
import ProviderProducts from './ProviderProducts';
import ProviderOrders from './ProviderOrders';
import ProviderCustomers from './ProviderCustomers';
import ProviderEarnings from './ProviderEarnings';
import ProviderSettings from './ProviderSettings';

export default function ProviderDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: FileText },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'earnings', label: 'Earnings', icon: Wallet },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const sidebar = (
    <nav className="space-y-1 px-3">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
            ${activeTab === item.id 
              ? 'bg-primary text-white shadow-lg' 
              : 'text-sidebar-foreground hover:bg-sidebar-accent'
            }
          `}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <DashboardLayout
      sidebar={sidebar}
      roleName="Provider Portal"
      userName="Green Valley Dairy"
      onLogout={onLogout}
    >
      {activeTab === 'home' && <ProviderHome />}
      {activeTab === 'products' && <ProviderProducts />}
      {activeTab === 'orders' && <ProviderOrders />}
      {activeTab === 'customers' && <ProviderCustomers />}
      {activeTab === 'earnings' && <ProviderEarnings />}
      {activeTab === 'settings' && <ProviderSettings />}
    </DashboardLayout>
  );
}
