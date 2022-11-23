import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Workout from "./views/Workout";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="min-h-screen w-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
