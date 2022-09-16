import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom'
// import { auth } from "../firebase";
import "./SignUpScreen.css";



function SignUpScreen() {
  
  const navigate = useNavigate();
  

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    navigate("/home");

   //  auth
   //    .createUserWithEmailAndPassword(
   //      emailRef.current.value,
   //      passwordRef.current.value
   //    )
   //    .then((authUser) => {
   //      console.log(authUser);
   //      navigate("/home");
   //    })
   //    .catch((error) => {
   //      alert(error.message);
   //    });
  };
  const signIn = (e) => {
    e.preventDefault();
    navigate("/home");

   //  auth
   //    .signInWithEmailAndPassword(
   //      emailRef.current.value,
   //      passwordRef.current.value
   //    )
   //    .then((authUser) => {
   //      console.log(authUser);
   //    //   alert(12);
   //    navigate("/home");
   //    })
   //    .catch((error) => {
   //      alert(error.message);
   //    });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Passwrod" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
