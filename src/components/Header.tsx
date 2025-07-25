'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 shadow-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="ml-2 text-xl font-semibold text-white hidden sm:block">
              RunClub Finder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/search" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
              Search
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link href="/story" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
              Story
            </Link>
            <Link href="/sponsor" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
              Sponsor
            </Link>
            <Link href="/login" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
              Login
            </Link>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-emerald-400 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-2">
              <Link href="/search" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
                Search
              </Link>
              <Link href="/blog" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
                Blog
              </Link>
              <Link href="/story" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
                Story
              </Link>
              <Link href="/sponsor" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
                Sponsor
              </Link>
              <Link href="/login" className="text-slate-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}