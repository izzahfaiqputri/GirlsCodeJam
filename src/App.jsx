import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BerandaPage from "./components/BerandaPage";
import KalenderPage from "./components/KalenderPage";
import WishlistPage from "./components/WishlistPage";
import SplitBillPage from "./components/SplitBillPage";
import AddTransactionModal from "./components/AddTransactionModal";
import {
  initialTransactions,
  initialWishlists,
  initialBalance,
} from "./data/initialData.js";

// Import all styles

import "./styles/index.css";
import "./styles/App.css";
import "./styles/Beranda.css";
import "./styles/Kalender.css";
import "./styles/Modal.css";
import "./styles/Sidebar.css";
import "./styles/SplitBill.css";
import "./styles/Wishlist.css";

function App() {
  const [currentPage, setCurrentPage] = useState("beranda");
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [wishlists, setWishlists] = useState(initialWishlists);
  const [balance, setBalance] = useState(initialBalance.balance);
  const [income, setIncome] = useState(initialBalance.income);
  const [expense, setExpense] = useState(initialBalance.expense);
  const [savings, setSavings] = useState(initialBalance.savings);

  return (
    <div className="app-container">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-content">
        {currentPage === "beranda" && (
          <BerandaPage
            balance={balance}
            income={income}
            expense={expense}
            savings={savings}
            transactions={transactions}
            onAddTransaction={() => setShowAddTransaction(true)}
          />
        )}
        {currentPage === "kalender" && <KalenderPage />}
        {currentPage === "wishlist" && <WishlistPage wishlists={wishlists} />}
        {currentPage === "splitbill" && <SplitBillPage />}
      </div>

      {showAddTransaction && (
        <AddTransactionModal onClose={() => setShowAddTransaction(false)} />
      )}
    </div>
  );
}

export default App;
