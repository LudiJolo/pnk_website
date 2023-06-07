import React from "react";
import "./about.css";
import showcase1 from "./img/showcase1.png";
import showcase2 from "./img/showcase2.png";
import showcase3 from "./img/showcase3.png";

function About() {
  return (
    <div class="about">
      <div>
        <div class="aboutheader d-flex "></div>
        <h1 class="textheader">
          <span class="aboutletter">A</span>bout{" "}
          <span class="aboutletter">P</span>NK
        </h1>
      </div>
      <div class="row mx-auto p-5">
        <div class="col-md-6 py-3 d-flex align-items-center">
          <img class="aboutimg " src={showcase1} />
        </div>
        <div class="abouttext col-md-6 d-flex align-items-center">
          <p>
            As a keyboard enthusiast, I am passionate about the art of keybaord
            customization. My mission is to provide keyboard modding services
            tailored to your specific preferences and/or needs. If you wish for
            an anime themed keyboard, I can customize one for you.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 order-md-2 py-3 d-flex align-items-center">
            <img class="aboutimg " src={showcase2} />
          </div>
          <div class="abouttext col-md-6 order-md-1 d-flex align-items-center">
            <p>
              From keycap replacement and switch swapping to foaming
              installment, I offer a comprehensive range of services to
              transform your keyboard into a unique, aesthetic peripheral. I
              value open communication, and I'm willing to work closely with you
              throughout the modding process to ensure that your expectations
              are met or exceeded.
            </p>
          </div>
        </div>
        <div class="col-md-6 py-3 d-flex align-items-center">
          <img class="aboutimg " src={showcase3} />
        </div>
        <div class="abouttext col-md-6 d-flex align-items-center">
          <p>
            I offer two{" "}
            <a class="d-inline" href="">
              pricing options
            </a>{" "}
            for the modding services while delivering exceptional craftsmanship
            and customer satisfaction. For an accurate quote for your specific
            modding project, please reach out to me to discuss your
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
