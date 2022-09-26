import React, { useState, useEffect } from "react";
import { CampGroundsInterface } from "./campGroundsInteface";
import { v4 } from "uuid";
import * as api from "./../../api/index";
import { Link, useNavigate } from "react-router-dom";

const CampGrounds = () => {
  const [campGrounds, setCampGrounds] = useState<CampGroundsInterface[]>();
  const history = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api.fetchCamps();

        setCampGrounds(data.data.data.campGrounds);
      } catch (err) {
        history("/error");
      }
    };

    getData();
  }, []);

  return (
    <div className="mx-auto my-10 flex flex-col gap-10">
      {campGrounds &&
        campGrounds.map((item) => (
          <div key={v4()} className="border-gray-400 border-[1.5px] flex">
            <img src={item.image} alt="" className="w-[350px] h-[350px]" />
            <div className="w-[700px] py-2 px-5">
              <h1 className="text-2xl font-bold pb-5">{item.title}</h1>
              <h1>{item.description}</h1>
              <h1 className=" pt-5 mb-10  text-gray-500">{item.location}</h1>
              <Link
                to={`/campgrounds/${item._id}`}
                className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
              >
                View Camp
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CampGrounds;
