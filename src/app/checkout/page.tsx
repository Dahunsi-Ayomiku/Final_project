"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function CheckoutContent() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const itemId = searchParams.get('item');

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mock Payment Flow
    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);
      
      setTimeout(() => {
        router.push('/marketplace');
      }, 3000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="container mt-8 animate-fade-in text-center">
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{ color: 'var(--success)' }}>Payment Successful!</h2>
          <p style={{ color: 'var(--text-muted)' }}>Your order has been placed. The farmer has been notified and will arrange delivery shortly.</p>
          <p className="mt-4 text-muted" style={{ fontSize: '0.875rem' }}>Redirecting to marketplace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-8 animate-fade-in flex justify-center">
      <div className="card" style={{ maxWidth: '600px', width: '100%', padding: '2rem' }}>
        <h2 className="mb-4">Secure Checkout</h2>
        
        <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
          <div className="flex justify-between items-center mb-2">
            <span>Item Subtotal</span>
            <span>#2.50</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Platform Fee (0%)</span>
            <span>#0.00</span>
          </div>
          <div className="flex justify-between items-center mt-4" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', fontWeight: '700' }}>
            <span>Total to Pay</span>
            <span style={{ color: 'var(--primary-dark)', fontSize: '1.25rem' }}>#2.50</span>
          </div>
        </div>

        <form onSubmit={handlePayment}>
          <div className="input-group">
            <label className="input-label">Cardholder Name</label>
            <input type="text" required className="input-field" placeholder="John Doe" />
          </div>
          <div className="input-group">
            <label className="input-label">Card Number (Mocked)</label>
            <input type="text" required className="input-field" placeholder="4242 4242 4242 4242" defaultValue="4242 4242 4242 4242" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="input-group">
              <label className="input-label">Expiry</label>
              <input type="text" required className="input-field" placeholder="12/26" />
            </div>
            <div className="input-group">
              <label className="input-label">CVC</label>
              <input type="text" required className="input-field" placeholder="123" />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary w-full mt-4" disabled={isProcessing}>
            {isProcessing ? 'Processing Payment...' : 'Pay Securely'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<div className="container mt-8 text-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
