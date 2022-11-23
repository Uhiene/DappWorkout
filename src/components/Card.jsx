import React from "react";
import { BsAlarm, BsBarChart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ plan }) => {
  return (
    <Link
      to={"/workout"}
      style={{ backgroundImage: "url(" + plan.image + ")" }}
      className="w-72 sm:w-96 h-80 bg-no-repeat bg-cover 
      bg-start rounded-xl flex items-end p-1 my-5
      hover:shadow-md hover:shadow-gray-500
      transition-all duration-300 hover:scale-105"
    >
      <div className="text-white bg-[#1b4247] bg-opacity-80 w-full p-5 rounded-lg box-border">
        <h1 className="text-xl">{plan.title}</h1>
        <div className="flex justify-between">
          <p className="flex items-center space-x-1">
            <BsAlarm />
            <span>{plan.time} minutes</span>
          </p>
          <div className="flex items-center space-x-1">
            <BsBarChart />
            <span>{plan.level}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
