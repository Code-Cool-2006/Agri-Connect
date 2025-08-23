import React, { useState, useEffect } from "react";
import "./DeliveryTracking.css";

const DeliveryTracking = () => {
  const [step, setStep] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [showDelivery, setShowDelivery] = useState(false);

  const steps = [
    "Goods collected from Village Community",
    "Truck loaded with Vegetables, Grains & Produce",
    "Optimizing route for shortest delivery path",
    "Delivering to Retail Shops & Restaurants",
    "Final delivery to Households",
    "Delivery Completed 🚀",
  ];

  // ETA progress for farmer order (like Amazon)
  const deliverySteps = [
    { status: "Order Confirmed", eta: "Arriving in 2 days" },
    { status: "Packed at Warehouse", eta: "Arriving in 1 day 20 hrs" },
    { status: "Shipped", eta: "Arriving in 1 day 5 hrs" },
    { status: "Out for Delivery", eta: "Arriving today" },
    { status: "Delivered ✅", eta: "" },
  ];
  const [deliveryStep, setDeliveryStep] = useState(0);

  // Auto progress simulation for community truck
  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => setStep(step + 1), 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Auto progress simulation for farmer’s delivery
  useEffect(() => {
    if (showDelivery && deliveryStep < deliverySteps.length - 1) {
      const timer = setTimeout(() => setDeliveryStep(deliveryStep + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [deliveryStep, showDelivery]);

  return (
    <div className="delivery-layout">
      {/* Left side: Farmer's Delivery */}
      <aside className="left-panel">
        <h2>📦 My Delivery</h2>
        {!showDelivery ? (
          <div className="order-input">
            <input
              type="text"
              placeholder="Enter Order ID"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <button
              onClick={() => {
                if (orderId.trim() !== "") setShowDelivery(true);
              }}
            >
              Track Order
            </button>
          </div>
        ) : (
          <div className="order-status">
            <h3>Order ID: {orderId}</h3>
            <ul>
              {deliverySteps.map((d, i) => (
                <li key={i} className={i <= deliveryStep ? "active" : ""}>
                  {i <= deliveryStep ? "✅ " : "⏳ "}
                  <strong>{d.status}</strong>{" "}
                  <span className="eta">{d.eta}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>

      {/* Right side: Community Delivery (existing) */}
      <main className="right-panel">
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
            <img
              src="https://cdn-icons-gif.flaticon.com/6416/6416387.gif"
              alt="Truck"
              className="truck-gif"
            />
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
            Using <strong>Dijkstra’s algorithm</strong> to find the shortest
            path for delivering goods to multiple destinations.
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
      </main>
    </div>
  );
};

export default DeliveryTracking;
