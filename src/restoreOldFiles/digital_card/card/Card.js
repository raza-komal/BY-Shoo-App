import React from "react";
import Intro from "../Intro/Intro";
import About from "../about/About";
import Interest from "../interest/Interest";
import SocialLinks from "../footer/SocialLinks"
import "./card.css";

const Card = () => {
    return(
        <>
           <div className = "container">
              <Intro />
              <About />
              <Interest/>
              <SocialLinks />
           </div>
        </>
    )
}


export default Card;