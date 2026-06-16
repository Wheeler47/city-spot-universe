'use client'
export default function HomePage() {
  return (
    <main style={{
      minHeight:'100vh',
      background:'#2C2C2C',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontFamily:'sans-serif'
    }}>
      <div style={{textAlign:'center',padding:20}}>
        <div style={{
          fontSize:60,marginBottom:20
        }}>🌟</div>
        <h1 style={{
          color:'#C4872A',
          fontSize:42,
          letterSpacing:6,
          margin:'0 0 8px'
        }}>
          CITY-SPOT
        </h1>
        <h2 style={{
          color:'#C4872A',
          fontSize:16,
          letterSpacing:8,
          fontWeight:300,
          margin:'0 0 10px'
        }}>
          UNIVERSE
        </h2>
        <p style={{color:'#666',marginBottom:40}}>
          Real Estate Platform
        </p>
        <div style={{
          display:'flex',gap:12,
          justifyContent:'center',
          flexWrap:'wrap',marginBottom:40
        }}>
          {['🏠 Οικιστικά','🏢 Επαγγελματικά',
            '🅿️ Parking','🌟 Golden Visa'
          ].map(c=>(
            <div key={c} style={{
              background:'rgba(196,135,42,0.15)',
              border:'1px solid #C4872A',
              borderRadius:10,
              padding:'10px 18px',
              color:'#C4872A',fontSize:13
            }}>{c}</div>
          ))}
        </div>
        <button style={{
          background:'linear-gradient(135deg,#D4A843,#C4872A)',
          border:'none',borderRadius:12,
          padding:'14px 36px',
          color:'white',fontSize:16,
          fontWeight:600,cursor:'pointer'
        }}>
          🚀 Είσοδος στην Πλατφόρμα
        </button>
      </div>
    </main>
  )
}