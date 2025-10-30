import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import RoleSelection from './components/RoleSelection';
import LoginRegister from './components/LoginRegister';
import CustomerDashboard from './components/customer/CustomerDashboard';
import ProviderDashboard from './components/provider/ProviderDashboard';
import PartnerDashboard from './components/partner/PartnerDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { Toaster } from 'sonner';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedRole, setSelectedRole] = useState(null);
  const [isDull, setIsDull] = useState(false);

  const handleSplashComplete = () => {
    setCurrentScreen('roleSelect');
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setCurrentScreen('login');
  };

  const handleLoginComplete = () => {
    if (selectedRole === 'customer') {
      setCurrentScreen('customerDashboard');
    } else if (selectedRole === 'provider') {
      setCurrentScreen('providerDashboard');
    } else if (selectedRole === 'partner') {
      setCurrentScreen('partnerDashboard');
    } else if (selectedRole === 'admin') {
      setCurrentScreen('adminDashboard');
    }
  };

  const handleLogout = () => {
    setSelectedRole(null);
    setCurrentScreen('roleSelect');
  };

  return (
    <>
      <div className={`size-full ${isDull ? 'dull' : ''}`}>
        {currentScreen === 'splash' && <SplashScreen onComplete={handleSplashComplete} />}
        {currentScreen === 'roleSelect' && <RoleSelection onRoleSelect={handleRoleSelect} />}
        {currentScreen === 'login' && <LoginRegister role={selectedRole} onLoginComplete={handleLoginComplete} onBack={() => setCurrentScreen('roleSelect')} />}
        {currentScreen === 'customerDashboard' && <CustomerDashboard onLogout={handleLogout} />}
        {currentScreen === 'providerDashboard' && <ProviderDashboard onLogout={handleLogout} />}
        {currentScreen === 'partnerDashboard' && <PartnerDashboard onLogout={handleLogout} />}
        {currentScreen === 'adminDashboard' && <AdminDashboard onLogout={handleLogout} />}
      </div>
      <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
        <button
          onClick={() => setIsDull((v) => !v)}
          className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground shadow-md"
        >
          {isDull ? 'Disable Dull' : 'Enable Dull'}
        </button>
      </div>
      <Toaster />
    </>
  );
}


