
// === src/components/Header.jsx ===
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-row">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-mark" />
          <span className="brand-text">Ahmed.dev</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/notes" className="nav-link">Notes</Link>
          <Link to="/search-paper" className="nav-link">Search</Link>
          <a href="#resume" className="nav-link">Resume</a>
        </nav>

        <div className="header-cta">
          <a className="button button--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
