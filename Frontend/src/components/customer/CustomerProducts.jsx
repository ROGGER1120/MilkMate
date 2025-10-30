import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

export default function CustomerProducts() {
  const products = [
    { id: 1, name: 'Full Cream Milk 1L', price: 50, provider: 'Amit Patel Dairy' },
    { id: 2, name: 'Fresh Curd 500g', price: 40, provider: 'Sneha Reddy Dairy' },
    { id: 3, name: 'Pure Ghee 500ml', price: 300, provider: 'Amit Patel Dairy' },
    { id: 4, name: 'Paneer 250g', price: 120, provider: 'Sneha Reddy Dairy' },
    { id: 5, name: 'Toned Milk 500ml', price: 30, provider: 'Amit Patel Dairy' },
    { id: 6, name: 'Buttermilk 500ml', price: 25, provider: 'Sneha Reddy Dairy' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">Provider: {product.provider}</p>
            <p className="text-lg font-bold mt-2">₹{product.price}</p>
            <Button className="w-full mt-3">Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}