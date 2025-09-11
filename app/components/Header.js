"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => setIsOpen(false);
  return (
    <header className="bg-[var(--secondary)] backdrop-blur border-b border-gray-200 w-full top-0 z-50 text-[var(--primary)] animate-fade-in sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo2.png"
              alt="DUNEX"
              className="rounded-sm w-40 h-35 pt-2 pb-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link href="/auth/login" className="hover:text-[#D4AF37] transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                  Terms 
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-[var(--secondary)] font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all hover:scale-105"
                >
                  Invest Now
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-300/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className={`w-6 h-6 transition-transform ${isOpen ? "rotate-90" : "rotate-0"}`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-gray-200/60`}>
        <div className="px-4 py-3 space-y-3 bg-[var(--secondary)]/95">
          <Link href="/auth/login" onClick={handleCloseMenu} className="block px-3 py-2 rounded-md hover:bg-white/10">Login</Link>
          <Link href="/contact" onClick={handleCloseMenu} className="block px-3 py-2 rounded-md hover:bg-white/10">Contact</Link>
          <Link href="/blog" onClick={handleCloseMenu} className="block px-3 py-2 rounded-md hover:bg-white/10">Blog</Link>
          <Link href="/terms" onClick={handleCloseMenu} className="block px-3 py-2 rounded-md hover:bg-white/10">Terms</Link>
          <Link href="/dashboard" onClick={handleCloseMenu} className="block text-center px-4 py-3 rounded-full bg-[var(--primary)] text-[var(--secondary)] font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all">Invest Now</Link>
        </div>
      </div>
    </header>
  );
}
