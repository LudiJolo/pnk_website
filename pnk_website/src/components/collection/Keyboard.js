import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Tabs, Tab, Button } from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import ImageGallery from "react-image-gallery";
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";
import sampleimg from "./img/sample.png";
import showcase1 from "./img/showcase1.png";
import showcase2 from "./img/showcase2.png";
import showcase3 from "./img/showcase3.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import PreCheckout from "../utils/precheckout";

function Keyboard() {
  const [keyboard, setKeyboard] = useState(null);
  const [images, setImages] = useState(null);
  const [preCheckoutModal, setPrecheckout] = useState(false);

  const { keyboard_id } = useParams();
  console.log(keyboard_id);
  useEffect(() => {
    (async () => {
      try {
        const item = doc(db, "keyboards", keyboard_id);
        const itemSnap = await getDoc(item);
        if (itemSnap.exists()) {
          console.log("Document data:", itemSnap.data());
          setKeyboard(itemSnap.data());
          const img = [
            {
              original: itemSnap.data().imgURL1,
              thumbnail: itemSnap.data().imgURL1,
            },
            {
              original: itemSnap.data().imgURL2,
              thumbnail: itemSnap.data().imgURL2,
            },
            {
              original: itemSnap.data().imgURL3,
              thumbnail: itemSnap.data().imgURL3,
            },
          ];

          setImages(img);
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log("Error occured when fetching keyboards");
      }
    })();
  }, []);

  return (
    <div class="detailcontainer p-md-3">
      {keyboard && (
        <>
          <div class="jumbotron">
            <div>
              <h1>{keyboard.name}</h1>
              <p>
                Do you want this custom keyboard?{" "}
                <Button onClick={() => setPrecheckout(true)}>
                  Buy preset
                </Button>
              </p>
              <a class="btn btn-primary scrollto" href="#soundtest">
                Sound test
              </a>
            </div>
          </div>

          <div class="detailinfo pt-4 mb-5">
            {images && <ImageGallery items={images} autoPlay={true} />}
          </div>
          <div class="row  text-center">
            <div class=" col-md-4 mx-auto py-3">
              <div class="info1 card shadow-lg py-2">
                <div class="card-body">
                  <Icons.Tools className="icon" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.specifics.spec1}
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.specifics.spec2}
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.specifics.spec3}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class=" col-md-4 mx-auto py-3">
              <div class="info2 card shadow-lg py-2">
                <div class="card-body">
                  <Icons.KeyboardFill className="icon" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.general.brand}
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.general.size}%
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.general.switch}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class=" col-md-4 mx-auto py-3">
              <div class="info3 card shadow-lg py-2">
                <div class="card-body">
                  <Icons.PaletteFill className="icon" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.theme.reference}
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.theme.colorTheme}
                    </li>
                    <li class="list-group-item py-4 fs-5">
                      {keyboard.theme.otherInfo}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            id="soundtest"
            align="center"
            class="mt-5 py-5 text-bg-dark shadow-lg"
          >
            <h1>Sound Test</h1>
            <ReactPlayer id="player" url={keyboard.soundTest} controls={true} />
          </div>
          <PreCheckout
            data={keyboard}
            show={preCheckoutModal}
            onHide={() => setPrecheckout(false)}
          />
        </>
      )}
    </div>
  );
}

export default Keyboard;
