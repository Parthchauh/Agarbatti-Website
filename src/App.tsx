import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-amber-50 dark:bg-amber-900 transition-colors">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}