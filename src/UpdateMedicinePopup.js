import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import axios from "axios";

const UpdateMedicinePopup = ({ show, handleClose }) => {
  const [medicines, setMedicines] = useState([]);
  const [editedMedicine, setEditedMedicine] = useState({
    id: null,
    name: "",
    salt: "",
    expiry: ""
  });

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/firstapp/medicines/");
        setMedicines(response.data);
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    if (show) {
      fetchMedicines();
    }
  }, [show]);

  const handleEdit = (medicine) => {
    setEditedMedicine(medicine);
    
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/firstapp/medicines/del/${id}/`);
      setMedicines(medicines.filter((medicine) => medicine.id !== id));
      console.log("Medicine deleted successfully!");
    } catch (error) {
      console.error("Error deleting medicine:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMedicine({ ...editedMedicine, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/firstapp/medicines/${editedMedicine.id}/`, editedMedicine);
      console.log("Medicine updated successfully!");
      handleClose();
    } catch (error) {
      console.error("Error updating medicine:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salt</th>
              <th>Expiry</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {medicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.salt}</td>
                <td>{medicine.expiry}</td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(medicine)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(medicine.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {editedMedicine.id && (
          <Form>
            <Form.Group controlId="medicineName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedMedicine.name}
                onChange={handleChange}
                placeholder="Enter medicine name"
              />
            </Form.Group>
            <Form.Group controlId="medicineSalt">
              <Form.Label>Salt</Form.Label>
              <Form.Control
                type="text"
                name="salt"
                value={editedMedicine.salt}
                onChange={handleChange}
                placeholder="Enter salt"
              />
            </Form.Group>
            <Form.Group controlId="medicineExpiry">
              <Form.Label>Expiry</Form.Label>
              <Form.Control
                type="date"
                name="expiry"
                value={editedMedicine.expiry}
                onChange={handleChange}
                placeholder="Enter expiry date"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateMedicinePopup;
