// === src/components/SiteLayout.jsx ===
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Site.css";

export default function SiteLayout({ children }) {
  return (
    <div className="site-root">
      <Header />
      <main className="site-main" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
