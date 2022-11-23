import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Elements from "../components/Elements";
import RecentlyJoined from "../components/RecentlyJoined";
import WorkoutCards from "./WorkoutCards";

const URI = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=gym+workout&image_type=photo`;
const HomePage = () => {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    axios
      .get(URI)
      .then((result) => {
        setHero(result.data.hits.sort(() => Math.random() - 0.5)[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center p-5 sm:p-10"
        style={{
          backgroundImage: `linear-gradient(
          45deg,
          rgba(27, 66, 71, 0.428),
          rgba(150, 46, 8, 0.498)
        ),
        url(${hero?.largeImageURL})`,
        }}
      >
        <Elements />
      </div>
      <div className="h-10"></div>
      <WorkoutCards />
      <RecentlyJoined />
    </>
  );
};

export default HomePage;
