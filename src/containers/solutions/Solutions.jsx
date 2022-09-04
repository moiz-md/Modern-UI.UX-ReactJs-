import React from "react";
import Feature from "../../components/feature/Feature";
import "./Solutions.css";

const Solutions = () => {
  return (
    <>
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgpt3-feature">
          <Feature
            title="Steve Jobs"
            text="Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it."
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3__whatgpt3-container">
          <Feature
            title=" Albert Einstein"
            text="You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
          />
          <Feature
            title="Anonymous"
            text="Life is ten percent what happens to you and ninety percent how you respond to it."
          />
          <Feature
            title="Drew Barrymore"
            text="Life is very interesting… in the end, some of your greatest pains, become your greatest strengths."
          />
        </div>
      </div>
    </>
  );
};

export default Solutions;
