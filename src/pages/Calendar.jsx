// src/pages/Calendar.jsx
import React, { useState } from 'react';

// DUMMY DATA (dari kode codejam (3).pdf)
const transactions = [
    { id: 1, type: 'expense', amount: 15000, category: '🍔', description: 'Nasi Goreng', date: '2023-11-20' },
    { id: 2, type: 'income', amount: 500000, category: '💰', description: 'Gaji sampingan', date: '2023-11-20' },
    { id: 3, type: 'expense', amount: 120000, category: '🛍️', description: 'Baju baru', date: '2023-11-18' },
];

const getFormattedDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
};

function Calendar() {
    // State untuk tanggal yang dipilih. Default hari ini
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    // Filter transaksi berdasarkan tanggal yang dipilih
    const selectedDateTransactions = transactions.filter(t => t.date === selectedDate);
    const totalIncome = selectedDateTransactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = selectedDateTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Kalender Transaksi</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Kolom Kiri: Input Tanggal dan Ringkasan */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <label className="text-xl font-bold text-gray-800 mb-4 block">Pilih Tanggal</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:border-purple-500 outline-none text-lg"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Ringkasan {getFormattedDate(selectedDate)}</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-md">
                                <span className="font-medium text-gray-600">Pemasukan</span>
                                <span className="font-bold text-green-600">+ Rp {totalIncome.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between items-center text-md">
                                <span className="font-medium text-gray-600">Pengeluaran</span>
                                <span className="font-bold text-red-600">- Rp {totalExpense.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="pt-3 border-t flex justify-between items-center text-lg font-bold">
                                <span>Total Bersih</span>
                                <span className={totalIncome - totalExpense >= 0 ? 'text-green-700' : 'text-red-700'}>
                                    Rp {(totalIncome - totalExpense).toLocaleString('id-ID')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan: Daftar Transaksi */}
                <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-lg h-full min-h-[500px] flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Daftar Transaksi</h3>
                    <div className="flex-1 overflow-y-auto pt-2">
                        {selectedDateTransactions.length > 0 ? (
                            <div className="space-y-4">
                                {/* Daftar Transaksi */}
                                {selectedDateTransactions.map(t => (
                                    <div key={t.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                                                {t.category}
                                            </div>
                                            <p className="font-medium text-gray-800 text-sm">{t.description}</p>
                                        </div>
                                        <p className={`font-bold text-sm ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                                            {t.type === 'income' ? '+' : '-'} Rp {t.amount.toLocaleString('id-ID')}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <i className="fas fa-calendar-day text-5xl text-gray-300 mb-4"></i>
                                <p className="text-gray-500">Tidak ada transaksi pada tanggal ini.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;