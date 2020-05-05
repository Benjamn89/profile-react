import React, { Component } from "react";
import LinkdinImg from "../../media/linkedin.png";
import GithubImg from "../../media/github.png";
import "./index.css";

class SummaryS extends Component {
  shouldComponentUpdate() {
    console.log("SummaryS -> SCP");
    return true;
  }

  render() {
    console.log("SummaryS -> RENDER!!!");
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
            My Whole life i loved being in front of a computer, i was exited and
            passiontae about making things happen with that.
            <br />
            But, i never took a step for making it my profession.
            <br /> <br />2 years ago i make a decision to HUNT after what i want
            to my self. <br />I started learning/ exploring/ deepening web
            development! an as i going on i realize that my passion keep growing
            more and more.
            <br /> <br />
            Now i need you, to open the door for me for this fascinating world,
            to give me the chance to make my dream to reality.
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
