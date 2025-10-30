import React, { useState } from 'react';
import { Home, Map, Package, Wallet, Award } from 'lucide-react';
import DashboardLayout from '../shared/DashboardLayout';
import PartnerHome from './PartnerHome';
import PartnerRoute from './PartnerRoute';
import PartnerDeliveries from './PartnerDeliveries';
import PartnerEarnings from './PartnerEarnings';
import PartnerProfile from './PartnerProfile';

export default function PartnerDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Dashboard', icon: Home },
    { id: 'route', label: 'Delivery Route', icon: Map },
    { id: 'deliveries', label: 'Deliveries', icon: Package },
    { id: 'earnings', label: 'Earnings', icon: Wallet },
    { id: 'profile', label: 'Profile', icon: Award },
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
      roleName="Delivery Partner"
      userName="Arjun Singh"
      onLogout={onLogout}
    >
      {activeTab === 'home' && <PartnerHome />}
      {activeTab === 'route' && <PartnerRoute />}
      {activeTab === 'deliveries' && <PartnerDeliveries />}
      {activeTab === 'earnings' && <PartnerEarnings />}
      {activeTab === 'profile' && <PartnerProfile />}
    </DashboardLayout>
  );
}
