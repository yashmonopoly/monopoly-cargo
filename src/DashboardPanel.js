import React, { useState } from 'react';
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

  const [hovered, setHovered] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        marginBottom: '40px',
        color: '#0f172a'
      }}>Welcome to Monopoly Cargo Dashboard</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '30px',
        width: '100%',
        maxWidth: '960px'
      }}>
        {modules.map((mod, index) => (
          <Link
            key={index}
            to={mod.route}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '120px',
              background: hovered === index ? '#d0f0fd' : '#ffffff',
              borderRadius: '16px',
              textDecoration: 'none',
              color: '#0f172a',
              fontSize: '18px',
              fontWeight: '600',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease-in-out',
              transform: hovered === index ? 'translateY(-6px) scale(1.03)' : 'translateY(0)',
              textAlign: 'center'
            }}
          >
            {mod.name}
          </Link>
        ))}
      </div>
    </div>
  );
}