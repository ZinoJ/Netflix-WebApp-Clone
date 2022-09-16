import React from "react";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import "./ProfileScreen.css";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import PlansScreen from "./PlansScreen";
import Footer from "../Footer";

function ProfileScreen() {
  // const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOut = () => {
    // auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <div className="profileScreen">
        <Nav />
        <div className="profileScreen__body">
          <h1>Edit Profile</h1>
          <div className="profileScreen__info">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="profileScreen__details">
              {/* <h2>{user.email}</h2> */}
              <h2>Choose your package</h2>
              <div className="profileScreen__plans">
                <h3>Plans</h3>
                <PlansScreen />
                <button onClick={signOut} className="profileScreen__signOut">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileScreen;
