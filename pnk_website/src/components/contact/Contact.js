import React from "react";

function Contact() {
  return (
    <form class="mx-5 px-5">
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" class="form-control" id="email" placeholder="Email"/>
      </div>
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" class="form-control" id="name" placeholder="Full name"/>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" class="form-control" id="phone" placeholder="(###)-###-####"/>
      </div>
      <div class="form-group">
        <label for="textbox">Message</label>
        <textarea class="form-control" id="textbox" rows="3" placeholder="Let me know your thoughts"></textarea>
      </div>
    </form>
  );
}

export default Contact;
