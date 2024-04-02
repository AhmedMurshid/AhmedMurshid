import React, { useState } from 'react';
import './dental.css';
import ContentSections from './ContentSections';

const Dental = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'introduction' ? 'active' : ''}`}
          onClick={() => handleTabClick('introduction')}
        >
          Introduction
        </button>
        <button 
          className={`tab ${activeTab === 'chapter1' ? 'active' : ''}`}
          onClick={() => handleTabClick('chapter1')}
        >
          The Basics
        </button>
        <button 
          className={`tab ${activeTab === 'chapter2' ? 'active' : ''}`}
          onClick={() => handleTabClick('chapter2')}
        >
          Deciduous vs. Permanent
        </button>
        <button
          className={`tab ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => handleTabClick('quiz')}
        >
          Quiz
        </button>
        <button
          className={`tab ${activeTab === 'anatomy' ? 'active' : ''}`}
          onClick={() => handleTabClick('anatomy')}
        >
          Tooth Anatomy
        </button>
      </div>
      <div className="content">
        {activeTab === 'introduction' && (
          <div>
            <h2>Introduction to Dental Structures</h2>
            <p>This guide aims to explore the fascinating world of human dental structures...</p>
          </div>
        )}
        {activeTab === 'chapter1' && (
          <div>
            <h2>The Basics of Dental Anatomy</h2>
            <p>Human teeth are divided into four main types...</p>

          </div>
        )}
        {activeTab === 'chapter2' && (
          <div>
            <h2>Deciduous vs. Permanent Teeth</h2>
            <ContentSections />


          </div>
        )}
        {activeTab === 'quiz' && (
          <div>
            <h2>Dental Health Quiz</h2>
            {/* Implement Quiz Component here */}
            <p>Test your knowledge on dental health with this quiz!</p>
          </div>
        )}
        {activeTab === 'anatomy' && (
          <div>
            <h2>Interactive Tooth Anatomy</h2>
            {/* Implement Interactive Tooth Anatomy here */}
            <p>Learn more about each part of the tooth by clicking on it.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dental;
