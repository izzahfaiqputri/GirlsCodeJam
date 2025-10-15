# 💰 BudgetBuddy - Personal Finance Manager

BudgetBuddy adalah web manajemen keuangan pribadi yang membantu Anda melacak pemasukan, pengeluaran, tabungan, dan mencapai tujuan finansial Anda. 

## ✨ Fitur Utama

- 📊 **Dashboard Beranda** - Lihat ringkasan keuangan Anda dengan grafik interaktif
- 📅 **Kalender Transaksi** - Lacak transaksi harian dengan tampilan kalender
- 🎯 **Wishlist & Tabungan** - Tetapkan target tabungan dan pantau progresnya
- 💸 **Split Bill** - Hitung pembagian tagihan dengan mudah, termasuk pajak
- 📝 **Manajemen Transaksi** - Tambah, edit, dan kategorisasi transaksi
- 📈 **Visualisasi Data** - Grafik batang dan pie chart untuk analisis pengeluaran

## 🚀 Teknologi yang Digunakan

- **React 18** - Library JavaScript untuk membangun user interface
- **CSS Modules** - Styling terpisah dan modular
- **JavaScript ES6+** - Modern JavaScript syntax

## 📁 Struktur Folder
```
GirlsCodeJam/
│
├── node_modules/              # Dependencies
├── public/                    # Public assets
│
├── assets/                    # Gambar & assets project
│   ├── Logo_BudgetBuddy.png
│   ├── logo-emoji.png
│   └── vite.svg
│
├── src/                       # Source code
│   │
│   ├── assets/                # Assets React
│   │   └── logo_BudgetBuddy.png
│   │   │   └── vite.svg
│   │
│   ├── components/            # Komponen React
│   │   │
│   │   ├── charts/           # Komponen grafik
│   │   │   ├── CategoryChart.jsx
│   │   │   └── ExpenseChart.jsx
│   │   │
│   │   ├── layout/           # Komponen layout
│   │   │   └── Sidebar.jsx
│   │   │
│   │   └── modals/           # Komponen modal/popup
│   │       ├── AddTransactionModal.jsx
│   │       ├── TransactionModal.jsx
│   ├── BerandaPage.jsx
│   ├── CircularProgress.jsx
│   ├── KalenderPage.jsx
│   ├── Sidebar.jsx
│   ├── SplitBillPage.jsx
│   └── WishlistPage.jsx
│   │
│   ├── data/                 # Data & constants
│   │   └── initialData.js
│   │
│   ├── styles/               # CSS files
│   │   ├── App.css
│   │   ├── Beranda.css
│   │   ├── index.css
│   │   ├── Kalender.css
│   │   ├── Modal.css
│   │   ├── Sidebar.css
│   │   ├── SplitBill.css
│   │   └── Wishlist.css
│   │
│   ├── App.css               # Global app styles
│   ├── App.jsx               # Main component
│   └── main.jsx              # Entry point
│
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML template
├── package-lock.json         # Lock file dependencies
├── package.json              # Project dependencies
└── README.md                 
```

**Made with ❤️ for GirlsCodeJam**
