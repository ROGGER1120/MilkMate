import { Milk, Store, Bike, Shield } from 'lucide-react';
import { Card } from './ui/card';

/**
 * @typedef {'customer' | 'provider' | 'partner' | 'admin'} RoleType
 * 
 * @typedef {Object} RoleSelectionProps
 * @property {function(RoleType): void} onRoleSelect - Function to handle role selection
 */

/**
 * Role selection component
 * @param {RoleSelectionProps} props
 */
export default function RoleSelection({ onRoleSelect }) {
  const roles = [
    {
      id: 'customer',
      title: 'Customer',
      description: 'Subscribe to daily milk delivery',
      icon: Milk,
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'provider',
      title: 'Milk Provider',
      description: 'Manage products and customers',
      icon: Store,
      gradient: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'partner',
      title: 'Delivery Partner',
      description: 'Deliver and earn rewards',
      icon: Bike,
      gradient: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-50',
    },
    {
      id: 'admin',
      title: 'Administrator',
      description: 'Manage platform and resources',
      icon: Shield,
      gradient: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="size-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-primary to-emerald-600 p-3 rounded-2xl shadow-lg">
            <Milk className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-primary" style={{ fontSize: '2.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
            MilkMate
          </h1>
        </div>
        <p className="text-primary font-medium" style={{ fontSize: '1.125rem' }}>Choose your role to continue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl w-full">
        {roles.map((role) => (
          <Card
            key={role.id}
            className={`p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-border hover:border-transparent group relative overflow-hidden ${role.bgColor}`}
            onClick={() => onRoleSelect(role.id)}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-primary to-emerald-600"></div>
            <div className="relative z-10">
              <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${role.gradient} mb-6 shadow-lg`}>
                <role.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-primary font-semibold" style={{ fontSize: '1.5rem' }}>{role.title}</h3>
              <p className=" font-bold text-primary text-lg">{role.description}</p>
              <div className="mt-8 flex items-center text-primary font-bold opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span>Get Started</span>
                <span className="ml-2 text-black" style={{ fontSize: '1.25rem', color: 'var(--black)' }}>→</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-16 text-primary font-medium">
        Smart Dairy. Smarter Living.
      </p>
    </div>
  );
}
