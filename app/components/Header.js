import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[var(--secondary)] backdrop-blur border-b border-gray-200 h-25  top-0 z-50 text-[var(--primary)] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo2.png" alt="DUNEX" className="rounded-sm w-40 h-35 pt-2 mt-4" />
            {/* <span className="ml-1 font-semibold tracking-wide">DUNEX</span> */}
          </Link>
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <button className="inline-flex items-center gap-3 mt-9 px-6 py-3 rounded-full bg-[var(--primary)] text-[var(--secondary)] font-semibold shadow-2xl hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-base hover-lift">
                   <a href="\auth\login"> Invest Now</a>
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
