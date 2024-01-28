import React from "react";
import { Modal } from "react-bootstrap";
import membrane from "./img/membrane.jpg"
const MembraneModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Membrane</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">YES! I do membrane keyboards as well.</li>
          <li class="list-group-item">
            Membrane keyboards are similar to what office keyboards are. They
            don’t have mechanical switches and use rubber instead. The type of
            membrane keyboard are ones that look like this.
            <img
            src={membrane}
            class="img-fluid rounded-5 shadow-lg"
            style={{ width: "30rem" }}
          />
          </li>
          <li class="list-group-item">
            Since this is more of a low quality keyboard this is the cheapest
            one to mod. Because this is the cheapest service on the website, it
            is last on the priority list.
          </li>
          <li class="list-group-item">
            The prices are $5 less than Freemium:
            <ul>
              <li>
                <b>60% to 65%:</b> $30
              </li>
              <li>
                <b>75% to Tenkeyless:</b> $40
              </li>
              <li>
                <b>90% to Full size:</b> $50
              </li>
            </ul>
          </li>
          <li class="list-group-item">Cash or Card is fine.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default MembraneModal;
