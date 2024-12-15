import React from 'react';
import ProductCard from './ui/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slideUp">
          <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700">
            Our Premium Collection
          </h2>
          <p className="mt-4 text-lg text-amber-800">
            Handcrafted with love and tradition
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}