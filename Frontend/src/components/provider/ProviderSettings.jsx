import { Store, MapPin, Clock, Bell, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';

export default function ProviderSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Settings</h2>
        <p className="text-muted-foreground">Manage your business settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Business Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="w-5 h-5" />
              Business Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" defaultValue="Green Valley Dairy" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-email">Email</Label>
              <Input id="business-email" type="email" defaultValue="contact@greenvalley.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-phone">Phone</Label>
              <Input id="business-phone" type="tel" defaultValue="+91 98765 00000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Business Description</Label>
              <Textarea 
                id="description" 
                defaultValue="Premium quality dairy products since 1995"
                rows={3}
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Business Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Business Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input id="street" defaultValue="123, Dairy Farm Road" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="Bangalore" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" defaultValue="560001" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" defaultValue="Karnataka" />
            </div>
            <Button variant="outline" className="w-full">
              Update Address
            </Button>
          </CardContent>
        </Card>

        {/* Operating Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p>Morning Delivery</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  6:00 AM - 9:00 AM
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p>Evening Delivery</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  5:00 PM - 8:00 PM
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p>Sunday Delivery</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Available on Sundays
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p>New Orders</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Get notified about new orders
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p>Low Stock Alerts</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Alert when products are low
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p>Payment Updates</p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Notifications for payments
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Bank Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Bank Account Details
            </CardTitle>
            <CardDescription>For receiving payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="account-name">Account Holder Name</Label>
                <Input id="account-name" defaultValue="Green Valley Dairy" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-number">Account Number</Label>
                <Input id="account-number" defaultValue="1234567890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ifsc">IFSC Code</Label>
                <Input id="ifsc" defaultValue="HDFC0001234" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bank-name">Bank Name</Label>
                <Input id="bank-name" defaultValue="HDFC Bank" />
              </div>
            </div>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Update Bank Details
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
