import { createContext, useContext, useEffect, useState } from "react";

// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";

// import { auth, db } from "../firebase";

// import { child, get, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  // const [passsword, setPassword] = useState({});
  // const [signOut, setSignOut] = useState({});
  // const [auth, setauth] = useState({});
  // const [onAuthStateChanged, setonAuthStateChanged] = useState({});

  const navigate = useNavigate();

  function logIn(email, password) {
    if (email === "vicky@gmail.com" && password === "adminadmin") {
      setUser({ authStatus: true, token: "12345" });
    } else {
      alert("Please Sign in with Admin Account.");
    }
  }

  function logOut() {
    return signOut({ ...auth, authStatus: false });
  }

  useEffect(() => {
      setUser(currentuser);

    return () => {
      // unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
