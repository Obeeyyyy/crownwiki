import React from 'react'

export default function CrownHeader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#292929', color: 'white', gap: '20px', fontSize: '1.2rem' }}>
        <a href="/docs/guides/license" style={{ color: 'black', textDecoration: 'none', padding: '10px', backgroundColor: '#ff9169', borderRadius: '5px'}}>Open Wiki</a>
        <a href="https://discord.gg/crowndev" style={{ color: 'black', textDecoration: 'none', padding: '10px', backgroundColor: '#7289da', borderRadius: '5px'}}>Join Discord</a>
    </div>
  )
}
