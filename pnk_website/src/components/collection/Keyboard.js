import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import sampleimg from "./img/sample.png";
import showcase1 from "./img/showcase1.png";
import showcase2 from "./img/showcase2.png";
import showcase3 from "./img/showcase3.png";

const images = [
  {
    original: showcase1,
    thumbnail: showcase1,
  },
  {
    original: showcase2,
    thumbnail: showcase2,
  },
  {
    original: showcase3,
    thumbnail: showcase3,
  },
];

function Keyboard() {
  return (
    <div class="detailcontainer p-md-5">
      <h1 align="center" class="p-5">
        Alloy FPS Origins
      </h1>
      <div class="detailinfo pt-4 mb-5">
        <ImageGallery items={images} autoPlay={true} />
      </div>
      <div class="row  text-center">
        <div class="col-md-4 mx-auto py-3">
          <div class="card shadow-lg py-2">
            <div class="card-body">
              <Icons.Tools className="icon" />
              <ul class="list-group list-group-flush">
                <li class="list-group-item py-4 fs-5">HyperX keycaps</li>
                <li class="list-group-item py-4 fs-5">Foam installed</li>
                <li class="list-group-item py-4 fs-5">O-rings</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto py-3">
          <div class="card shadow-lg py-2">
            <div class="card-body">
              <Icons.KeyboardFill className="icon" />
              <ul class="list-group list-group-flush">
                <li class="list-group-item py-4 fs-5">by HyperX</li>
                <li class="list-group-item py-4 fs-5">Full size</li>
                <li class="list-group-item py-4 fs-5">Cherry MX Reds</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto py-3">
          <div class="card shadow-lg py-2">
            <div class="card-body">
              <Icons.PaletteFill className="icon" />
              <ul class="list-group list-group-flush">
                <li class="list-group-item py-4 fs-5">No reference</li>
                <li class="list-group-item py-4 fs-5">All dark</li>
                <li class="list-group-item py-4 fs-5">RGB lighting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
