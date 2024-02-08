import React, { useEffect, useState } from "react";
import { Modal, Button, Table, Form } from "react-bootstrap";
import axios from "axios";

const CheckMedicinePopup = ({ show, handleClose }) => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/firstapp/medicines/");
        setMedicines(response.data);
        setFilteredMedicines(response.data); // Initialize filtered medicines with all medicines
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    };

    if (show) {
      fetchMedicines();
    }
  }, [show]);

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Filter medicines based on search query
    const filtered = medicines.filter(medicine =>
      medicine.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMedicines(filtered);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Check Medicine</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="searchMedicine">
          <Form.Control
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </Form.Group>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Salt</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.salt}</td>
                <td>{medicine.expiry}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckMedicinePopup;
