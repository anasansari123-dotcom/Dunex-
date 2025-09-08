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
              <button className="inline-flex items-center gap-3 mt-3 px-6 py-3 rounded-full bg-[#D4AF37] text-[#071538] font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition">
                Invesment Now
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
