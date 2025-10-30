export const usageSummary = {
  activeUsers: 1240,
  activeVendors: 87,
  ordersToday: 312,
  revenueToday: 58230.75,
}

export const mockUsers = [
  { id: 'U-1001', name: 'Aarav Sharma', email: 'aarav@example.com', role: 'customer', status: 'active' },
  { id: 'U-1002', name: 'Diya Patel', email: 'diya@example.com', role: 'customer', status: 'active' },
  { id: 'U-1003', name: 'Kabir Singh', email: 'kabir@example.com', role: 'partner', status: 'suspended' },
  { id: 'U-1004', name: 'Mira Rao', email: 'mira@example.com', role: 'admin', status: 'active' },
]

export const mockVendors = [
  { id: 'V-2001', name: 'Fresh Dairy Co.', email: 'hello@freshdairy.in', status: 'active' },
  { id: 'V-2002', name: 'Pure Farm', email: 'support@purefarm.in', status: 'pending' },
  { id: 'V-2003', name: 'Village Creamery', email: 'sales@villagecreamery.in', status: 'inactive' },
]

export const mockOrders = [
  { id: 'O-3001', userName: 'Aarav Sharma', vendorName: 'Fresh Dairy Co.', total: 299.0, status: 'delivered' },
  { id: 'O-3002', userName: 'Diya Patel', vendorName: 'Pure Farm', total: 149.5, status: 'processing' },
  { id: 'O-3003', userName: 'Kabir Singh', vendorName: 'Village Creamery', total: 420.0, status: 'cancelled' },
]

// Extended mocks for full Admin sections
export const kpis = {
  totalUsers: 24583,
  totalProducts: 1234,
  monthlyOrders: 2107,
  monthlyRevenue: 72000,
}

export const products = Array.from({ length: 24 }).map((_, i) => ({
  id: `P-${1000 + i}`,
  name: `Milk Product ${i + 1}`,
  category: ['Milk', 'Curd', 'Paneer', 'Ghee'][i % 4],
  provider: ['Fresh Dairy Co.', 'Pure Farm', 'Village Creamery'][i % 3],
  price: 50 + (i % 7) * 10,
  stock: 10 + (i % 30),
  sales: 100 + (i * 7) % 500,
  status: (i % 5 === 0 ? 'out' : i % 5 === 1 ? 'low' : 'active'),
}))

export const transactions = Array.from({ length: 30 }).map((_, i) => ({
  id: `T-${4000 + i}`,
  date: new Date(Date.now() - i * 86400000).toISOString(),
  type: ['income', 'expense'][i % 2],
  party: ['Platform', 'Provider', 'Partner'][i % 3],
  amount: (i % 2 === 0 ? 1 : -1) * (500 + (i * 37) % 900),
  method: ['UPI', 'Card', 'Wallet'][i % 3],
  status: ['success', 'pending', 'failed'][i % 3],
}))

export const tickets = Array.from({ length: 18 }).map((_, i) => ({
  id: `S-${5000 + i}`,
  subject: `Issue ${i + 1}`,
  description: 'Sample support ticket description',
  user: mockUsers[i % mockUsers.length],
  category: ['Order', 'Payment', 'Account'][i % 3],
  priority: ['low', 'medium', 'high', 'urgent'][i % 4],
  status: ['open', 'in_progress', 'resolved'][i % 3],
  updatedAt: new Date(Date.now() - i * 3600000).toISOString(),
  messages: [
    { from: 'user', text: 'Hello, I need help.' },
    { from: 'agent', text: 'We are looking into it.' },
  ],
}))

export const approvals = Array.from({ length: 12 }).map((_, i) => ({
  id: `A-${6000 + i}`,
  applicant: mockUsers[i % mockUsers.length],
  type: i % 2 === 0 ? 'provider' : 'partner',
  documents: 3 + (i % 3),
  status: ['pending', 'approved', 'rejected'][i % 3],
  appliedAt: new Date(Date.now() - i * 7200000).toISOString(),
}))

export const activities = Array.from({ length: 50 }).map((_, i) => ({
  id: `L-${7000 + i}`,
  time: new Date(Date.now() - i * 1800000).toISOString(),
  user: mockUsers[i % mockUsers.length],
  type: ['user', 'product', 'order', 'payment', 'system', 'security'][i % 6],
  status: ['success', 'warning', 'error'][i % 3],
  action: 'Performed an action',
  details: 'Additional context...',
  ip: `192.168.0.${i % 255}`,
}))


