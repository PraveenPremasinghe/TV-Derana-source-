import React from "react";
import "./MaincategoryContainer.css";
import { Icon } from "@iconify/react";

function MaincategoryContainer(props) {
  return (
    <div>
      <div className="MaincategoryContainer">
        <div className="main">
          <div className="maincategory_title">{props.title}</div>
          <div className="seeall">
            See all <Icon icon="dashicons:arrow-right-alt2" color="#FF1E1F" />
          </div>
        </div>
        <hr className="hrclass" />
      </div>
    </div>
  );
}

export default MaincategoryContainer;
