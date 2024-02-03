import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Medicine from './Medicine';
import '../style.css';

function MedicineList({ onRefreshList }) {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicine, setEditingMedicine] = useState(null);

  useEffect(() => {
    fetchData();
  }, [onRefreshList]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/firstapp/medicines/');
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const handleDelete = async (id) => {
    console.log('Delete medicine with ID:', id);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/firstapp/medicines/del/${id}/`);
      console.log('Medicine deleted successfully!');
      onRefreshList(); 
    } catch (error) {
      console.error('Error deleting Medicine:', error);
    }
  };

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/firstapp/medicines/${editingMedicine.id}/`, editingMedicine);
      console.log('Medicine updated successfully!');
      setEditingMedicine(null);
      fetchData();
    } catch (error) {
      console.error('Error updating Medicine:', error);
    }
  };

  const handleEditInputChange = (e) => {
    setEditingMedicine({ ...editingMedicine, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {medicines.map(medicine => (
        <div key={medicine.id} className="medicine">
          {editingMedicine && editingMedicine.id === medicine.id ? (
            <div>
              <input type="text" name="name" value={editingMedicine.name} onChange={handleEditInputChange} />
              <input type="text" name="salt" value={editingMedicine.salt} onChange={handleEditInputChange} />
              <input type="date" name="expiry" value={editingMedicine.expiry} onChange={handleEditInputChange} />
              <button onClick={handleEditSubmit}>Update</button>
            </div>
          ) : (
            <Medicine
              {...medicine}
              onDelete={() => handleDelete(medicine.id)}
              onEdit={() => handleEdit(medicine)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default MedicineList;
