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

const Admin = (props) => {
  const [keys, setKeys] = useState(null);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

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
          <Button className="my-4">
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
                      <Button variant="warning">Edit</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
      <div>
        <Form>
          
        </Form>
      </div>
    </div>
  );
};

export default Admin;
