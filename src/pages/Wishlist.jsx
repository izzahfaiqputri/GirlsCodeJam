// src/pages/Wishlist.jsx
import React, { useState } from 'react';
import CircularProgress from '../components/CircularProgress';
import AddSavingModal from '../components/modals/AddSavingModal';

// DUMMY DATA (dari kode codejam (4).pdf)
const wishlistItems = [
    {
        id: 1,
        name: 'Sepatu Lari Baru',
        targetAmount: 2500000,
        currentAmount: 1800000,
        image: 'https://images.unsplash.com/photo-1542291026-72fea252330b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Laptop Baru',
        targetAmount: 15000000,
        currentAmount: 4500000,
        image: 'https://images.unsplash.com/photo-1541807084-5c52b458b9c1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

function Wishlist() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Wishlist Tabungan</h2>
                <button 
                    className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-purple-700 transition-colors"
                    onClick={() => alert('Fitur Tambah Wishlist Baru belum diimplementasi')}
                >
                    <i className="fas fa-plus mr-2"></i> Tambah Item
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item) => {
                    const progress = (item.currentAmount / item.targetAmount) * 100;
                    return (
                        <div key={item.id} className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                            
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="font-bold text-xl text-gray-800">{item.name}</p>
                                        <p className="text-sm text-gray-500">Target: Rp {item.targetAmount.toLocaleString('id-ID')}</p>
                                    </div>
                                    
                                    {/* Progress Circle */}
                                    <CircularProgress progress={progress} />
                                </div>
                                
                                <p className="text-md font-semibold text-purple-600 mb-4">
                                    Terkumpul: Rp {item.currentAmount.toLocaleString('id-ID')}
                                </p>

                                <button 
                                    onClick={() => openModal(item)}
                                    className="mt-2 w-full bg-purple-100 text-purple-700 font-semibold py-3 rounded-xl hover:bg-purple-200 transition-colors text-md"
                                >
                                    <i className="fas fa-plus-circle mr-2"></i> Tambah Tabungan
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Modal */}
            {isModalOpen && <AddSavingModal item={selectedItem} onClose={closeModal} />}
        </div>
    );
}

export default Wishlist;