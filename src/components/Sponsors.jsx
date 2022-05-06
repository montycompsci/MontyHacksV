import "../assets/css/Sponsors.scss";
import Pediatric from "../assets/sponsors/pediatric.jpg";

import CoderSchool from "../assets/sponsors/coderschool.png";
import TigersTale from "../assets/sponsors/tigerstale.png";
import CodeNinjas from "../assets/sponsors/codeninjas2.png";

import InterviewCake from "../assets/sponsors/interviewcake.svg";
import Roboflow from "../assets/sponsors/roboflow2.png";
import Voiceflow from "../assets/sponsors/voiceflow.png";
import Wolfram from "../assets/sponsors/wolfram.svg";
import XYZ from "../assets/sponsors/xyz.png";
import OnePassword from "../assets/sponsors/1password.png";
import echo3d from "../assets/sponsors/echo3d.png";

function Sponsors() {
  return (
    <div id="sponsors">
      <div style={{ height: "30px" }}></div>
      <h2 className="section-title">sponsors</h2>
      <div className="sponsors">
        <div className="plat-sponsor-logos"></div>
        <div className="gold-sponsor-logos">
          <img
            src={Pediatric}
            alt="pediatric logo"
            className="financial-logo"
          />
        </div>
        <div className="silver-sponsor-logos">
          <div className="silver-row">
            <img src={CoderSchool} alt="coderschool logo" className="logo" />
            <img
              src={CodeNinjas}
              alt="code ninjas logo"
              className="financial-logo"
              id="codeninjas"
            />
            <img
              src={TigersTale}
              alt="tigerstale logo"
              className="financial-logo"
            />
          </div>
        </div>
        <div style={{ height: "70px" }}></div>
        <h2 className="section-title">in-kind sponsors</h2>
        <div style={{ height: "20px" }}></div>
        <div className="in-kind-logos">
          <div className="in-kind-row">
            <div>
              <img
                src={Roboflow}
                alt="roboflow logo"
                className="logo"
                id="roboflow"
              />
            </div>
            <div>
              <img
                src={InterviewCake}
                alt="interview cake logo"
                className="logo"
                id="interviewcake"
              />
            </div>
            <div>
              <img
                src={Voiceflow}
                alt="voiceflow logo"
                className="logo"
                id="voiceflow"
              />
            </div>
          </div>
          <div className="in-kind-row">
            <div>
              <img
                src={Wolfram}
                alt="wolfram logo"
                className="logo"
                id="wolfram"
              />
            </div>
            <div>
              <img src={XYZ} alt="xyz logo" className="logo" id="xyz" />
            </div>
            <div>
              <img
                src={OnePassword}
                alt="1password logo"
                className="logo"
                id="onepassword"
              />
            </div>
          </div>
          <div className="in-kind-row">
            <div>
              <img
                src={echo3d}
                alt="echo3d logo"
                className="logo"
                id="echo3d"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
