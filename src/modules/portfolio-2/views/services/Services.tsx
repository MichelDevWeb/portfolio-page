import React from "react";
import "./services.scss";
import { BiCheck } from "react-icons/bi";

const service_data = [
  // {
  //   name: "UI/UX Design",
  //   data: [
  //     "Design UI and develop high quality code that follows best practices and clean code principles.",
  //     "Proactively liaised with the design team and project manager to ensure efficient and timely delivery of significant projects",
  //   ],
  // },
  {
    name: "Web Development",
    data: [
      "Design UI and develop high quality code that follows best practices and clean code principles.",
      "Communicate with the client and collect feedback as well as implement them with a high satisfaction level.",
      "Familiar with Scrum/Agile methodology and working directly with clients",
      "Diagnosed and troubleshoot different websites by deploying updated knowledge of the modern technologies and techniques in the industry.",
      "Collaborated with team members to implement new feature developments.",
    ],
  },
  {
    name: "Others",
    data: [
      "Have knowledge in Microservice, Docker.",
      "Experience with SCRUM, Jira, Trello, Bitbucket, Github.",
      "Experience with DRY, KISS, SOLID principles.",
      "Experience with Visual Studio Code, Web Storm.",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container_2 services__container">
        {service_data.map((item, key) => (
          <article key={key} className="service">
            <div className="service__head">
              <h3>{item.name}</h3>
            </div>

            <ul className="service__list">
              {item.data.map((_item, _key) => (
                <li key={_key}>
                  <BiCheck className="service__list-icon" />
                  <p>{_item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
        {/* <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon"/>
            <p>Viet Nam vo dich</p>
          </li>
        </ul>
      </article> */}
      </div>
    </section>
  );
};

export default Services;
