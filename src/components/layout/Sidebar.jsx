// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { name: 'Dashboard', icon: 'fas fa-home', path: '/' },
    { name: 'Kalender', icon: 'fas fa-calendar-alt', path: '/calendar' },
    { name: 'Wishlist', icon: 'fas fa-gift', path: '/wishlist' },
    { name: 'Split Bill', icon: 'fas fa-users', path: '/split-bill' },
    { name: 'Pengaturan', icon: 'fas fa-cog', path: '/settings' },
];

function Sidebar() {
    const location = useLocation();

    return (
        <div className="w-64 bg-white shadow-xl h-screen flex flex-col fixed top-0 left-0 z-40">
            <div className="p-6">
                <h1 className="text-3xl font-bold text-purple-600">BudgetBuddy</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center space-x-3 p-4 rounded-xl font-medium transition-colors duration-200 group
                            ${location.pathname === item.path
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                            }`}
                    >
                        <i className={`${item.icon} text-xl w-5`}></i>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-6 border-t">
                <button className="flex items-center space-x-3 text-red-500 hover:text-red-700 transition-colors duration-200">
                    <i className="fas fa-sign-out-alt text-xl"></i>
                    <span>Keluar</span>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;