import React from "react";
import "./about.scss";
import ME from "../../../../assets/template-2/avt-me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about_data = [
  {
    title: "Experience",
    description: "3+ Years Working",
    icon: <FaAward className="about__icon" />,
  },
  {
    title: "Projects",
    description: "10+ Completed",
    icon: <VscFolderLibrary className="about__icon" />,
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container_2 about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {about_data.map((item, key) => (
              <article key={key} className="about__card">
                {item.icon}
                <h5>{item.title}</h5>
                <small>{item.description}</small>
              </article>
            ))}
          </div>

          <p>
          Having nearly 3 years of experience in software development. I'm a highly motivated and hard-working engineer specializing in Angular 2+, ReactJS, JavaScript and TypeScript. </p>
          <p>Proficient in creating user interfaces, writing and testing code, troubleshooting simple/complex issues and implementing new features based on user feedback. </p>

          <a href="#contact" className="btn_2 btn-primary_2">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
