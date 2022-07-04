import React from "react";
import "./MaincategoryContainer.css";
import { Icon } from '@iconify/react';

function MaincategoryContainer() {
  return (
    <div>
      <div className="MaincategoryContainer">
        <div class="main">
          <div class="maincategory_title">Top 10 TV Shows</div>
          <div class="seeall">
            See all <Icon icon="dashicons:arrow-right-alt2" color="#FF1E1F" />
          </div>
        </div>
        <hr className="hrclass" />
      </div>
    </div>
  );
}

export default MaincategoryContainer;
