import React from "react";
import "./about.scss";
import ME from "../../../../assets/template-2/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Viet nam vo dich asdhjfbhkasdhfjsadf jkjkahsfkjashdfjksdhajk fhakjf
            haskjdhfkjasdhfjkahs fjk ajksf hjjkas kjas kja hjkashfjkasd fhkah
            jka
          </p>

          <a href="#contact" className="btn_2 btn-primary_2">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
