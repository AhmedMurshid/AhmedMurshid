// src/components/Sections.jsx
import React from "react";
import { Link } from "react-router-dom";


export function Hero() {
  return (
    <section className="section hero">
      <div className="container hero-inner">
        <h1 className="h1">Ahmed Abdullahi — Building Ideas Into Reality</h1>
        <p className="sub">
          I’m a Computer Science student and full-stack developer passionate about crafting efficient, visually engaging, and user-focused solutions.
        </p>
        <div className="hero-actions">
          {/* <a href="#projects" className="button">View My Work</a> */}
          {/* <a href="#contact" className="button button--ghost">Get in Touch</a> */}
          <Link to="/contact" className="button button--ghost">Get in Touch</Link>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const items = [
    { title: "Full-Stack Development", body: "From React front-ends to Django back-ends, I build complete, scalable solutions." },
    { title: "Creative Problem Solving", body: "I approach challenges with curiosity and deliver practical, user-friendly results." },
    { title: "Continuous Learning", body: "Always exploring new technologies to stay ahead and improve my craft." },
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
        <h2 className="h2">Let’s Build Something Great Together</h2>
        <p>
          Whether it’s a web app, automation script, or creative side project — I’m always open to collaboration.
        </p>
        <a className="button" href="#contact">Contact Me</a>
      </div>
    </section>
  );
}
