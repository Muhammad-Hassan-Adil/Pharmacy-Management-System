// AddMedicinePopup.js
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const AddMedicinePopup = ({ show, handleClose }) => {
  const [medicine, setMedicine] = useState({
    name: "",
    salt: "",
    expiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/firstapp/medicines/add/", medicine);
      if (response.status === 201) {
        console.log("Medicine saved successfully!");
        handleClose();
      } else {
        console.error("Failed to save medicine.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="medicineName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={medicine.name}
              onChange={handleChange}
              placeholder="Enter medicine name"
            />
          </Form.Group>
          <Form.Group controlId="medicineSalt">
            <Form.Label>Salt</Form.Label>
            <Form.Control
              type="text"
              name="salt"
              value={medicine.salt}
              onChange={handleChange}
              placeholder="Enter salt"
            />
          </Form.Group>
          <Form.Group controlId="medicineExpiry">
            <Form.Label>Expiry</Form.Label>
            <Form.Control
              type="date"
              name="expiry"
              value={medicine.expiry}
              onChange={handleChange}
              placeholder="Enter expiry date"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddMedicinePopup;
