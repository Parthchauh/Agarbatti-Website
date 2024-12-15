import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import Button from './Button';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-gradient-to-b from-amber-50 to-amber-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current animate-scaleIn" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
        <h3 className="mt-2 text-xl font-semibold text-amber-900">{product.name}</h3>
        <p className="mt-2 text-amber-800">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-amber-700">${product.price}</span>
          <Button variant="primary" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}