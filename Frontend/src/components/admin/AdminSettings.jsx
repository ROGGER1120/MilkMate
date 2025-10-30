import { useState } from 'react';
import { Settings, Database, Bell, Shield, Percent, DollarSign, Truck, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { toast } from 'sonner';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    // General Settings
    platformName: 'MilkMate',
    supportEmail: 'support@milkmate.com',
    supportPhone: '+91 1800 123 4567',
    
    // Commission Settings
    providerCommission: 15,
    partnerCommission: 10,
    platformFee: 5,
    
    // Delivery Settings
    freeDeliveryThreshold: 500,
    deliveryCharge: 20,
    maxDeliveryRadius: 10,
    
    // Notifications
    emailNotifications: true,
    smsNotifications: true,
    pushNotifications: true,
    orderUpdates: true,
    
    // System Settings
    maintenanceMode: false,
    newUserRegistration: true,
    autoApproveProviders: false,
    autoApprovePartners: true,
  });

  const handleSave = () => {
    toast.success('Settings saved successfully');
  };

  const handleReset = () => {
    toast.info('Settings reset to default');
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>System Settings</h1>
          <p className="text-muted-foreground">Configure platform settings and preferences</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6">
          <TabsTrigger value="general">
            <Settings className="w-4 h-4 mr-2 hidden sm:inline" />
            General
          </TabsTrigger>
          <TabsTrigger value="commission">
            <Percent className="w-4 h-4 mr-2 hidden sm:inline" />
            Commission
          </TabsTrigger>
          <TabsTrigger value="delivery">
            <Truck className="w-4 h-4 mr-2 hidden sm:inline" />
            Delivery
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2 hidden sm:inline" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="system">
            <Shield className="w-4 h-4 mr-2 hidden sm:inline" />
            System
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Information</CardTitle>
              <CardDescription>Basic platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input
                    id="platformName"
                    value={settings.platformName}
                    onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={settings.supportEmail}
                    onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportPhone">Support Phone</Label>
                  <Input
                    id="supportPhone"
                    value={settings.supportPhone}
                    onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Database & Storage</CardTitle>
              <CardDescription>Database statistics and management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-foreground" style={{ fontWeight: 500 }}>Database Size</p>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Current storage usage</p>
                    </div>
                  </div>
                  <p className="text-foreground" style={{ fontSize: '1.25rem', fontWeight: 600 }}>1.2 GB</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 border rounded-lg">
                    <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Total Records</p>
                    <p className="text-foreground" style={{ fontSize: '1.5rem', fontWeight: 600 }}>24,583</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Active Sessions</p>
                    <p className="text-foreground" style={{ fontSize: '1.5rem', fontWeight: 600 }}>1,234</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>API Calls Today</p>
                    <p className="text-foreground" style={{ fontSize: '1.5rem', fontWeight: 600 }}>45,678</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Database className="w-4 h-4 mr-2" />
                  Optimize Database
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Commission Settings */}
        <TabsContent value="commission" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Commission Rates</CardTitle>
              <CardDescription>Set commission percentages for providers and partners</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Percent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="providerCommission">Provider Commission</Label>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Platform fee from providers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      id="providerCommission"
                      type="number"
                      value={settings.providerCommission}
                      onChange={(e) => setSettings({ ...settings, providerCommission: Number(e.target.value) })}
                      className="w-20 text-center"
                    />
                    <span className="text-muted-foreground">%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="partnerCommission">Partner Commission</Label>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Delivery partner earnings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      id="partnerCommission"
                      type="number"
                      value={settings.partnerCommission}
                      onChange={(e) => setSettings({ ...settings, partnerCommission: Number(e.target.value) })}
                      className="w-20 text-center"
                    />
                    <span className="text-muted-foreground">%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <Label htmlFor="platformFee">Platform Fee</Label>
                      <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Service fee per transaction</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      id="platformFee"
                      type="number"
                      value={settings.platformFee}
                      onChange={(e) => setSettings({ ...settings, platformFee: Number(e.target.value) })}
                      className="w-20 text-center"
                    />
                    <span className="text-muted-foreground">%</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-blue-900 mb-2" style={{ fontWeight: 600 }}>Revenue Breakdown Example</h4>
                <p className="text-blue-700 mb-3" style={{ fontSize: '0.875rem' }}>For a ₹100 order:</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-blue-800">
                    <span>Provider receives:</span>
                    <span style={{ fontWeight: 600 }}>₹{100 - settings.providerCommission - settings.platformFee}</span>
                  </div>
                  <div className="flex justify-between text-blue-800">
                    <span>Partner receives:</span>
                    <span style={{ fontWeight: 600 }}>₹{settings.partnerCommission}</span>
                  </div>
                  <div className="flex justify-between text-blue-800">
                    <span>Platform fee:</span>
                    <span style={{ fontWeight: 600 }}>₹{settings.platformFee}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-blue-900">
                    <span style={{ fontWeight: 600 }}>Total:</span>
                    <span style={{ fontWeight: 600 }}>₹100</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Delivery Settings */}
        <TabsContent value="delivery" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Configuration</CardTitle>
              <CardDescription>Manage delivery settings and charges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="freeDeliveryThreshold">Free Delivery Threshold (₹)</Label>
                  <Input
                    id="freeDeliveryThreshold"
                    type="number"
                    value={settings.freeDeliveryThreshold}
                    onChange={(e) => setSettings({ ...settings, freeDeliveryThreshold: Number(e.target.value) })}
                  />
                  <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>Orders above this amount get free delivery</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deliveryCharge">Standard Delivery Charge (₹)</Label>
                  <Input
                    id="deliveryCharge"
                    type="number"
                    value={settings.deliveryCharge}
                    onChange={(e) => setSettings({ ...settings, deliveryCharge: Number(e.target.value) })}
                  />
                  <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>Charge for orders below threshold</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxDeliveryRadius">Maximum Delivery Radius (km)</Label>
                  <Input
                    id="maxDeliveryRadius"
                    type="number"
                    value={settings.maxDeliveryRadius}
                    onChange={(e) => setSettings({ ...settings, maxDeliveryRadius: Number(e.target.value) })}
                  />
                  <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>Maximum distance for deliveries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure notification channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Send notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Send notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Send push notifications</p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, pushNotifications: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Order Updates</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Notify users about order status changes</p>
                  </div>
                  <Switch
                    checked={settings.orderUpdates}
                    onCheckedChange={(checked) => setSettings({ ...settings, orderUpdates: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Configuration</CardTitle>
              <CardDescription>Platform-wide system settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-red-50 border-red-200">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Disable platform for maintenance</p>
                  </div>
                  <Switch
                    checked={settings.maintenanceMode}
                    onCheckedChange={(checked) => setSettings({ ...settings, maintenanceMode: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New User Registration</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Allow new users to register</p>
                  </div>
                  <Switch
                    checked={settings.newUserRegistration}
                    onCheckedChange={(checked) => setSettings({ ...settings, newUserRegistration: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Approve Providers</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Automatically approve new providers</p>
                  </div>
                  <Switch
                    checked={settings.autoApproveProviders}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoApproveProviders: checked })}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-Approve Partners</Label>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Automatically approve new delivery partners</p>
                  </div>
                  <Switch
                    checked={settings.autoApprovePartners}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoApprovePartners: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Danger Zone</CardTitle>
              <CardDescription className="text-amber-700">Irreversible actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                <Database className="w-4 h-4 mr-2" />
                Clear All Cache
              </Button>
              <Button variant="outline" className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50">
                <Shield className="w-4 h-4 mr-2" />
                Reset All User Passwords
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
