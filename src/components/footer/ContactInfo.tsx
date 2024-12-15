import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-amber-50">Contact Us</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3 text-amber-200">
          <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
          <p>368, HARRIS GANJ, CANTT,<br />KANPUR – 208 004</p>
        </div>
        <div className="flex items-center gap-3 text-amber-200">
          <Phone className="h-5 w-5 flex-shrink-0" />
          <p>+91 51223 22333</p>
        </div>
        <div className="flex items-center gap-3 text-amber-200">
          <Mail className="h-5 w-5 flex-shrink-0" />
          <p>contact@tirangaagarbatti.com</p>
        </div>
      </div>
    </div>
  );
}