import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

const Experience = () => {
  const workExperience = [
    {
      company: "Cognizant Technology Solutions, Hyderabad",
      title: "Jr. Software Engineer",
      period: "Nov. 2022 - Present",
      year: "2023",
      technologies: [
        "Java 8,",
        " Spring Boot,",
        " Rest APIs,",
        " React JS & ",
        "AWS",
      ],
    },
    {
      company: "Cognizant Technology Solutions, Hyderabad",
      title: "Programmer Analysts Trainee",
      period: "Oct. 2021 - Oct. 2022",
      year: "2021",
      technologies: [
        "Core Java,",
        " Spring Boot,",
        " SQL,",
        " Rest APIs,",
        " JavaScript & ",
        "Angular",
      ],
    },
    {
      company: "Codewalla Solutions Pvt. Ltd., Pune",
      title: "SDE Trainee (Android)",
      period: "July 2021 - Sept. 2022",
      year: "2021",
      technologies: [
        "Java,",
        " Kotlin,",
        " Android Studio,",
        " XML,",
        " Constraint Layout,",
        " Rest APIs,",
        " Git",
      ],
    },
  ];

  const workItems = workExperience.map((work, i) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      iconStyle={{
        background: "#2b6777",
        color: "#fff",
        display: "flex",
        justifyContent: "center" /* Horizontal centering */,
        alignItems: "center"
      }}
      icon={work.year}
      key={i}
    >
      <h3
        className="vertical-timeline-element-title"
        style={{ textAlign: "left", color: "#2b6777" }}
      >
        {work.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: "left", color: "#52abc494", marginTop: "10px" }}
      >
        {work.company}
      </h4>
      <div
        style={{
          textAlign: "left",
          marginTop: "15px",
          color: "#2b6777",
          fontSize: "13px",
        }}
      >
        {work.technologies.map((technology, index) => (
          <Badge pill className="experience-badge mr-2 mb-2" key={index}>
            {technology}
          </Badge>
        ))}
      </div>
      <div
        style={{
          fontStyle: "italic",
          textAlign: "left",
          marginTop: "15px",
          color: "#2b6777",
          fontSize: "13px",
        }}
      >
        ({work.period})
      </div>
    </VerticalTimelineElement>
  ));

  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title">
            <span className="skills-heading" style={{ textAlign: "center" }}>
              Work Experience
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>{workItems}</VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
