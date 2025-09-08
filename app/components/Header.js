import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#081A4C] backdrop-blur border-b border-gray-200 h-20 sticky top-0 z-50 text-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="DUNEX" className="rounded-sm w-30 h-22 pt-1" />
            {/* <span className="ml-1 font-semibold tracking-wide">DUNEX</span> */}
          </Link>
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li><Link href="/" className="hover:text-teal-600">Home</Link></li>
              <li><Link href="/map" className="hover:text-teal-600">Map</Link></li>
              <li><Link href="/blog" className="hover:text-teal-600">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-teal-600">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-teal-600">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-600">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600">Terms</Link></li>
              <li><Link href="/auth/login" className="hover:text-teal-600">Login</Link></li>
              <li><Link href="/auth/signup" className="hover:text-teal-600">Sign Up</Link></li>
              <li><Link href="/payment" className="hover:text-teal-600">Payment</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
