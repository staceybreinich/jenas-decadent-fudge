import React from "react";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <p>2022 Jena's Decadent Fudge. All rights reserved.</p>
          <p className="icons">
            <a href="">
              <AiFillFacebook />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
