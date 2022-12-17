import { Routes, Route, BrowserRouter } from "react-router-dom";
import Flights from "./FlightPage/FlightMain";
import './App.css';
import SignUp from './Pages/SignUp';
import { Login } from "./Pages/Login";
// import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
// import List from "./pages/list/List";

function App() {
  return (

    //   <div className="App">
    //   <SignUp />
    // </div>
 
      <Routes>
        {/* <Route path="/" element={<Home/>} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} /> */}
        <Route path="/flights" element={<Flights />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
  );
}

export default App;