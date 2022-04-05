import React from "react";
import "./services.scss";
import { BiCheck } from "react-icons/bi";

const service_data = [
  {
    name: 'UI/UX Design',
    data: ['123123123', '123213123', '123213123', 'a', 'b']
  },
  {
    name: 'Web Development',
    data: ['123123123', '123213123', '123213123', 'a', 'b', '123213123', 'a', 'b']
  },
  {
    name: 'Content Creation',
    data: ['123123123', '123213123', '123213123', 'a', 'b']
  }
]

const Services = () => {
  return <section id="services">
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
            <BiCheck className="service__list-icon"/>
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
  </section>;
};

export default Services;
