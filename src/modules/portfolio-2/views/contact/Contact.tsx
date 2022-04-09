import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {environment} from 'environment'

const contact_data = [
  {
    title: "Phone",
    info: environment.personalInfo.phoneNumber,
    link: "",
    icon: <MdOutlineEmail className="contact__option-icon" />,
    text: "Call me",
  },
  {
    title: "Email",
    info: environment.personalInfo.email,
    link: `mailto:${environment.personalInfo.email}`,
    icon: <MdOutlineEmail className="contact__option-icon" />,
    text: "Send a message",
  },
  {
    title: "Email",
    info: environment.personalInfo.emailBackup,
    link: `mailto:${environment.personalInfo.emailBackup}`,
    icon: <MdOutlineEmail className="contact__option-icon" />,
    text: "Send a message",
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          environment.emailJS.serviceId,
          environment.emailJS.templateId,
          form.current,
          environment.emailJS.userId
        )
        .then(
          (result: any) => {
            console.log(result.text);
            form.current?.reset();
          },
          (error: any) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container_2 contact__container">
        <div className="contact__options">
          {contact_data.map((item, key) => (
            <article key={key} className="contact__option">
              {item.icon}
              <h4>{item.title}</h4>
              <h5>{item.info}</h5>
              <a href={item.link} target="_blank">
                {item.text}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            className="contact__input"
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            className="contact__input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="contact__textarea"
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn_2 btn-primary_2">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
