import React from "react";
import "./about.css";
import showcase1 from "./img/showcase1.png";
import showcase2 from "./img/showcase2.png";
import showcase3 from "./img/showcase3.mp4";
import { Link } from "react-router-dom";

function About() {
  return (
    <div class="about">
      <div>
        <div class="aboutheader d-flex shadow-lg"></div>
        <h1 class="textheader">
          <span class="aboutletter">A</span>bout{" "}
          <span class="aboutletter">P</span>NKeys
        </h1>
      </div>
      <div class="row mx-auto p-5">
        <div class="col-md-6 py-3 d-flex align-items-center">
          <img class="aboutimg rounded-5 shadow-lg" src={showcase1} />
        </div>
        <div class="abouttext col-md-6 d-flex align-items-center">
          <p>
            Keyboard customization was something I’ve gotten into as of
            recently. I am here to show people that having something premium at
            a budget price is possible. A keyboard is a daily driver that people
            use whether you are doing an office job, gaming, or content
            creation. I am here to show and provide the service of having that
            keyboard made for you. Any theme you have in mind I will do my best
            to provide it for you. Anime. Seasons. Color schemes. Sound. You
            name it.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 order-md-2 py-3 d-flex align-items-center">
            <img class="aboutimg rounded-5 shadow-lg" src={showcase2} />
          </div>
          <div class="abouttext col-md-6 order-md-1 d-flex align-items-center">
            <p>
              So to repeat what I do, I provide a lubing service as well as just
              assembling the keyboard. What I am exactly lubing are the
              mechanical switches and the stabilizers. Lubing the mechanical
              switches help give it a smooth press and as well as that ASMR
              sounds that you might have seen on Youtube, Instagram, and maybe
              Tiktok. But that is the bare minimum, not because that’s all that
              I will provide. I want to talk to YOU the customer and go through
              the process of making the keyboard your own.
            </p>
          </div>
        </div>
        <div class="col-md-6 py-3 d-flex align-items-center">
          <video class="video rounded-5 shadow-lg" controls>
            <source src={showcase3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="abouttext col-md-6 d-flex align-items-center">
          <p>
            I offer four{" "}
            <Link class="d-inline" to="/pricing/">
              different services
            </Link>{" "}
            . Yes, four. Freemium, Premium, Membrane, and Build-a-Board. Each
            coming with affordable prices. Please see the Pricing Guide tab for
            more information. With the way I charge it’ll be affordable for
            people who are barely getting into the scene like I was last year.
            As well as for people who have been keeping up with custom keyboards
            who want to get their hands on their very first one. As with my
            general lubing service, I lube by size of the keyboard. Most people
            who charge a lubing service charge per switch. That could range
            around $0.80 to $1.30. Again with my services they are a lot more
            affordable. Allow me to make the perfect keyboard for you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
