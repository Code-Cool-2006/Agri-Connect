import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Column 1 */}
        <div style={styles.column}>
          <h3>FarmMarket Pro</h3>
          <p>India's Premier Agricultural Marketplace</p>
        </div>

        {/* Column 2 */}
        <div style={styles.column}>
          <h4>Quick Links</h4>
          <ul style={styles.ul}>
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
                Price Calculator
              </Link>
            </li>
            <li>
              <Link to="/delivery-tracking" style={styles.link}>
                Delivery Tracking
              </Link>
            </li>
            <li>
              <Link to="/equipment" style={styles.link}>
                Equipment
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div style={styles.column}>
          <h4>Contact Us</h4>
          <p>Email: support@farmmarketpro.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} FarmMarket Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f1111",
    color: "#fff",
    padding: "2rem 1rem 1rem",
    marginTop: "2rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  column: {
    flex: "1",
    minWidth: "200px",
    marginBottom: "1rem",
  },
  ul: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#ddd",
    textDecoration: "none",
  },
  bottomBar: {
    textAlign: "center",
    marginTop: "1rem",
    borderTop: "1px solid #333",
    paddingTop: "1rem",
    fontSize: "0.9rem",
    color: "#bbb",
  },
};

export default Footer;
