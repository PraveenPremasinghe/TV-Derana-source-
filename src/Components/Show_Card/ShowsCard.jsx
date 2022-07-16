import React from "react";
import "./Showscard.css";
import Watch_button_2 from "../Watch-button 2/Watch_button_2";

import Card from "../Header/card1.png";

import images from "../../images";

function ShowsCard(props) {
  return (
    <div>
      <div className="Showscard">
        <img className="showcardimg" src={props.src} />

        <div className="textblock">
          <div className="Showsname">{props.name}</div>

          <div className="show-date-time">
            <div>
              {props.days} | {props.time}
            </div>
          </div>

          <div className="show-watch-button">
            <Watch_button_2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowsCard;
