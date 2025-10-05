// src/components/modals/AddSavingModal.jsx
import React, { useState } from 'react';

function AddSavingModal({ item, onClose }) {
    const [amount, setAmount] = useState('');
    
    // DUMMY DATA (dari (5).pdf)
    const selectedWishlistItem = {
        id: 2,
        name: 'Laptop Baru',
        targetAmount: 15000000,
        currentAmount: 4500000
    };

    // Gunakan prop 'item' jika ada, jika tidak, gunakan dummy data
    const itemToDisplay = item || selectedWishlistItem;

    const handleSubmit = () => {
        // Logika untuk menambahkan tabungan
        console.log(`Menambahkan Rp ${amount} ke ${itemToDisplay.name}`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-3xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">Tambah Tabungan</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <i className="fas fa-times text-2xl"></i>
                    </button>
                </div>
                
                <p className="text-center font-semibold text-purple-600 mb-6">{itemToDisplay.name}</p>

                <div className="mb-4">
                    <label className="text-sm text-gray-600 mb-2 block">Jumlah</label>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 outline-none"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="flex space-x-2 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddSavingModal;