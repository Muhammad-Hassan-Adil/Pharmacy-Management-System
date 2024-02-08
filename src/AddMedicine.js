import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddMedicinePopup from "./AddMedicinePopup";

function AddMedicine({ addMedicine }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMedicine = {
      name,
      description,
    };
    addMedicine(newMedicine);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="medicineName">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter medicine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="medicineDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter medicine description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Medicine
      </Button>
    </Form>
  );
}

export default AddMedicine;
