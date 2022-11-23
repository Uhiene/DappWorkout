import { setGlobalState } from "../store"
import Header from "./Header";
import JoinNow from "./JoinNow"

const Elements = () => {
  return (
    <div>
      <Header />
      <div className="h-96 mt-20 flex items-end">
        <LeadText />
      </div>
    </div>
  )
}

const LeadText = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-6xl sm:text-7xl text-white font-medium">
        Solutions for Body Fit
      </h1>
      <p className="text-xl text-white">
        The best solution for making your body fit and healthy
      </p>
      <div>
        <button
          onClick={() => setGlobalState("joinNow", "scale-100")}
          className="bg-yellow-500 p-2 py-4 px-6 rounded-lg text-xl"
        >
          Join Now
        </button>
        <JoinNow />
      </div>
    </div>
  );
};
export default Elements