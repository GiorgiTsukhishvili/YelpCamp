import React, { useEffect, useState } from "react";
import { UpdateCampInterface } from "./updateCampInterface";
import * as api from "../../api/index";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateCamp = () => {
  const { id } = useParams();
  const history = useNavigate();

  const [campData, setCampData] = useState<UpdateCampInterface>({
    title: "",
    price: 0,
    description: "",
    location: "",
    image: "",
    _id: "",
    __v: 0,
  });
  const [updated, setUpdated] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchSingleCamp(id!);
        setCampData(data.data.data.campGround);
      } catch (err) {
        history("/error");
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.patchSingleCamp(id!, campData);

      setUpdated(true);
    } catch (err) {
      history("/error");
    }
  };

  const updateCampData = (value: string, key: string) => {
    setCampData((prevData) => {
      return { ...prevData, [value]: key };
    });
  };

  return updated ? (
    <div className="flex mx-auto my-20 flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Campground Updated Successfully</h1>
      <Link
        to="/campgrounds"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Go to all campgrounds
      </Link>
    </div>
  ) : (
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
        type="number"
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
      <textarea
        id="description"
        cols={30}
        rows={3}
        required
        placeholder="Campground Description"
        className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
        value={campData.description}
        onChange={(e) => updateCampData("description", e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Update Campground
      </button>
    </form>
  );
};

export default UpdateCamp;
