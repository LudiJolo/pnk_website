import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddKeyboard = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a new keyboard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Text className="text-muted">
              example: HyperX Alloy Origins
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="" />
            <Form.Text className="text-muted">
                Briefly summarize what this keyboard is about
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Sound test</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Text className="text-muted">
                Enter YouTube link
            </Form.Text>
          </Form.Group>

          <Row className="mb-4">
            <Col md={4}>
                <Form.Label>General</Form.Label>
                <Form.Control type="text" placeholder="Brand" />
                <Form.Control type="text" placeholder="Size" />
                <Form.Control type="text" placeholder="Switch type" />
            </Col>
            <Col md={4}>
                <Form.Label>Specs</Form.Label>
                <Form.Control type="text" placeholder="Spec#1" />
                <Form.Control type="text" placeholder="Spec#2" />
                <Form.Control type="text" placeholder="Spec#3" />
            </Col>
            <Col md={4}>
                <Form.Label>Color Theme</Form.Label>
                <Form.Control type="text" placeholder="Reference" />
                <Form.Control type="text" placeholder="Colors" />
                <Form.Control type="text" placeholder="Other Info" />
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Confirm
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddKeyboard;
