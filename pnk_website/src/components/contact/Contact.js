import { React, useReducer } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  return (
    <div class="contactcontainer">
      <div class="contactform">
        <h1 align="center">Reach out to me</h1>
        
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
