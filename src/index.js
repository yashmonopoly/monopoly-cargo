import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import CdBookingPanel from './CdBookingPanel';
import ManifestPanel from './ManifestPanel';
import AwbPanel from './AwbPanel';
import AccountsPanel from './AccountsPanel';
import ReportsMISPanel from './ReportsMISPanel';
import StockPanel from './StockPanel';
import AdminPanel from './AdminPanel';
import DashboardPanel from './DashboardPanel';
import LoginPanel from './LoginPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPanel />} />
      <Route path="/dashboard" element={<DashboardPanel />} />
      <Route path="/cd-booking" element={<CdBookingPanel />} />
      <Route path="/manifest" element={<ManifestPanel />} />
      <Route path="/awb" element={<AwbPanel />} />
      <Route path="/accounts" element={<AccountsPanel />} />
      <Route path="/reports" element={<ReportsMISPanel />} />
      <Route path="/stock" element={<StockPanel />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </BrowserRouter>
);