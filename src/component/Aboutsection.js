import React from "react";
import home1 from "../images/home1.png"
const AboutSection=()=>{
    return(
        <div>
            <div className="description">
                <div className="title">
                  <div className="hide">
                    <h2>We work to make</h2>
                  </div>
                  <div className="hide">
                    <h2>your <span>dreams</span> come</h2>
                  </div>
                  <div className="hide">
                    <h2>true.</h2>
                  </div>
                </div>
                <p>Contact us for any photography ideas that you have. we have professionals with amazing skills.</p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="guy with a camera"/> </div>
        </div>
    )
}
export default AboutSection;