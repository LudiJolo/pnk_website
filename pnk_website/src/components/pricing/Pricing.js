import React from "react";
import "./pricing.css";
function Pricing() {
  return (
    <div class="pricing container-fluid pt-5 ">
      <div class="row py-3 d-flex">
        <div class="col-12 mx-0 " align="center">
          <h1 class="p-1 pt-md-4">Modding services based on keyboard size</h1>
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
              <h3 class="card-title freemiumtitle"><b>"FREE"MIUM</b></h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  If you already own a mechanical keyboard that needs
                  customization, I will only charge based on the size given
                  above. There is no additional cost for the modding items
                  and/or tools
                </li>
                <li class="list-group-item">
                  Meeting up for the keyboard at those areas or picking up at my
                  house will still be the way of receiving the product
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-4 ">
          <div class="card premium shadow">
            <div class="card-header">Express modding service</div>
            <div class="card-body">
              <h3 class="card-title premiumtitle"><b>PREMIUM</b></h3>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  You pay me for the total cost of how many items are in the
                  cart.
                </li>
                <li class="list-group-item">
                  +$10 for every item (keyboard, switches, keycaps, etc)
                </li>
                <li class="list-group-item">
                  +$(..) for modding services based on size listed above
                </li>
                <li class="list-group-item">
                  You will receive the product the next day after I collect all
                  the materials
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
