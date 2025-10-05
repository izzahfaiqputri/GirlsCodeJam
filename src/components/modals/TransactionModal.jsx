// src/components/modals/TransactionModal.jsx
import React, { useState } from 'react';

// DUMMY DATA - HARUSNYA DIAMBIL DARI CONTEXT/REDUX
const expenseCategories = [
    { name: 'Makanan', icon: '🍔' },
    { name: 'Transportasi', icon: '🚗' },
    { name: 'Tagihan', icon: '🧾' },
    { name: 'Belanja', icon: '🛍️' },
    { name: 'Hiburan', icon: '🎬' },
    { name: 'Edukasi', icon: '📚' },
    { name: 'Kesehatan', icon: '💊' },
    { name: 'Lainnya', icon: '🤷' },
];

const incomeCategories = [
    { name: 'Gaji', icon: '💰' },
    { name: 'Bonus', icon: '🎁' },
    { name: 'Investasi', icon: '📈' },
    { name: 'Lainnya', icon: '🤝' },
];

const categories = {
    expense: expenseCategories,
    income: incomeCategories,
};

function TransactionModal({ onClose }) {
    const [type, setType] = useState('expense'); // 'expense' atau 'income'
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    
    // DUMMY TRANSACTIONS (dari (1).pdf)
    const transactions = [
        { id: 1, type: 'expense', amount: 15000, category: '🍔', description: 'Nasi Goreng', date: '2023-11-20' },
        { id: 2, type: 'income', amount: 500000, category: '💰', description: 'Gaji sampingan', date: '2023-11-19' },
    ];
    
    // Asumsi: Fungsi ini harusnya ada di helper atau context
    const getFormattedDate = (isoDate) => {
        const d = new Date(isoDate);
        return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
    };

    const handleSubmit = () => {
        // Logika untuk menyimpan transaksi
        console.log({ type, amount, description, category, date });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">Tambah Transaksi</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>

                {/* Tab Pilihan Tipe Transaksi */}
                <div className="flex mb-6 bg-gray-100 rounded-xl p-1">
                    <button
                        onClick={() => setType('expense')}
                        className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
                            type === 'expense' ? 'bg-white text-purple-600 shadow-md' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Pengeluaran
                    </button>
                    <button
                        onClick={() => setType('income')}
                        className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
                            type === 'income' ? 'bg-white text-green-600 shadow-md' : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        Pemasukan
                    </button>
                </div>

                {/* Form Transaksi */}
                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-2 block">Jumlah</label>
                    <div className="relative">
                        <span className="absolute left-3 top-3 text-gray-500">Rp</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-2 block">Deskripsi</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none"
                    />
                </div>

                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-2 block">Kategori</label>
                    <div className="grid grid-cols-4 gap-2">
                        {categories[type].map(cat => (
                            <button
                                key={cat.name}
                                onClick={() => setCategory(cat.icon)}
                                className={`p-3 rounded-xl border-2 transition-colors ${
                                    category === cat.icon ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                <div className="text-2xl mb-1">{cat.icon}</div>
                                <p className="text-xs text-gray-600">{cat.name}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-sm text-gray-600 mb-2 block">Tanggal</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                    Simpan Transaksi
                </button>
                
                {/* Riwayat Terbaru (dari (1).pdf) */}
                <div className="mt-6 pt-4 border-t">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">Riwayat Terbaru</h4>
                    <div className="space-y-2">
                        {transactions.map(t => (
                            <div key={t.id} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xl">
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
    );
}

export default TransactionModal;