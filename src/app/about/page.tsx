export default function About() {
  return (
    <div className="container mt-8 animate-fade-in" style={{ maxWidth: '800px' }}>
      <h1 className="text-center mb-8">About AgroConnect</h1>
      <div className="card" style={{ padding: '3rem' }}>
        <h2 style={{ color: 'var(--primary)' }}>Our Vision</h2>
        <p className="mb-4" style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: '1.75' }}>
          Smallholder farmers often struggle with market access and sub-optimal pricing due to multiple layers of intermediaries. AgroConnect is a decentralized, scalable agricultural e-commerce and matchmaking platform designed to solve this.
        </p>
        <p className="mb-8" style={{ color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: '1.75' }}>
          We allow farmers to showcase their produce, manage listings, and receive secure payments directly from buyers—be it consumers, retail stores, or wholesalers.
        </p>

        <h2 style={{ color: 'var(--secondary)' }}>Our Impact</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', color: 'var(--text-main)', fontSize: '1.125rem', lineHeight: '1.75' }}>
          <li><strong>Empowering Farmers:</strong> Giving producers control over their pricing and direct market access.</li>
          <li><strong>Fresher Produce:</strong> Reducing transit time by cutting out the middleman, ensuring fresher food reaches the consumer.</li>
          <li><strong>Sustainable Logistics:</strong> Optimizing supply chain routes for localized agricultural corridors.</li>
        </ul>
      </div>
    </div>
  );
}
