'use client'
export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#2C2C2C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 80, height: 80,
          background: 'linear-gradient(135deg, #D4A843, #C4872A)',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          margin: '0 auto 20px'
        }}>
          🌟
        </div>
        <h1 style={{
          color: '#C4872A',
          fontSize: 36,
          letterSpacing: 4,
          marginBottom: 8
        }}>
          CITY-SPOT
        </h1>
        <h2 style={{
          color: '#C4872A',
          fontSize: 18,
          letterSpacing: 6,
          marginBottom: 20,
          fontWeight: 300
        }}>
          UNIVERSE
        </h2>
        <p style={{
          color: '#999',
          fontSize: 14,
          marginBottom: 40
        }}>
          Real Estate Platform
        </p>
        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {['🏠 Οικιστικά','🏢 Επαγγελματικά',
            '🅿️ Parking','🌟 Golden Visa'].map(cat => (
            <div key={cat} style={{
              background: 'rgba(196,135,42,0.1)',
              border: '1px solid rgba(196,135,42,0.3)',
              borderRadius: 12,
              padding: '12px 20px',
              color: '#C4872A',
              fontSize: 14
            }}>
              {cat}
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 40,
          padding: '16px 40px',
          background: 'linear-gradient(135deg, #D4A843, #C4872A)',
          borderRadius: 12,
          color: 'white',
          fontSize: 16,
          fontWeight: 600,
          display: 'inline-block',
          cursor: 'pointer'
        }}>
          🚀 Είσοδος στην Πλατφόρμα
        </div>
      </div>
    </main>
  )
}