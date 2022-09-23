import React, { useState } from "react";
import { CampFormInterface } from "./CampFormInterface";
import * as api from "./../api/index";

const CampForm = () => {
  const [campData, setCampData] = useState<CampFormInterface>({
    title: "",
    price: 0,
    description: "",
    location: "",
    image: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.createCamp(campData);

    setCampData({
      title: "",
      price: 0,
      description: "",
      location: "",
      image: "",
    });
  };

  const updateCampData = (value: string, key: string) => {
    setCampData((prevData) => {
      return { ...prevData, [value]: key };
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex mx-auto my-10 flex-col"
    >
      <label htmlFor="title" className="text-xl text-black cursor-pointer mb-1">
        Title
      </label>
      <input
        type="text"
        id="title"
        placeholder="Campground Title"
        required
        value={campData.title}
        onChange={(e) => updateCampData("title", e.target.value)}
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
      />

      <label
        htmlFor="location"
        className="text-xl text-black cursor-pointer mb-1"
      >
        location
      </label>
      <input
        type="text"
        id="location"
        placeholder="Campground Location"
        required
        value={campData.location}
        onChange={(e) => updateCampData("location", e.target.value)}
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
      />
      <label htmlFor="image" className="text-xl text-black cursor-pointer mb-1">
        Image Url
      </label>
      <input
        type="text"
        id="image"
        placeholder="Campground Image"
        required
        value={campData.image}
        onChange={(e) => updateCampData("image", e.target.value)}
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
      />
      <label htmlFor="price" className="text-xl text-black cursor-pointer mb-1">
        Price
      </label>
      <input
        type="text"
        id="price"
        placeholder="Campground Price"
        required
        value={campData.price}
        onChange={(e) => updateCampData("price", e.target.value)}
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
      />
      <label
        htmlFor="description"
        className="text-xl text-black cursor-pointer mb-1"
      >
        Description
      </label>
      <input
        type="text"
        id="description"
        placeholder="Campground Description"
        required
        value={campData.description}
        onChange={(e) => updateCampData("description", e.target.value)}
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Add Campground
      </button>
    </form>
  );
};

export default CampForm;
