import React, { useState } from 'react';
import { Home, ShoppingBag, Package, Wallet, Settings } from 'lucide-react';
import DashboardLayout from '../shared/DashboardLayout';
import CustomerHome from './CustomerHome';
import CustomerProducts from './CustomerProducts';
import CustomerOrders from './CustomerOrders';
import CustomerPayments from './CustomerPayments';
import CustomerSettings from './CustomerSettings';

export default function CustomerDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'payments', label: 'Payments', icon: Wallet },
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
      roleName="Customer Portal"
      userName="Rajesh Kumar"
      onLogout={onLogout}
    >
      {activeTab === 'home' && <CustomerHome />}
      {activeTab === 'products' && <CustomerProducts />}
      {activeTab === 'orders' && <CustomerOrders />}
      {activeTab === 'payments' && <CustomerPayments />}
      {activeTab === 'settings' && <CustomerSettings />}
    </DashboardLayout>
  );
}
