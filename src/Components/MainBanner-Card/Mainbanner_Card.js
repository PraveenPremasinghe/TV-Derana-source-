import React from "react";
import "./Mainbanner_Card.css";
import Watch_button from "../Watch-button/Watch_button.js";
import Dramalogo from "./dramalogo2.png";

function Mainbanner_Card() {
  return (
    <div>
      <div className="Mainbanner_Card">
        <div className="Mainbanner_Card_img">
          <img src={Dramalogo} alt="" />
        </div>
        <hr className="hr"></hr>

        <div className="Mainbanner_Card_details">WEEKDAYS</div>
        <div className="Mainbanner_Card_details1">E1288</div>
        <div className="Mainbanner_Card_details1">02/02/2022</div>

        <Watch_button />
      </div>
    </div>
  );
}

export default Mainbanner_Card;
