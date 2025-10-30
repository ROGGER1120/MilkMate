import { Users, Package, ShoppingCart, DollarSign, TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const revenueData = [
  { month: 'Jan', revenue: 45000, orders: 1250 },
  { month: 'Feb', revenue: 52000, orders: 1480 },
  { month: 'Mar', revenue: 48000, orders: 1320 },
  { month: 'Apr', revenue: 61000, orders: 1650 },
  { month: 'May', revenue: 55000, orders: 1520 },
  { month: 'Jun', revenue: 67000, orders: 1890 },
  { month: 'Jul', revenue: 72000, orders: 2100 },
];

const categoryData = [
  { name: 'Milk', value: 45, color: '#10B981' },
  { name: 'Curd', value: 25, color: '#F59E0B' },
  { name: 'Ghee', value: 20, color: '#0EA5E9' },
  { name: 'Paneer', value: 10, color: '#8B5CF6' },
];

const topProducts = [
  { name: 'Full Cream Milk 1L', sales: 3450, revenue: 172500, trend: 12 },
  { name: 'Toned Milk 500ml', sales: 2890, revenue: 115600, trend: 8 },
  { name: 'Fresh Curd 500g', sales: 2340, revenue: 93600, trend: -3 },
  { name: 'Pure Ghee 500ml', sales: 1890, revenue: 189000, trend: 15 },
  { name: 'Paneer 250g', sales: 1560, revenue: 93600, trend: 5 },
];

const systemHealth = [
  { metric: 'API Uptime', value: 99.8, status: 'excellent' },
  { metric: 'Database Performance', value: 95.2, status: 'good' },
  { metric: 'Delivery Success Rate', value: 94.5, status: 'good' },
  { metric: 'Customer Satisfaction', value: 88.3, status: 'average' },
];

export default function AdminHome() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-foreground mb-2" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage your MilkMate platform</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Total Users</span>
              <Users className="w-4 h-4 text-emerald-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>24,583</p>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                <TrendingUp className="w-3 h-3 mr-1" />
                12.5%
              </Badge>
            </div>
            <Progress value={75} className="mt-3 h-2 bg-emerald-100" />
            <p className="text-muted-foreground mt-2" style={{ fontSize: '0.75rem' }}>15,234 Customers • 6,849 Providers</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Total Products</span>
              <Package className="w-4 h-4 text-amber-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>1,234</p>
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                <TrendingUp className="w-3 h-3 mr-1" />
                8.2%
              </Badge>
            </div>
            <Progress value={62} className="mt-3 h-2 bg-amber-100" />
            <p className="text-muted-foreground mt-2" style={{ fontSize: '0.75rem' }}>892 Active • 342 Low Stock</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-sky-50 to-white border-sky-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Monthly Orders</span>
              <ShoppingCart className="w-4 h-4 text-sky-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>2,100</p>
              <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">
                <TrendingUp className="w-3 h-3 mr-1" />
                16.3%
              </Badge>
            </div>
            <Progress value={84} className="mt-3 h-2 bg-sky-100" />
            <p className="text-muted-foreground mt-2" style={{ fontSize: '0.75rem' }}>1,987 Delivered • 113 Pending</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Monthly Revenue</span>
              <DollarSign className="w-4 h-4 text-purple-600" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <p className="text-foreground" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>₹72,000</p>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
                <TrendingUp className="w-3 h-3 mr-1" />
                20.1%
              </Badge>
            </div>
            <Progress value={90} className="mt-3 h-2 bg-purple-100" />
            <p className="text-muted-foreground mt-2" style={{ fontSize: '0.75rem' }}>Target: ₹80,000</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6">
        {/* Revenue & Orders Chart */}
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Revenue & Orders Overview</CardTitle>
            <CardDescription>Monthly performance trends</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="revenue" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="revenue">Revenue</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
              <TabsContent value="revenue">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </TabsContent>
              <TabsContent value="orders">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#0EA5E9" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>Product distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Best sellers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground truncate" style={{ fontSize: '0.875rem', fontWeight: 500 }}>{product.name}</p>
                    <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>{product.sales} sales • ₹{product.revenue.toLocaleString()}</p>
                  </div>
                  <Badge className={product.trend >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}>
                    {product.trend >= 0 ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                    {Math.abs(product.trend)}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health Metrics</CardTitle>
            <CardDescription>Platform performance indicators</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemHealth.map((item) => (
                <div key={item.metric} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className={`w-4 h-4 ${
                        item.status === 'excellent' ? 'text-emerald-600' :
                        item.status === 'good' ? 'text-sky-600' : 'text-amber-600'
                      }`} />
                      <span className="text-foreground" style={{ fontSize: '0.875rem' }}>{item.metric}</span>
                    </div>
                    <span className="text-foreground" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{item.value}%</span>
                  </div>
                  <Progress 
                    value={item.value} 
                    className={`h-2 ${
                      item.status === 'excellent' ? 'bg-emerald-100' :
                      item.status === 'good' ? 'bg-sky-100' : 'bg-amber-100'
                    }`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-sky-50 rounded-lg border border-sky-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sky-900" style={{ fontSize: '0.875rem', fontWeight: 600 }}>System Status: Healthy</p>
                  <p className="text-sky-700 mt-1" style={{ fontSize: '0.75rem' }}>All services are running normally. Last checked: 2 minutes ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
