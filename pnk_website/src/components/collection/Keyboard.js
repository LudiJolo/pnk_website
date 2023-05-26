import React from "react";
import {Tabs, Tab} from "react-bootstrap"
import sampleimg from "./img/sample.png";

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
          <div class="py-3">
            <span>Do you want this specific mod? </span>
            <button type="button" class="btn btn-primary">
              Order preset
            </button>
          </div>
        </div>
      </div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="overview" title="Overview">
        Overview
      </Tab>
      <Tab eventKey="features" title="Features">
        Features
      </Tab>
      <Tab eventKey="sound" title="Sound Test">
        Video
      </Tab>
    </Tabs>
    </div>
  );
}

export default Keyboard;
