import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import AllRoutes from './Routes/AllRoutes';
import {Navbar} from "./Navbar/Navbar";
import Routes from './Routes/AllRoutes'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddRooms from "./Components/AddRooms";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  // const dispatch = useDispatch();
  // const getFromJsonServer= () => {
  //   // const dbRef = ref(db);

  //   onValue(dbRef, (snapshot) => {
  //     const outData = snapshot.val();
  //     dispatch({
  //       type: "FIREBASE",
  //       payload: {
  //         outData,
  //       },
  //     });
  //   });
  // };

  useEffect(() => {
    // getFromJsonServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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