import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Agribridge Marketplace',
  description: 'Connecting farmers directly with agricultural consumers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* --- NAVIGATION BAR --- */}
        <nav className="navbar">
          <div className="container navbar-container">
            <Link href="/" className="navbar-brand">
              <span role="img" aria-label="leaf">🌿</span> Agribridge
            </Link>
            <div className="navbar-nav">
              <Link href="/home" className="nav-link">Home</Link>
              <Link href="/produce" className="nav-link">Produce</Link>
              <Link href="/about" className="nav-link">About Us</Link>
              <Link href="/login" className="nav-link">Login</Link>
              <Link href="/marketplace" className="nav-link">Marketplace</Link>
              <Link href="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          </div>
        </nav>

        {/* --- MAIN PAGE CONTENT --- */}
        <main>
          {children}
        </main>

        {/* --- GLOBAL FOOTER --- */}
        <footer>
          <h2>Agribridge: Fresh from the Roots</h2>
          <p>Connecting Farmers & Buyers Globally</p>
          <p>@agribrige.com | Fresh from the Roots</p>
          
          <div className="footer-links">
            <Link href="/home" className="nav-link">Home</Link>
             <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/produce" className="nav-link">Produce</Link>
            <Link href="/marketplace" className="nav-link">Marketplace</Link>
            <Link href="/login" className="nav-link">Login</Link>
            <Link href="/register" className="nav-link">Sign Up</Link>
          </div>
          
          <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>
            &copy; 2026 Agribridge. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
