import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import "./nav.scss";

const routes = [
  {
    id: 1,
    name: "home",
    href: "#",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "about",
    href: "#about",
    icon: <AiOutlineUser />,
  },
  {
    id: 3,
    name: "experience",
    href: "#experience",
    icon: <BiBook />,
  },
  {
    id: 4,
    name: "services",
    href: "#services",
    icon: <RiServiceLine />,
  },
  {
    id: 5,
    name: "contact",
    href: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState("#");

  return (
    <nav>
      {routes.map((prop) => (
        <a
          key={prop.id}
          className={activeNav === prop.href ? "active" : ""}
          onClick={() => setActiveNav(prop.href)}
          href={prop.href}
        >
          {prop.icon}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
