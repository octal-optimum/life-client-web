import React from "react";
import whatislifebanner from "../assets/whatislifeimag.png";
import "./banner.css";

const Whatislife = () => {
  return (
    <div id="whatislife" className="whatlifecont">
      <div className="whatlifebox">
        <div className="content">
          <h3>
            What is{" "}
            <span style={{ color: "violet" }}>L</span>
            <span style={{ color: "blue" }}>I</span>
            <span style={{ color: "green" }}>F</span>
            <span style={{ color: "orange" }}>E</span> App
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing.
          </p>
          
        </div>
        <div className="image">
          <img
            src={whatislifebanner}
            alt="What is Life Banner"
            style={{ width: "80%", marginTop: "5%" }}
          />
        </div>
        <div className="list">
            <ul>
              <li style={{ color: "purple", fontWeight: "400" }}>LEARN</li>
              <p className="ml-4">
                Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                bibendum augue. Praesent egestas leo in.
              </p>
            </ul>
            <ul>
              <li style={{ color: "blue-gradiant", fontWeight: "400" }}>
                INNATE
              </li>
              <p className="ml-4">
                Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                bibendum augue. Praesent egestas leo in.
              </p>
            </ul>
            <ul>
              <li style={{ color: "orange", fontWeight: "400" }}>ENHANCE</li>
              <p className="ml-4">
                Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                bibendum augue. Praesent egestas leo in.
              </p>
            </ul>
            <ul>
              <li style={{ color: "orange", fontWeight: "400" }}>FORTIFY</li>
              <p className="ml-4">
                Ut in risus volutpat libero pharetra tempor. Cras vestibulum
                bibendum augue. Praesent egestas leo in.
              </p>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Whatislife;
