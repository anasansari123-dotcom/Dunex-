import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DUNEX Real Estate - Luxury Properties in Dubai",
  description: "Discover premium real estate opportunities in Dubai with DUNEX. Expert guidance for luxury properties, investments, and property management services.",
  keywords: "Dubai real estate, luxury properties, property investment, Dubai apartments, Dubai villas, real estate Dubai",
  openGraph: {
    title: "DUNEX Real Estate - Luxury Properties in Dubai",
    description: "Discover premium real estate opportunities in Dubai with DUNEX. Expert guidance for luxury properties, investments, and property management services.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
