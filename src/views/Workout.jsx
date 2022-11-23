import React from "react";
import { BsAlarm, BsBarChart } from "react-icons/bs";
import { setGlobalState, startCountdown, useGlobalState } from "../store";
import Header from "../components/Header";
import Countdown from "../components/Countdown";

const Workout = () => {
  const Image =
    "https://images.pexels.com/photos/3839025/pexels-photo-3839025.jpeg";
  const [routines] = useGlobalState("routines");

  const handleStart = () =>{
    startCountdown()
    setGlobalState("countdown", "scale-100")
  }

  return (
    <div className="bg-no-repeat bg-cover bg-center">
      <div
        style={{
          backgroundImage: `linear-gradient(
          45deg,
          rgba(27, 66, 71, 0.428),
          rgba(150, 46, 8, 0.498)
        ),
        url(${Image})`,
        }}
        className="w-full h-96 bg-no-repeat bg-cover bg-center"
      >
        <div className="h-2/6 p-5 sm:p-10">
          <Header />
          <div className="h-48 flex flex-col justify-end">
            <h1 className="text-4xl text-white">Dynamic Push Up</h1>
            <p className="text-xl text-white">
              The best solution for making your body fit and healthy
            </p>
          </div>
        </div>
        <div className="h-4/6 flex items-end">
          <div className="text-white bg-[#1b4247] bg-opacity-80 w-full py-5 px-5 sm:px-10">
            <div className="flex justify-between">
              <div className="flex items-center space-x-1">
                <BsAlarm />
                <span>22 minutes</span>
              </div>
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 p-2 px-6 rounded-xl">
                Join Now
              </button>
              <div className="flex items-center space-x-1">
                <BsBarChart />
                <span>Beginner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-10 flex flex-col items-center">
        {routines.map((r, i) => (
          <Routine key={i} routine={r} />
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleStart}
          className="bg-[#1b4247] text-xl px-8 py-4 rounded-2xl text-white"
        >
          Start Now
        </button>
        <Countdown />
      </div>
    </div>
  );
};

const Routine = ({ routine }) => (
  <div
    className="
      flex justify-between items-end w-full md:w-5/6
      py-4 border-b border-slate-300"
  >
    <div className="flex justify-start w-full items-start text-lg font-medium space-x-2 sm:space-x-5" >
      <div className="w-1/3 sm:w-1/6 h-full">
        <img className="w-full  rounded-xl " src={routine.image} alt="" />
      </div>
      <div className="w-5/6">
        <p className="text-lg font-bold text-[#1b4247]">{routine.title}</p>
        <p className="text-slate-500 font-light">{routine.description}</p>
      </div>
    </div>
    <div className="w-20">
      <p className="bg-[#1b4247] px-2 py-1 rounded-3xl text-white">
        {routine.time}
      </p>
    </div>
  </div>
);

export default Workout;