import "../assets/css/Sponsors.scss";
import Pediatric from "../assets/sponsors/pediatric.jpg";

function Sponsors() {
  return (
    <div id="sponsors">
      <div style={{ height: "70px" }}></div>
      <div className="sponsors">
        <h2 className="section-title">sponsors</h2>
        <div
        id= "sponsor_logos">
          <img
            src={Pediatric}
            alt="pediatric logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
