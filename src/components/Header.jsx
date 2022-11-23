import React from 'react'
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"} className="flex justify-between">
      <div className="flex items-center text-white text-xl sm:text-2xl ">
        <h1>DappWorkout </h1>
        <CgGym />
      </div>
      <div>
        <button className="bg-yellow-500 p-2 px-4 rounded-lg text-sm sm:text-lg">
          Connect Wallet
        </button>
      </div>
    </Link>
  );
};
export default Header