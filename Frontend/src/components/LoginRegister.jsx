import React, { useState } from 'react';
import { Milk, Mail, Lock, User, Phone, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export default function LoginRegister({ role, onLoginComplete, onBack }) {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (role === 'admin') {
        if (loginEmail === 'admin' && loginPassword === 'admin123') {
          setIsLoading(false);
          onLoginComplete();
        } else {
          setIsLoading(false);
          alert('Invalid Admin credentials');
        }
      } else {
        setIsLoading(false);
        onLoginComplete();
      }
    }, 800);
  };

  const roleNames = {
    customer: 'Customer',
    provider: 'Milk Provider',
    partner: 'Delivery Partner',
    admin: 'Administrator',
  };

  // Inputs should follow theme colors; avoid forcing black text

  return (
    <div className="size-full bg-black flex items-center justify-center p-6 relative">
      {/* Back arrow button to navigate to homepage */}
      <Card className="w-full max-w-md p-10 relative flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-primary to-blue-700 p-3 rounded-2xl">
              <Milk className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-primary" style={{ fontSize: '2rem', fontWeight: 700 }}>
              MilkMate
            </h2>
          </div>
          <p
            className="text-primary-foreground bg-primary px-4 py-1 rounded-full inline-block"
            style={{ fontSize: '1.125rem' }}
          >
            {roleNames[role]} Portal
          </p>
        </div>

        {/* Tabs for non-admin roles */}
        {role !== 'admin' ? (
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-primary  text-white rounded-lg">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>

                <div className="text-center mt-2">
                  <a href="#" className="text-primary hover:underline font-medium">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-foreground">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg shadow-md transition-all hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating Account...' : 'Register'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        ) : (
          // ✅ Admin-only login
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-foreground">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="admin-email"
                  type="text"
                  placeholder="admin"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="pl-10 border-blue-100 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white font-semibold py-2 rounded-lg shadow-md transition-all hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? 'Checking...' : 'Login'}
            </Button>
          </form>
        )}

        {/* ✅ Back Button at Bottom */}
        {onBack && (
          <div className="w-full mt-8 flex justify-center">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/90 text-foreground shadow hover:bg-white transition-all group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-foreground" />
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}
