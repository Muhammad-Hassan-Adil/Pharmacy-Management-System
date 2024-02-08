import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function CheckMedicine({ medicines, onHide }) {
  const [medicineName, setMedicineName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isMedicinePresent = medicines.some(
      (medicine) => medicine.name.toLowerCase() === medicineName.toLowerCase()
    );
    setMessage(
      isMedicinePresent
        ? `The medicine ${medicineName} is present in the list.`
        : `The medicine ${medicineName} is not present in the list.`
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="medicineName">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter medicine name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Check Medicine
      </Button>
      <p>{message}</p>
    </Form>
  );
}

export default CheckMedicine;