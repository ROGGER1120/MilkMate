import { Download, TrendingUp, Users, DollarSign, Package, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useState } from 'react';

const monthlyData = [
  { month: 'Jan', revenue: 45000, users: 850, orders: 1250, products: 95 },
  { month: 'Feb', revenue: 52000, users: 920, orders: 1480, products: 102 },
  { month: 'Mar', revenue: 48000, users: 1050, orders: 1320, products: 98 },
  { month: 'Apr', revenue: 61000, users: 1180, orders: 1650, products: 110 },
  { month: 'May', revenue: 55000, users: 1320, orders: 1520, products: 105 },
  { month: 'Jun', revenue: 67000, users: 1450, orders: 1890, products: 115 },
  { month: 'Jul', revenue: 72000, users: 1580, orders: 2100, products: 120 },
];

const weeklyData = [
  { day: 'Mon', orders: 285, revenue: 9850 },
  { day: 'Tue', orders: 310, revenue: 10200 },
  { day: 'Wed', orders: 298, revenue: 9950 },
  { day: 'Thu', orders: 325, revenue: 11100 },
  { day: 'Fri', orders: 342, revenue: 11800 },
  { day: 'Sat', orders: 390, revenue: 13500 },
  { day: 'Sun', orders: 360, revenue: 12400 },
];

const userGrowthData = [
  { month: 'Jan', customers: 520, providers: 45, partners: 25 },
  { month: 'Feb', customers: 580, providers: 52, partners: 28 },
  { month: 'Mar', customers: 650, providers: 58, partners: 32 },
  { month: 'Apr', customers: 720, providers: 65, partners: 35 },
  { month: 'May', customers: 800, providers: 72, partners: 40 },
  { month: 'Jun', customers: 890, providers: 78, partners: 45 },
  { month: 'Jul', customers: 980, providers: 85, partners: 52 },
];

export default function AdminAnalytics() {
  const [timeRange, setTimeRange] = useState('monthly');

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Analytics & Reports</h1>
          <p className="text-muted-foreground">Detailed insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[150px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="yearly">Yearly</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="shrink-0">
            <Download className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-emerald-600" />
              <Badge className="bg-emerald-100 text-emerald-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                18%
              </Badge>
            </div>
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Total Users</p>
            <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>24,583</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-8 h-8 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                24%
              </Badge>
            </div>
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Revenue</p>
            <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>₹72K</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Package className="w-8 h-8 text-sky-600" />
              <Badge className="bg-sky-100 text-sky-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                12%
              </Badge>
            </div>
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Orders</p>
            <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>2,100</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-amber-600" />
              <Badge className="bg-amber-100 text-amber-700">
                <TrendingUp className="w-3 h-3 mr-1" />
                8%
              </Badge>
            </div>
            <p className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>Growth</p>
            <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>+15%</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue & Orders Trend</CardTitle>
          <CardDescription>Monthly performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="revenue" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>
            <TabsContent value="revenue">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="orders">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="comparison">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#0EA5E9" strokeWidth={3} dot={{ fill: '#0EA5E9', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* User Growth & Weekly Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* User Growth */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>User acquisition by role</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="customers" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                <Area type="monotone" dataKey="providers" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
                <Area type="monotone" dataKey="partners" stackId="1" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Performance</CardTitle>
            <CardDescription>Daily orders and revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="orders" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="right" dataKey="revenue" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-900">
              <TrendingUp className="w-5 h-5" />
              Best Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-emerald-900" style={{ fontSize: '2rem', fontWeight: 700 }}>July 2024</p>
            <p className="text-emerald-700 mt-2">₹72,000 revenue with 2,100 orders</p>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-sky-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-900">
              <Users className="w-5 h-5" />
              User Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sky-900" style={{ fontSize: '2rem', fontWeight: 700 }}>94.5%</p>
            <p className="text-sky-700 mt-2">Active user retention rate</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-900">
              <DollarSign className="w-5 h-5" />
              Avg. Order Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-900" style={{ fontSize: '2rem', fontWeight: 700 }}>₹343</p>
            <p className="text-purple-700 mt-2">15% increase from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
