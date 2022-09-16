import React, { useState } from "react";
import { Data } from "./Data";
import DOMPurify from "dompurify";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./Accordion.css";
import "./routes/LoginScreen.css";

const Accordion = ({ setSignIn }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
      <div className="accordion__container">
        <h1>Frequently Asked Questions</h1>
        <div>
          {Data.map((item, index) => {
            return (
              <>
                <div
                  className="question"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h1 className="accordion__question">{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="answer">
                    <p
                      className="accordion__answer"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.answer),
                      }}
                    ></p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>

        <div className="loginScreen__body__bottom">
          <h3 className="lightWeight">
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
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Accordion;
