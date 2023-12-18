import React from "react";
import { Modal } from "react-bootstrap";
const FreeModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Freemium</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            Lubing your own existing hot swappable keyboard
          </li>
          <li class="list-group-item">
            Prices will be based on size:
            <ul>
              <li>
                <b>60% to 65%:</b> $35
              </li>
              <li>
                <b>75% to Tenkeyless:</b> $45
              </li>
              <li>
                <b>90% to Full size:</b> $55
              </li>
            </ul>
          </li>
          <li class="list-group-item">Can pay in cash or card</li>
          <li class="list-group-item">Low priority on the list.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default FreeModal;
