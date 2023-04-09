import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./AboutMe.css";

export default function AboutMe(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Experience with Javascript (Angular 2+ / ReactJS framework). Proficient in creating user interfaces, troubleshooting simple/complex issues, and implementing new features based on user feedback. Strong professional with a spirit willing to be an asset for an organization",
    highlights: {
      bullets: [
        "Proficient in HTML, CSS, JavaScript",
        "Interactive Front End as per the design",
        "Redux for State Management",
        "Building REST API",
        "Experience with SCRUM, Git, Docker, SOLID",
        "Experience with WordPress",
        "Experience with Bootstrap, Webpack, MaterialUI"
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />

        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="Resume_NguyenDucHieu.pdf" download="Resume_NguyenDucHieu.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
