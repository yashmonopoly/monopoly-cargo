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
      background: 'linear-gradient(to right, #f4f7fa, #ffffff)',
      fontFamily: 'Segoe UI, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/010/438/769/original/cargo-plane-flying-over-trucks-logistics-and-shipping-industry-illustration-vector.jpg"
        alt="Cargo Background"
        style={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          height: '300px',
          opacity: 0.08,
          zIndex: 1
        }}
      />
      <form onSubmit={handleLogin} style={{
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 12px 24px rgba(0,0,0,0.06)',
        width: '320px',
        zIndex: 2
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src="/logo.png" alt="Monopoly Logo" style={{ height: '50px', marginBottom: '10px' }} />
          <h2 style={{ fontSize: '20px', color: '#1e293b' }}>Login to Monopoly Cargo</h2>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ccc' }}
          required
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '8px', fontWeight: 'bold' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}