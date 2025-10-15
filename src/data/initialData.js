// Initial transaction data
export const initialTransactions = [
  {
    id: 1,
    name: "Nasi Goreng",
    amount: -15000,
    date: "3 Oktober",
    category: "🍔",
  },
  {
    id: 2,
    name: "Kiriman Ortu",
    amount: 500000,
    date: "2 Oktober",
    category: "💰",
  },
  {
    id: 3,
    name: "Bensin Motor",
    amount: -50000,
    date: "2 Oktober",
    category: "🚗",
  },
  {
    id: 4,
    name: "Ngopi",
    amount: -25000,
    date: "1 Oktober",
    category: "☕",
  },
  {
    id: 5,
    name: "Beli Buku Kuliah",
    amount: -100000,
    date: "30 September",
    category: "📚",
  },
];

// Initial wishlist data
export const initialWishlists = [
  {
    id: 1,
    name: "Emergency Fund",
    subtitle: "Dana Darurat",
    current: 950000,
    target: 2000000,
    color: "red",
  },
  {
    id: 2,
    name: "New Laptop",
    subtitle: "Laptop Baru",
    current: 4500000,
    target: 15000000,
    color: "blue",
  },
  {
    id: 3,
    name: "Vacation",
    subtitle: "Liburan Bali",
    current: 2100000,
    target: 5000000,
    color: "green",
  },
  {
    id: 4,
    name: "Education",
    subtitle: "Bayar UKT",
    current: 3000000,
    target: 5000000,
    color: "purple",
  },
];

// Initial balance data
export const initialBalance = {
  balance: 850000,
  income: 500000,
  expense: 190000,
  savings: 310000,
};

// Transaction categories
export const categories = [
  { name: "Makanan", icon: "🍔" },
  { name: "Transport", icon: "🚗" },
  { name: "Pendidikan", icon: "📚" },
  { name: "Nongkrong", icon: "☕" },
  { name: "Hiburan", icon: "🎮" },
  { name: "Belanja", icon: "🛒" },
  { name: "Kesehatan", icon: "💊" },
  { name: "Kos", icon: "🏠" },
];
