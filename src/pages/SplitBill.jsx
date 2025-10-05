// src/pages/SplitBill.jsx
import React, { useState } from 'react';

function SplitBill() {
    const [totalBill, setTotalBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [numPeople, setNumPeople] = useState(2);
    const [tax, setTax] = useState(11); // Default pajak 11%

    // Hitungan
    const taxAmount = (totalBill * tax) / 100;
    const totalAmount = parseFloat(totalBill) + parseFloat(taxAmount) + parseFloat(tip);
    const amountPerPerson = numPeople > 0 ? (totalAmount / numPeople) : 0;
    
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Hitung Bagi Tagihan (Split Bill)</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Kolom Kiri: Input */}
                <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Detail Tagihan</h3>
                    
                    <div className="space-y-6">
                        {/* Total Tagihan */}
                        <div>
                            <label className="text-sm font-semibold text-gray-600 mb-2 block">Total Tagihan (Rp)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                                <input
                                    type="number"
                                    value={totalBill}
                                    onChange={(e) => setTotalBill(parseFloat(e.target.value) || 0)}
                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-lg"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Tip */}
                        <div>
                            <label className="text-sm font-semibold text-gray-600 mb-2 block">Tip (Rp)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">Rp</span>
                                <input
                                    type="number"
                                    value={tip}
                                    onChange={(e) => setTip(parseFloat(e.target.value) || 0)}
                                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                                    placeholder="0"
                                />
                            </div>
                        </div>

                        {/* Jumlah Orang & Pajak */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-semibold text-gray-600 mb-2 block">Jumlah Orang</label>
                                <input
                                    type="number"
                                    value={numPeople}
                                    onChange={(e) => setNumPeople(parseInt(e.target.value) || 1)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                                    placeholder="2"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-semibold text-gray-600 mb-2 block">Pajak (%)</label>
                                <input
                                    type="number"
                                    value={tax}
                                    onChange={(e) => setTax(parseFloat(e.target.value) || 0)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                                    placeholder="11"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Kolom Kanan: Hasil */}
                <div className="lg:col-span-1 bg-purple-600 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-purple-400 pb-3">Hasil Perhitungan</h3>
                        <div className="space-y-4">
                            <ResultRow label="Pajak ({tax}%)" value={taxAmount} />
                            <ResultRow label="Total Tagihan (Final)" value={totalAmount} isTotal={true} />
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-purple-400">
                        <p className="text-sm font-medium mb-1 opacity-80">Tagihan per Orang ({numPeople} orang)</p>
                        <h4 className="text-4xl font-extrabold">
                            Rp {amountPerPerson.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Komponen Pembantu
const ResultRow = ({ label, value, isTotal = false }) => (
    <div className="flex justify-between items-center text-md">
        <span className={isTotal ? 'font-bold' : 'font-medium opacity-90'}>{label}</span>
        <span className={isTotal ? 'font-bold text-xl' : 'font-medium'}>
            Rp {value.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </span>
    </div>
);

export default SplitBill;