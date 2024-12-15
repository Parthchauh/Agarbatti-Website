import React from 'react';
import { Award, Users, History, Leaf } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-3 bg-amber-100 rounded-full">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-amber-900">{title}</h3>
      <p className="mt-2 text-amber-700">{description}</p>
    </div>
  );
}

export default function About() {
  const features = [
    {
      icon: <History className="h-6 w-6 text-amber-700" />,
      title: "50+ Years Legacy",
      description: "Crafting premium incense sticks since 1970 with traditional methods."
    },
    {
      icon: <Leaf className="h-6 w-6 text-amber-700" />,
      title: "Natural Ingredients",
      description: "Using only the finest natural ingredients and essential oils."
    },
    {
      icon: <Award className="h-6 w-6 text-amber-700" />,
      title: "Quality Assured",
      description: "Every batch is tested to meet our high-quality standards."
    },
    {
      icon: <Users className="h-6 w-6 text-amber-700" />,
      title: "Community First",
      description: "Supporting local artisans and sustainable practices."
    }
  ];

  return (
    <section id="about" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-slideUp">
          <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700">
            Our Heritage
          </h2>
          <p className="mt-4 text-lg text-amber-800 max-w-2xl mx-auto">
            For over five decades, we've been crafting the finest incense sticks, 
            bringing the authentic aromas of India to homes worldwide.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Feature {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}