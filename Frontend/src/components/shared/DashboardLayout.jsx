import { useState } from 'react';
import { Bell, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Badge } from '../ui/badge';
import NotificationPanel from './NotificationPanel';

/**
 * @typedef {Object} NavigationItem
 * @property {string} id - Unique identifier for the navigation item
 * @property {string} label - Display label for the navigation item
 * @property {import('lucide-react').LucideIcon} icon - Icon component for the navigation item
 */

/**
 * @typedef {Object} DashboardLayoutProps
 * @property {React.ReactNode} children - Content to display in the main area
 * @property {React.ReactNode} [sidebar] - Optional sidebar content
 * @property {NavigationItem[]} [navigationItems] - Navigation menu items
 * @property {string} [currentView] - Currently active view
 * @property {function(string): void} [onNavigate] - Navigation callback
 * @property {string} [roleName] - User role name
 * @property {string} [userRole] - User role
 * @property {string} [userName] - User name
 * @property {function(): void} onLogout - Logout callback
 * @property {string} [primaryGradient] - Primary gradient color
 * @property {React.ElementType} [logoIcon] - Logo icon component
 */

/**
 * Dashboard layout component
 * @param {DashboardLayoutProps} props
 */
export default function DashboardLayout({ 
  children, 
  sidebar,
  navigationItems,
  currentView,
  onNavigate,
  roleName,
  userRole,
  userName = "User",
  onLogout,
  primaryGradient = "from-primary to-emerald-600",
  logoIcon: LogoIcon
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Use userRole if provided, otherwise use roleName
  const displayRole = userRole || roleName || "Dashboard";

  // Build sidebar from navigationItems if provided
  const sidebarContent = sidebar || (navigationItems && onNavigate ? (
    <nav className="space-y-1 px-3">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            onNavigate(item.id);
            setSidebarOpen(false);
          }}
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
            ${currentView === item.id 
              ? `bg-gradient-to-r ${primaryGradient} text-white shadow-lg` 
              : 'text-sidebar-foreground hover:bg-sidebar-accent'
            }
          `}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  ) : null);

  return (
    <div className="size-full flex overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-sidebar border-r border-sidebar-border shadow-xl
        transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${primaryGradient} flex items-center justify-center shadow-lg`}>
                {LogoIcon ? (
                  <LogoIcon className="w-7 h-7 text-white" strokeWidth={2} />
                ) : (
                  <span className="text-white" style={{ fontSize: '1.5rem' }}>🥛</span>
                )}
              </div>
              <div>
                <h3 className="text-sidebar-foreground" style={{ fontSize: '1.25rem', fontWeight: 700 }}>MilkMate</h3>
                <p className="text-muted-foreground" style={{ fontSize: '0.8rem' }}>
                  {displayRole}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto py-6">
            {sidebarContent}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-5 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden shrink-0"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h2 className="text-foreground truncate" style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)', fontWeight: 700 }}>
                  <span className="hidden sm:inline">Welcome back, </span>{userName}!
                </h2>
                <p className="text-muted-foreground hidden xs:block truncate" style={{ fontSize: 'clamp(0.75rem, 2vw, 0.9rem)' }}>
                  <span className="hidden sm:inline">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="sm:hidden">
                    {new Date().toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Notifications */}
              <Button
                variant="ghost"
                size="icon"
                className="relative shrink-0 w-8 h-8 sm:w-9 sm:h-9"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                <Badge className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 p-0 flex items-center justify-center bg-destructive text-[0.625rem] sm:text-xs">
                  3
                </Badge>
              </Button>

              {/* Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2 h-8 sm:h-9 px-2 sm:px-3 shrink-0">
                    <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-white text-xs sm:text-sm">
                        {userName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:inline max-w-[100px] truncate">{userName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 w-4 h-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 w-4 h-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Notification Panel */}
      <NotificationPanel 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />
    </div>
  );
}
