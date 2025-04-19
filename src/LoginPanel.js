import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      alert('Login Successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Try admin / admin123');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
        width: '340px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#1e293b'
          }}>
            MONOPOLY CARGO
          </div>
          <div style={{ fontSize: '14px', color: '#64748b' }}>Login Panel</div>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '15px',
              border: 'none'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}