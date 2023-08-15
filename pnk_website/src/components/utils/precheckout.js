import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_live_51Ne8BTAdiYaqB0hWN9LAExHn0zF31uczK75jDgpYephyCjBtelLpYKixNerbQ2qS2uuvjCnLhOe1fqSlTeNnEwYu00lM6pqAWp"
    );
  }
  return stripePromise;
};

const PreCheckout = (props) => {
  const item = {
    price: props.data.stripeProductKey,
    quantity: 1,
  };
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/collection`,
    cancelUrl: `${window.location.origin}/collection`,
  };

  const redirectToCheckout = async () => {
    console.log("redirect checkout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pre-checkout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Items</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {props.data.additionals.map((itm) => (
              <tr>
                <td>{itm.itmName}</td>
                <td>${itm.itmCost}</td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th>Other fees</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Lubing service based on keyboard size: {props.data.general.size}
                %
              </td>
              <td>${props.data.sizePrice}</td>
            </tr>
            <tr>
              <td>Additional cost per item ({props.data.itemCount}) x $10</td>
              <td>${props.data.itemCount * 10}</td>
            </tr>
          </tbody>
        </Table>
        <h3 align="end">Total: ${props.data.total}</h3>
      </Modal.Body>
      <Modal.Footer>
        <a class="btn btn-primary" href="https://buy.stripe.com/9AQeWA86QeTSc4UcMM">
          Checkout
        </a>
        <Button variant="warning" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreCheckout;
