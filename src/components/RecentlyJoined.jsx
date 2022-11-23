import Identicon from "react-identicons";
import { truncate } from "../store";

const RecentlyJoined = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl text-center text-[#1b4247] font-medium mb-5">
        Recently Joined
      </h1>
      <div className="flex flex-col items-center">
        {Array(6)
          .fill()
          .map((r, i) => (
            <div
              key={i}
              className="flex justify-between w-full items-end
          sm:w-4/5 md:w-3/5 py-4 border-b border-slate-300"
            >
              <div className="flex justify-start items-start sm:items-center text-lg font-medium space-x-3">
                <div>
                  <Identicon
                    string={"0x2f79duf8oyc" + i}
                    size={35}
                    className="rounded-lg shadow-md shadow-[#1b4247]"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#1b4247]">
                    {truncate("0x2f79duf8of79duf8oyc", 4, 4, 11)}
                  </p>
                  <p className="text-slate-500 font-light">
                    Recently joined the 1 month membership package.
                  </p>
                  <p className="text:xs text-[#1b4247] font-light flex sm:hidden">
                    8 mins ago
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex">
                <p className="bg-[#1b4247] px-2 py-1 rounded-3xl text-white">
                  8 mins ago
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentlyJoined;
