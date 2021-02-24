import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { editTask } from "../Redux/Action/ListTask";

const Edit = ({ id, name }) => {
  const [show, setShow] = useState(false);
  const [ed, setEd] = useState(name);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          edit
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Edit:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              value={ed}
              onChange={(e) => {
                setEd(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleClose();
                dispatch(editTask({ id, ed }));
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Edit;
