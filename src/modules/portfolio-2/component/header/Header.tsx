import React from "react";
import CTA from "./CTA";
import ME from '../../../../assets/template-2/avt-me.png';

import "./header.scss";
import { HeaderSocials } from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container_2 header__container">
        <h5>Hi, I'm</h5>
        <h1>Duc Hieu</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      
      </div>
    </header>
  );
};

export default Header;
