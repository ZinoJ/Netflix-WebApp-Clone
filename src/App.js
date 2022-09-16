import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./routes/HomeScreen";
import LoginScreen from "./routes/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./routes/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  // const user= null
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        {/* <Route  exact path="/login" element={<LoginScreen />}/>   (<Route path="/" element={<HomeScreen />} /> */}
        {/* {!user ? (
          <Route exact path="/" element={<LoginScreen />} />
        ) : (
          <>
            <Route path="/home" element={<HomeScreen />} />
          </>
        )} */}
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;

