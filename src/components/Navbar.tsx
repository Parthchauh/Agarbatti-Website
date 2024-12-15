import React from 'react';
import { Menu, X, ShoppingCart, Flame } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';
import SearchBox from './ui/SearchBox';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-amber-50 dark:bg-amber-900 fixed w-full z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Flame className="h-8 w-8 text-amber-700 dark:text-amber-300" />
                <span className="text-xl font-serif font-bold text-amber-900 dark:text-amber-50">Agarbatti</span>
              </div>
            </div>
            <div className="hidden md:block w-64">
              <SearchBox />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-4">
              <a href="#" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#products" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#about" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            <ThemeToggle />
            <button className="flex items-center gap-2 bg-amber-700 dark:bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-800 dark:hover:bg-amber-700 transition">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart (0)</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-900 dark:text-amber-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <SearchBox />
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50 dark:bg-amber-900">
            <a href="#" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#products" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#about" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="text-amber-900 dark:text-amber-50 hover:text-amber-700 dark:hover:text-amber-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <button className="flex items-center gap-2 bg-amber-700 dark:bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-800 dark:hover:bg-amber-700 transition w-full">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart (0)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}