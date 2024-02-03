import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicineList from './components/MedicineList';
import AddMedicineForm from './components/AddMedicineForm';
import './style.css';
const App = () => {
  const [medicines, setMedicines] = useState([]);
  const [newMedicine, setNewMedicine] = useState({ name: '', salt: '', expiry: '' });
  const [editingMedicine, setEditingMedicine] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/firstapp/medicines/');
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAddMedicine = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/firstapp/medicines/', newMedicine);
      console.log('Medicine added successfully!');
      setNewMedicine({ name: '', salt: '', expiry: '' });
      fetchData();
    } catch (error) {
      console.error('Error adding Medicine:', error);
    }
  };

  
  const handleEdit = (medicine) => {
    setEditingMedicine({ ...medicine });
  };
  



  const handleDelete = async (medicineId) => {
    console.log('Delete medicine with ID:', medicineId);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/firstapp/medicines/del/${medicineId}/`);
      console.log('Medicine deleted successfully!');
      fetchData();
    } catch (error) {
      console.error('Error deleting Medicine:', error);
    }
  };

  return (
    <div className="container">
      <h1>Pharmacy Management App</h1>
      <MedicineList medicines={medicines} onEdit={handleEdit} onDelete={handleDelete} onRefreshList={fetchData} />
      <AddMedicineForm
        newMedicine={newMedicine}
        onInputChange={(e) => setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value })}
        onAddMedicine={handleAddMedicine}
        onRefreshList={fetchData}
      />
    </div>
  );
};

export default App;
