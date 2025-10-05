// src/pages/Dashboard.jsx
import React, { useState, useEffect, useRef } from 'react';
// Import komponen yang diperlukan
import ExpenseChart from '../components/charts/ExpenseChart';
import CategoryChart from '../components/charts/CategoryChart';
import TransactionModal from '../components/modals/TransactionModal'; 

// DUMMY DATA (dari kode codejam.pdf)
const balance = 12500000;
const income = 7500000;
const expense = 3500000;
const savings = 1500000;

const transactions = [
    { id: 1, type: 'expense', amount: 15000, category: '🍔', description: 'Nasi Goreng', date: '2023-11-20' },
    { id: 2, type: 'income', amount: 500000, category: '💰', description: 'Gaji sampingan', date: '2023-11-19' },
    { id: 3, type: 'expense', amount: 120000, category: '🛍️', description: 'Baju baru', date: '2023-11-19' },
    { id: 4, type: 'expense', amount: 50000, category: '🚗', description: 'Bensin', date: '2023-11-18' },
];

// Helper Function (dari kode codejam.pdf)
const getFormattedDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
};

function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Hai, Mahasiswa!</h2>
                <button 
                    className="text-gray-500 hover:text-purple-600"
                    onClick={() => console.log('Notifikasi dibuka')} // Aksi notifikasi
                >
                    <i className="fas fa-bell text-xl"></i>
                </button>
            </div>

            {/* Area Ringkasan */}
            <div className="grid grid-cols-4 gap-6 mb-8">
                <SummaryCard title="Saldo Total" amount={balance} icon="fas fa-wallet" color="purple" />
                <SummaryCard title="Pemasukan Bulan Ini" amount={income} icon="fas fa-arrow-down" color="green" />
                <SummaryCard title="Pengeluaran Bulan Ini" amount={expense} icon="fas fa-arrow-up" color="red" />
                <SummaryCard title="Tabungan" amount={savings} icon="fas fa-piggy-bank" color="blue" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kolom Kiri: Chart Pengeluaran Bulanan dan Kategori */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Pengeluaran Bulanan</h3>
                        <ExpenseChart /> {/* Komponen Chart */}
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Pengeluaran Berdasarkan Kategori</h3>
                        <div className="h-64 flex justify-center items-center">
                            <CategoryChart /> {/* Komponen Chart */}
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Transaksi Terbaru */}
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-3xl shadow-lg h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold text-gray-800">Transaksi Terbaru</h3>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="text-sm font-semibold text-purple-600 hover:text-purple-800"
                            >
                                <i className="fas fa-plus-circle mr-1"></i>Tambah
                            </button>
                        </div>
                        <div className="space-y-3 flex-1 overflow-y-auto pr-2">
                            {transactions.map(t => (
                                <div key={t.id} className="flex items-center justify-between p-2">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                                            {t.category}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{t.description}</p>
                                            <p className="text-xs text-gray-500">{getFormattedDate(t.date)}</p>
                                        </div>
                                    </div>
                                    <p className={`font-bold text-md ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                        {t.type === 'income' ? '+ ' : '- '}
                                        Rp {t.amount.toLocaleString('id-ID')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Modal */}
            {isModalOpen && <TransactionModal onClose={() => setIsModalOpen(false)} />}

        </div>
    );
}

// Komponen Pembantu
const SummaryCard = ({ title, amount, icon, color }) => {
    const bgColor = `bg-${color}-100`;
    const textColor = `text-${color}-600`;
    const iconColor = `text-${color}-500`;

    return (
        <div className="bg-white p-6 rounded-3xl shadow-lg transition-transform hover:scale-[1.02] duration-300">
            <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center mb-3`}>
                <i className={`${icon} ${iconColor} text-xl`}></i>
            </div>
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <h4 className={`text-2xl font-bold ${textColor}`}>
                Rp {amount.toLocaleString('id-ID')}
            </h4>
        </div>
    );
};

export default Dashboard;