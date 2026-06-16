'use client'
import Link from 'next/link'

export default function DashboardPage() {
  const stats = [
    {label:'Οικιστικά',    value:'234',icon:'🏠',change:'+12%'},
    {label:'Επαγγελματικά',value:'89', icon:'🏢',change:'+8%'},
    {label:'Matches',      value:'156',icon:'🔄',change:'+23%'},
    {label:'Golden Visa',  value:'45', icon:'🌟',change:'+15%'},
    {label:'Parking',      value:'67', icon:'🅿️',change:'+5%'},
    {label:'Έγγραφα',      value:'312',icon:'📄',change:'+18%'},
    {label:'Επαφές',       value:'189',icon:'👥',change:'+9%'},
    {label:'Συναλλαγές',   value:'34', icon:'💰',change:'+21%'},
  ]

  const matches = [
    {p:'Διαμέρισμα Γλυφάδα 85τμ', r:'Ζήτηση #1234',score:95,src:'🏠'},
    {p:'Γραφεία Μαρούσι 120τμ',   r:'Ζήτηση #1235',score:88,src:'🌐'},
    {p:'Βίλα Μύκονος 300τμ',      r:'Ζήτηση #1236',score:92,src:'🏠'},
    {p:'Logistics Ασπρόπυργος',   r:'Ζήτηση #1237',score:75,src:'💛'},
    {p:'Μεζονέτα Κηφισιά 180τμ',  r:'Ζήτηση #1238',score:83,src:'🏠'},
  ]

  const actions = [
    '🏠 Νέο Οικιστικό',
    '🏢 Νέο Επαγγελματικό',
    '🅿️ Νέο Parking',
    '🔍 Νέα Ζήτηση',
    '📄 Νέο Έγγραφο',
    '👤 Νέα Επαφή',
    '🔄 Matching',
    '📤 Export',
  ]

  return (
    <div style={{
      minHeight:'100vh',background:'#F9FAFB',
      fontFamily:'Inter,sans-serif'
    }}>

      {/* Navbar */}
      <div style={{
        background:'#2C2C2C',
        borderBottom:'2px solid rgba(196,135,42,0.3)',
        padding:'0 24px',height:60,
        display:'flex',alignItems:'center',
        justifyContent:'space-between',
        position:'sticky',top:0,zIndex:50
      }}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{
            width:32,height:32,borderRadius:8,
            background:'linear-gradient(135deg,#D4A843,#C4872A)',
            display:'flex',alignItems:'center',
            justifyContent:'center',
            fontSize:16,color:'white',fontWeight:'bold'
          }}>⬡</div>
          <span style={{
            color:'#C4872A',fontWeight:800,
            letterSpacing:2,fontSize:13
          }}>CITY-SPOT UNIVERSE</span>
          <span style={{
            color:'#6B7280',fontSize:12,marginLeft:8
          }}>| Dashboard</span>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <Link href="/" style={{
            color:'#6B7280',fontSize:12,textDecoration:'none'
          }}>← Αρχική</Link>
          <div style={{
            width:32,height:32,borderRadius:'50%',
            background:'linear-gradient(135deg,#D4A843,#C4872A)',
            display:'flex',alignItems:'center',
            justifyContent:'center',
            color:'white',fontSize:12,fontWeight:700
          }}>AD</div>
        </div>
      </div>

      <div style={{padding:24,maxWidth:1400,margin:'0 auto'}}>

        {/* Header */}
        <div style={{marginBottom:24}}>
          <h1 style={{
            fontSize:28,fontWeight:800,color:'#1F2937',
            marginBottom:4,fontFamily:'Georgia,serif'
          }}>🌟 Dashboard</h1>
          <p style={{color:'#6B7280',fontSize:14}}>
            Καλωσήρθατε στο CITY-SPOT UNIVERSE
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',
          gap:14,marginBottom:24
        }}>
          {stats.map((s,i)=>(
            <div key={i} style={{
              background:'white',borderRadius:16,padding:16,
              border:'1px solid rgba(196,135,42,0.1)',
              boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
              cursor:'pointer',transition:'all 0.2s'
            }}
            onMouseEnter={e=>{
              (e.currentTarget as HTMLElement).style.boxShadow='0 8px 24px rgba(196,135,42,0.15)'
              ;(e.currentTarget as HTMLElement).style.borderColor='#C4872A'
            }}
            onMouseLeave={e=>{
              (e.currentTarget as HTMLElement).style.boxShadow='0 2px 8px rgba(0,0,0,0.04)'
              ;(e.currentTarget as HTMLElement).style.borderColor='rgba(196,135,42,0.1)'
            }}
            >
              <div style={{
                display:'flex',justifyContent:'space-between',
                marginBottom:10
              }}>
                <div style={{
                  width:34,height:34,borderRadius:10,
                  background:'#FDF6EC',
                  display:'flex',alignItems:'center',
                  justifyContent:'center',fontSize:16
                }}>{s.icon}</div>
                <span style={{
                  color:'#10B981',fontSize:11,fontWeight:600
                }}>↑{s.change}</span>
              </div>
              <div style={{
                fontSize:26,fontWeight:800,color:'#1F2937',
                fontFamily:'Georgia,serif'
              }}>{s.value}</div>
              <div style={{
                color:'#6B7280',fontSize:11,marginTop:2
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'1fr 300px',
          gap:20,marginBottom:20
        }}>

          {/* Matches */}
          <div style={{
            background:'white',borderRadius:20,padding:20,
            border:'1px solid rgba(196,135,42,0.1)',
            boxShadow:'0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              display:'flex',justifyContent:'space-between',
              marginBottom:16
            }}>
              <h2 style={{
                fontSize:17,fontWeight:700,color:'#1F2937',
                fontFamily:'Georgia,serif'
              }}>🔄 Πρόσφατα Matches</h2>
              <span style={{color:'#C4872A',fontSize:13,cursor:'pointer'}}>
                Όλα →
              </span>
            </div>
            {matches.map((m,i)=>(
              <div key={i} style={{
                display:'flex',alignItems:'center',
                justifyContent:'space-between',
                padding:'11px 14px',borderRadius:12,
                background:'#F9FAFB',marginBottom:8,
                cursor:'pointer',transition:'background 0.2s'
              }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.background='rgba(196,135,42,0.05)'}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.background='#F9FAFB'}
              >
                <div style={{flex:1,minWidth:0}}>
                  <div style={{
                    fontSize:13,fontWeight:600,color:'#1F2937',
                    whiteSpace:'nowrap',overflow:'hidden',
                    textOverflow:'ellipsis'
                  }}>🏠 {m.p}</div>
                  <div style={{fontSize:11,color:'#9CA3AF',marginTop:2}}>
                    {m.r}
                  </div>
                </div>
                <div style={{
                  display:'flex',alignItems:'center',
                  gap:8,marginLeft:12
                }}>
                  <span>{m.src}</span>
                  <span style={{
                    padding:'3px 10px',borderRadius:50,
                    fontSize:11,fontWeight:700,
                    background:m.score>=90?'#D1FAE5':m.score>=75?'#FEF3C7':'#FFEDD5',
                    color:m.score>=90?'#065F46':m.score>=75?'#92400E':'#9A3412'
                  }}>{m.score}%</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{
            background:'white',borderRadius:20,padding:20,
            border:'1px solid rgba(196,135,42,0.1)',
            boxShadow:'0 2px 8px rgba(0,0,0,0.04)'
          }}>
            <h2 style={{
              fontSize:17,fontWeight:700,color:'#1F2937',
              marginBottom:16,fontFamily:'Georgia,serif'
            }}>⚡ Γρήγορες Ενέργειες</h2>
            {actions.map((a,i)=>(
              <div key={i} style={{
                padding:'10px 14px',borderRadius:10,
                border:'1px solid rgba(196,135,42,0.15)',
                marginBottom:8,cursor:'pointer',
                fontSize:13,color:'#374151',
                display:'flex',justifyContent:'space-between',
                transition:'all 0.2s'
              }}
              onMouseEnter={e=>{
                (e.currentTarget as HTMLElement).style.borderColor='#C4872A'
                ;(e.currentTarget as HTMLElement).style.background='rgba(196,135,42,0.05)'
                ;(e.currentTarget as HTMLElement).style.color='#C4872A'
              }}
              onMouseLeave={e=