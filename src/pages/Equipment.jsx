import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";

const equipmentsData = [
  {
    id: 1,
    name: "Tractor Model X1",
    type: "Lease",
    price: "₹15,000/month",
    certified: true,
    certificationDetails: {
      authority: "Agri-Board of India",
      standard: "National Agricultural Standards (NAS-2025)",
      validity: "2025 - 2027",
    },
    description:
      "High-performance tractor suitable for plowing, sowing, and harvesting operations.",
  },
  {
    id: 2,
    name: "Rotavator Pro 200",
    type: "Rent",
    price: "₹2,500/day",
    certified: false,
    description:
      "Durable rotavator designed for soil preparation with high efficiency.",
  },
  {
    id: 3,
    name: "Automatic Seed Drill",
    type: "Lease",
    price: "₹10,000/month",
    certified: true,
    certificationDetails: {
      authority: "ISO AgriTech Certification",
      standard: "ISO-AG 9001",
      validity: "2024 - 2026",
    },
    description:
      "Modern seed drill ensuring uniform seed distribution and reduced wastage.",
  },
];

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleProceed = (equipment) => {
    setSuccessMessage(
      `✅ Operation Successful! You chose to ${equipment.type} ${equipment.name}.`
    );
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <>
      <Navbar />
      <div className="calculator-container">
        <div className="calculator-card">
          <h1 className="title">Equipment Rental & Leasing</h1>
          <p className="subtitle">
            Browse certified agricultural equipment available for rent or lease.
          </p>

          {/* Equipment List */}
          <div>
            {equipmentsData.map((item) => (
              <div
                key={item.id}
                className="result"
                style={{
                  textAlign: "left",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedEquipment(item)}
              >
                <h3 style={{ margin: "0 0 5px" }}>{item.name}</h3>
                <p
                  style={{
                    margin: "0",
                    fontSize: "0.9rem",
                    color: "#374151",
                  }}
                >
                  {item.type} | {item.price}
                </p>
                {item.certified && (
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: "6px",
                      padding: "4px 10px",
                      background: "#10b981",
                      color: "#fff",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                    }}
                  >
                    ✔ Certified
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Equipment Card */}
          {selectedEquipment && (
            <div className="calculator-card" style={{ marginTop: "20px" }}>
              <h2 className="title">{selectedEquipment.name}</h2>
              <p className="subtitle">{selectedEquipment.description}</p>
              <p className="label">Type: {selectedEquipment.type}</p>
              <p className="label">Price: {selectedEquipment.price}</p>

              {/* Detailed Certification Info */}
              {selectedEquipment.certified &&
                selectedEquipment.certificationDetails && (
                  <div
                    style={{
                      marginTop: "15px",
                      padding: "14px",
                      borderRadius: "12px",
                      background: "#ecfdf5",
                      border: "1px solid #10b981",
                      color: "#065f46",
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 6px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>
                        🛡️
                      </span>
                      Certified Equipment
                    </h3>
                    <p style={{ margin: "4px 0", fontSize: "0.9rem" }}>
                      ✅ Verified as per{" "}
                      <strong>
                        {selectedEquipment.certificationDetails.standard}
                      </strong>
                    </p>
                    <p style={{ margin: "4px 0", fontSize: "0.9rem" }}>
                      📅 Validity:{" "}
                      <strong>
                        {selectedEquipment.certificationDetails.validity}
                      </strong>
                    </p>
                    <p style={{ margin: "4px 0", fontSize: "0.9rem" }}>
                      🔒 Verified by{" "}
                      <strong>
                        {selectedEquipment.certificationDetails.authority}
                      </strong>
                    </p>
                    <a
                      href="/CertifiedEquipmentCard"
                      style={{
                        display: "inline-block",
                        marginTop: "8px",
                        color: "#2563eb",
                        fontWeight: 600,
                      }}
                    >
                      Learn More ➝
                    </a>
                  </div>
                )}

              {/* Proceed Button */}
              <button
                className="btn"
                onClick={() => handleProceed(selectedEquipment)}
              >
                Proceed to {selectedEquipment.type}
              </button>
            </div>
          )}

          {/* Success Message */}
          {successMessage && (
            <div
              className="result"
              style={{
                marginTop: "20px",
                background: "#ecfdf5",
                color: "#065f46",
              }}
            >
              {successMessage}
            </div>
          )}

          {/* Terms Link */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <a href="/terms" style={{ color: "#2563eb", fontWeight: 600 }}>
              📜 View Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
