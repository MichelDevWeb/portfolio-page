import React from "react";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { environment } from "environment";

const footer_data = {
  permalinks: [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    // {
    //   name: "Testimonials",
    //   href: "#testimonials",
    // },
    {
      name: "Contact",
      href: "#contact",
    },
  ],
  socials: [
    { href: environment.socials.facebook, icon: <FaFacebookF /> },
    { href: environment.socials.linkedIn, icon: <BsLinkedin /> },
    { href: environment.socials.github, icon: <FaGithub /> },
  ],
};

const Footer = () => {
  return (
    <footer className="footer__container">
      <a href="#" className="footer__logo">
        MICHEO
      </a>

      <ul className="permalinks">
        {footer_data.permalinks.map((item, key) => (
          <li key={key}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {footer_data.socials.map((item, key) => (
          <a key={key} href={item.href} target="_blank">
            {item.icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; MICHEO Tutorials. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
