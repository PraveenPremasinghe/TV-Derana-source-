import React from "react";
import "./LatestEpisodes.css";



import episode_image from './assets/episode_image.png';







function LatestEpisodes() {
  return (
    <div>
      <div className="LatestEpisodes">
        <img className="episode_image" src={episode_image} />
     <div className="episide_name">Space Jam - E02 <span className="Epipublish_time">| 28m ago</span></div>
     <div className="episodedate">
        26-06-2022
     </div>
      </div>

{/* ///////////////////////////////////////////////////////////////////////////// */}


     

    </div>
  );
}

export default LatestEpisodes;
