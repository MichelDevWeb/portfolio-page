import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setcarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading || ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading || ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description || ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 85 },
    { skill: "Angular", ratingPercentage: 90 },
    { skill: "HTML/CSS", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Seamless CRM",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A main project of old company",
      subHeading: "Technologies Used: Angular 2+, PHP",
    },
    {
      title: "Cameralla",
      duration: { fromDate: "2019", toDate: "2021" },
      description: "A main project of old company",
      subHeading:
        "Technologies Used: Angular 2+, Wordpress, Node JS (Loopback3)",
    },
    {
      title: "HOGGS",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A main project of old company",
      subHeading: "Technologies Used: Angular 2+, PHP",
    },
    {
      title: "WaterCircles v2",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A main project of old company",
      subHeading: "Technologies Used: Angular 2+, PHP",
    },
  ];

  const resumeDetails = [
    // EDUCATION
    <div className="resume-screen-container" key="education">
      <div className="experience-container">
        <ResumeHeading
          heading={"HUTECH University"}
          subHeading={"ENGINEER OF SOFTWARE DEVELOPMENT"}
          fromDate={"2015"}
          toDate={"2019"}
        />
        <br />
        <div className="education-description highlight">
          <div className="highlight-blob"></div>
          <span className="resume-description-text">
            Study software engineering (GPA: 3.63/4).
          </span>
        </div>
        <div className="education-description highlight">
          <div className="highlight-blob"></div>
          <span className="resume-description-text">
            Participate in NEC IT Project Design Course, Global Software Talent
            Lite (FPT Software HCM), final round of the Hutech IT Got Talent
            2018, ...
          </span>
        </div>
      </div>
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Contemi Solutions (Vietnam)"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"2019"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Communicate with the client to implement the new features,
            self-maintaining 2 outsourcing projects (using Angular 2+, NodeJS,
            WordPress) of the Norway company with high satisfaction levels
          </span>
        </div>
          <div className="experience-description">
          <span className="resume-description-text">
            - Diagnosed and troubleshoot different websites of the company's
            outsourcing clients by deploying updated knowledge of the modern
            technologies and techniques in the industry
          </span>
          </div>
          <div className="experience-description">
          <span className="resume-description-text">
            - Collaborated with product team members to implement new feature
            developments for the CRM site.
          </span>
          </div>
          <div className="experience-description">
          <span className="resume-description-text">
            - Proactively liaised with the design team and project manager to
            ensure efficient and timely delivery of significant projects.
          </span>
          </div>
          <div className="experience-description">
          <span className="resume-description-text">
            - Top 5 performance employees in Mar 2021 when completed the insurance
            web application on time.
          </span> 
         </div>
        {/* <ResumeHeading
          heading={"HUTECH University"}
          subHeading={"Collaborator of the Sakai project"}
          fromDate={"2018"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            aaaaaaaaaaaaaaaaaaaaaaaaa
          </span>
        </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetail, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetail.title}
          subHeading={projectDetail.subHeading}
          description={projectDetail.description}
          fromDate={projectDetail.fromDate}
          toDate={projectDetail.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setcarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, i) => (
      <div
        onClick={() => handleCarousal(i)}
        className={
          i === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={i}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/icons/${bullet.logoSrc}`)}
          default
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
