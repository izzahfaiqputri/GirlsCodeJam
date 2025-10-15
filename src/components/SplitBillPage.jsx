import React, { useState } from "react";

const SplitBillPage = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [numPeople, setNumPeople] = useState(2);
  const [taxPercent, setTaxPercent] = useState(11);

  const calculatePerPerson = () => {
    const withTax = totalBill * (1 + taxPercent / 100);
    return Math.round(withTax / numPeople);
  };

  return (
    <div>
      <h1 className="page-title">Split Bill</h1>

      <div className="splitbill-container">
        <div className="splitbill-card">
          <div className="result-section">
            <div className="result-label">Total per Orang</div>
            <div className="result-value">
              Rp {calculatePerPerson().toLocaleString("id-ID")}
            </div>
          </div>

          <button className="copy-btn">📋 Salin Hasil</button>

          <div className="input-section">
            <div className="form-group">
              <label className="form-label">Total Tagihan</label>
              <input
                type="number"
                value={totalBill}
                onChange={(e) => setTotalBill(Number(e.target.value))}
                className="form-input"
                placeholder="Rp 0"
              />
            </div>

            <div className="input-grid">
              <div className="form-group">
                <label className="form-label">Jumlah Orang</label>
                <input
                  type="number"
                  value={numPeople}
                  onChange={(e) => setNumPeople(Number(e.target.value))}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Pajak (%)</label>
                <input
                  type="number"
                  value={taxPercent}
                  onChange={(e) => setTaxPercent(Number(e.target.value))}
                  className="form-input"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBillPage;
