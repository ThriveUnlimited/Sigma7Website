import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">Sigma7 Group</div>
            <p className="text-slate-300 mb-6 max-w-md">
              Leading provider of innovative business solutions and technology services, helping organizations achieve digital transformation and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-slate-300 hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-300 hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-slate-300 hover:text-white transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-slate-300 hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Technology Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Business Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Sigma7 Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
