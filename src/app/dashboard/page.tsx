"use client";

import { useState } from 'react';

export default function Dashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Organic Tomatoes', price: 40000, unit: '1 crate', stock: 100 }
    { id: 1, name: 'Organic Tomatoes', price: , unit: 'kg', stock: 100 }
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', unit: 'kg', stock: '' });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setProducts([
      ...products, 
      { 
        id: Date.now(), 
        name: newProduct.name, 
        price: parseFloat(newProduct.price), 
        unit: newProduct.unit, 
        stock: parseInt(newProduct.stock) 
      }
    ]);
    setNewProduct({ name: '', price: '', unit: 'kg', stock: '' });
  };

  return (
    <div className="container mt-8 animate-fade-in">
      <h1>Farmer Dashboard</h1>
      <p className="text-muted mb-8" style={{ color: 'var(--text-muted)' }}>Manage your farm profile and active listings.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Add Product Form */}
        <div className="card" style={{ padding: '2rem' }}>
          <h3>Add New Listing</h3>
          <form onSubmit={handleAddProduct} className="mt-4">
            <div className="input-group">
              <label className="input-label">Produce Name</label>
              <input type="text" required className="input-field" placeholder="e.g., Tomatoes" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">Price (#)</label>
                <input type="number" step="0.01" required className="input-field" placeholder="1.20" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
              </div>
              <div className="input-group">
                <label className="input-label">Unit</label>
                <select className="input-field" value={newProduct.unit} onChange={e => setNewProduct({...newProduct, unit: e.target.value})}>
                  <option value="kg">per kg</option>
                  <option value="lb">per lb</option>
                  <option value="dozen">per dozen</option>
                  <option value="unit">per bag</option>
                  <option value="dozen">per congo</option>
                  <option value="unit">per cup</option>
                  <option value="dozen">per dozen</option>
                  <option value="unit">per crate</option>
                  <option value="unit">per small basket</option>
                  <option value="unit">per large basket</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Available Stock</label>
              <input type="number" required className="input-field" placeholder="100" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} />
            </div>
            <button type="submit" className="btn btn-primary w-full mt-4">Publish Listing</button>
          </form>
        </div>

        {/* Active Listings */}
        <div className="md:grid-cols-2 lg:col-span-2">
          <h3>Your Active Listings</h3>
          <div className="mt-4 flex flex-col gap-4">
            {products.map(p => (
              <div key={p.id} className="card flex justify-between items-center" style={{ padding: '1.5rem' }}>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>{p.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Stock: {p.stock} {p.unit}</p>
                </div>
                <div style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '1.25rem' }}>
                  ${p.price.toFixed(2)}<span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/{p.unit}</span>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p style={{ color: 'var(--text-muted)' }}>You have no active listings.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
