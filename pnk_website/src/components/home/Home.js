import React from "react";
import { Carousel } from "react-bootstrap";
import "./home.css";
import headerimg from "./img/headerimg.png";
import headerimg2 from "./img/headerimg2.png";
import headerimg3 from "./img/headerimg3.png";

function Home() {
  return (
    <div>
      <div class="headercontainer position-relative">
        <div id="headertext" class="text-center">
          <h1 id="header1">
            <span id="p">P</span>
            retty <span id="n">N</span>
            eat <span id="k">K</span>
            eys
          </h1>
          <h3 id="header2">by PNK Co.</h3>
        </div>
        <Carousel
          className="headercarousel"
          controls={false}
          indicators={false}
        >
          <Carousel.Item interval={2000}>
            <img class="img-fluid w-100" src={headerimg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img class="img-fluid w-100" src={headerimg2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img class="img-fluid w-100" src={headerimg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="jumbotron" align="center">
        <div>
          <h1>Keyboard Modding Service</h1>
          <p>
            Specializes in customizing mechanical keyboards based on style,
            comfort, and functionality
          </p>
        </div>
      </div>
      <div class="row border border-warning mx-auto">
        <div class="col-md-6">mod1</div>
        <div class="col-md-6">mod2</div>
      </div>
      <div class="border border-danger">Short price description</div>
    </div>
  );
}

export default Home;
