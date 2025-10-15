import React from "react";
import { Home, Calendar, Star, Users } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img
            src="/assets/logo-emoji.png"
            alt="BudgetBuddy"
            className="logo-img"
          />
          <span className="logo-text">BudgetBuddy</span>
        </div>

        <nav className="sidebar-nav">
          <button
            onClick={() => setCurrentPage("beranda")}
            className={`nav-btn ${currentPage === "beranda" ? "active" : ""}`}
          >
            <Home size={20} />
            <span>Beranda</span>
          </button>

          <button
            onClick={() => setCurrentPage("kalender")}
            className={`nav-btn ${currentPage === "kalender" ? "active" : ""}`}
          >
            <Calendar size={20} />
            <span>Kalender</span>
          </button>

          <button
            onClick={() => setCurrentPage("wishlist")}
            className={`nav-btn ${currentPage === "wishlist" ? "active" : ""}`}
          >
            <Star size={20} />
            <span>Wishlist</span>
          </button>

          <button
            onClick={() => setCurrentPage("splitbill")}
            className={`nav-btn ${currentPage === "splitbill" ? "active" : ""}`}
          >
            <Users size={20} />
            <span>Split Bill</span>
          </button>
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
    </div>
  );
};

export default Sidebar;
