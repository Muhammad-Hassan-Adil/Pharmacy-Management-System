import React from 'react';
import axios from 'axios';
import '../style.css';

const AddMedicineForm = ({ newMedicine, onInputChange, onAddMedicine, onRefreshList }) => {
  const handleAddMedicine = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/firstapp/medicines/', newMedicine);
      console.log('Medicine added successfully!');
      onRefreshList(); 
    } catch (error) {
      console.error('Error adding Medicine:', error);
    }
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleAddMedicine}>
        <label>
          Name:
          <input type="text" name="name" value={newMedicine.name} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Salt:
          <input type="text" name="salt" value={newMedicine.salt} onChange={onInputChange} />
        </label>
        <br />
        <label>
          Expiry Date:
          <input type="date" name="expiry" value={newMedicine.expiry} onChange={onInputChange} />
        </label>
        <br />
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default AddMedicineForm;
