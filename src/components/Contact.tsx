import React from 'react';
import { Send } from 'lucide-react';
import Button from './ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideUp">
            <h2 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700 dark:from-amber-300 dark:to-amber-500">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-amber-800 dark:text-amber-200">
              Have questions about our products or want to place a bulk order? 
              We'd love to hear from you.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="bg-amber-50 dark:bg-amber-800 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">Visit Our Store</h3>
                <p className="text-amber-800 dark:text-amber-200">368, HARRIS GANJ, CANTT,<br />KANPUR – 208 004</p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-800 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">Contact Information</h3>
                <p className="text-amber-800 dark:text-amber-200">Phone: +91 51223 22333<br />Email: contact@tirangaagarbatti.com</p>
              </div>
            </div>
          </div>

          <form className="bg-amber-50 dark:bg-amber-800 p-8 rounded-xl shadow-lg animate-slideUp border-2 border-amber-200 dark:border-amber-700">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 dark:text-amber-100">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-2 border-amber-300 dark:border-amber-600 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-700 focus:ring-opacity-50 bg-white dark:bg-amber-900 dark:text-amber-100"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 dark:text-amber-100">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-2 border-amber-300 dark:border-amber-600 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-700 focus:ring-opacity-50 bg-white dark:bg-amber-900 dark:text-amber-100"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 dark:text-amber-100">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-2 border-amber-300 dark:border-amber-600 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 dark:focus:ring-amber-700 focus:ring-opacity-50 bg-white dark:bg-amber-900 dark:text-amber-100"
                ></textarea>
              </div>
              
              <Button variant="primary" className="w-full flex items-center justify-center gap-2">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}