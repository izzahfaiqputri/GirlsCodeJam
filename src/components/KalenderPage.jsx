import React from "react";

const KalenderPage = () => {
  const daysInMonth = 31;
  const firstDay = 2; // Wednesday
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      <h1 className="page-title">Kalender</h1>

      <div className="kalender-grid">
        <div className="calendar-card">
          <h3 className="calendar-title">Oktober 2025</h3>
          <div className="calendar-grid">
            {["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"].map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}
            {Array(firstDay)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
            {dates.map((date) => (
              <div
                key={date}
                className={`calendar-date ${date === 3 ? "active" : ""}`}
              >
                {date}
                {date === 2 && (
                  <div className="date-indicators">
                    <div className="date-indicator red"></div>
                    <div className="date-indicator green"></div>
                  </div>
                )}
                {date === 8 && (
                  <div className="date-indicators">
                    <div className="date-indicator red"></div>
                  </div>
                )}
                {date === 15 && (
                  <div className="date-indicators">
                    <div className="date-indicator red"></div>
                    <div className="date-indicator red"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="summary-card">
          <h3 className="calendar-title">Ringkasan - 3 Oktober</h3>
          <div className="summary-chart">
            <div
              style={{ position: "relative", width: "12rem", height: "12rem" }}
            >
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
                />
              </svg>
            </div>
          </div>
          <div className="summary-item">
            <div className="transaction-info">
              <div className="transaction-icon">🍔</div>
              <span style={{ fontWeight: 500 }}>Nasi Goreng</span>
            </div>
            <span style={{ fontWeight: "bold", color: "#dc2626" }}>
              - Rp 15.000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KalenderPage;
