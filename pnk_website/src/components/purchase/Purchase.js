import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-bootstrap-icons";
import { Button, Card } from "react-bootstrap";
function Purchase() {
  return (
    <div class="container pt-5 " style={{ height: "100vh" }}>
      <h1 align="center" class="my-4">
        Purchase page
      </h1>
      <div class="row justify-content-between">
        <div class="col-md-3 mb-3">
          <Card className="border-success">
            <Card.Header align="center" style={{ backgroundColor: "#a0a0a0" }}>
              Freemium
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Going for Freemium?
                <br />
                <br />
                Fill out this form while sending a picture of your keyboard to
                our email here!
              </Card.Text>
              <Button
                href="https://docs.google.com/forms/d/1c13eUGnBKBRprAyq3Mz33qap9OqfL6L_nKywbkuNKIY/"
                variant="primary"
              >
                Let's Start!
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-3 mb-3">
          <Card className="border-success">
            <Card.Header align="center" style={{ backgroundColor: "#4498e2" }}>
              Premium
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Buying a prebuilt from our collection? Click here!
              </Card.Text>
              <Button href="/collection" variant="primary">
                Collection
              </Button>
              <br />
              <br />
              <Card.Text>
                Want a custom keyboard for you? Contact us here!
              </Card.Text>
              <Button
                href="https://docs.google.com/forms/d/1HtsGYmoupuPaHxYiYFxeqtMupA_PbDYQlFxfmFjB7T0"
                variant="primary"
              >
                Let's Talk!
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-3 mb-3">
          <Card className="border-success">
            <Card.Header align="center" style={{ backgroundColor: "#44e298" }}>
              Membrane
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Want the Membrane to be insane?
                <br />
                <br />
                Fill out this form to make your office keyboard cooler.
              </Card.Text>
              <Button href="https://docs.google.com/forms/d/1dR60tfNv5wwOax5TFfPgKfZd2hsSazB0yxxXzdXPqKo" variant="primary">Let's Start!</Button>
            </Card.Body>
          </Card>
        </div>
        <div class="col-md-3 mb-3">
          <Card className="border-success">
            <Card.Header align="center" style={{ backgroundColor: "#dc6aeb" }}>
              Build-a-Board
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Need me to put it all together?
                <br />
                <br />
                Fill out this form!
              </Card.Text>
              <Button href="https://docs.google.com/forms/d/1YfNnhs8uF6lws6xgLKWxI7E1GW0OzIeTnbBQ3NeXSaA" variant="primary">Oh yeah</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
