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
        <div className="summaryS-wrapper-div">
          <h1 className="summary-name-h">
            Binyamin <span className="change-h1">Tal</span>
          </h1>
          <p className="summary-contact-p">
            MOBILE: 0507933868 | EMAIL:
            <span className="change-contact-p">NEWBENNYTAL@GMAIL.COM </span>
          </p>
          <p className="summary-lookingfor-p">
            My whole life I loved being in front of a computer, I was excited
            and passionate about making things happen with.
            <br />
            But, I never took a step for making it my profession.
            <br /> <br />2 years ago i decided to HUNT after what i want to
            myself. <br />I started learning/ exploring/ deepening web
            development! And as i going on i realize that my passion growing
            more and more.
            <br /> <br />
            Now i need you, to open the door for me for this fascinating world,
            to give me the chance to prove myself and make my dream to reality.
            <br />
            In return i promise that you will get my 100% every single day, you
            will get an employee who does not give up to himself, who will push
            to understand, improve, give and optimize his efficiency at any
            given time.
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
            <img src={LinkdinImg} alt="social-linkdin" />
          </div>
        </div>
      </section>
    );
  }
}

export default SummaryS;
