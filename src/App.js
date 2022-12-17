import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Flights from "./FlightPage/FlightMain";
import "./App.css";
import SignUp from "./Pages/SignUp";
import { Login } from "./Pages/Login";
import SingleLocation from "./FlightPage/Components/SingleLocation";
import {Navbar} from "./Navbar/Navbar";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

