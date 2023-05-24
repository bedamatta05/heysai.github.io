import React from "react";
import "./About.css";

const SkillSet = () => {
  return (
    <>
      <div className="skills">
        <div className="skills-heading">Technologies, I'm familiar with -</div>
        <div className="skills-items">
          <div className="skills-set">
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/html-5--v1.png"
                alt="HTML"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/css3.png"
                alt="CSS"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/bootstrap.png"
                alt="BOOTSTRAP"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/javascript--v1.png"
                alt="JAVASCRIPT"
              />
            </div>
          </div>
          <div className="skills-set">
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/react-native.png"
                alt="REACT JS"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/angularjs.png"
                alt="ANGULAR"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/nodejs.png"
                alt="NODE"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/java-coffee-cup-logo--v1.png"
                alt="CORE JAVA"
              />
            </div>
          </div>
          <div className="skills-set">
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/amazon-web-services.png"
                alt="AWS"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/api-settings.png"
                alt="REST APIS"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/github--v1.png"
                alt="GIT"
              />
            </div>
          </div>
          <div className="skills-set">
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/visual-studio-code-2019.png"
                alt="VSCODE"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/android-studio--v2.png"
                alt="ANDROID STUDIO"
              />
            </div>
            <div className="card">
              <img
                src="https://img.icons8.com/color/30/000000/adobe-illustrator--v1.png"
                alt="ILLUSTRATOR"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="skills-heading">Projects, I've worked on -</div>
    </>
  );
};

const About = () => {
  return (
    <div className="container-fluid">
      <div className="about container">
        <div className="heading">I'm Sai, Nice to meet you.</div>
        <div className="description">
          I'm an illustrator, designer, and aspiring full stack developer. In
          2021, I completed by gradutation in Computer Science and Engineering
          with 8.75 cgpa. And currently working as a Full Stack developer. When
          I'm not drawing, creating web-pages, and doing all my design-related
          interests, you'll find me outside with my friends in a calm place,
          reading science fiction/non-fiction, making memes, managing
          social-media pages and drinking as much tea as physically possible.
        </div>
        <SkillSet />
      </div>
    </div>
  );
};

export default About;
