import React from "react";
import { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import * as Icons from "react-bootstrap-icons";
import {
  collection,
  collectionGroup,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { firebase, db } from "../firebase/firebase-config.js";
import sample1 from "../collection/img/headerimg.png";
import sample2 from "../collection/img/headerimg2.png";
import sample3 from "../collection/img/headerimg3.png";
import AddKeyboard from "./addKeyboard.js";
import DeleteKeyboard from "./deleteKeyboard.js";
import EditKeyboard from "./editKeyboard.js";

//next step: update list after adding keybaord data
const Admin = (props) => {
  const [keys, setKeys] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [selectedEdit, setSelEdit] = useState(null);
  const [selectedDel, setSelDel] = useState(null);
  const [selectedDelName, setSelDelName] = useState(null);

  const fetchData = async () => {
    try {
      const keyboards = collectionGroup(db, "keyboards");
      const querySnapshot = await getDocs(keyboards);
      const keyGroup = [];
      querySnapshot.forEach((doc) => {
        const keyboardItem = {};
        keyboardItem["id"] = doc.id;
        keyboardItem["data"] = doc.data();
        keyGroup.push(keyboardItem);
      });

      setKeys(keyGroup);
      console.log(keyGroup);
    } catch (err) {
      console.log("Error occured when fetching keyboards");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteModalHandler = (e)=>{
    setSelDel(e.target.value);
    setSelDelName(e.target.name);
    setDelModal(true);
  };

  const editModalHandler = (e)=>{
    setSelEdit(e.target.value);
    setEditModal(true);
  };


  return (
    <div class="bg-dark text-light">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" id="navlogo">
            PNK
          </Navbar.Brand>
          <Nav.Link className="justify-content-end">
            <button class="btn btn-danger" onClick={props.signout}>
              Log Out
            </button>
          </Nav.Link>
        </Container>
      </Navbar>
      <div class="pt-5">
        <Container className="pt-5">
          <Button className="my-4" onClick={() => setAddModal(true)}>
            <Icons.PlusCircleFill className="icon m-auto" />
          </Button>
          <Row>
            {keys &&
              keys.map((itm) => (
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={sample1} />
                    <Card.Body>
                      <Card.Title className="text-dark">
                        {itm.data.name}
                      </Card.Title>
                      <div class="d-flex justify-content-between">
                        <Button variant="warning" onClick={editModalHandler} value={itm.id}>Edit</Button>
                        <Button variant="danger" onClick={deleteModalHandler} value={itm.id} name={itm.data.name}>
                          Delete
                          </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <AddKeyboard show={addModal} onHide={() => setAddModal(false)} />
      <DeleteKeyboard keebId={selectedDel} keebName={selectedDelName} show={delModal} onHide={() => setDelModal(false)} />
      <EditKeyboard keebId={selectedEdit} show={editModal} onHide={() => setEditModal(false)}/>
    </div>
  );
};

export default Admin;
