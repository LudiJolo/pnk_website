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
          <h1>Welcome</h1>
          <p>
            We are PNK! We are a keyboard assembly and modding service that
            specializes in customizing mechanical keyboards based on style,
            comfort, and functionality at budget prices! Check our other tabs
            for more info!
          </p>
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
          <a href="https://www.youtube.com/@PrettyNeatKeyboardsPNK" style={{ marginRight: '3em' }}>
            <img
              src={yt}
              class="img-fluid"
              style={{ maxWidth: "100px", height: "auto" }}
            />
          </a>
          <a href="https://www.instagram.com/prettyneatkeys/">
            <img
              src={ig}
              class="img-fluid"
              style={{ maxWidth: "67px", height: "auto" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
