import React, { useState } from "react";
import "./CropCalculator.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CropCalculator() {
  const [crop, setCrop] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [weather, setWeather] = useState(1);
  const [inputCosts, setInputCosts] = useState(1);
  const [logistics, setLogistics] = useState(1);
  const [demand, setDemand] = useState(1);
  const [systemic, setSystemic] = useState(1);
  const [finalPrice, setFinalPrice] = useState(null);

  const handleCalculate = () => {
    const price =
      (parseFloat(basePrice) || 0) *
      weather *
      inputCosts *
      logistics *
      demand *
      systemic;

    setFinalPrice(price.toFixed(2));
  };

  return (
    <>
      <Navbar />
      <div className="calculator-container">
        <div className="calculator-card">
          <h1 className="title">🌾 Crop Price Estimator</h1>
          <p className="subtitle">
            Estimate crop/vegetable price based on supply, demand, and external
            factors.
          </p>

          <label className="label">Crop Name</label>
          <input
            type="text"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            placeholder="e.g., Wheat, Tomatoes"
            className="input"
          />

          <label className="label">Base Market Price (₹/kg)</label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            placeholder="Enter current base price"
            className="input"
          />

          <label className="label">Weather & Climate Impact</label>
          <select
            value={weather}
            onChange={(e) => setWeather(parseFloat(e.target.value))}
            className="input"
          >
            <option value={0.7}>Drought / Frost (-30%)</option>
            <option value={1}>Normal</option>
            <option value={1.2}>Favorable Weather (+20%)</option>
          </select>

          <label className="label">Input Costs (Seeds, Fuel, Fertilizer)</label>
          <select
            value={inputCosts}
            onChange={(e) => setInputCosts(parseFloat(e.target.value))}
            className="input"
          >
            <option value={0.9}>Low Costs (-10%)</option>
            <option value={1}>Average</option>
            <option value={1.3}>High Costs (+30%)</option>
          </select>

          <label className="label">Logistics (Transport, Storage)</label>
          <select
            value={logistics}
            onChange={(e) => setLogistics(parseFloat(e.target.value))}
            className="input"
          >
            <option value={0.95}>Smooth Logistics (-5%)</option>
            <option value={1}>Normal</option>
            <option value={1.25}>Expensive/Disrupted (+25%)</option>
          </select>

          <label className="label">Demand Factors</label>
          <select
            value={demand}
            onChange={(e) => setDemand(parseFloat(e.target.value))}
            className="input"
          >
            <option value={0.9}>Weak Demand (-10%)</option>
            <option value={1}>Stable Demand</option>
            <option value={1.4}>High Demand / Trendy (+40%)</option>
          </select>

          <label className="label">Systemic Factors</label>
          <select
            value={systemic}
            onChange={(e) => setSystemic(parseFloat(e.target.value))}
            className="input"
          >
            <option value={0.95}>Strong Currency (-5%)</option>
            <option value={1}>Neutral</option>
            <option value={1.2}>Trade/Policy Support (+20%)</option>
          </select>

          <button onClick={handleCalculate} className="btn">
            Calculate Price
          </button>

          {finalPrice !== null && (
            <div className="result">
              Estimated Price for <strong>{crop || "your crop"}</strong> = ₹
              {finalPrice} / kg
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CropCalculator;
