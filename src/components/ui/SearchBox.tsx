import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../../data/products';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof products>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search incense sticks..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-amber-200 focus:border-amber-400 focus:ring focus:ring-amber-200 focus:ring-opacity-50 bg-white dark:bg-amber-900 dark:border-amber-700 dark:text-amber-50"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white dark:bg-amber-900 rounded-lg shadow-lg border border-amber-200 dark:border-amber-700 z-50">
          {results.map((product) => (
            <div
              key={product.id}
              className="p-4 hover:bg-amber-50 dark:hover:bg-amber-800 cursor-pointer border-b last:border-b-0 border-amber-100 dark:border-amber-700"
            >
              <h4 className="font-medium text-amber-900 dark:text-amber-50">{product.name}</h4>
              <p className="text-sm text-amber-700 dark:text-amber-200">{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}