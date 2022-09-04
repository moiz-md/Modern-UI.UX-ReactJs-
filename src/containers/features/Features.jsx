import React from "react";
import { Feature } from "../../components";
import "./Features.css";

const featureData = [
  {
    title: "Abraham Lincoln",
    text: "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    title: "Albert Einstein",
    text: "Try not to become a man of success. Rather become a man of value.",
  },
  {
    title: "Benjamin Franklin",
    text: "All life is an experiment. The more experiments you make the better.",
  },
  {
    title: "Charles Darwin",
    text: "A man who dares to waste one hour of time has not discovered the value of life.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Never be bullied into silence. Never allow yourself to be made a
          victim. Accept no one's definition of your life; define yourself.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featureData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
