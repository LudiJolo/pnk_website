import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./pricing.css";
import * as Icons from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import FreeModal from "./FreeModal";
import PremiumModal from "./PremiumModal";
import MembraneModal from "./MembraneModal";
import BuildModal from "./BuildModal";
function Pricing() {
  const [freeModal, setfreeModal] = useState(false);
  const [premModal, setpremModal] = useState(false);
  const [memModal, setmemModal] = useState(false);
  const [buildModal, setbuildModal] = useState(false);

  const [selected, setSelected] = useState(null);

  return (
    <div class="pricing container-fluid pt-5 ">
      <div class="row py-3 d-flex">
        <div class="col-12 mx-0 " align="center">
          <h1 class="p-1 pt-md-4">Guide for Pricing</h1>
          <h2 class="pricing-disclaimer p-1 pt-md-4">
            - SERVICES ONLY IN THESE AREAS: Eagle Rock, Glendale / Americana,
            Old Town Pasadena
          </h2>
        </div>
        <div class="col-md-6 p-3 pb-md-0">
          <Card
            className="pricinglink"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => setfreeModal(true)}
          >
            <div class="icon-box">
              <div class="homeicon">
                <div class="i">
                  <Icons.Coin className="priceicon" />
                </div>
              </div>
              <h4>"Free"mium</h4>
              <p>Click for more info</p>
            </div>
          </Card>
        </div>
        <div class="col-md-6 p-3 pb-md-0">
          <Card
            className="pricinglink"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => setpremModal(true)}
          >
            <div class="icon-box">
              <div class="homeicon">
                <div class="i">
                  <Icons.CashCoin className="priceicon" />
                </div>
              </div>
              <h4>Premium</h4>
              <p>Click for more info</p>
            </div>
          </Card>
        </div>
        <div class="col-md-6 p-3 pb-md-0">
          <Card
            className="pricinglink"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => setmemModal(true)}
          >
            <div class="icon-box">
              <div class="homeicon">
                <div class="i">
                  <Icons.Icon1Square className="priceicon" />
                </div>
              </div>
              <h4>Membrane</h4>
              <p>Click for more info</p>
            </div>
          </Card>
        </div>
        <div class="col-md-6 p-3 pb-md-0">
          <Card
            className="pricinglink"
            style={{ textDecoration: "none", cursor: "pointer" }}
            onClick={() => setbuildModal(true)}
          >
            <div class="icon-box">
              <div class="homeicon">
                <div class="i">
                  <Icons.Tools className="priceicon" />
                </div>
              </div>
              <h4>Build-a-Board</h4>
              <p>Click for more info</p>
            </div>
          </Card>
        </div>
      </div>

      <FreeModal show={freeModal} onHide={() => setfreeModal(false)} />
      <PremiumModal show={premModal} onHide={() => setpremModal(false)} />
      <MembraneModal show={memModal} onHide={() => setmemModal(false)} />
      <BuildModal show={buildModal} onHide={() => setbuildModal(false)} />
    </div>
  );
}

export default Pricing;
