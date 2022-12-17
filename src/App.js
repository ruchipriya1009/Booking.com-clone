import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleLocation from "./FlightPage/Components/SingleLocation";
import Flights from "./FlightPage/FlightMain";
// import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
// import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} /> */}
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<SingleLocation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
