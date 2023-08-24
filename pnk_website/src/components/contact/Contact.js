import { React, useReducer } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Row } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
function Contact() {
  return (
    <div class="contactcontainer">
      <div align="center" class="contactform">
        <div class="row">
          <div class="col-12 text-center">
            <div class="info-box mb-4">
              <Icons.EnvelopeAtFill className="i" />
              <br />
              <p>Email</p>
              <a href="mailto:prettyneatkeys@gmail.com">
                prettyneatkeys@gmail.com
              </a>
            </div>
          </div>
          <div class="col-12 text-center">
            <div class="info-box mb-4">
              <Icons.People className="i" />
              <br />
              <p>Socials</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="https://www.youtube.com/@PrettyNeatKeyboardsPNK">
                    <Icons.Youtube className="social-icon" />
                  </a>
                </div>
                <div class="col-md-6">
                  <a href="https://www.instagram.com/prettyneatkeys/">
                    <Icons.Instagram className="social-icon " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
      
      <form class="contactform shadow-lg mx-auto">
        <h1 align="center">Reach out to me</h1>
        <div class="form-group mb-3">
          <label for="email"><b>Email Address</b></label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-3">
          <label for="name"><b>Your Name</b></label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Full name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="phone"><b>Phone Number</b></label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="(###)-###-####"
          />
        </div>
        <div class="form-group ">
          <label for="textbox"><b>Message</b></label>
          <textarea
            class="form-control"
            id="textbox"
            rows="3"
            placeholder="Let me know your thoughts"
          ></textarea>
        </div>
      </form>
      */}
    </div>
  );
}

export default Contact;
