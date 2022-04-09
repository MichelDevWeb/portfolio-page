import React from "react";
import Header from "../component/header/Header";
import Nav from "../component/nav/Nav";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "../component/footer/Footer";

import "./template_2.scss";

const Portfolio_2 = () => {

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio_2;
