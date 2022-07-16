import React from "react";
import "./Watch_button_2.css";
import { Icon } from "@iconify/react";

function Watch_button_2() {
  return (
    <div>
      <div className="Watch_button_2">
        <button className="Watchbtn_2">
          <Icon icon="bi:play-circle-fill" color="white" height="18" />
          &nbsp; Watch Now
        </button>
      </div>
    </div>
  );
}

export default Watch_button_2;
