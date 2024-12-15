import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideUp">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700 leading-tight">
              Experience the Divine
              <span className="block">Fragrance of India</span>
            </h1>
            <p className="mt-6 text-lg text-amber-800 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              Discover our premium collection of hand-crafted incense sticks, made with traditional recipes passed down through generations.
            </p>
            <div className="mt-8 flex gap-4 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
              <Button variant="primary" className="flex items-center gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] animate-float">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 transition-transform hover:rotate-0">
              <img
                src="https://media.istockphoto.com/id/1483871093/photo/incense-sticks-in-burner.jpg?s=612x612&w=0&k=20&c=-RT2FH-UsK2h8Nu79P5q9NBCA__HHCclAtz6ipg8lAY="
                alt="Indian Incense"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}