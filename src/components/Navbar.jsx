import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>
            FarmMarket Pro
          </Link>
        </div>

        {/* Nav Links */}
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/marketplace" style={styles.link}>
              Marketplace
            </Link>
          </li>
          <li>
            <Link to="/price-calculator" style={styles.link}>
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/delivery-tracking" style={styles.link}>
              Tracking
            </Link>
          </li>
          <li>
            <Link to="/equipment" style={styles.link}>
              Equipment
            </Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <div style={styles.langSwitcher}>
          <button style={styles.langBtn}>EN</button>
          <button style={styles.langBtn}>हिंदी</button>
          <button style={styles.langBtn}>ಕನ್ನಡ</button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#0f1111",
    color: "#fff",
    padding: "0.8rem 1rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  logoLink: {
    color: "#fff",
    textDecoration: "none",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ddd",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  linkHover: {
    color: "#fff",
  },
  langSwitcher: {
    display: "flex",
    gap: "0.5rem",
  },
  langBtn: {
    background: "#232f3e",
    color: "#fff",
    border: "none",
    padding: "0.3rem 0.7rem",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Navbar;
