"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Register() {
  const router = useRouter();
  const [role, setRole] = useState('CUSTOMER');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register by saving to localStorage
    localStorage.setItem('user_role', role);
    localStorage.setItem('user_auth', 'true');
    router.push(role === 'FARMER' ? '/dashboard' : '/marketplace');
  };

  return (
    <div className="container mt-8 animate-fade-in flex justify-center">
      <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '2rem' }}>
        <h2 className="text-center">Create an Account</h2>
        <p className="text-center text-muted mb-8" style={{ color: 'var(--text-muted)' }}>Join AgroConnect today.</p>
        
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input type="text" required className="input-field" placeholder="Adeboye John" />
          </div>
          <div className="input-group">
            <label className="input-label">Phone Number</label>
            <input type="number" required className="input-field" placeholder="09876543210" />
          </div>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input type="email" required className="input-field" placeholder="you@example.com" />
          </div>
           <div className="input-group">
            <label className="input-label">Shop Location</label>
            <input type="text" required className="input-field" placeholder="Plot N, Akara Estate" />
          </div>
           <div className="input-group">
            <label className="input-label">Local Goverment area</label>
            <input type="text" required className="input-field" placeholder="IKOYI" />
          </div> <div className="input-group">
            <label className="input-label">State</label>
            <input type="text" required className="input-field" placeholder="Ondo S" />
          </div>
           <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" required className="input-field" placeholder="••••••••" />
          </div>
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input type="password" required className="input-field" placeholder="••••••••" />
          </div>
          <div className="input-group">
            <label className="input-label">I am a...</label>
            <select 
              className="input-field" 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="CUSTOMER">Customer (Buy Produce)</option>
              <option value="FARMER">Farmer (Sell Produce)</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary w-full mt-4">
            Create Account
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p style={{ color: 'var(--text-muted)' }}>
            Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
