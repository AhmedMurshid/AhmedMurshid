// src/nav/Aboutme.js
import React from 'react';
import aboutMeData from '../files/Resume.json';
import ProfileImage from '../images/me.jpg';
import './Aboutme.css';

function AboutMe() {
  const { name, education } = aboutMeData || {};
  const grad = education?.anticipated_graduation;
  const gpa = education?.gpa;

  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-me-header">
        {/* Uncomment image if/when you want it shown */}
        {/* <img src={ProfileImage} alt={name || "Profile"} className="profile-img" /> */}
        <div>
          <p className="about-me-text">
            I’m {name || "a full-stack developer"} focused on building clean, fast, and reliable tools —
            from React front ends to Django/PostgreSQL back ends. I like turning messy workflows
            into simple, automated systems.
          </p>
          <div className="about-cta-row">
            {/* <a href="#projects" className="button">View Projects</a>
            <a href="#skills" className="button button--ghost">Skills</a> */}
            <a href="#contact" className="button button--ghost">Contact</a>
          </div>
        </div>
      </div>

      <div className="about-grid">
        <section className="card">
          <h3 className="h3">What I do</h3>
          <ul className="about-list">
            <li>Full-stack web apps (React • Django • PostgreSQL)</li>
            <li>Parsing/automation pipelines</li>
            <li>Data modeling, APIs, and lightweight dashboards</li>
          </ul>
        </section>

        <section className="card">
          <h3 className="h3">Toolbox</h3>
          <p>
            React, Vite, Tailwind • Django/DRF • Python (pandas, fitz, bs4) •
            PostgreSQL • Docker • GitHub Actions • Linux
          </p>
        </section>

        <section className="card">
          <h3 className="h3">Recent highlights</h3>
          <ul className="about-list">
            <li>FMCSA PDF → structured data pipeline with Django models</li>
            <li>Contact scraper integrated with Airtable + CRM sync</li>
            <li>Dark-theme portfolio with responsive sidebar navigation</li>
          </ul>
        </section>

        <section className="card">
          <h3 className="h3">Education</h3>
          <p>
            BS, Computer Science — University of Louisville<br />
            {grad && <>Graduation: {grad}<br /></>}
            {gpa && <>GPA: {gpa}</>}
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
