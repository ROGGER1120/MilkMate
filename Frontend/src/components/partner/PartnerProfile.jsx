import { User, Bike, Award, FileText, Star, Upload } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';

export default function PartnerProfile() {
  return (
    <div className="space-y-6">
      <div>
        <h2>Profile & Documents</h2>
        <p className="text-muted-foreground">Manage your profile and vehicle information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="bg-primary text-white" style={{ fontSize: '2rem' }}>
                AS
              </AvatarFallback>
            </Avatar>
            <CardTitle>Arjun Singh</CardTitle>
            <CardDescription>Delivery Partner</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Partner ID</span>
              <Badge>DP-2024-1234</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Rating</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.8</span>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Zone</span>
              <span>South Bangalore</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <Badge className="bg-green-100 text-green-700">Active</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" defaultValue="Arjun Singh" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="arjun.singh@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+91 98765 11111" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" defaultValue="1995-05-15" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="Jayanagar, Bangalore, Karnataka" />
              </div>
            </div>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Update Profile
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bike className="w-5 h-5" />
            Vehicle Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vehicle-type">Vehicle Type</Label>
              <Input id="vehicle-type" defaultValue="Two Wheeler" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle-number">Vehicle Number</Label>
              <Input id="vehicle-number" defaultValue="KA-01-AB-1234" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicle-model">Model</Label>
              <Input id="vehicle-model" defaultValue="Honda Activa" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Documents
          </CardTitle>
          <CardDescription>Upload and manage your documents</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-2 border-dashed rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p>Driving License</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    Valid till: Dec 2028
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Upload className="w-4 h-4 mr-2" />
                Re-upload
              </Button>
            </div>

            <div className="p-4 border-2 border-dashed rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p>Aadhaar Card</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    ****-****-1234
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Upload className="w-4 h-4 mr-2" />
                Re-upload
              </Button>
            </div>

            <div className="p-4 border-2 border-dashed rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p>PAN Card</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    ABCDE1234F
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Upload className="w-4 h-4 mr-2" />
                Re-upload
              </Button>
            </div>

            <div className="p-4 border-2 border-dashed rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p>Vehicle RC</p>
                  <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                    KA-01-AB-1234
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-700">Verified</Badge>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2">
                <Upload className="w-4 h-4 mr-2" />
                Re-upload
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Performance Stats
          </CardTitle>
          <CardDescription>Your overall performance metrics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span>On-Time Delivery Rate</span>
              <span>98%</span>
            </div>
            <Progress value={98} className="h-2" />
          </div>
          <Separator />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span>Customer Satisfaction</span>
              <span>96%</span>
            </div>
            <Progress value={96} className="h-2" />
          </div>
          <Separator />
          <div>
            <div className="flex items-center justify-between mb-2">
              <span>Acceptance Rate</span>
              <span>92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
