import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPanel() {
  const modules = [
    { name: 'CD Booking', route: '/cd-booking' },
    { name: 'Manifest', route: '/manifest' },
    { name: 'AWB', route: '/awb' },
    { name: 'Accounts', route: '/accounts' },
    { name: 'Reports / MIS', route: '/reports' },
    { name: 'Stock', route: '/stock' },
    { name: 'Admin Panel', route: '/admin' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <header style={{
        backgroundColor: '#0f172a',
        padding: '20px 40px',
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span>MONOPOLY CARGO</span>
        <span style={{ fontSize: '14px', fontWeight: '400', opacity: 0.8 }}>Dashboard</span>
      </header>

      <main style={{
        padding: '40px 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {modules.map((mod, index) => (
          <Link
            key={index}
            to={mod.route}
            style={{
              background: '#ffffff',
              padding: '28px 24px',
              borderRadius: '14px',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              color: '#1e293b',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.background = '#e0f2fe';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
            }}
          >
            {mod.name}
          </Link>
        ))}
      </main>
    </div>
  );
}