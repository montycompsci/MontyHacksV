import "../assets/css/About.scss";

function About() {
  return (
    <div>
      <h2 className="section-title">About</h2>
      <div className="about" id="about">
        <p id="about-text">
          <img
            src="https://img.icons8.com/ios/50/000000/clock--v1.png"
            alt="time"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong>When</strong>: June 11th, 2022 <br /> <br />
          <img
            src="https://img.icons8.com/ios/50/000000/building.png"
            alt="where"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong>Where</strong>: Montgomery High School (1016 Route 601,
          Skillman, NJ 08558) <br /> <br />
          <img
            src="https://www.freeiconspng.com/thumbs/person-icon/file-person-icon-black-01-svg-6.png"
            alt="who"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong>Who</strong>: Beginner and veteran programmers are welcome —
          we’ll have events for all experience levels!
          <br />
          <br />
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/203/930/large_2x/computer-png.png"
            alt="what"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong>What</strong>: $1,000+ in prizes, workshops, free food, SWAG
          (shirts, stickers, etc.)
          <br />
          <br />
          <img
            src="https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-dollar-symbol-signs-icons-1.png"
            alt="cost"
            width="40"
            height="40"
            style={{ marginRight: "20px" }}
          />
          <strong>Cost</strong>: $0 — attending MontyHacks is completely free!
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
    </div>
  );
}

export default About;
