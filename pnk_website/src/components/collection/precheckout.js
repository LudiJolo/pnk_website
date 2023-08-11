import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";

const PreCheckout = (props) => {
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
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Keyboard</td>
              <td>${props.data.keebPrice}</td>
            </tr>
            <tr>
              <td>Size: {props.data.general.size}%</td>
              <td>${props.data.sizePrice}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Additional Items</th>
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
        </Table>
        <h3 align="end">Total: ${props.data.total}</h3>
      </Modal.Body>
      <Modal.Footer>
        <a class="btn btn-primary">
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
