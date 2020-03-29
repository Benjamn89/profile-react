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
            Looking for a challenging career opportunity at a dynamic company,
            with opportunities for progressive growth and professional
            development as web developer.
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
