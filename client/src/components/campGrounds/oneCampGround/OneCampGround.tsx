import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "./../../../api";
import { OneCampGroundInterface } from "./oneCampGroundInterface";
import { Link } from "react-router-dom";

const OneCampGround = () => {
  const [camp, setCamp] = useState<OneCampGroundInterface>();
  const [deleteCamp, setDeleteCamp] = useState<boolean>(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchSingleCamp(id!);

      setCamp(data.data.data.campGround);
    };

    fetchData();
  }, [id]);

  const removeCamp = async () => {
    await api.deleteSingleCamp(id!);
    setDeleteCamp(true);
  };

  return deleteCamp ? (
    <div className="flex mx-auto my-20 flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Campground Deleted Successfully</h1>
      <Link
        to="/"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Go to all campgrounds
      </Link>
    </div>
  ) : camp !== undefined ? (
    <div className="flex mx-auto my-10 flex-col justify-center items-start w-[450px] border-[1.5px] border-gray-400">
      <img src={camp.image} alt="" className="w-[450px] h-[500px] bg-contain" />
      <h1 className="pl-1 text-xl mt-3 font-bold text-black">{camp.title}</h1>
      <h1 className="pl-1 mt-3">{camp.description}</h1>
      <h1 className="pl-1 mt-3 text-gray-400">{camp.location}</h1>
      <h1 className="pl-1 mt-3">${camp.price}/night</h1>
      <div className=" ml-2 my-3">
        <Link
          to={`/edit/${camp._id}`}
          className="mr-4 bg-blue-500 text-white px-5 py-1.5 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
        >
          EDIT
        </Link>
        <button
          className="bg-red-500 text-white px-5 py-1.5 text-md rounded-[8px] hover:bg-red-600 transition-all duration-300"
          onClick={() => removeCamp()}
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default OneCampGround;
