import React, { useState, useEffect } from "react";
import "./DeliveryTracking.css";

const DeliveryTracking = () => {
  const [step, setStep] = useState(0);

  const steps = [
    "Goods collected from Village Community",
    "Truck loaded with Vegetables, Grains & Produce",
    "Optimizing route for shortest delivery path",
    "Delivering to Retail Shops & Restaurants",
    "Final delivery to Households",
    "Delivery Completed 🚀",
  ];

  // Auto progress simulation
  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="delivery-container">
      {/* Header */}
      <header className="delivery-header">
        <h1>🚛 Community Delivery Tracker</h1>
        <p>
          Your whole village community’s goods are being delivered with{" "}
          <strong>Amazon-style efficiency</strong>.
        </p>
      </header>

      {/* Truck Animation */}
      <div className="truck-wrapper">
        <div className={`truck ${step >= 1 ? "move" : ""}`}>
          <span className="truck-icon">🚛</span>
        </div>
        <div className="road"></div>
      </div>

      {/* Delivery Status */}
      <div className="status-card">
        <h2>📍 Current Status</h2>
        <ul className="steps">
          {steps.map((s, i) => (
            <li key={i} className={i <= step ? "active" : ""}>
              {i <= step ? "✅ " : "⏳ "} {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Route Optimization */}
      <div className="map-card">
        <h2>🗺️ Route Optimization</h2>
        <p>
          Using <strong>Dijkstra’s algorithm</strong> to find the shortest path
          for delivering goods to multiple destinations.
        </p>
        <div className="map-visual">
          <span className={step >= 2 ? "highlight" : ""}>🏠 Community</span>
          <span className={step >= 3 ? "highlight" : ""}>🏬 Shops</span>
          <span className={step >= 3 ? "highlight" : ""}>🍴 Restaurants</span>
          <span className={step >= 4 ? "highlight" : ""}>👨‍👩‍👧 Households</span>
        </div>
      </div>

      {/* Completion Card */}
      {step === steps.length - 1 && (
        <div className="success-card">
          <h2>🎉 Delivery Completed!</h2>
          <p>
            All goods have been successfully delivered to your{" "}
            <strong>community network</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryTracking;
