import React, { useEffect } from "react";
import { supabase } from "../Services/supabaseClient";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

// Chatbot Component
const Chatbot = () => {
  useEffect(() => {
    // Prevent multiple script injections
    if (!document.getElementById("chatbase-script")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "chatbase-script";
      script.async = true;
      script.onload = () => {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...args) => {
            if (!window.chatbase.q) window.chatbase.q = [];
            window.chatbase.q.push(args);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") return target.q;
              return (...args) => target(prop, ...args);
            },
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return null; // Just loads the chatbot script
};

// Home Component
export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="home-container">
      <Navbar />
      <Chatbot /> {/* 👈 Mount chatbot here */}
      <div className="user-info">
        <h2>Welcome, {location.state?.userName || "User"}!</h2>
        <p>Purpose: {location.state?.userPurpose || "Not specified"}</p>
      </div>
      <header className="hero">
        <div className="hero-content">
          <h1>Empowering Farmers, Connecting Markets</h1>
          <p>
            FarmMarket Pro is India's most trusted platform for farmers,
            traders, and agri-entrepreneurs. Discover tools, resources, and a
            thriving marketplace built for you.
          </p>
          <button className="cta-btn">Start Exploring</button>

          {/* Logout button */}
          <button className="cta-btn logout" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="hero-image">
          <img
            src="/src/assets/Farmer.png"
            alt="Farm Illustration"
            className="farmer-image"
          />
        </div>
      </header>
      <section className="features">
        <h2>Why Choose FarmMarket Pro?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="icon">🌾</span>
            <h3>Smart Marketplace</h3>
            <p>
              Directly connect with buyers & sellers to maximize your profits
              with zero middlemen.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">📊</span>
            <h3>Price Insights</h3>
            <p>
              Get AI-driven crop price predictions and transparent cost
              calculations.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">🚜</span>
            <h3>Equipment Access</h3>
            <p>
              Rent or buy modern farming tools and machinery at affordable
              prices.
            </p>
          </div>
          <div className="feature-card">
            <span className="icon">🌍</span>
            <h3>Community Support</h3>
            <p>
              Learn from experts, access resources, and grow with the farming
              community.
            </p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Join 10,000+ Farmers Already Growing With Us 🌱</h2>
        <button className="cta-btn">Get Started Now</button>
      </section>
      <Footer />
    </div>
  );
}
