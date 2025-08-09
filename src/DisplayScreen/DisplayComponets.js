// src/DisplayScreen/DisplayComponents.js
import React from 'react';
import PageFrame from '../PageFrame';
import AboutMe  from '../nav/Aboutme';
import Projects from '../nav/Projects';
import Skills   from '../nav/Skills';
import Courses  from '../nav/Courses';
import './Display.css';

const sections = [
  { key: 'aboutMe', label: 'About Me', preview: "Quick intro about Ahmed.", component: <AboutMe /> },
  { key: 'projects', label: 'Projects', preview: "See my latest projects.", component: <Projects /> },
  { key: 'skills', label: 'Skills', preview: "My top skills.", component: <Skills /> },
  // { key: 'courses', label: 'Courses', preview: "Relevant courses.", component: <Courses /> },
];

function DisplayComponents(props) {
  const {
    showAboutMe, showProjects, showSkills, showCourses,
    toggleVisibility
  } = props;

  const activeIndex = sections.findIndex(
    s =>
      (s.key === 'aboutMe' && showAboutMe) ||
      (s.key === 'projects' && showProjects) ||
      (s.key === 'skills' && showSkills) 
      // (s.key === 'courses' && showCourses)
  );
  const activeSection = sections[activeIndex];

  // For mobile: handle next/prev
  const goPrev = (e) => {
    e.stopPropagation();
    if (activeIndex > 0) toggleVisibility(sections[activeIndex - 1].key);
  };
  const goNext = (e) => {
    e.stopPropagation();
    if (activeIndex < sections.length - 1) toggleVisibility(sections[activeIndex + 1].key);
  };

  return (
    <div className="responsive-main-layout">
      {/* Sidebar for desktop */}
      <div className="sidebar-list">
        {sections.map((section, idx) => (
          <div
            key={section.key}
            className={`sidebar-box${activeSection && activeSection.key === section.key ? ' active' : ''}`}
            onClick={() => toggleVisibility(section.key)}
          >
            <h4>{section.label}</h4>
            <p>{section.preview}</p>
          </div>
        ))}
      </div>
      {/* Main content area */}
      <div className="focus-content">
        {/* Mobile navigation arrows */}
        <button
          className="triangle-btn left mobile-only"
          onClick={goPrev}
          aria-label="Previous section"
          disabled={activeIndex === 0}
        >
          <span className="triangle-left">&#9664;</span>
        </button>
        <div className="zoom-content-responsive">
          <PageFrame>{activeSection.component}</PageFrame>
        </div>
        <button
          className="triangle-btn right mobile-only"
          onClick={goNext}
          aria-label="Next section"
          disabled={activeIndex === sections.length - 1}
        >
          <span className="triangle-right">&#9654;</span>
        </button>
      </div>
    </div>
  );
}

export default DisplayComponents;
