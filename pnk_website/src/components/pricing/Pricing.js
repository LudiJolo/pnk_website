import React from "react";

function Pricing() {
  return (
    <div class="container-fluid pt-5 ">
      <div class="row py-3 ">
        <div class="row col-12 mx-0 " align="center">
          <h1 class="p-1 py-md-4">Modding services based on keyboard size</h1>
          <div class="col-4 border border-dark">
            <h3>&le; 65%</h3>
            <h5>$30</h5>
          </div>
          <div class="col-4 border border-dark">
            <h3>75% to 80%(TKL)</h3>
            <h5>$40</h5>
          </div>
          <div class="col-4 border border-dark">
            <h3>90% to Full size</h3>
            <h5>$50</h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">On the budget</div>
            <div class="card-body">
              <h5 class="card-title">"Free"mium</h5>
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
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Express modding service</div>
            <div class="card-body">
              <h5 class="card-title">Premium</h5>
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
