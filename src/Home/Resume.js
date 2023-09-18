import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume" style={{ textDecoration: "none" }}>
      {/* Header */}
      <header>
        <h1>Sai Swaroop Bedamatta</h1>
        <p>saiswaroop.bedamatta@gmail.com</p>
        {/* <p>Khordha, Odisha, India, 752031</p> */}
        <p>
          Website:{" "}
          <a
            href="https://saibedamatta.me"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2b6777" }}
          >
            saibedamatta.me
          </a>
        </p>
      </header>

      {/* Main Content */}
      <main>
        {/* Professional Summary */}
        <section className="professional-summary">
          <h2>Objectives</h2>
          <p>
            Enthusiastic and skilled Software Developer with approximately 2
            years of experience in developing web applications. Proficient in
            Java Full Stack Development using the Spring Framework and AWS.
            Eager to contribute to dynamic projects that leverage cutting-edge
            technologies.
          </p>
        </section>

        {/* Professional Certifications */}
        <section className="certifications">
          <h2>Professional Certifications</h2>
          <ul>
            <li>AWS Certified Solutions Architect - Associate (Sept 2023)</li>
            <li>AWS Certified Cloud Practitioner (Sept 2022)</li>
            <li>FSE 1 - Cognizant Digital Honors Certification (Oct 2022)</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Cognizant Technology Solutions (Oct. 2021 - Present)</h3>
            <p>Jr. Software Engineer (Programmer Analyst)</p>
            <ul>
              <li>
                Developed real-time full stack projects using Spring Boot,
                Spring Frameworks, Maven, React JS, and AWS.
              </li>
              <li>
                Utilized a diverse range of Spring Boot Starter Projects,
                including Spring Boot Web and Spring Boot Data JPA.
              </li>
              <li>
                Collaborated with UI development and integrated React JS
                (JavaScript) and Bootstrap for user-friendly interfaces.
              </li>
              <li>
                Worked within a team environment, ensuring timely completion of
                assignments while adhering to coding standards and best
                practices.
              </li>
              <li>
                Demonstrated continuous learning and improvement of technical
                and professional skills.
              </li>
            </ul>
          </div>
          {/* Add more experience items */}
        </section>

        {/* Education */}
        <section className="education">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B. Tech. in Computer Science and Engineering</h3>
            <p>Government College of Engineering, Bhwanipatna (2021)</p>
            <p>Honors Degree with a CGPA of 8.76</p>
          </div>
          {/* Add more education items */}
        </section>

        {/* Expertise */}
        <section className="expertise">
          <h2>Expertise</h2>
          <ul>
            <li>
              <strong>Languages:</strong> Java 8, JavaScript
            </li>
            <li>
              <strong>Frameworks:</strong> Spring Boot, Spring data JPA, Spring
              Security, Hibernate, React JS
            </li>
            <li>
              <strong>Database:</strong> MySQL, Dynamodb
            </li>
            <li>
              <strong>Cloud:</strong> AWS
            </li>
            <li>
              <strong>Version Control:</strong> GitHub
            </li>
            <li>
              <strong>Others:</strong> Microservices, RestAPIs, Postman
            </li>
          </ul>
        </section>

        {/* Soft Skills */}
        <section className="soft-skills">
          <h2>Soft Skills</h2>
          <ul>
            <li>
              <strong>Leadership:</strong> Capable of taking charge and leading
              by example
            </li>
            <li>
              <strong>Quick Learner:</strong> Rapidly adapt to new technologies
              and concepts
            </li>
            <li>
              <strong>Good Communication:</strong> Effective communication with
              team members and stakeholders
            </li>
          </ul>
        </section>

        {/* Social Media */}
        <section className="social-media">
          <h2>Social Media</h2>
          <ul>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/bedamatta05"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2b6777" }}
              >
                github.com/bedamatta05
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/heyysaiii"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#2b6777" }}
              >
                linkedin.com/in/heyysaiii
              </a>
            </li>
          </ul>
        </section>

        {/* Download and Print Resume Section */}
        <section className="content-link" style={{ fontSize: "16px" }}>
          <a
            href="https://drive.google.com/file/d/11y_l5EUDP9Ixo-j9gm2rBzsKchqGnjiV/view?usp=sharing" /* Replace with the actual path to your PDF resume */
            target="_blank"
            rel="noreferrer"
          >
            Download PDF <i className="fas fa-arrow-right"></i>
          </a>
        </section>
      </main>
    </div>
  );
}

export default Resume;
