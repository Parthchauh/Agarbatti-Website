import React from 'react';
import { Flame } from 'lucide-react';
import FooterLinks from './footer/FooterLinks';
import ContactInfo from './footer/ContactInfo';
import { productLinks, helpLinks } from '../data/footerData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-800 to-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="h-8 w-8" />
              <span className="text-xl font-serif font-bold">Tiranga Agarbatti</span>
            </div>
            <p className="text-amber-200 pr-4">
              Experience the divine fragrance of traditional Indian incense, crafted with care and devotion since 1970.
            </p>
          </div>

          {/* Contact Information */}
          <ContactInfo />

          {/* Product Links */}
          <FooterLinks section={productLinks} />

          {/* Help Links */}
          <FooterLinks section={helpLinks} />
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-amber-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-amber-200 text-sm">
            <p>&copy; {new Date().getFullYear()} Tiranga Agarbatti. All rights reserved.</p>
            <p className="md:text-right">
              Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}