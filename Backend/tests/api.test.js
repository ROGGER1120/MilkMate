const assert = (cond, msg) => { if (!cond) throw new Error(msg) }
const base = `http://localhost:${process.env.PORT || 4000}`

async function request(path, { method = 'GET', token, body } = {}) {
  const res = await fetch(base + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  return { status: res.status, data }
}

async function run() {
  console.log('Health...')
  const h = await request('/health')
  assert(h.status === 200 && h.data.ok, 'Health failed')

  console.log('Registering users...')
  const emailSuffix = Math.floor(Math.random() * 1e6)
  const adminEmail = `admin${emailSuffix}@test.com`
  const sellerEmail = `seller${emailSuffix}@test.com`
  const partnerEmail = `partner${emailSuffix}@test.com`
  await request('/api/auth/register', { method: 'POST', body: { name: 'Admin', email: adminEmail, password: 'pass123', role: 'admin' } })
  await request('/api/auth/register', { method: 'POST', body: { name: 'Seller', email: sellerEmail, password: 'pass123', role: 'seller' } })
  await request('/api/auth/register', { method: 'POST', body: { name: 'Partner', email: partnerEmail, password: 'pass123', role: 'partner' } })

  console.log('Login...')
  const adminLogin = await request('/api/auth/login', { method: 'POST', body: { email: adminEmail, password: 'pass123' } })
  const sellerLogin = await request('/api/auth/login', { method: 'POST', body: { email: sellerEmail, password: 'pass123' } })
  const partnerLogin = await request('/api/auth/login', { method: 'POST', body: { email: partnerEmail, password: 'pass123' } })
  const adminToken = adminLogin.data.token
  const sellerToken = sellerLogin.data.token
  const partnerToken = partnerLogin.data.token
  assert(adminToken && sellerToken && partnerToken, 'Login failed')

  console.log('Admin stats/users...')
  const stats = await request('/api/admin/stats', { token: adminToken })
  assert(stats.status === 200 && typeof stats.data.sellers === 'number', 'Admin stats failed')
  const users = await request('/api/admin/users', { token: adminToken })
  assert(users.status === 200 && Array.isArray(users.data), 'Admin users failed')

  console.log('Seller products...')
  const p1 = await request('/api/seller/products', { method: 'POST', token: sellerToken, body: { name: 'Milk 1L', price: 60, unit: 'liter', stock: 100 } })
  assert(p1.status === 201 && p1.data._id, 'Create product failed')
  const plist = await request('/api/seller/products', { token: sellerToken })
  assert(plist.status === 200 && Array.isArray(plist.data) && plist.data.length >= 1, 'List products failed')

  console.log('Seller order...')
  const order = await request('/api/seller/orders', { method: 'POST', token: sellerToken, body: { items: [{ productId: p1.data._id, quantity: 2, price: 60 }], address: 'Test Street' } })
  assert(order.status === 201 && order.data._id, 'Create order failed')
  const upd = await request(`/api/seller/orders/${order.data._id}/status`, { method: 'PATCH', token: sellerToken, body: { status: 'confirmed' } })
  assert(upd.status === 200 && upd.data.status === 'confirmed', 'Update order status failed')

  console.log('Partner assignments (expect empty ok)...')
  const assigns = await request('/api/partner/assignments', { token: partnerToken })
  assert(assigns.status === 200 && Array.isArray(assigns.data), 'Partner assignments failed')

  console.log('ALL TESTS PASSED')
}

run().catch((e) => { console.error(e); process.exit(1) })


