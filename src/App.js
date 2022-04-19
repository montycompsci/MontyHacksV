import "./assets/css/App.scss";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import Wave1 from "./assets/imgs/wave1.svg";
import Wave2 from "./assets/imgs/wave2.svg";
import Wave3 from "./assets/imgs/wave3.svg";
import Wave4 from "./assets/imgs/wave4.svg";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div><Header></Header></div>
      <Container>
        <div data-aos="fade-left" data-aos-once="true"><About></About></div>
        <img src={Wave1} alt="wave" width="100%" />
        <div style={{ height: "70px" }}></div>
        <div data-aos="fade-right" data-aos-once="true"><FAQ></FAQ></div>
        <img src={Wave2} alt="wave" />
        <div style={{ height: "70px" }}></div>
        <div data-aos="fade-left" data-aos-once="true"><Schedule></Schedule></div>
        <img src={Wave3} alt="wave" />
        <div style={{ height: "70px" }}></div>
        <div data-aos="fade-right" data-aos-once="true"><Sponsors></Sponsors></div>
        <img src={Wave4} alt="wave" />
        <div style={{ height: "70px" }}></div>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
