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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white font-sans flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 tracking-tight text-center">
        Monopoly Carriers & Cargo Pvt. Ltd.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {modules.map((mod, index) => (
          <Link
            key={index}
            to={mod.route}
            className="bg-white hover:bg-blue-100 border border-gray-200 rounded-2xl shadow-md px-6 py-10 flex items-center justify-center text-2xl font-semibold text-gray-800 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl text-center min-h-[120px]"
          >
            {mod.name}
          </Link>
        ))}
      </div>
    </div>
  );
}