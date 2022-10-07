import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <>
      <div className="card_content">
        <div className="img_file">
          <img src="./images/komal2.jpeg" alt="Komal" />
        </div>

        <div className = "userInfo" >
            <h1>Komal Raza</h1>
            <h4>Frontend React Developer</h4>
            <h6>komalraza.website</h6>
        </div>

        <div className = "social_button" >
       <button className="btnLinks" style={{backgroundColor:"white", color:"black" }}>Email</button>
       <button className="btnLinks"  style={{backgroundColor:"blue"}}>LinkedIn</button>
        </div>
      </div>
    </>
  );
};

export default Intro;
