import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mt-8 animate-fade-in">
      <section className="text-center mt-8 mb-8">
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-dark)' }}>
          Direct From Farm to Table
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          AgroConnect empowers farmers and connects them directly with consumers, eliminating unnecessary intermediaries, maximizing revenue, and delivering fresh produce to you.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register" className="btn btn-primary">Start Selling as a Farmer</Link>
          <Link href="/marketplace" className="btn btn-outline">Explore Marketplace</Link>
        </div>
      </section>

      <section className="mt-8 mb-8" style={{ marginTop: '5rem' }}>
        <h2 className="text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👩‍🌾</div>
            <h3>For Farmers</h3>
            <p style={{ color: 'var(--text-muted)' }}>Create a profile, list your fresh produce, set prices, and sell directly to consumers.</p>
          </div>
          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
            <h3>For Consumers</h3>
            <p style={{ color: 'var(--text-muted)' }}>Browse local produce, verify farmer authenticity, and purchase fresh goods directly.</p>
          </div>
          <div className="card" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
            <h3>Secure Logistics</h3>
            <p style={{ color: 'var(--text-muted)' }}>Integrated secure payments and reliable local delivery connections for a seamless experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
