// src/nav/ResearchPaper.jsx
import React from 'react';
import './ResearchPaper.css';

const ResearchPaper = () => {
  return (
    <div className="paper-container">
      <h1>Criminal Procedure Systems in the United States and Japan: A Comparative Analysis</h1>
      <h2>Ahmed M. Abdullahi</h2>
      <p>University of Louisville</p>
      <p>CJ-306-50-4245: CRIMINAL PROCEDURE-Summer 2024</p>
      <p>Terry D. Edwards</p>
      <p>June 23, 2024</p>

      <h3>Abstract</h3>
      <p>This research paper provides a comparative analysis of the criminal procedure systems in the United States and Japan. It highlights the key differences and similarities in their approaches to criminal justice, focusing on aspects such as arrest procedures, rights of the accused, pretrial processes, trial procedures, and conviction rates. The analysis is supported by scholarly sources and aims to understand how cultural and legal traditions shape the criminal justice systems in these two countries.</p>

      <h3>Introduction</h3>
      <p>The criminal justice systems of the United States and Japan are often cited as exemplars of Western and Eastern approaches to law enforcement and legal proceedings, respectively. This paper seeks to compare and contrast these systems, exploring how each country addresses criminal procedure from arrest through conviction. By examining these systems, the paper aims to provide insights into how different legal traditions and cultural values influence criminal justice practices.</p>

      <h3>Methodology</h3>
      <p>This research utilizes a comparative legal approach, examining primary and secondary sources, including legal texts, scholarly articles, and statistical reports. The analysis is structured around key stages of the criminal procedure: arrest and investigation, rights of the accused, pretrial processes, trial procedures, and conviction and sentencing.</p>

      <h3>Comparative Analysis</h3>
      <h4>Arrest and Investigation</h4>
      <p>In the United States, the Fourth Amendment provides protection against unreasonable searches and seizures, requiring law enforcement to obtain a warrant based on probable cause for most searches and arrests. The exclusionary rule further ensures that evidence obtained unlawfully is not admissible in court.</p>
      <p>In contrast, Japan’s system allows for broader police discretion in arrest and investigation. The Police Duties Execution Act grants officers significant authority to stop and question individuals, and the issuance of arrest warrants is more streamlined. Additionally, the Japanese system permits longer detention periods for suspects without formal charges, which has been criticized for potential abuse and coerced confessions.</p>

      <h4>Rights of the Accused</h4>
      <p>The rights of the accused in the United States are robust, with the Sixth Amendment guaranteeing the right to a speedy and public trial, the right to counsel, and the right to confront witnesses. Miranda rights ensure that suspects are informed of their rights to remain silent and to have an attorney present during interrogations.</p>
      <p>Japan’s system, while also recognizing the importance of the rights of the accused, differs significantly. Suspects can be detained for up to 23 days without formal charges, and there is less emphasis on the right to silence and the presence of legal counsel during interrogations. This has led to concerns about the potential for coerced confessions and the reliability of evidence obtained during prolonged detention.</p>

      <h4>Pretrial Processes</h4>
      <p>Pretrial processes in the United States include arraignment, plea bargaining, and motions to suppress evidence. The adversarial nature of the system means that both defense and prosecution actively engage in the discovery process and pretrial motions.</p>
      <p>In Japan, the pretrial process is less adversarial. Prosecutors have significant discretion in deciding whether to bring charges, and there is a strong emphasis on confessions and pretrial investigations conducted by the police and prosecutors. The Prosecutorial Review Commission, a unique feature of the Japanese system, allows citizens to review and question prosecutorial decisions, adding a layer of oversight.</p>

      <h4>Trial Procedures</h4>
      <p>The trial procedures in the United States are characterized by the presence of a jury, the principle of "innocent until proven guilty," and the strict application of rules of evidence and procedure. Both prosecution and defense present their cases, examine and cross-examine witnesses, and make closing arguments to the jury.</p>
      <p>In Japan, trials are typically bench trials, with judges rather than juries deciding the outcome. The introduction of the lay judge system (saiban-in) in 2009 incorporated elements of a jury system, allowing citizens to participate in serious criminal cases alongside professional judges. However, the conviction rate remains exceedingly high, often cited at around 99%, raising questions about the balance of power between prosecutors and the defense.</p>

      <h4>Conviction and Sentencing</h4>
      <p>The conviction and sentencing phase in the United States involves a separate sentencing hearing where various factors, such as the defendant's criminal history and mitigating circumstances, are considered. Sentences can range from probation to life imprisonment, with the possibility of parole in many cases.</p>
      <p>Japan’s sentencing practices are influenced by the goal of rehabilitation and reintegration into society. Sentences are often more lenient, with a greater emphasis on suspended sentences and probation for first-time offenders. The death penalty is still in use for severe crimes, though its application is rare.</p>

      <h3>Conclusion</h3>
      <p>The criminal procedure systems in the United States and Japan reflect their distinct legal traditions and cultural values. The U.S. system emphasizes individual rights and adversarial justice, while Japan’s system prioritizes social order and prosecutorial discretion. Understanding these differences enhances our appreciation of how legal systems function within their respective societal contexts and provides valuable insights for potential reforms.</p>

      <h3>References</h3>
      <ul>
        <li>Aronson, B. (n.d.). Carlos Ghosn and Japan's 99% Conviction Rate: Examining Japan's Criminal Justice System from a Comparative Perspective. Retrieved from US-Asia Law Institute.</li>
        <li>Worrall, J. L. (2017). Criminal Procedure (Justice Series) (3rd ed.). Pearson Education.</li>
        <li>American Psychological Association. (2010). Publication manual of the American Psychological Association (6th ed.). Washington, DC: Author.</li>
      </ul>
    </div>
  );
};

export default ResearchPaper;
