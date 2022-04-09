import React from "react";
import "./portfolio.scss";
import IMG1 from "../../../../assets/template-2/portfolio1.jpg";
import IMG2 from "../../../../assets/template-2/portfolio2.jpg";
import IMG3 from "../../../../assets/template-2/portfolio3.jpg";
import IMG4 from "../../../../assets/template-2/portfolio4.jpg";
import IMG5 from "../../../../assets/template-2/portfolio5.png";
import IMG6 from "../../../../assets/template-2/portfolio6.jpg";

const portfolio_data = [
  {
    title: "aaaaaaaaaaaaaaaaaa",
    imgSrc: IMG1,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
  {
    title: "bbbbbbbbbbbbbbbbbbbbb",
    imgSrc: IMG2,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
  {
    title: "cccccccccccccccccc",
    imgSrc: IMG3,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
  {
    title: "ddddddddddddddddd",
    imgSrc: IMG4,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
  {
    title: "eeeeeeeeeeeeeeeeeee",
    imgSrc: IMG5,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
  {
    title: "ffffffffffffffffffffff",
    imgSrc: IMG6,
    linkGithub: "https://github.com",
    linkDemo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container_2 portfolio__container">
        {portfolio_data.map((item, key) => (
          <article key={key} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.imgSrc} alt="" />
            </div>

            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.linkGithub} className="btn_2" target="_blank">
                Github
              </a>
              <a
                href={item.linkDemo}
                className="btn_2 btn-primary_2"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
