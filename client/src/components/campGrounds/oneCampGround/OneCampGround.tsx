import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "./../../../api";
import { OneCampGroundInterface } from "./oneCampGroundInterface";

const OneCampGround = () => {
  const [camp, setCamp] = useState<OneCampGroundInterface>();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.fetchSingleCamp(id!);

      setCamp(data.data.data.campGround);
    };

    fetchData();
  }, [id]);

  return camp !== undefined ? (
    <div>
      <h1>{camp.title}</h1>
      <h1>{camp.location}</h1>
      <img src={camp.image} alt="" className="w-[300px] h-[300px] bg-contain" />
      <h1>{camp.description}</h1>
      <h1>{camp.price}</h1>
    </div>
  ) : (
    <div></div>
  );
};

export default OneCampGround;
