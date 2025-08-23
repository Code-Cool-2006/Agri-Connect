import React, { useState, useEffect } from "react";
import "./Marketplace.css";

const Marketplace = () => {
  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("farmCart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("farmCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const newOrderNumber = "ORD-" + Math.floor(Math.random() * 1000000);
    setOrderNumber(newOrderNumber);
    setCart([]);
    localStorage.removeItem("farmCart");
  };

  const products = {
    Seeds: [
      { id: 1, name: "Wheat Seeds", price: 120, icon: "🌱" },
      { id: 2, name: "Rice Seeds", price: 150, icon: "🌱" },
      { id: 3, name: "Corn Seeds", price: 100, icon: "🌱" },
    ],
    Grains: [
      { id: 4, name: "Wheat Grain", price: 60, icon: "🌾" },
      { id: 5, name: "Rice Grain", price: 80, icon: "🌾" },
      { id: 6, name: "Corn Grain", price: 70, icon: "🌾" },
    ],
    Fertilizers: [
      { id: 7, name: "Urea Fertilizer", price: 250, icon: "💊" },
      { id: 8, name: "DAP Fertilizer", price: 300, icon: "💊" },
      { id: 9, name: "Pesticide Pack", price: 200, icon: "💊" },
    ],
  };

  return (
    <div className="marketplace-container">
      <header className="marketplace-hero">
        <h1>Marketplace</h1>
        <p>Shop for seeds, grains, and fertilizers at the best prices</p>
      </header>

      {/* Categories */}
      {Object.entries(products).map(([category, items]) => (
        <section key={category} className="category">
          <h2>{category}</h2>
          <div className="product-grid">
            {items.map((item) => (
              <div className="product-card" key={item.id}>
                <span className="icon">{item.icon}</span>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => addToCart(item)} className="add-btn">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Cart Section */}
      <section className="cart-section">
        <h2>Your Cart 🛒</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
        <button onClick={checkout} className="checkout-btn">
          Checkout
        </button>
        {orderNumber && (
          <p className="order-success">
            ✅ Order placed successfully! <br />
            Your Order Number: <strong>{orderNumber}</strong>
          </p>
        )}
      </section>
    </div>
  );
};

export default Marketplace;
