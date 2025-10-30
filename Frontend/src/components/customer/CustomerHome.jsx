import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Milk, TrendingUp, Calendar, Clock } from 'lucide-react';

/**
 * Customer home dashboard component
 */
export default function CustomerHome() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
      <p className="text-muted-foreground">
        Here's what's happening with your milk deliveries today.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Delivery</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6:30 AM</div>
            <p className="text-xs text-muted-foreground">Full Cream Milk (1L)</p>
            <Button variant="outline" size="sm" className="mt-4">Track</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscription Status</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">Renews on 15th Nov</p>
            <Button variant="outline" size="sm" className="mt-4">Manage</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Milk Consumption</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28L</div>
            <p className="text-xs text-muted-foreground">This month (↑12% from last month)</p>
          </CardContent>
        </Card>
      </div>
      
      <h3 className="mt-8 text-xl font-bold">Recommended Products</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Milk className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Organic Ghee</h4>
                <p className="text-sm text-muted-foreground">₹450 for 500ml</p>
                <Button size="sm" className="mt-2">Add to Cart</Button>
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
                <h4 className="font-semibold">Fresh Paneer</h4>
                <p className="text-sm text-muted-foreground">₹120 for 250g</p>
                <Button size="sm" className="mt-2">Add to Cart</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}