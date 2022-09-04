import React from 'react';
import './Footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>
            work.moiz@gmail.com <br /> All Rights Reserved by MOIZ
          </p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>moizmails07@gmail.com</p>
          <p>1234568790</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>
          Copyright © 2021 All Rights Reserved by <a href="#">ANSARI MOIZ</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
