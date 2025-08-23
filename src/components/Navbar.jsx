import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

function Navbar() {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Calculator", path: "/price-calculator" },
    { name: "Tracking", path: "/delivery-tracking" },
    { name: "Equipment", path: "/equipment" },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
    { code: "kn", label: "ಕನ್ನಡ" },
  ];

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
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                style={{
                  ...styles.link,
                  color: hoveredLink === link.name ? "#fff" : "#ddd",
                  transform:
                    hoveredLink === link.name ? "scale(1.1)" : "scale(1)",
                  textShadow:
                    hoveredLink === link.name
                      ? "0 0 8px rgba(255,255,255,0.6)"
                      : "none",
                  transition: "all 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div style={styles.langSwitcher}>
          <button
            style={styles.langBtn}
            onClick={() => setShowLangDropdown(!showLangDropdown)}
          >
            <Globe size={20} />
          </button>
          <div
            style={{
              ...styles.dropdown,
              opacity: showLangDropdown ? 1 : 0,
              transform: showLangDropdown
                ? "translateY(0)"
                : "translateY(-10px)",
              pointerEvents: showLangDropdown ? "auto" : "none",
              transition: "all 0.25s ease-out",
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                style={styles.dropdownItem}
                onClick={() => {
                  console.log(`Selected language: ${lang.label}`);
                  setShowLangDropdown(false);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f0f0f0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {lang.label}
              </button>
            ))}
          </div>
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
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
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
    cursor: "pointer",
    display: "inline-block",
  },
  langSwitcher: {
    position: "relative",
  },
  langBtn: {
    background: "#232f3e",
    color: "#fff",
    border: "none",
    padding: "0.4rem 0.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s ease",
  },
  dropdown: {
    position: "absolute",
    top: "110%",
    right: 0,
    background: "#fff",
    color: "#000",
    borderRadius: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    minWidth: "140px",
    overflow: "hidden",
    zIndex: 2000,
  },
  dropdownItem: {
    padding: "0.6rem 1rem",
    background: "transparent",
    border: "none",
    textAlign: "left",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    borderRadius: "6px",
  },
};

export default Navbar;
