import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <p>2022 Jena's Decadent Fudge. All rights reserved.</p>
          <p className="icons">
            <AiFillInstagram />
            <AiOutlineTwitter />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
