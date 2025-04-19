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
      backgroundImage: 'url(https://img.freepik.com/free-vector/airport-terminal-cargo-trucks-background-airplane-loading-cartoon_107791-18238.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        borderRadius: '16px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
        padding: '30px',
        textAlign: 'center'
      }}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
          alt="Air Cargo Icon" 
          style={{ height: '60px', marginBottom: '16px' }}
        />
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>MONOPOLY CARGO</h2>
        <p style={{ fontSize: '13px', color: '#475569', marginBottom: '24px' }}>Your Air Cargo Partner in Motion</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '14px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1'
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1'
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#0ea5e9',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '15px'
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}