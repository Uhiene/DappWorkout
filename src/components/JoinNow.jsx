import React, { useState } from "react";
import { setGlobalState, useGlobalState } from "../store";
import { FaTimes } from "react-icons/fa";

const JoinNow = () => {
  const [joinNow] = useGlobalState("joinNow");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e) => {
    setGlobalState("joinNow", "scale-0");
    setName("");
    setImage("");
    setPrice("");
    setDescription("");
    setDuration("");
  };
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform z-50 transition-transform duration-300 ${joinNow}`}
    >
      <div className="bg-white text-black shadow-md shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-black">Add Room</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={() => setGlobalState("joinNow", "scale-0")}
            >
              <FaTimes className="text-gray-400 hover:text-red-500" />
            </button>
          </div>

          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-2 mt-5">
            <input
              className="block w-full text-sm
                placeholder:text-gray-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-2 mt-5">
            <input
              className="block w-full text-sm
                placeholder:text-gray-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              image="image"
              value={image}
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-2 mt-5">
            <input
              className="block w-full text-sm
                placeholder:text-gray-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              price="price"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-2 mt-5">
            <input
              className="block w-full text-sm
                placeholder:text-gray-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              duration="duration"
              value={duration}
              placeholder="Duration"
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-row justify-between items-center border-b border-gray-200 p-2 mt-5">
            <input
              className="block w-full text-sm
                placeholder:text-gray-500 bg-transparent border-0
                focus:outline-none focus:ring-0"
              type="text"
              description="description"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div class="flex">
            <select
              class="form-select appearance-none
              block
              w-full
              p-2
              text-sm
              font-normal
              text-gray-500
              bg-white bg-clip-padding bg-no-repeat
              border-b border-solid border-gray-200
              transition
              ease-in-out
              mt-5
              focus:text-gray-00 focus:bg-white focus:outline-none"
              aria-label="Default select example"
              type="text"
              level="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option selected>Level</option>
              <option value="1">Beginner</option>
              <option value="2">Expert</option>
              <option value="3">Intermidate</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex flex-row justify-center items-center text-white text-md bg-yellow-500 py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:bg-transparent hover:text-yellow-500 hover:border hover:border-yellow-500 focus:outline-none focus:ring mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
