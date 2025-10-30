# MilkMate Backend API

Express + Mongoose API with role-based modules for Admin, Seller, Partner.

## Run

1. Set env (optional; defaults shown):
```
PORT=4000
MONGO_URI=mongodb://localhost:27017/Milkmate
JWT_SECRET=change_me
```
2. Install and start:
```
npm install
npm run dev
```

## Models
- User: { name, email, passwordHash, role: admin|seller|partner, phone, isActive }
- Product: { sellerId, name, description, price, unit, stock, isActive }
- Order: { sellerId, partnerId, items[{productId,qty,price}], status, address, totalAmount, paymentStatus }
- Assignment: { orderId, partnerId, status, etaMinutes, route[{lat,lng}] }
- WalletTransaction: { userId, type: credit|debit, amount, description, balanceAfter }

## Auth
- POST /api/auth/register { name,email,password,role,phone }
- POST /api/auth/login { email,password } -> { token, role, name }

Use Authorization: Bearer <token>

## Admin
- GET /api/admin/stats -> { sellers, partners, orders }
- GET /api/admin/users
- PATCH /api/admin/users/:id/toggle

## Seller
- GET /api/seller/products
- POST /api/seller/products
- PATCH /api/seller/products/:id
- DELETE /api/seller/products/:id
- GET /api/seller/orders
- POST /api/seller/orders
- PATCH /api/seller/orders/:id/status

## Partner
- GET /api/partner/assignments
- POST /api/partner/assignments/:id/status
- POST /api/partner/assignments/:id/route

## Notes
- Expand with payments, refunds, and analytics as needed.
