import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export default function ProviderProducts() {
  const products = [
    { id: 1, name: 'Full Cream Milk 1L', price: 50, stock: 120, sales: 45 },
    { id: 2, name: 'Fresh Curd 500g', price: 40, stock: 80, sales: 32 },
    { id: 3, name: 'Pure Ghee 500ml', price: 300, stock: 50, sales: 18 },
    { id: 4, name: 'Paneer 250g', price: 120, stock: 65, sales: 28 },
    { id: 5, name: 'Toned Milk 500ml', price: 30, stock: 150, sales: 60 },
    { id: 6, name: 'Buttermilk 500ml', price: 25, stock: 100, sales: 40 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">Price: ₹{product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock} units</p>
            <p className="text-sm text-gray-500">Sales: {product.sales} units</p>
            <div className="flex gap-2 mt-3">
              <Button variant="outline" className="flex-1">Edit</Button>
              <Button className="flex-1">Manage</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}