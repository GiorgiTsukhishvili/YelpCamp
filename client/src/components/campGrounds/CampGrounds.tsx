import React, { useState, useEffect } from "react";
import { CampGroundsInterface } from "./campGroundsInteface";
import { v4 } from "uuid";
import * as api from "./../../api/index";
import { Link } from "react-router-dom";

const CampGrounds = () => {
  const [campGrounds, setCampGrounds] = useState<CampGroundsInterface[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchCamps();

      setCampGrounds(data.data.data.campGrounds);
    };

    getData();
  }, []);
  console.log(campGrounds);
  return (
    <div>
      {campGrounds &&
        campGrounds.map((item) => (
          <Link to={`/campgrounds/${item._id}`} key={v4()}>
            <h1>{item.title}</h1>
            <h1>{item.location}</h1>
          </Link>
        ))}
    </div>
  );
};

export default CampGrounds;
