import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../../assets/img/mailz.jpeg";
// import load1 from "../../../src/assets/img//load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch 📧",
                2000,
                "Send Your Email Here! 👉",
                2000,
              ]}
            />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                {/* <i className="fa fa-paper-plane ml-1" /> */}
                {/* {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )} */}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
