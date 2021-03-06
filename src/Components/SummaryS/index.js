import React, { Component } from "react";
import LinkdinImg from "../../media/linkedin.png";
import GithubImg from "../../media/github.png";
import "./index.css";

class SummaryS extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <section id="SUMMARY">
        <div className="summary-observe" observe="0"></div>
        <div className="summaryS-wrapper-div">
          <h1 className="summary-name-h">
            Binyamin <span className="change-h1">Tal</span>
          </h1>
          <p className="summary-contact-p">
            MOBILE: 0507933868 | EMAIL:
            <span className="change-contact-p">NEWBENNYTAL@GMAIL.COM </span>
          </p>
          <p className="summary-lookingfor-p">
<<<<<<< HEAD
          My whole life I loved being in front of a computer, I was excited and passionated about making things happen with. But,
          I never took a step forward for making it my profession.
            <br /> <br />
            In january 2019 i decided to HUNT after what I want to myself.
            So I started exploring web development, And as I kept on I realized that my passion growing more and more.
            <br /> <br />
            Now I am looking for a challenging career opportunity at a dynamic
            company, with opportunities for progressive growth and professional
            development as web developer
=======
            My whole life I loved being in front of a computer, I was excited
            and passionate about making things happen with. But, I never took a
            step forward for making it my profession.
            <br /> <br />
            In january 2019 I decided to HUNT after what I want to myself. I
            started learning, exploring, deepening! on web developing, and as I
            kept on I realized that my passion growing more and more.
            <br /> <br />
            Now I am ready and looking for a challenging career opportunity at a
            dynamic company, with opportunities for progressive growth and
            professional development as web developer.
>>>>>>> a6e52e916446b0732e90acfcd47d7a2434969fe6
          </p>
          <div className="social-media-div">
            <a
              href="https://github.com/Benjamn89"
              target="https://github.com/Benjamn89"
            >
              <img
                className="social-ld-img"
                src={GithubImg}
                alt="social-github"
              />
            </a>
            <a href="https://www.linkedin.com/in/binyamintal" target="blank">
              <img src={LinkdinImg} alt="social-linkdin" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default SummaryS;
