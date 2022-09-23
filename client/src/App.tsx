import React from "react";
import { Route, Routes } from "react-router-dom";
import CampGrounds from "./campGrounds/CampGrounds";
import CampForm from "./form/CampForm";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CampGrounds />} />
        <Route path="/form" element={<CampForm />} />
      </Routes>
    </div>
  );
};

export default App;
