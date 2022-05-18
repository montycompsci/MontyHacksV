import "../assets/css/About.scss";

import clock from "../assets/imgs/clock.svg";
import location from "../assets/imgs/location.svg";
import person from "../assets/imgs/person.svg";
import prizes from "../assets/imgs/prizes.svg";
import money from "../assets/imgs/money.svg";

function About() {
  return (
    <div id="about">
      <div style={{ height: "70px" }}></div>
      <h2 className="section-title">about</h2>
      <div className="about app-container">
        <p id="about-text">
          <img
            src={clock}
            alt="time"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">When:</strong> June 11th, 2022 <br />{" "}
          <br />
          <img
            src={location}
            alt="where"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Where:</strong> Montgomery High School
          (1016 Route 601, Skillman, NJ 08558) <br /> <br />
          <img
            src={person}
            alt="who"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Who:</strong> Beginner and veteran
          programmers are welcome!
          <br />
          <br />
          <img
            src={prizes}
            alt="what"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">What:</strong> $4,000+ in prizes, cool
          workshops, and free food and merch!
          <br />
          <br />
          <img
            src={money}
            alt="cost"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong class="about-section">Cost:</strong> $0 — attending MontyHacks
          is completely free!
          <br /> <br />
          {/* MontyHacks is the annual hackathon of Montgomery High School, located
          in Skillman, New Jersey — 2022 marks the fifth year we’ve been running
          it. MontyHacks V will be run in a hybrid format with an in-person
          focus, so that hackers can join us online or at Montgomery High
          School.
          <br /> <br />
          Participants will collaborate with each other to build cool projects
          and compete for over $1,000 in prizes! Throughout the day, we’ll have
          workshops and talks as well as free food and SWAG (shirts, stickers,
          etc.).
          <br /> <br />
          Beginner and veteran programmers alike will have a great time at
          MontyHacks while also learning new skills and technologies in a team
          environment. We hope to see you there! */}
        </p>
      </div>
      <div id="about-btn-wrapper">
        <a href="https://montyhacks-v.devpost.com/">
          <button id="about-btn">Devpost</button>
        </a>
        <a href="https://discord.gg/3PQ8X6zk">
          <button id="about-btn">Discord</button>
        </a>
      </div>
    </div>
  );
}

export default About;
