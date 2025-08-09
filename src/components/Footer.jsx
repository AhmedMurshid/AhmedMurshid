
// === src/components/Footer.jsx ===
import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-row">
        <div className="footer-left">
          <strong>Ahmed.dev</strong> — built for a good reason.
        </div>
        <div className="footer-right">
          <a className="footer-link" href="#privacy">Privacy</a>
          <a className="footer-link" href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
