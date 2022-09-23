import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex py-3 px-6 gap-5 bg-slate-700 w-f h-[45px] items-center">
      <h1 className="text-xl mr-5">YelpCamp</h1>
      <Link to="/" className="hover:text-gray-400 transition-all duration-300">
        Home
      </Link>
      <Link
        to="/campgrounds"
        className="hover:text-gray-400 transition-all duration-300"
      >
        Campgrounds
      </Link>
      <Link
        to="/form"
        className="hover:text-gray-400 transition-all duration-300"
      >
        New Campgrounds
      </Link>
    </div>
  );
};

export default Navbar;
