import React from "react";
import aboutMeData from '../files/Resume.json';
import "../components/Site.css";

export default function Contact() {
  // Extract data from aboutMeData
  const email = aboutMeData?.contact?.email || "ahmed@example.com";
  const links = {
    github: aboutMeData?.contact?.github || "https://github.com/ahmedmurshid",
    linkedin: aboutMeData?.contact?.linkedin || "https://www.linkedin.com/in/ahmedmurshid",
    wayup: aboutMeData?.contact?.wayup || "https://www.wayup.com/profile/ahmed",
  };
  const resumeHref = aboutMeData?.contact?.resumeHref;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard.");
    } catch {
      window.prompt("Copy email address:", email);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="h2">Contact</h2>
        <p className="sub">
          The fastest way to reach me is by email. I’m also active on GitHub and LinkedIn.
        </p>

        <div className="contact-grid">
          <article className="card contact-card">
            <h3 className="h3">Email</h3>
            <p><a href={`mailto:${email}`}>{email}</a></p>
            <button className="button button--ghost" onClick={copy}>Copy email</button>
          </article>

          <article className="card contact-card">
            <h3 className="h3">Profiles</h3>
            <ul className="contact-list">
              <li><a href={links.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              {links.wayup && <li><a href={links.wayup} target="_blank" rel="noreferrer">WayUp</a></li>}
            </ul>
          </article>

          <article className="card contact-card">
            <h3 className="h3">Resume</h3>
            {resumeHref ? (
              <a className="button" href={resumeHref} target="_blank" rel="noreferrer">Open PDF</a>
            ) : (
              <p className="sub">Resume link coming soon.</p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
