import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex mx-auto my-20 flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">
        404 Something Went Wrong Please Go To Home Page
      </h1>
      <Link
        to="/campgrounds"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Go to all campgrounds
      </Link>
    </div>
  );
};

export default Error;
