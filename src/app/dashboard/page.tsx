export default function DashboardPage() {
  return (
    <div style={{minHeight:'100vh',background:'#F9FAFB',fontFamily:'sans-serif'}}>

      <div style={{background:'#2C2C2C',padding:'0 24px',height:60,display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'2px solid #C4872A'}}>
        <span style={{color:'#C4872A',fontWeight:800,fontSize:16}}>🌟 CITY-SPOT UNIVERSE</span>
        <a href="/" style={{color:'#9CA3AF',fontSize:13,textDecoration:'none'}}>← Αρχική</a>
      </div>

      <div style={{padding:32,maxWidth:1200,margin:'0 auto'}}>

        <h1 style={{fontSize:28,fontWeight:800,color:'#1F2937',marginBottom:24}}>
          Dashboard
        </h1>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,marginBottom:32}}>
          {[
            {label:'Οικιστικά',value:'234',icon:'🏠'},
            {label:'Επαγγελματικά',value:'89',icon:'🏢'},
            {label:'Matches',value:'156',icon:'🔄'},
            {label:'Golden Visa',value:'45',icon:'🌟'},
          ].map((s,i)=>(
            <div key={i} style={{background:'white',borderRadius:16,padding:20,border:'1px solid #E5E7EB',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
              <div style={{fontSize:28,marginBottom:8}}>{s.icon}</div>
              <div style={{fontSize:28,fontWeight:800,color:'#1F2937'}}>{s.value}</div>
              <div style={{color:'#6B7280',fontSize:13,marginTop:4}}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:20}}>

          <div style={{background:'white',borderRadius:20,padding:24,border:'1px solid #E5E7EB'}}>
            <h2 style={{fontSize:18,fontWeight:700,color:'#1F2937',marginBottom:16}}>🔄 Πρόσφατα Matches</h2>
            {[
              {p:'Διαμέρισμα Γλυφάδα 85τμ',score:95},
              {p:'Γραφεία Μαρούσι 120τμ',score:88},
              {p:'Βίλα Μύκονος 300τμ',score:92},
              {p:'Logistics Ασπρόπυργος',score:75},
              {p:'Μεζονέτα Κηφισιά',score:83},
            ].map((m,i)=>(
              <div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 16px',background:'#F9FAFB',borderRadius:12,marginBottom:8}}>
                <span style={{fontSize:13,color:'#374151'}}>🏠 {m.p}</span>
                <span style={{padding:'4px 12px',borderRadius:50,fontSize:12,fontWeight:700,background:m.score>=90?'#D1FAE5':'#FEF3C7',color:m.score>=90?'#065F46':'#92400E'}}>{m.score}%</span>
              </div>
            ))}
          </div>

          <div style={{background:'white',borderRadius:20,padding:24,border:'1px solid #E5E7EB'}}>
            <h2 style={{fontSize:18,fontWeight:700,color:'#1F2937',marginBottom:16}}>⚡ Ενέργειες</h2>
            {['🏠 Νέο Οικιστικό','🏢 Νέο Επαγγελματικό','🅿️ Νέο Parking','🔍 Νέα Ζήτηση','📄 Νέο Έγγραφο','👤 Νέα Επαφή','🔄 Matching','📤 Export'].map((a,i)=>(
              <div key={i} style={{padding:'10px 14px',borderRadius:10,border:'1px solid #E5E7EB',marginBottom:8,cursor:'pointer',fontSize:13,color:'#374151',display:'flex',justifyContent:'space-between'}}>
                {a}<span>→</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}