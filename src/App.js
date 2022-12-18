import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddRooms from "./Components/AddRooms";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";

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
      <UserAuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/addRoom"
            element={
              <ProtectedRoute>
                <AddRooms />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
