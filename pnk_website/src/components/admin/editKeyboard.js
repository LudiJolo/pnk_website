import React from "react";
import { useRef, useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { db } from "../firebase/firebase-config";
import { doc, setDoc, addDoc, collection, updateDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
const EditKeyboard = (props) => {
  const [keebData, setKeeb] = useState(null);
  const [nameRef, setName] = useState(null);
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
  const fetchDoc = async () => {
    try {
      if (props.show) {
        const docRef = doc(db, "keyboards", props.keebId);
        const docSnap = await getDoc(docRef);

        setKeeb(docSnap.data());
        console.log("Document data:", docSnap.data());
        setName(docSnap.data().name);
      }
    } catch (err) {
      console.log("Error occured when fetching keyboard data");
    }
  };
  useEffect(() => {
    fetchDoc();
  }, [props.show]);


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
    const keebRef = doc(db, 'keyboards', props.keebId);
    const imageUploadHandler = async() =>{
      if(img1){
        const storageRef1 = ref(storage, img1.name);
        const uploadTask1 = uploadBytes(storageRef1, img1);
        const downloadURL1 = await getDownloadURL((await uploadTask1).ref);
        await updateDoc(keebRef, {
          imgURL1: downloadURL1,
        })
      }
      if(img2){
        const storageRef2 = ref(storage, img2.name);
        const uploadTask2 = uploadBytes(storageRef2, img2);
        const downloadURL2 = await getDownloadURL((await uploadTask2).ref);
        await updateDoc(keebRef, {
          imgURL1: downloadURL2,
        })
      }
      if(img3){
        const storageRef3 = ref(storage, img3.name);
        const uploadTask3 = uploadBytes(storageRef3, img3);
        const downloadURL3 = await getDownloadURL((await uploadTask3).ref);
        await updateDoc(keebRef, {
          imgURL3: downloadURL3,
        })
      }
      const textInputHandler = async() =>{
        const editedKeyboard = await updateDoc(keebRef, {
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
        });
      };
      imageUploadHandler();
      textInputHandler();
      props.onHide();
    };

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
                  placeholder=""
                  ref={nameRef}
                  value={keebData.name}
                  onChange={(e)=>(setName(e.target.value))}
                  required
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
                  placeholder=""
                  name="desc"
                  ref={descRef}
                  value={keebData.desc}
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
                  value={keebData.soundTest}
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
                    value={keebData.general.brand}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Size"
                    ref={sizeRef}
                    value={keebData.general.size}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Switch type"
                    ref={switchRef}
                    value={keebData.general.switch}
                    required
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Specs</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Spec#1"
                    ref={spec1Ref}
                    value={keebData.specifics.spec1}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Spec#2"
                    ref={spec2Ref}
                    value={keebData.specifics.spec2}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Spec#3"
                    ref={spec3Ref}
                    value={keebData.specifics.spec3}
                    required
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Color Theme</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Reference"
                    ref={referRef}
                    value={keebData.theme.colorTheme}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Colors"
                    ref={colorRef}
                    value={keebData.theme.reference}
                    required
                  />
                  <Form.Control
                    type="text"
                    placeholder="Other Info"
                    ref={otherRef}
                    value={keebData.theme.otherInfo}
                    required
                  />
                </Col>
                <Col className="pt-3">
                  <Form.Label>Images</Form.Label><br/>
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
