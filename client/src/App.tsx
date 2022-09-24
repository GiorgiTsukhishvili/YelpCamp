import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, CampGrounds, OneCampGround } from "./components";
import {CampForm, UpdateCamp} from "./form";

const App = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<CampGrounds />} />
        <Route path="/campgrounds" element={<CampGrounds />} />
        <Route path="/campgrounds/:id" element={<OneCampGround />} />
        <Route path="/form" element={<CampForm />} />
        <Route path="/edit/:id" element={<UpdateCamp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
