import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import "./home.css";
import headerimg from "./img/headerimg.png";
import headerimg2 from "./img/headerimg2.png";
import headerimg3 from "./img/headerimg3.png";
import yt from "./img/YouTube-Emblem.png";
import ig from "./img/ig.png";
import twitch from "./img/twitch.png";
import tiktok from "./img/tiktok.png";
import aaron from "./img/aaronKeyboard.jpg";
function Home() {
  return (
    <div>
      <div class="headercontainer position-relative">
        <div id="headertext" class="text-center">
          <h1
            id="header1"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <span id="p">P</span>
            retty <span id="n">N</span>
            eat <span id="k">K</span>
            eys
          </h1>
          <h3
            id="header2"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            by PNK Co.
          </h3>
        </div>
        <Carousel
          className="headercarousel"
          controls={false}
          indicators={false}
          data-aos="flip-left"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <Carousel.Item interval={1500}>
            <img class="img-fluid w-100" src={headerimg} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img class="img-fluid w-100" src={headerimg2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img class="img-fluid w-100" src={headerimg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="jumbotron" align="center" data-aos="fade-left">
        <div data-aos="fade-up">
          <h1>Welcome</h1>
          <p>
            We are PNKeys! We are a keyboard assembly and modding service that
            specializes in customizing mechanical keyboards based on style,
            comfort, and functionality at budget prices! Check our other tabs
            for more info!
          </p>
          <img
            src={aaron}
            class="img-fluid rounded-5 shadow-lg"
            style={{ width: "30rem" }}
            data-aos="fade-up"
          />
        </div>
      </div>
      <div class="row mx-auto bg-dark">
        {/*
        <div class="col-md-6 mx-auto p-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <img class="card-img-top" src={headerimg} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
          <div class="col-md-6 mx-auto p-3">
          <div class="card">
            <div class="card-header">Featured</div>
            <img class="card-img-top" src={headerimg2} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
        
        <div align="center" class="mb-3">
          <Link to="/collection/" class="btn btn-primary">
            More keyboards
          </Link>
        </div>
      */}
      </div>

      <div class="jumbotron border-top border-dark" align="center">
        <h1 class="mb-5">Follow our socials below:</h1>
        <div>
          <a
            href="https://www.youtube.com/@PrettyNeatKeyboardsPNK"
            style={{ margin: "1em" }}
          >
            <img
              src={yt}
              class="img-fluid social-icon"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </a>
          <a
            href="https://www.instagram.com/prettyneatkeys/"
            style={{ margin: "1em" }}
          >
            <img
              src={ig}
              class="img-fluid social-icon"
              style={{ maxWidth: "67px", height: "auto" }}
            />
          </a>
          <a href="https://www.twitch.tv/pnkeys" style={{ margin: "1em" }}>
            <img
              src={twitch}
              class="img-fluid social-icon"
              style={{ maxWidth: "67px", height: "auto" }}
            />
          </a>
          <a href="https://www.tiktok.com/@pnkeys?_t=8jBRcKVkRul&_r=1" style={{ margin: "1em" }}>
            <img
              src={tiktok}
              class="img-fluid social-icon"
              style={{ maxWidth: "67px", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
