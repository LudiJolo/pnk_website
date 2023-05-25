import React from "react";
import sampleimg from "./img/sample.png";
import showcase1 from "./img/showcase1.png";
import showcase2 from "./img/showcase2.png";
import showcase3 from "./img/showcase3.png";

function Keyboard() {
  return (
    <div class="detailcontainer p-5">
      <div class="detailinfo row pt-4 mb-5">
        <div class="col-md-5">
          <img class="img-fluid p-3" src={sampleimg} />
        </div>
        <div class="col-md-7">
          <h1>Alloy FPS Origins</h1>
          <table class="table table-striped">
            <tbody>
              <tr scope="row">
                <th>Brand</th>
                <td>HyperX</td>
              </tr>
              <tr scope="row">
                <th>Size</th>
                <td>Full size</td>
              </tr>
              <tr scope="row">
                <th>Switch</th>
                <td>Cherry MX red</td>
              </tr>
              <tr scope="row">
                <th>Keycaps</th>
                <td>Generic HyperX Keycaps</td>
              </tr>
              <tr scope="row">
                <th>Color theme</th>
                <td>All black</td>
              </tr>
            </tbody>
          </table>
          <div>
            <span>Do you want this specific mod? </span>
            <button type="button" class="btn btn-primary">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div >
        <h1 id="detailheader" class="mb-5">About this keyboard</h1>
        <div class="row py-3">
          <div class="col-md-6">
            <img class="aboutimg " src={showcase1} />
          </div>
          <p class="col-md-6 d-flex align-items-center">
            &#x2022; Describe about the inspiration behind this keyboard.
            Mention its color scheme and what reference is this keyboard is
            based on.
          </p>
        </div>
        <div class="row py-3">
          <div class="col-md-6 order-md-2">
            <img class="aboutimg " src={showcase2} />
          </div>
          <p class="col-md-6 order-md-1 d-flex align-items-center">
            &#x2022; Mention the type of key switch that was used and describe
            how it feels. Also describe the type of keycaps and its typing
            experience.
          </p>
        </div>
        <div class="row py-3">
          <div class="col-md-6">
            <img class="aboutimg " src={showcase3} />
          </div>
          <p class="col-md-6 d-flex align-items-center">
            &#x2022; Mention additional features that this keyboard has. For
            example, this keyboard has added foaming underneath, enchancing the
            sound experience and provides more comfort in each key press.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
