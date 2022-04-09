import React from "react";
import "./experience.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience_FE = [
  {
    id: 0,
    name: "HTML, CSS",
    icon: "",
    level: "Experienced",
  },
  {
    id: 1,
    name: "JavaScript",
    icon: "",
    level: "Experienced",
  },
  {
    id: 2,
    name: "Angular 2+",
    icon: "",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "TypeScript",
    icon: "",
    level: "Experienced",
  },
  {
    id: 4,
    name: "ReactJS",
    icon: "",
    level: "Experienced",
  },
  {
    id: 5,
    name: "Bootstrap, Material UI",
    icon: "",
    level: "Experienced",
  },
];

const Experience_BE = [
  {
    id: 5,
    name: "NodeJS",
    icon: "",
    level: "Experienced",
  },
  {
    id: 6,
    name: "PHP",
    icon: "",
    level: "Experienced",
  },
  {
    id: 7,
    name: "MySQL",
    icon: "",
    level: "Experienced",
  },
  {
    id: 8,
    name: "Docker",
    icon: "",
    level: "Experienced",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container_2 experience__container">
        {/* START OF FRONTEND */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {Experience_FE.map((item) => (
              <article key={item.id} className="experience__details">
                {item?.icon ? (
                  item.icon
                ) : (
                  <BsPatchCheckFill className="experience__details-icon" />
                )}
                <div>
                  <h4 className="experience__name">{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* END OF FRONTEND */}

        {/* START OF BACKEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {Experience_BE.map((item) => (
              <article key={item.id} className="experience__details">
                {item?.icon ? (
                  item.icon
                ) : (
                  <BsPatchCheckFill className="experience__details-icon" />
                )}
                <div>
                  <h4 className="experience__name">{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* END OF BACKEND */}
      </div>
    </section>
  );
};

export default Experience;
