// src/components/charts/ExpenseChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import dari chart.js

function ExpenseChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Menyimpan instance chart

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Hapus instance lama sebelum membuat yang baru
        }
        
        const ctx = chartRef.current.getContext('2d');
        
        // Data dan Konfigurasi diambil dari kode codejam.pdf (Chart Bulanan)
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
            datasets: [{
                label: 'Pengeluaran',
                data: [500000, 750000, 600000, 800000, 950000, 1100000, 1200000, 1500000, 1300000, 1800000, 1500000, 2000000],
                backgroundColor: 'rgba(139, 92, 246, 0.5)', // purple-500
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2,
                borderRadius: 10,
                barThickness: 20
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
                    x: { grid: { display: false } }
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
        <div className="h-72">
            <canvas ref={chartRef} id="expenseChart"></canvas>
        </div>
    );
}

export default ExpenseChart;