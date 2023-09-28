import React from "react";
import "./request.css";
import Lottie from "lottie-react";
import form from "./animations/animation_llpofrva.json";
import phone from "./animations/animation_llpogmbh.json";
import payment from "./animations/animation_llpqaxni.json";
import { Button } from "react-bootstrap";
const Request = () => {
  const anim_style = {
    height: 125,
  };
  return (
    <div class="requestcontainer">
      <h1 align="center">Custom Requests</h1>
      <div align="center" class="container ">
        <div class="card request-desc">
          <div class="card-body">
            Dreaming of your own unique keyboard? PNK offers custom requests to
            provide personalized keyboards based on the customer's aesthetic
            taste. You'll have the opportunity to connect with Albert to discuss
            your desired keyboard design down to its specific detail. Please
            fill out the request form, so we can begin processing your own
            custom keyboard.
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Note: We will also post your finalized keyboard in the Collections
              tab.
            </li>
          </ul>
        </div>
        <br />
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_HLUvlvUCc6lyAq1O_VIF34DbZ-xeAupn2t7b4a7INpWXdQ/viewform"
          className="mx-auto btn-success"
          disabled
        >
          Form coming soon
        </Button>
        <br />
        <br />
        <div class="container">
          <h1 align="center">How it works:</h1>
          <div class="request-steps row ">
            <div
              align="center"
              class="col-md-9 d-flex justify-content-center align-items-center"
            >
              Fill-out and submit a google form
            </div>
            <Lottie class="col-md-3" animationData={form} style={anim_style} />
            <div
              align="center"
              class="col-md-9 d-flex justify-content-center align-items-center"
            >
              Albert will respond via email to discuss specific keyboard
              requests
            </div>
            <Lottie class="col-md-3" animationData={phone} style={anim_style} />
            <div
              align="center"
              class="col-md-9 d-flex justify-content-center align-items-center"
            >
              Pay using your desired payment method once the keyboard is
              finished
            </div>
          </div>
    </>
};

export default Request;