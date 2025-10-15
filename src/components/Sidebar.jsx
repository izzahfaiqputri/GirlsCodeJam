import React from "react";

const navItems = [
  { id: "beranda", label: "Beranda", icon: "🏠" },
  { id: "kalender", label: "Kalender", icon: "📅" },
  { id: "wishlist", label: "Wishlist", icon: "⭐" },
  { id: "splitbill", label: "Split Bill", icon: "👥" },
];

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <aside className="sidebar" aria-label="Main sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img
            src="/assets/Logo_BudgetBuddy.png"
            alt="BudgetBuddy"
            className="logo-img"
          />
          <div className="logo-text">BudgetBuddy</div>
        </div>

        <nav className="sidebar-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-btn ${currentPage === item.id ? "active" : ""}`}
              onClick={() => setCurrentPage(item.id)}
              aria-current={currentPage === item.id ? "page" : undefined}
              type="button"
            >
              <span className="nav-icon" aria-hidden>
                {item.icon}
              </span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">M</div>
          <div className="user-info">
            <div className="user-name">Mahasiswa</div>
            <div className="user-link">Lihat Profil</div>
          </div>
        </div>

        <div className="copyright">
          © 2025 BudgetBuddy
          <br />
          All rights reserved.
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
