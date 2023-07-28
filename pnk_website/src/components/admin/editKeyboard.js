import React from "react";
import { useRef, useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { db } from "../firebase/firebase-config";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const EditKeyboard = (props) => {
  const [keebData, setKeeb] = useState(null);

  
  const fetchDoc = async () => {
    try {
      if (props.show) {
        const docRef = doc(db, "keyboards", props.keebId);
        const docSnap = await getDoc(docRef);

        setKeeb(docSnap.data());
        console.log("Document data:", docSnap.data());
      }
    } catch (err) {
      console.log("Error occured when fetching keyboard data");
    }
  };
  useEffect(() => {
    fetchDoc();
  }, [props.show]);

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
  const [img1, setimg1] = useState(null);
  const [img2, setimg2] = useState(null);
  const [img3, setimg3] = useState(null);

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

  const submitEditHandler = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const keebRef = doc(db, "keyboards", props.keebId);
    const imageUploadHandler = async () => {
      if (img1) {
        const storageRef1 = ref(storage, img1.name);
        const uploadTask1 = uploadBytes(storageRef1, img1);
        const downloadURL1 = await getDownloadURL((await uploadTask1).ref);
        await updateDoc(keebRef, {
          imgURL1: downloadURL1,
        });
      }
      if (img2) {
        const storageRef2 = ref(storage, img2.name);
        const uploadTask2 = uploadBytes(storageRef2, img2);
        const downloadURL2 = await getDownloadURL((await uploadTask2).ref);
        await updateDoc(keebRef, {
          imgURL2: downloadURL2,
        });
      }
      if (img3) {
        const storageRef3 = ref(storage, img3.name);
        const uploadTask3 = uploadBytes(storageRef3, img3);
        const downloadURL3 = await getDownloadURL((await uploadTask3).ref);
        await updateDoc(keebRef, {
          imgURL3: downloadURL3,
        });
      }
    };
    const textInputHandler = async () => {
      const editedKeyboard = await updateDoc(keebRef, {
        name: nameRef.current.value ? nameRef.current.value : keebData.name,
        desc: descRef.current.value ? descRef.current.value : keebData.desc,
        soundTest: soundRef.current.value
          ? soundRef.current.value
          : keebData.soundTest,
        general: {
          brand: brandRef.current.value
            ? brandRef.current.value
            : keebData.general.brand,
          size: sizeRef.current.value
            ? sizeRef.current.value
            : keebData.general.size,
          switch: switchRef.current.value
            ? switchRef.current.value
            : keebData.general.switch,
        },
        specifics: {
          spec1: spec1Ref.current.value
            ? spec1Ref.current.value
            : keebData.specifics.spec1,
          spec2: spec2Ref.current.value
            ? spec2Ref.current.value
            : keebData.specifics.spec2,
          spec3: spec3Ref.current.value
            ? spec3Ref.current.value
            : keebData.specifics.spec3,
        },
        theme: {
          reference: referRef.current.value
            ? referRef.current.value
            : keebData.theme.reference,
          colorTheme: colorRef.current.value
            ? colorRef.current.value
            : keebData.theme.colorTheme,
          otherInfo: otherRef.current.value
            ? otherRef.current.value
            : keebData.theme.otherInfo,
        },
      });
    };
    imageUploadHandler();
    textInputHandler();
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {keebData && (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Editing: {keebData.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitEditHandler}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={keebData.name}
                  ref={nameRef}
                />
                <Form.Text className="text-muted">
                  example: HyperX Alloy Origins
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder={keebData.desc}
                  name="desc"
                  ref={descRef}
                />
                <Form.Text className="text-muted">
                  Briefly summarize what this keyboard is about
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Sound test</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={keebData.soundTest}
                  name="sound_url"
                  ref={soundRef}
                />
                <Form.Text className="text-muted">Enter YouTube link</Form.Text>
              </Form.Group>

              <Row className="mb-4">
                <Col md={4}>
                  <Form.Label>General</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={keebData.general.brand}
                    ref={brandRef}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.general.size}
                    ref={sizeRef}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.general.switch}
                    ref={switchRef}
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Specs</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={keebData.specifics.spec1}
                    ref={spec1Ref}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.specifics.spec2}
                    ref={spec2Ref}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.specifics.spec3}
                    ref={spec3Ref}
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Color Theme</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={keebData.theme.colorTheme}
                    ref={referRef}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.theme.reference}
                    ref={colorRef}
                  />
                  <Form.Control
                    type="text"
                    placeholder={keebData.theme.otherInfo}
                    ref={otherRef}
                  />
                </Col>
                <Col className="pt-3">
                  <Form.Label>Images (file name must be unique)</Form.Label>
                  <br />
                  <Form.Label>Top view</Form.Label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleImg1}
                  />
                  <Form.Label>Angle #1</Form.Label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleImg2}
                  />
                  <Form.Label>Angle #2</Form.Label>
                  <input
                    type="file"
                    class="form-control"
                    onChange={handleImg3}
                  />
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
        </>
      )}
    </Modal>
  );
};

export default EditKeyboard;
