import "../assets/css/Sponsors.scss";
import Pediatric from "../assets/sponsors/pediatric.jpg";

import CoderSchool from "../assets/sponsors/coderschool.png";
import TigersTale from "../assets/sponsors/tigerstale.png";
import CodeNinjas from "../assets/sponsors/codeninjas.png";

import InterviewCake from "../assets/sponsors/interviewcake.svg";
import Roboflow from "../assets/sponsors/roboflow2.png";
import Voiceflow from "../assets/sponsors/voiceflow.png";

function Sponsors() {
  return (
    <div id="sponsors">
      <div style={{ height: "30px" }}></div>
      <h2 className="section-title">sponsors</h2>
      <div className="sponsors">
        <div className="plat-sponsor-logos"></div>
        <div className="gold-sponsor-logos">
          <img src={Pediatric} alt="pediatric logo" className="logo" />
        </div>
        <div className="silver-sponsor-logos">
          <div className="silver-row">
            <img src={CoderSchool} alt="coderschool logo" className="logo" />
            <img
              src={CodeNinjas}
              alt="code ninjas logo"
              className="logo"
              id="codeninjas"
            />
            <img src={TigersTale} alt="tigerstale logo" className="logo" />
          </div>
        </div>
        <div style={{ height: "70px" }}></div>
        <h2 className="section-title">in-kind sponsors</h2>
        <div className="in-kind-logos">
          <div className="in-kind-row">
            <img
              src={Roboflow}
              alt="roboflow logo"
              className="logo"
              id="roboflow"
            />
            <img
              src={InterviewCake}
              alt="interview cake logo"
              className="logo"
              id="interviewcake"
            />
            <img
              src={Voiceflow}
              alt="voiceflow logo"
              className="logo"
              id="voiceflow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
