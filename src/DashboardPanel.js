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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '28px',
        fontWeight: '600',
        marginBottom: '40px',
        color: '#1e293b'
      }}>
        Monopoly Cargo Dashboard
      </h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '960px'
      }}>
        {modules.map((mod, index) => (
          <Link
            key={index}
            to={mod.route}
            style={{
              background: 'white',
              padding: '24px',
              borderRadius: '16px',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              color: '#0f172a',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.03)',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.03)';
            }}
          >
            {mod.name}
          </Link>
        ))}
      </div>
    </div>
  );
}