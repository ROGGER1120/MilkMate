import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Milk, TrendingUp, Calendar, Clock, Users } from 'lucide-react';

export default function ProviderHome() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Provider Dashboard</h2>
      <p className="text-muted-foreground">
        Monitor your dairy business performance and manage operations.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Orders</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">↑8% from yesterday</p>
            <Button variant="outline" size="sm" className="mt-4">View All</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">↑12% this month</p>
            <Button variant="outline" size="sm" className="mt-4">Manage</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹24,500</div>
            <p className="text-xs text-muted-foreground">This month (↑15% from last month)</p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="mt-8 text-xl font-bold">Inventory Status</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Milk className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Full Cream Milk</h4>
                <p className="text-sm text-muted-foreground">Stock: 120L</p>
                <Button size="sm" className="mt-2">Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Milk className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Toned Milk</h4>
                <p className="text-sm text-muted-foreground">Stock: 85L</p>
                <Button size="sm" className="mt-2">Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}