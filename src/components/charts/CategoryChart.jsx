// src/components/charts/CategoryChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import dari chart.js

function CategoryChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Menyimpan instance chart

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        
        const ctx = chartRef.current.getContext('2d');
        
        // Data dan Konfigurasi diambil dari kode codejam.pdf (Chart Kategori)
        const data = {
            labels: ['Makanan', 'Tagihan', 'Belanja', 'Lainnya'],
            datasets: [{
                data: [35, 25, 20, 20], // Persentase Dummy
                backgroundColor: [
                    '#8B5CF6', // purple-600
                    '#EC4899', // pink-500
                    '#F59E0B', // amber-500
                    '#10B981', // emerald-500
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false, // Penting untuk container kustom
                plugins: {
                    legend: {
                        position: 'right',
                    },
                }
            }
        };

        chartInstance.current = new Chart(ctx, config);

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        // Wrapper agar chart bisa di-center dan dikontrol ukurannya
        <div className="relative w-64 h-64">
            <canvas ref={chartRef} id="categoryChart"></canvas>
        </div>
    );
}

export default CategoryChart;