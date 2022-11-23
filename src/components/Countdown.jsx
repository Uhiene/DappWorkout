import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { setGlobalState, stopCountdown, useGlobalState } from "../store";

const Countdown = () => {
  const [countdown] = useGlobalState("countdown");    
  const [counter] = useGlobalState("counter")


  const handleClose = (e) => {
    setGlobalState("countdown", "scale-0");
    stopCountdown()
  };


  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform z-50 transition-transform duration-300 ${countdown}`}
    >
      <div className="flex flex-col items-center bg-white text-black shadow-md shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-10">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="invisible"></p>
          <button
            type="button"
            className="border-0 bg-transparent focus:outline-none"
            onClick={handleClose}
          >
            <FaTimes className="text-gray-400 hover:text-red-500" />
          </button>
        </div>
        <div className="border-8 border-[#1b4247] text-[#1b4247] text-9xl w-64 h-64 rounded-full flex items-center justify-center my-5">
          {counter}
        </div>
        <p className="text-2xl">Break 10sec</p>
        <button className="bg-[#1b4247] text-xl px-6 py-2 rounded-lg text-white my-5">
          Restart
        </button>
      </div>
    </div>
  );
};

export default Countdown;
