import React from "react";
import { Bell, Plus } from "lucide-react";

const BerandaPage = ({
  balance,
  income,
  expense,
  savings,
  transactions,
  onAddTransaction,
}) => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Hai, Mahasiswa!</h1>
        <button className="notification-btn">
          <Bell size={24} />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Total Saldo</div>
          <div className="stat-value">Rp {balance.toLocaleString("id-ID")}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pemasukan</div>
          <div className="stat-value green">
            Rp {income.toLocaleString("id-ID")}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pengeluaran</div>
          <div className="stat-value red">
            Rp {expense.toLocaleString("id-ID")}
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Tabungan</div>
          <div className="stat-value blue">
            Rp {savings.toLocaleString("id-ID")}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Pengeluaran 7 Hari Terakhir</h3>
          <div className="bar-chart">
            {["Sab", "Min", "Sen", "Sel", "Rab", "Kam", "Jum"].map((day, i) => {
              const heights = [60, 30, 80, 120, 50, 75, 85];
              return (
                <div key={day} className="bar-item">
                  <div
                    className="bar"
                    style={{ height: `${heights[i]}px` }}
                  ></div>
                  <div className="bar-label">{day}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Pengeluaran per Kategori</h3>
          <div className="pie-chart-container">
            <div className="pie-chart">
              <svg
                viewBox="0 0 100 100"
                style={{ transform: "rotate(-90deg)" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="20"
                  strokeDasharray="75 25"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="20"
                  strokeDasharray="15 85"
                  strokeDashoffset="-75"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="20"
                  strokeDasharray="35 65"
                  strokeDashoffset="-90"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="20"
                  strokeDasharray="20 80"
                  strokeDashoffset="-125"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="20"
                  strokeDasharray="25 75"
                  strokeDashoffset="-145"
                />
              </svg>
            </div>
            <div className="pie-legend">
              {["🍔", "🚗", "📚", "🍽️", "🎮"].map((icon, i) => (
                <div key={i} className="legend-item">
                  <div className="legend-color"></div>
                  <span className="legend-label">{icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="transactions-card">
        <h3 className="chart-title">Riwayat Transaksi</h3>
        <div className="transactions-list">
          {transactions.map((tx) => (
            <div key={tx.id} className="transaction-item">
              <div className="transaction-info">
                <div className="transaction-icon">{tx.category}</div>
                <div className="transaction-details">
                  <div className="transaction-name">{tx.name}</div>
                  <div className="transaction-date">{tx.date}</div>
                </div>
              </div>
              <div
                className={`transaction-amount ${
                  tx.amount > 0 ? "positive" : "negative"
                }`}
              >
                {tx.amount > 0 ? "+" : "-"} Rp{" "}
                {Math.abs(tx.amount).toLocaleString("id-ID")}
              </div>
            </div>
          ))}
        </div>

        <button onClick={onAddTransaction} className="floating-btn">
          <Plus size={28} />
        </button>
      </div>
    </div>
  );
};

export default BerandaPage;
