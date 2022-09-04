import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai1.png";

const Header = () => {
  return (
    <>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">
            Let&apos;s Build Something amazing with MOIZ.
          </h1>
          <p>
            Many of life's failures are people who did not realize how close
            they were to success when they gave up.
          </p>
          <div className="gpt3__header-content__input">
            <input type="email" placeholder="Your Email Address" />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={ai} />
        </div>
      </div>
    </>
  );
};

export default Header;
