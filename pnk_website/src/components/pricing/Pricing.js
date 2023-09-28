import React from "react";
import "./pricing.css";
function Pricing() {
  return (
    <div class="pricing container-fluid pt-5 ">
      <div class="row py-3 d-flex">
        <div class="col-12 mx-0 " align="center">
          <h1 class="p-1 pt-md-4">Modding services based on keyboard size</h1>
          <h2 class="pricing-disclaimer p-1 pt-md-4">
            SERVICES ONLY IN THESE AREAS: Eagle Rock, Glendale / Americana, Old
            Town Pasadena
          </h2>
          <div class="row keysize m-1 my-md-4">
            <div class="col-4 border border-dark py-5">
              <h2>
                <b>$30</b>
              </h2>
              <p>for keyboards &le; 65%</p>
            </div>
            <div class="col-4 border border-dark py-5">
              <h2>
                <b>$40</b>
              </h2>
              <p>for keyboards 75% to 80%(TKL)</p>
            </div>
            <div class="col-4 border border-dark py-5">
              <h2>
                <b>$50</b>
              </h2>
              <p>for keyboards 90% to Full size</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4">
          <div class="card freemium shadow ">
            <div class="card-header">On the budget</div>
            <div class="card-body">
              <h3 class="card-title freemiumtitle">
                <b>"FREE"MIUM</b>
              </h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  The Freemium service is essentially bringing your own
                  mechanical keyboard to me and I will still provide the lubing
                  service (Lubing prices will still be the same).
                </li>
                <li class="list-group-item">
                  The only drawback is that I will be working on said keyboard a
                  little later than people who have paid for Premium.
                </li>
                <li class="list-group-item">
                  Essentially, customers who paid for Premium get their keyboard
                  push to the front of the line while Freemium customers
                  literally get in line.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4 ">
          <div class="card premium shadow">
            <div class="card-header">Express modding service</div>
            <div class="card-body">
              <h3 class="card-title premiumtitle">
                <b>PREMIUM</b>
              </h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  You pay me for the total cost of how many items are in the
                  cart.
                </li>
                <li class="list-group-item">
                  For example: +$10 for every item (keyboard, switches, keycaps, etc)
                </li>
                <li class="list-group-item">
                  Premium is paying the full price of the keyboard shown on the
                  Collections tab. When you are paying for Premium, the
                  individual items will be sent to me and you will have priority
                  over freemium.
                </li>
                <li class="list-group-item">
                  What the priority provides is having your keyboard ready
                  sooner meaning I’ll work on it as soon as the parts come in
                  unless another person has also paid for the Premium service.
                </li>
                <li class="list-group-item">
                  Example: You pay for the Premium service, all your parts come
                  within 2-3 days, and I work on said keyboard once that third
                  day arrives. Once I start working on the keyboard, it’ll most
                  likely be ready either the next day or the day after.
                </li>
                <li class="list-group-item">
                  The product will be ready either the next day or two when all
                  items are received. Pickup date is decided by the customer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
