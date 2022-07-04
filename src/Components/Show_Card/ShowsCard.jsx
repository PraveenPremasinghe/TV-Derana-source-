import React from "react";
import "./Showscard.css";
import Watch_button_2 from "../Watch-button 2/Watch_button_2";

import Card from "../Header/card1.png";





function ShowsCard() {
  return (
    <div>
      <div className="Showscard">
        <img className="showcardimg" src={Card} />
        <div className="text-block">
          <div className="row">
          <div className="Showsname">vin diesel bloodshot</div>
          </div>
          <div className="row">
            <div className="col">
              <div>Weekdays</div>
              <div>8.00pm - 9.00pm</div>
            </div>
            <div className="col"><Watch_button_2/></div>
          </div>
        </div>
      </div>

{/* ///////////////////////////////////////////////////////////////////////////// */}


     

    </div>
  );
}

export default ShowsCard;
