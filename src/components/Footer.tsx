
import React from 'react';
import { Globe, Mail, MapPin, Phone, Search, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Newsletter */}
        <div className="max-w-3xl mx-auto bg-primary/10 rounded-2xl p-8 mb-16 backdrop-blur-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Join Our Travel Community</h3>
            <p className="text-white/80 mb-6">
              Get monthly updates on new offbeat destinations, travel tips, and exclusive guides
            </p>
            
            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white text-primary shadow hover:bg-white/90 h-10 px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-medium">Offbeat Travel</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover India's hidden gems and create unforgettable memories off the beaten path.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="text-gray-400 hover:text-primary transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#exploration" className="text-gray-400 hover:text-primary transition-colors">Travel Philosophy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Travel Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Photography Tips</a>
              </li>
            </ul>
          </div>
          
          {/* Popular States */}
          <div>
            <h4 className="font-bold text-lg mb-4">Popular States</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Uttarakhand</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Himachal Pradesh</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Arunachal Pradesh</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Nagaland</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-400">123 Adventure Lane, Explorer's Hub, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:hello@offbeattravel.com" className="text-gray-400 hover:text-primary transition-colors">
                  hello@offbeattravel.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-primary transition-colors">
                  +91 9876 543 210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Offbeat Travel. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
