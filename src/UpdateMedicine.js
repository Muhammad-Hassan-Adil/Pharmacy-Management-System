import React, { useState } from "react";
import { Form } from "react-bootstrap";


const UpdateMedicine = ({ medicines, onSelectMedicine, selectedMedicine }) => {
  const medicineList = medicines.map((medicine) => (
    <option key={medicine.id} value={medicine}>
      {medicine.name} - {medicine.description}
    </option>
  ));

  const handleSelectChange = (e) => {
    const selectedMed = e.target.value;
    onSelectMedicine(selectedMed);
  };

  return (
    <Form.Group>
      <Form.Label>Select Medicine to Update</Form.Label>
      <Form.Control as="select" onChange={handleSelectChange}>
        <option value={null}>Select a medicine</option>
        {medicineList}
      </Form.Control>
      {selectedMedicine && (
        <div>
          <Form.Label>Name: {selectedMedicine.name}</Form.Label>
          <Form.Label>Description: {selectedMedicine.description}</Form.Label>
        </div>
      )}
    </Form.Group>
  );
};

export default UpdateMedicine;
