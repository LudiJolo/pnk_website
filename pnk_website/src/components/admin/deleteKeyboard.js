
import React from "react";
import { Modal, Button} from "react-bootstrap";
import { db } from "../firebase/firebase-config";
import { doc, setDoc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const DeleteKeyboard = (props) => {
    const onDeleteHandler = (e) =>{
        const deleteFunc = async () => {
            await deleteDoc(doc(db, 'keyboards', props.keebId));
        };
        deleteFunc();
        console.log('delete successful');
        props.onHide();
        props.confirm();
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
          Delete <span style={{color: "red", fontWeight: "bold"}}>{props.keebName}</span>?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="success" onClick={onDeleteHandler} >
          Confirm
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteKeyboard;
