
// === src/components/Sections.jsx ===
// Lightweight, content-agnostic sections. Replace \"Reason\" with real copy later.
import React from "react";

export function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-inner">
        <h1 className="h1">A Clear Reason to Visit</h1>
        <p className="sub">State the Reason here — what this site helps with in one crisp line.</p>
        <div className="hero-actions">
          <a href="#get-started" className="button">Get Started</a>
          <a href="#learn" className="button button--ghost">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const items = [
    { title: "Reason #1", body: "Quick point explaining the value." },
    { title: "Reason #2", body: "Another benefit in plain language." },
    { title: "Reason #3", body: "One sentence outcome users get." },
  ];
  return (
    <section className="section features">
      <div className="container grid">
        {items.map((it, i) => (
          <article className="card" key={i}>
            <h3 className="h3">{it.title}</h3>
            <p>{it.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Callout() {
  return (
    <section className="section callout">
      <div className="container callout-inner">
        <h2 className="h2">Ready because of the Reason?</h2>
        <p>Give users one focused next step — book, read, or contact.</p>
        <a className="button" href="#contact">Contact Me</a>
      </div>
    </section>
  );
}
