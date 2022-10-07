import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container } from "@mui/material";

import "./footer.css";
const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="logo">
          <h2>BY-Shooo</h2>
        </div>
        <div className="categories">
          <h4>Categories</h4>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        <div className="socialLinks">
          <h4>Follow Us</h4>
          <ul>
            <li>
              {" "}
              <FacebookIcon className ="icons" />
            </li>
            <li>
              <InstagramIcon className ="icons" />
            </li>
            <li>
              {" "}
              <TwitterIcon className ="icons" />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
