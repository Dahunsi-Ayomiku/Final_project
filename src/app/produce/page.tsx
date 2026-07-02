"use client";

import Link from 'next/link';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Organic Tomatoes', farmer: 'Green Acres Farm', price: 2.50, unit: 'small basket', image: '🍅' },
  { id: 2, name: 'Organic Tomatoes', farmer: 'Green Acres Farm', price: 2.50, unit: 'crate ', image: '🍅' },
  { id: 3, name: 'Organic Tomatoes', farmer: 'Green Acres Farm', price: 2.50, unit: 'large basket', image: '🍅' },
  { id: 4, name: 'Organic Tomatoes', farmer: 'Green Acres Farm', price: 2.50, unit: 'dustbin basket', image: '🍅' },
  
  { id: 5, name: 'Organic Pepper', farmer: 'Valley Roots', price: 1.20, unit: 'small basket', image: '🌶️' },
  { id: 6, name: 'Organic Pepper', farmer: 'Valley Roots', price: 1.20, unit: 'dustbin basket', image: '🌶️' },
  { id: 7, name: 'Organic Pepper', farmer: 'Valley Roots', price: 1.20, unit: 'kg', image: '🌶️' },
  
  { id: 8, name: 'Sweet Corn', farmer: 'Sunlight Ag', price: 10000, unit: 'dozen', image: '🌽' },
  { id: 9, name: 'Sweet Corn', farmer: 'Sunlight Ag', price: 9000, unit: 'dozen', image: '🌽' },
  { id: 10, name: 'Sweet Corn', farmer: 'Sunlight Ag', price: 8000, unit: 'dozen', image: '🌽' },
  { id: 11, name: 'Potatoes', farmer: 'Earthly Goods', price: 15000, unit: 'kg', image: '🥔' },
  { id: 12, name: 'Potatoes', farmer: 'Earthly Goods', price: 12000, unit: 'kg', image: '🥔' },
  { id: 13, name: 'Potatoes', farmer: 'Earthly Goods', price: 10000, unit: 'kg', image: '🥔' },
  { id: 14, name: 'Yam', farmer: 'Earthly Goods', price: 7000, unit: 'kg', image: '🍠' }, // Updated to sweet potato/tuber emoji
  { id: 15, name: 'Yam', farmer: 'Earthly Goods', price: 6000, unit: 'kg', image: '🍠' },
  { id: 16, name: 'Yam', farmer: 'Earthly Goods', price: 5000, unit: 'kg', image: '🍠' },
  
  { id: 17, name: 'Beans', farmer: 'Earthly Goods', price: 1500, unit: '1 congo', image: '🫘' }, // Updated to beans emoji
  { id: 18, name: 'Rice', farmer: 'Earthly Goods', price: 2000, unit: '1 congo', image: '🍚' },  // Updated to rice bowl emoji
  { id: 19, name: 'Rice', farmer: 'Earthly Goods', price: 2500, unit: '1 congo', image: '🍚' },  // Fixed duplicate ID to 19
  { id: 20, name: 'Rice', farmer: 'Earthly Goods', price: 2200, unit: '1 congo', image: '🍚' }   // Fixed duplicate ID to 20
];

export default function Marketplace() {
  return (
    <div className="container mt-8 animate-fade-in">
      <h1 className="text-center">Agricultural Products</h1>
      <p className="text-center text-muted mb-8" style={{ color: 'var(--text-muted)' }}>Browse fresh produce directly from verified farmers.</p>
      
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
