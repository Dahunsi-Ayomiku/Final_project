"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login by checking localStorage or defaulting to Customer
    const role = localStorage.getItem('user_role') || 'CUSTOMER';
    localStorage.setItem('user_auth', 'true');
    router.push(role === 'FARMER' ? '/dashboard' : '/marketplace');
  };

  return (
    <div className="container mt-8 animate-fade-in flex justify-center">
      <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '2rem' }}>
        <h2 className="text-center">Welcome Back</h2>
        <p className="text-center text-muted mb-8" style={{ color: 'var(--text-muted)' }}>Login to AgroConnect.</p>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" required className="input-field" placeholder="you@example.com" />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" required className="input-field" placeholder="••••••••" />
          </div>
          
          <button type="submit" className="btn btn-primary w-full mt-4">
            Login
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p style={{ color: 'var(--text-muted)' }}>
            Don't have an account? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: '600' }}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
