import "../assets/css/Sponsors.scss";
import Pediatric from "../assets/sponsors/pediatric.jpg";

import CoderSchool from "../assets/sponsors/coderschool.jpg";
import TigersTale from "../assets/sponsors/tigerstale.png";

function Sponsors() {
  return (
    <div id="sponsors">
      <div style={{ height: "70px" }}></div>
      <div className="sponsors">
        <h2 className="section-title">sponsors</h2>
        <div className="plat-sponsor-logos"></div>
        <div className="gold-sponsor-logos">
          <img
            src={Pediatric}
            alt="pediatric logo"
            className="logo"
            width="225"
            height="225"
          />
        </div>
        <div className="silver-sponsor-logos">
          <img
            src={CoderSchool}
            alt="coderschool logo"
            className="logo"
            width="150"
            height="150"
          />
          <img
            src={TigersTale}
            alt="tigerstale logo"
            className="logo"
            width="150"
            height="150"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
