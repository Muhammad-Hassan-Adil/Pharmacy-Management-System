import React, { createContext, useState } from "react";

const MedicineContext = createContext();

const MedicineContextProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  return (
    <MedicineContext.Provider value={{ addMedicine }}>
      {children}
    </MedicineContext.Provider>
  );
};

export { MedicineContext, MedicineContextProvider };
