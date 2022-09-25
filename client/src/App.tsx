import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, CampGrounds, OneCampGround } from "./components";
import { CampForm, UpdateCamp, Error, Home } from "./pages";

const App = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campgrounds" element={<CampGrounds />} />
        <Route path="/campgrounds/:id" element={<OneCampGround />} />
        <Route path="/form" element={<CampForm />} />
        <Route path="/edit/:id" element={<UpdateCamp />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
