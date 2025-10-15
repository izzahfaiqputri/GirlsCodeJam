import React from "react";
import { Bell } from "lucide-react";

const WishlistPage = ({ wishlists }) => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Wishlist</h1>
        <button className="notification-btn">
          <Bell size={24} />
        </button>
      </div>

      <div className="wishlist-grid">
        {wishlists.map((item) => {
          const percentage = Math.round((item.current / item.target) * 100);
          return (
            <div key={item.id} className={`wishlist-card ${item.color}`}>
              <div className="wishlist-content">
                <h3 className="wishlist-title">{item.name}</h3>
                <div className="wishlist-subtitle">{item.subtitle}</div>
                <div className="wishlist-amount">
                  Rp {item.current.toLocaleString("id-ID")} /{" "}
                  {item.target.toLocaleString("id-ID")}
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="progress-percentage">{percentage}%</div>
                </div>
                <button className="add-savings-btn">+ Tambah Tabungan</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishlistPage;
