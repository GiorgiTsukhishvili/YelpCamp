import React from "react";
import { Route, Routes } from "react-router-dom";
import CampGrounds from "./campGrounds/CampGrounds";
import { Footer, Navbar } from "./components";
import CampForm from "./form/CampForm";

const App = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<CampGrounds />} />
        <Route path="/campgrounds" element={<CampGrounds />} />
        <Route path="/form" element={<CampForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
