import React, { useState } from "react";
import Accordion from "../Accordion";
import Footer from "../Footer";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
// import {Link} from 'react-router-dom'

function LoginScreen() {
  AOS.init()

  useEffect(() => {
    AOS.init({ 
      duration: 2000,
    });
  }, [])
  
  const [signIn, setSignIn] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    setSignIn(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="fullLoginScreen">
      <div className="loginScreen">
        <div className="loginScreen__background">
          <img
            className="loginScreen__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <button onClick={() => scrollToTop()} className="loginScreen__button">
            Sign In
          </button>
          <div className="loginScreen__gradient" />
        </div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="first">
        <div className="firstLeft" data-aos="fade-up">
          <h1 className="h1tag">Enjoy on your TV</h1>
          <p className="ptag">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="firstRight" data-aos="fade-up">
          <div className="imageContainer">
            <img
              className="image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="image1"
            />
          </div>
        </div>
      </div>
      <div className="first">
        <div className="firstRight" data-aos="fade-up">
          <div className="imageContainer">
            <img
              className="image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="image123"
            />
          </div>
        </div>
        <div className="firstLeft" data-aos="fade-up">
          <h1 className="h1tag">Download your shows to watch offline.</h1>
          <p className="ptag">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>

      <div className="first">
        <div className="firstLeft" data-aos="fade-right">
          <h1 className="h1tag">Watch Everywhere.</h1>
          <p className="ptag">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>

      <div className="first">
        <div className="firstRight" data-aos="fade-up">
          <div className="imageContainer">
            <img
              className="image"
              src="https://occ-0-1722-3997.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f"
              alt="imagee"
            />
          </div>
        </div>
        <div className="firstLeft" data-aos="fade-up">
          <h1 className="h1tag">Create profiles for kids.</h1>
          <p className="ptag">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
      <Accordion setSignIn={setSignIn} />
      <Footer />
    </div>
  );
}

export default LoginScreen;
