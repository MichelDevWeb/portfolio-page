import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/michel.nguyen567"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/m_i_c_h_e_o/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/michel-nguyen-407950144/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/MichelN59512456"
              >
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Micheo</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React/Angular Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Bulding applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href="Resume_NguyenDucHieu.pdf" download="Resume_NguyenDucHieu.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
