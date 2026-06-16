 
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email,     setEmail]     = useState('admin@city-spot.gr')
  const [password,  setPassword]  = useState('Admin@123!')
  const [showPass,  setShowPass]  = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error,     setError]     = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1000))
    if (email === 'admin@city-spot.gr' && password === 'Admin@123!') {
      router.push('/dashboard')
    } else {
      setError('Λάθος email ή κωδικός')
      setIsLoading(false)
    }
  }

  return (
    <div style={{
      minHeight:'100vh',background:'#2C2C2C',
      display:'flex',alignItems:'center',
      justifyContent:'center',padding:20,
      fontFamily:'Inter,sans-serif'
    }}>
      <div style={{
        width:'100%',maxWidth:420,
        background:'#3D3D3D',
        border:'1px solid rgba(196,135,42,0.3)',
        borderRadius:24,overflow:'hidden',
        boxShadow:'0 8px 32px rgba(196,135,42,0.2)'
      }}>
        <div style={{
          height:4,
          background:'linear-gradient(135deg,#D4A843,#C4872A,#8B5E1A)'
        }}/>
        <div style={{padding:40}}>

          {/* Logo */}
          <div style={{textAlign:'center',marginBottom:32}}>
            <div style={{
              width:64,height:64,borderRadius:18,
              background:'linear-gradient(135deg,#D4A843,#C4872A)',
              display:'flex',alignItems:'center',
              justifyContent:'center',fontSize:32,
              margin:'0 auto 16px'
            }}>⬡</div>
            <h1 style={{
              color:'#C4872A',fontSize:24,fontWeight:800,
              letterSpacing:3,marginBottom:4,
              fontFamily:'Georgia,serif'
            }}>CITY-SPOT</h1>
            <p style={{
              color:'#C4872A',fontSize:11,
              letterSpacing:5,marginBottom:8
            }}>UNIVERSE</p>
            <p style={{color:'#6B7280',fontSize:13}}>
              Συνδεθείτε στον λογαριασμό σας
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              padding:'12px 16px',borderRadius:10,
              background:'rgba(239,68,68,0.1)',
              border:'1px solid rgba(239,68,68,0.3)',
              color:'#FCA5A5',fontSize:13,
              textAlign:'center',marginBottom:16
            }}>⚠️ {error}</div>
          )}

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div style={{marginBottom:16}}>
              <label style={{
                display:'block',color:'#D1D5DB',
                fontSize:13,fontWeight:500,marginBottom:6
              }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                style={{
                  width:'100%',padding:'13px 16px',
                  background:'rgba(255,255,255,0.05)',
                  border:'1px solid rgba(255,255,255,0.1)',
                  borderRadius:12,color:'white',
                  fontSize:14,outline:'none',
                  boxSizing:'border-box'
                }}
              />
            </div>

            {/* Password */}
            <div style={{marginBottom:24}}>
              <label style={{
                display:'block',color:'#D1D5DB',
                fontSize:13,fontWeight:500,marginBottom:6
              }}>Κωδικός</label>
              <div style={{position:'relative'}}>
                <input
                  type={showPass?'text':'password'}
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  style={{
                    width:'100%',padding:'13px 42px 13px 16px',
                    background:'rgba(255,255,255,0.05)',
                    border:'1px solid rgba(255,255,255,0.1)',
                    borderRadius:12,color:'white',
                    fontSize:14,outline:'none',
                    boxSizing:'border-box'
                  }}
                />
                <button type="button"
                  onClick={()=>setShowPass(!showPass)}
                  style={{
                    position:'absolute',right:14,
                    top:'50%',transform:'translateY(-50%)',
                    background:'none',border:'none',
                    cursor:'pointer',fontSize:16
                  }}
                >{showPass?'🙈':'👁️'}</button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" disabled={isLoading}
              style={{
                width:'100%',padding:'14px',
                borderRadius:12,border:'none',
                background:'linear-gradient(135deg,#D4A843,#C4872A)',
                color:'white',fontSize:15,fontWeight:700,
                cursor:'pointer'
              }}
            >{isLoading?'⏳ Σύνδεση...':'🔑 Σύνδεση'}</button>
          </form>

          {/* Demo */}
          <div style={{
            marginTop:24,padding:16,borderRadius:12,
            background:'rgba(196,135,42,0.08)',
            border:'1px solid rgba(196,135,42,0.2)'
          }}>
            <p style={{
              color:'#C4872A',fontSize:12,
              fontWeight:600,marginBottom:8
            }}>🔑 Demo Credentials:</p>
            <p style={{color:'#9CA3AF',fontSize:12,marginBottom:4}}>
              📧 admin@city-spot.gr
            </p>
            <p style={{color:'#9CA3AF',fontSize:12}}>
              🔒 Admin@123!
            </p>
          </div>

          <div style={{textAlign:'center',marginTop:20}}>
            <Link href="/" style={{
              color:'#6B7280',fontSize:13,
              textDecoration:'none'
            }}>← Επιστροφή στην αρχική</Link>
          </div>
        </div>
      </div>
    </div>
  )
}