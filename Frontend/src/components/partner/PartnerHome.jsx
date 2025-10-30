import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Bike, TrendingUp, Calendar, Clock, MapPin } from 'lucide-react';

export default function PartnerHome() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Delivery Partner Dashboard</h2>
      <p className="text-muted-foreground">
        Manage your deliveries and track your earnings.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Deliveries</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">5 completed, 7 pending</p>
            <Button variant="outline" size="sm" className="mt-4">View All</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Location</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Koramangala</div>
            <p className="text-xs text-muted-foreground">Bangalore, Karnataka</p>
            <Button variant="outline" size="sm" className="mt-4">Update</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹450</div>
            <p className="text-xs text-muted-foreground">Target: ₹800</p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="mt-8 text-xl font-bold">Next Deliveries</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Bike className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Rajesh Kumar</h4>
                <p className="text-sm">Full Cream Milk (1L) x2</p>
                <p className="text-xs text-muted-foreground">Koramangala 5th Block</p>
                <Button size="sm" className="mt-2">Navigate</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Bike className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Priya Sharma</h4>
                <p className="text-sm">Toned Milk (500ml) x3</p>
                <p className="text-xs text-muted-foreground">Indiranagar 12th Main</p>
                <Button size="sm" className="mt-2">Navigate</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}