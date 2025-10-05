// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout Component
import Sidebar from './components/layout/Sidebar'; 

// Import Page Components
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Wishlist from './pages/Wishlist';
import SplitBill from './pages/SplitBill';

// Layout Wrapper (Digunakan untuk semua halaman yang memiliki sidebar)
const MainLayout = ({ children }) => (
    <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden ml-64"> {/* ml-64 sesuai lebar sidebar */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                {children}
            </main>
        </div>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
                <Route path="/calendar" element={<MainLayout><Calendar /></MainLayout>} />
                <Route path="/wishlist" element={<MainLayout><Wishlist /></MainLayout>} />
                <Route path="/split-bill" element={<MainLayout><SplitBill /></MainLayout>} />
                {/* Tambahkan rute lain di sini */}
            </Routes>
        </Router>
    );
}

export default App;