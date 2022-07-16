import React from "react";
import "./EpisodeSeason.css";

function EpisodeSeason(props) {
  return (
    <div>
      <div className="EpisodeSeason ">
        <img className="episode_image" src={props.data} />
        <div className="episide_name">
          Space Jam - E02 <span className="Epipublish_time">| 28m ago</span>
        </div>
        <div className="episodedate">26-06-2022</div>
      </div>
    </div>
  );
}

export default EpisodeSeason;
