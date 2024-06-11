import React from "react";
import { Modal } from "react-bootstrap";
const PremiumModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Premium</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Premium offers two different services, which are custom keyboards I
            discuss with the customer or buying from our collection.
          </li>
          <li class="list-group-item">
            When discussing a custom keyboard, we will discuss what kind of
            keyboard you are looking for as well as considering price since we
            are trying to budget as much as we can.
          </li>
          <li class="list-group-item">
            Keyboards from our collection are keyboards that I (Alby) have
            worked on before. The collection provides an ease of choice if you
            just want a custom keyboard without going through the discussion
            process
          </li>
          <li class="list-group-item">
            The cost of premium consist of the total price plus $10 for every
            individual item, including the lubing fee.
          </li>
          <li class="list-group-item">
            Premium also lets you add O-rings, modded stabilizers, and Keyboard Foam for free of
            charge.
          </li>
          <li class="list-group-item">Highest priority on the list.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default PremiumModal;
