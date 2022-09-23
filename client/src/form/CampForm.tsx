import React, { useState } from "react";
import { CampFormInterface } from "./CampFormInterface";
import * as api from "./../api/index";

const CampForm = () => {
  const [campData, setCampData] = useState<CampFormInterface>({
    location: "",
    title: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createCamp(campData);

    setCampData({
      location: "",
      title: "",
    });
  };

  const updateCampData = (value: string, key: string) => {
    setCampData((prevData) => {
      return { ...prevData, [value]: key };
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title" className="">
        Title
      </label>
      <input
        type="text"
        id="title"
        required
        value={campData.title}
        onChange={(e) => updateCampData("title", e.target.value)}
      />

      <label htmlFor="location" className="">
        location
      </label>
      <input
        type="text"
        id="location"
        required
        value={campData.location}
        onChange={(e) => updateCampData("location", e.target.value)}
      />
      <button type="submit">Add campground</button>
    </form>
  );
};

export default CampForm;
