import { React, useReducer } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Row, Form, Button } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
function Contact() {
  return (
    <div class="contactcontainer">
      <div align="center" class="contactform shadow-lg ">
        <div class="row">
          <div class="msgform col-md-6 text-center">
            <Form className="p-2">
              <h1 class>Reach out to me</h1>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  maxLength={500}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-2">
                Submit
              </Button>
            </Form>
          </div>
          <div class="socials col-md-6 text-center p-2">
            <div class="info-box mb-4">
              <Icons.EnvelopeAtFill className="i" />
              <br />
              <p>Email</p>
              <a href="mailto:prettyneatkeys@gmail.com">
                prettyneatkeys@gmail.com
              </a>
            </div>
            <div class="info-box">
              <Icons.People className="i" />
              <br />
              <p>Socials</p>
              <div class="row">
                <div class="col-6">
                  <a href="https://www.youtube.com/@PrettyNeatKeyboardsPNK">
                    <Icons.Youtube className="social-icon" />
                  </a>
                </div>
                <div class="col-6">
                  <a href="https://www.instagram.com/prettyneatkeys/">
                    <Icons.Instagram className="social-icon " />
                  </a>
                </div>
                <div class="col-6">
                  <a href="https://www.twitch.tv/pnkeys/">
                    <Icons.Twitch className="social-icon " />
                  </a>
                </div>
                <div class="col-6">
                  <a href="https://www.tiktok.com/@pnkeys?_t=8jBRcKVkRul&_r=1">
                    <Icons.Tiktok className="social-icon " />
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
