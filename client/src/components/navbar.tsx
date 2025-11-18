import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar">
        {/* Brand */}
        <Link to="/" className="navbar-brand">ClinZK</Link>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Menu */}
        <nav className={`nav-links ${open ? "show" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/history" className="nav-link">Proof History</Link>
        </nav>
      </div>
    </header>
  );
}
