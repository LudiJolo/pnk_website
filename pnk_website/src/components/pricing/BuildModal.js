import React from "react";
import { Modal } from "react-bootstrap";
const BuildModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Build-a-Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            The Assembly Service. Basically, if you have the parts for your
            keyboard but don’t want to go through the process working on it
            yourself, I can be the one to do it for you.
          </li>
          <li class="list-group-item">
            The way I charge for assembly is I will charge the Premium price of
            lubing, meaning the keyboard foam and O-rings are included. The
            total cost of the items will still be applied but $10 less.
          </li>
          <li class="list-group-item">
            Example: Lubing a 60% Keyboard which is $35. If there are 4 items it’ll be
            $30 since we reduced the cost. Total would be $65 to be assembled.
          </li>
          <li class="list-group-item">
            This is the second highest priority on the list.
          </li>
          <li class="list-group-item">Cash or Card is fine.</li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default BuildModal;
