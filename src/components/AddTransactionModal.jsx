import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { categories } from "../data/initialData.js";
import "../styles/Modal.css";

const AddTransactionModal = ({ onClose, onSave }) => {
  const [type, setType] = useState("pemasukan");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!amount || !description || !selectedCategory || !date) {
      alert("Mohon lengkapi semua field");
      return;
    }

    const formattedAmount = parseInt(amount.replace(/\D/g, ""));

    const payload = {
      type,
      amount: formattedAmount,
      description,
      selectedCategory,
      date,
    };

    // If parent passed onSave, call it. Otherwise log to console.
    if (typeof onSave === "function") {
      onSave(payload);
    } else {
      console.log(payload);
    }

    onClose();
  };

  useEffect(() => {
    // prevent background scrolling while modal is open
    document.body.classList.add("modal-open-no-scroll");
    return () => {
      document.body.classList.remove("modal-open-no-scroll");
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Tambah Transaksi</h3>
        </div>
        <button
          onClick={onClose}
          className="modal-close-abs"
          aria-label="Tutup"
        >
          <X size={16} />
        </button>

        <div className="modal-body">
          <div className="type-toggle">
            <button
              onClick={() => setType("pengeluaran")}
              className={`type-btn ${type === "pengeluaran" ? "active" : ""}`}
            >
              Pengeluaran
            </button>
            <button
              onClick={() => setType("pemasukan")}
              className={`type-btn ${type === "pemasukan" ? "active" : ""}`}
            >
              Pemasukan
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Jumlah</label>
            <div className="currency-input">
              <span className="currency-prefix">Rp</span>
              <input
                type="text"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setAmount(value);
                }}
                className="form-input"
                placeholder="35.000"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Deskripsi</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
              placeholder="Nasi Goreng"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Kategori</label>
            <div className="category-grid">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`category-btn ${
                    selectedCategory === cat.name ? "active" : ""
                  }`}
                >
                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="category-img"
                    />
                  ) : (
                    <div className="category-icon">{cat.icon}</div>
                  )}
                  <div className="category-name">{cat.name}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-input"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSubmit} className="submit-btn">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionModal;
