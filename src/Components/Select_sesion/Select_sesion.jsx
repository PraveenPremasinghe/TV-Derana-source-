import React, { useState } from "react";
import "./Select_sesion.css";
import EpisodeSeason from "../EpisodeSeason/EpisodeSeason.jsx";
import { Icon } from "@iconify/react";

function Select_sesion({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Season 01",
    "Season 02",
    "Season 03",
    "Season 04",
    "Season 05",
    "Season 06",
    "Season 07",
  ];

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          Season
          {selected}{" "}
          <span>
            <Icon
              icon="ep:arrow-down-bold"
              color="#333"
              height="20"
              className="dropdown-icon"
            />
          </span>{" "}
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select_sesion;
