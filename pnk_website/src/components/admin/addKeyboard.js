import { namedQuery } from "firebase/firestore";
import React, { useState } from "react";
import { useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { db } from "../firebase/firebase-config";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const AddKeyboard = (props) => {
  const nameRef = useRef("");
  const descRef = useRef("");
  const soundRef = useRef("");
  const brandRef = useRef("");
  const sizeRef = useRef("");
  const switchRef = useRef("");
  const spec1Ref = useRef("");
  const spec2Ref = useRef("");
  const spec3Ref = useRef("");
  const referRef = useRef("");
  const colorRef = useRef("");
  const otherRef = useRef("");
  const [img1, setimg1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [img3, setimg3] = useState(null);

  const addHandler = (e) => {
    e.preventDefault();
    const addFunc = async () => {
      const storage = getStorage();

      // Create a reference to the image file
      const imageRef = ref(storage, 'collections/keychron/showcase1.png');

      // Retrieve the download URL of the image from Firebase Storage
      const downloadURL = await getDownloadURL(imageRef);

      console.log('Image URL:', downloadURL);


      const newKeyboard = await addDoc(collection(db, "keyboards"), {
        name: nameRef.current.value,
        desc: descRef.current.value,
        soundTest: soundRef.current.value,
        general: {
          brand: brandRef.current.value,
          size: sizeRef.current.value,
          switch: switchRef.current.value,
        },
        specifics: {
          spec1: spec1Ref.current.value,
          spec2: spec2Ref.current.value,
          spec3: spec3Ref.current.value,
        },
        theme: {
          reference: referRef.current.value,
          colorTheme: colorRef.current.value,
          otherInfo: otherRef.current.value,
        },
        images: {
        },
      });
      console.log("Document written with ID: ", newKeyboard.id);
    };
    addFunc();
    props.onHide();
  };

  const handleImg1 = (e) => {
    const file = e.target.files[0];
    setimg1(file);
  };
  const handleImg2 = (e) => {
    const file = e.target.files[0];
    setimg2(file);
  };
  const handleImg3 = (e) => {
    const file = e.target.files[0];
    setimg3(file);
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
          Add a new keyboard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={addHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="" ref={nameRef} required />
            <Form.Text className="text-muted">
              example: HyperX Alloy Origins
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDesc">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder=""
              name="desc"
              ref={descRef}
              required
            />
            <Form.Text className="text-muted">
              Briefly summarize what this keyboard is about
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Sound test</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="sound_url"
              ref={soundRef}
              required
            />
            <Form.Text className="text-muted">Enter YouTube link</Form.Text>
          </Form.Group>

          <Row className="mb-4">
            <Col md={4}>
              <Form.Label>General</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand"
                ref={brandRef}
                required
              />
              <Form.Control
                type="text"
                placeholder="Size"
                ref={sizeRef}
                required
              />
              <Form.Control
                type="text"
                placeholder="Switch type"
                ref={switchRef}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Label>Specs</Form.Label>
              <Form.Control
                type="text"
                placeholder="Spec#1"
                ref={spec1Ref}
                required
              />
              <Form.Control
                type="text"
                placeholder="Spec#2"
                ref={spec2Ref}
                required
              />
              <Form.Control
                type="text"
                placeholder="Spec#3"
                ref={spec3Ref}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Label>Color Theme</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reference"
                ref={referRef}
                required
              />
              <Form.Control
                type="text"
                placeholder="Colors"
                ref={colorRef}
                required
              />
              <Form.Control
                type="text"
                placeholder="Other Info"
                ref={otherRef}
                required
              />
            </Col>
            <Col className="pt-3">
              <Form.Label>Upload 3 images</Form.Label>
              <input type="file" class="form-control" onChange={handleImg1} />
              <input type="file" class="form-control" onChange={handleImg2} />
              <input type="file" class="form-control" onChange={handleImg3} />
            </Col>
          </Row>
          <Button variant="success" type="submit">
            Confirm
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddKeyboard;
