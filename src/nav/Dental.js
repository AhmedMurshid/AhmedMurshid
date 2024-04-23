
import React, { useState } from 'react';
import './dental.css';
import Quiz from './Quiz';
import InteractiveTeethDiagram from './InteractiveToothAnatomy';
import Tooltip from './Tooltip'; // Assume this is a simple Tooltip component you've created

const Dental = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [quizScore, setQuizScore] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    introduction: (
      <div id="class-student-info">
    <div id="class-details">
        <h2>Class Information</h2>
        <p><strong>Course Title:</strong> Special Topics in Biological Anthropology</p>
        <p><strong>Instructor:</strong> Dr. Carey J. Garland</p>
        <p><strong>Semester:</strong> Spring 2024</p>
        <p><strong>Class Code:</strong> ANTH 363</p>
    </div>

    <div id="student-details">
        <h2>Student Information</h2>
        <p><strong>Name:</strong>Ahmed Abdullahi</p>
        <p><strong>Student ID:</strong> 5396187</p>
        <p><strong>Assignment:</strong> Dental Anatomy</p>
        <p><strong>Date:</strong> April 22, 2024</p>
    </div>
</div>
    ),
    Overview: (
      <div>
      <h1>Human Dental Anatomy</h1>
    
      <div id="overview">
          <h2>Overview</h2>
          <p>Human teeth are vital components of the digestive system, responsible for mechanically breaking down food through cutting, tearing, and grinding before it is swallowed and digested. These functions are facilitated by two sets of teeth: primary and secondary, also known as permanent teeth.</p>
      </div>
      <img src="https://images.everydayhealth.com/images/dental-health/four-types-of-teeth-and-how-they-function-1440x810.jpg?sfvrsn=f11b9924_1" alt="Primary and Permanent Dentition" />
      <p>Image credit: <a href="https://www.everydayhealth.com/dental-health/basics/types-teeth-how-they-function/" target="_blank" rel="noopener noreferrer">everydayhealth.com</a></p>
    
      </div>
    ),
    primary_permanent: (
      <div>
            <div id="primary-teeth">
        <h2>Primary Teeth</h2>
        <p>The primary dentition consists of 20 teeth, which emerge around six months of age and are integral to a child’s development. They aid in the child's ability to chew and speak and maintain space in the jaws for future permanent teeth.</p>
        <ul>
            <li><strong>Central and Lateral Incisors:</strong> For cutting food.</li>
            <li><strong>Canines:</strong> For tearing food.</li>
            <li><strong>First and Second Molars:</strong> For grinding food.</li>
        </ul>
    </div>
    
    <div id="permanent-teeth">
        <h2>Permanent Teeth</h2>
        <p>Adults typically have 32 permanent teeth, replacing the primary teeth around the age of six and continuing to emerge until around 21 years of age.</p>
        <ul>
            <li><strong>Central and Lateral Incisors:</strong> Located at the front of the mouth for cutting.</li>
            <li><strong>Canines:</strong> Situated at the "corners" of the dental arch for tearing.</li>
            <li><strong>Premolars (Bicuspids):</strong> Absent in the primary set, these teeth have a flat top for crushing food.</li>
            <li><strong>Molars:</strong> Including the third molars or wisdom teeth, for grinding food.</li>
        </ul>
    </div>
    {/* add this image https://teachmeanatomy.info/wp-content/uploads/Primary-and-Permanent-Dentition-1024x616.png */}
    <img src="https://teachmeanatomy.info/wp-content/uploads/Primary-and-Permanent-Dentition-1024x616.png" alt="Primary and Permanent Dentition" />
    <p>Image credit: <a href="https://teachmeanatomy.info/head/other/child-adult-dentition/" target="_blank" rel="noopener noreferrer">TeachMeAnatomy</a></p>
      </div>
    ),
    tooth_structure: (
      <div id="tooth-structure">
      <h2>Tooth Structure</h2>
      <ul>
          <li><strong>Enamel:</strong> The hardest substance in the body, forming the outermost layer of the tooth.</li>
          <li><strong>Dentin:</strong> Beneath the enamel, it comprises the bulk of the tooth’s structure and is also found in the root.</li>
          <li><strong>Pulp:</strong> The soft, innermost part containing nerves and blood vessels.</li>
          <li><strong>Cementum:</strong> This covers the root and helps anchor the tooth within the jawbone.</li>
      </ul>
      <img src="https://childrenswi.org/-/media/chwlibrary/images/medical-care/dental-care/tooth.gif" alt="Primary and Permanent Dentition" />
      <p>Image credit: <a href="https://childrenswi.org/medical-care/dental-care/dental-and-oral-health/anatomy-and-development-of-the-mouth-and-teeth" target="_blank" rel="noopener noreferrer">childrenswi.org</a></p>
    
  </div>
    ),
    ciatation: (
      <div id="references">
      <h2>References</h2>
      <ul>
          <li>
            <a href="https://teachmeanatomy.info/head/other/child-adult-dentition/" target="_blank">
              McKernon, R., &amp; Gartshore, L. (2022). Child and Adult Dentition.
              <i>TeachMeAnatomy</i>.
              <a href="https://teachmeanatomy.info/head/other/child-adult-dentition/" target="_blank">https://teachmeanatomy.info/head/other/child-adult-dentition/</a>.
              Accessed April 10, 2024.</a>
          </li>
          <br/>
          <li>
            <a href="https://childrenswi.org/medical-care/dental-care/dental-and-oral-health/anatomy-and-development-of-the-mouth-and-teeth" target="_blank">
              Anatomy and Development of the Mouth and Teeth.
              <i>Children’s Wisconsin.</i>
              <a href="https://childrenswi.org/medical-care/dental-care/dental-and-oral-health/anatomy-and-development-of-the-mouth-and-teeth" target="_blank">https://childrenswi.org/medical-care/dental-care/dental-and-oral-health/anatomy-and-development-of-the-mouth-and-teeth</a>.
              Accessed April 20, 2024.</a>
          </li>
      </ul>
  </div>
    ),
    quiz: (
      <Quiz setQuizScore={setQuizScore} />
     )
  
  };

  return (
    <div >
      <div className="tabs, ribbon" >
        {Object.keys(tabContent).map(tab => (
          <button 
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
      <div className="content">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default Dental;
