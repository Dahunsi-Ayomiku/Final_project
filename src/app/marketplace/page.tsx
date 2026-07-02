"use client";

import Link from 'next/link';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Organic Tomatoes', farmer: 'Green Acres Farm', price: 2.50, unit: 'kg', image: '🍅' },
  { id: 2, name: 'Fresh Carrots', farmer: 'Valley Roots', price: 1.20, unit: 'kg', image: '🥕' },
  { id: 3, name: 'Sweet Corn', farmer: 'Sunlight Ag', price: 3.00, unit: 'dozen', image: '🌽' },
  { id: 4, name: 'Russet Potatoes', farmer: 'Earthly Goods', price: 0.80, unit: 'kg', image: '🥔' },
];

export default function Marketplace() {
  return (
    <div className="container mt-8 animate-fade-in">
      <h1 className="text-center">Agricultural Marketplace</h1>
      <p className="text-center text-muted mb-8" style={{ color: 'var(--text-muted)' }}>Find the right placess to get your fresh Farm produce for better prices .</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>{product.image}</div>
            <h3 style={{ marginBottom: '0.25rem' }}>{product.name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>by {product.farmer}</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '1.25rem' }}>
                ${product.price.toFixed(2)}<span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/{product.unit}</span>
              </span>
              <Link href={`/checkout?item=${product.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
