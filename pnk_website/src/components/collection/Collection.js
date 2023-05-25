import React from "react";
import "./collection.css";
import sample1 from "./img/headerimg.png";
import sample2 from "./img/headerimg2.png";
import sample3 from "./img/headerimg3.png";
import { Link, Outlet} from "react-router-dom";


function Collection() {
  return (
    <div>
      <div class="collectionheader d-flex "></div>
      <h1 class="textheader">
        <span id="c">C</span>ollection
      </h1>
      <div class="row ">
        <div class="col-md-4 mx-auto p-3">
          <div class="card">
            <img class="card-img-top " src={sample1} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto p-3">
          <div class="card">
            <img class="card-img-top" src={sample2} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto p-3">
          <div class="card">
            <img class="card-img-top" src={sample3} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mx-auto p-3">
          <div class="card">
            <img class="card-img-top" src={sample1} />
            <div class="card-body">
              <h5 class="card-title">Keyboard Title</h5>
              <div class="card-text mb-3">
                This keyboard was modded with the inspiration from (some
                reference).
              </div>
              <Link to="/collection/keyboard" class="btn btn-primary">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
