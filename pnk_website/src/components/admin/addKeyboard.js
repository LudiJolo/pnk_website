import { namedQuery } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { db } from "../firebase/firebase-config";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import * as Icons from "react-bootstrap-icons";

const AddKeyboard = (props) => {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const soundRef = useRef(null);
  const brandRef = useRef(null);
  const sizeRef = useRef(null);
  const switchRef = useRef(null);
  const spec1Ref = useRef(null);
  const spec2Ref = useRef(null);
  const spec3Ref = useRef(null);
  const referRef = useRef(null);
  const colorRef = useRef(null);
  const otherRef = useRef(null);
  const stripeLinkRef = useRef(null);

  const [img1, setimg1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [img3, setimg3] = useState(null);

  const [item, setItem] = useState(null);
  const [cost, setCost] = useState(null);
  const [additional, setAdd] = useState([]);

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

  const addCostHandler = () => {
    if (item && cost && /^[0-9]*\.?[0-9]*$/.test(cost)) {
      const newItmCost = { itmName: item, itmCost: cost };
      setAdd((prevState) => [...prevState, newItmCost]);
    }
    setItem("");
    setCost("");
    console.log(additional);
  };

  const removeItem = (index) => {
    const updatedItems = additional.filter((_, i) => i !== index);
    setAdd(updatedItems);
  };

  const checkSizePrice = (value) => {
    if (parseFloat(value) <= 65.00) return 30.0;
    else if (parseFloat(value) > 65.00 && parseFloat(value) < 90.00) return 40.0;
    else return 50.0;
  };

  const calc_total = (s_price, items) => {
    console.log(s_price);
    console.log(items);
    let total = 0.0;
    for(let i=0; i<items.length; i++){
      total = total + parseFloat(items[i].itmCost);
    }
    total = total + (items.length*10);
    total = total + s_price;
    console.log("total", total);
    return total.toFixed(2);
  };

  const addHandler = (e) => {
    e.preventDefault();
    const storage = getStorage();

    const uploadTasks = [];
    const addFunc = async () => {
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
        sizePrice: checkSizePrice(sizeRef.current.value),
        additionals: additional,
        itemCount: additional.length,
        total: calc_total(
          parseFloat(checkSizePrice(sizeRef.current.value)),
          additional
        ),
        stripeLink: stripeLinkRef.current.value,
      });
      if (img1 && img2 && img3) {
        const storageRef1 = ref(storage, img1.name);
        const storageRef2 = ref(storage, img2.name);
        const storageRef3 = ref(storage, img3.name);

        // Upload the file to Firebase Storage
        const uploadTask1 = uploadBytes(storageRef1, img1);
        const uploadTask2 = uploadBytes(storageRef2, img2);
        const uploadTask3 = uploadBytes(storageRef3, img3);

        uploadTasks.push(uploadTask1);
        uploadTasks.push(uploadTask2);
        uploadTasks.push(uploadTask3);
      }
      try {
        // Wait for all upload tasks to complete
        const uploadResults = await Promise.all(uploadTasks);

        // Get the download URL of the uploaded image
        // Wait for all upload tasks to complete
        const downloadURLs = await Promise.all(
          uploadResults.map((uploadResult) => getDownloadURL(uploadResult.ref))
        );

        // Save the download URL to Firestore
        const keyRef = doc(db, "keyboards", newKeyboard.id);
        const imagesData = {
          imgURL1: downloadURLs[0],
          imgURL2: downloadURLs[1],
          imgURL3: downloadURLs[2],
        };
        setDoc(keyRef, imagesData, { merge: true });
        console.log("Image uploaded and URL saved successfully.");
        console.log("Document written with ID: ", newKeyboard.id);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
    addFunc();
    props.onHide();
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
            <Form.Label>Keyboard Name</Form.Label>
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
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Size"
                  ref={sizeRef}
                  required
                />
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup>

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
              <Form.Label>Upload 3 images (filename must be unique)</Form.Label>
              <input type="file" class="form-control" onChange={handleImg1} />
              <input type="file" class="form-control" onChange={handleImg2} />
              <input type="file" class="form-control" onChange={handleImg3} />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Item costs</Form.Label>
            <InputGroup>
              <InputGroup.Text>Item Name</InputGroup.Text>
              <Form.Control
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="text"
                value={cost}
                placeholder="00.00"
                onChange={(e) => setCost(e.target.value)}
              />
              <Button variant="primary" onClick={addCostHandler}>
                Add item
              </Button>
            </InputGroup>
            {additional &&
              additional.map((elem, index) => (
                <li key={index}>
                  {elem.itmName} - ${elem.itmCost}{" "}
                  <Button
                    className="m-0 p-0 btn-light"
                    onClick={() => removeItem(index)}
                  >
                    <Icons.TrashFill class="text-danger" />
                  </Button>
                </li>
              ))}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Stripe Info</Form.Label>
            <InputGroup>
              <InputGroup.Text>Price Link</InputGroup.Text>
              <Form.Control
                type="text"
                ref={stripeLinkRef}
                required
              />
            </InputGroup>
          </Form.Group>
          <Button variant="success" type="submit" onClick={props.confirm}>
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
