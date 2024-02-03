// Medicine.js

import React from 'react';
import '../style.css';

function Medicine({ id, name, salt, expiry, onEdit, onDelete }) {
  return (
    <div className="medicine">
      <p>Name: {name} | Salt: {salt} | Expiry: {expiry}</p>
      <div className="button-container">
        <button onClick={() => onEdit(id)}>Edit</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
}

export default Medicine;
