// Import Files
import React, { useEffect, useState } from "react";
import SweetPagination from "sweetpagination";
import Mainbanner_Card from "../Components/MainBanner-Card/Mainbanner_Card.js";
import MaincategoryContainer from "../Components/Maincategory-Container/Maincategory-Container.jsx";
import mainShowslider, {
  LatestEpisodesShowslider,
} from "../Components/Showslider/mainShowslider.jsx";
import Mainbanner from "../Components/Header/finalbg.png";
import Select_sesion from "../Components/Select_sesion/Select_sesion.jsx";
import EpisodeSeason from "../Components/EpisodeSeason/EpisodeSeason";
import "../Style/Drama_Episode.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer/Footer.jsx";
import Header3 from "../Components/Header-03/Header-3.jsx";

import Dramaepisodeimages from "../Dramaepisodeimages";

function Drama_Episode() {
  const [selected, setSelected] = useState("");
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

  return (
    <div>
      {/* import Header Component to Drama Episodes Page */}
      <Header3 />

      <div className="Mainbannerdiv">
        <img src={Mainbanner} width="100%" />

      {/* import Main banner Card Component to Drama Episodes Page */}
        <div className="Mainbannerdivcard">
          <Mainbanner_Card />
        </div>
      </div>

      {/* import Main Container Component to Drama Episodes Page */}
      <div className="Maincategory-Container">
        <MaincategoryContainer title="Latest Episodes" />
      </div>
   
      {/* import Episode Show Slider Component to Drama Episodes Page */}
      <div className="Showslider">
        <LatestEpisodesShowslider />
        <hr className="hrclass" />
      </div>

      <div className="Select_season">
        <div className="season">Select Season</div>
        <div className="dropdown">
          <Select_sesion selected={selected} setSelected={setSelected} />
        </div>
      </div>

      {/* Create array Episode Season */}
      <div className="EpisodeSeason">
        <div className="EpisodeSeason-container">
          {currentPageData.map((item) => (
            <div className="EpisodeSeason-items">
              <EpisodeSeason data={item} />
            </div>
          ))}
        </div>
      </div>

    {/* Add Page Navigation */}
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={6}
        getData={Dramaepisodeimages}
        navigation={true}
        getStyle={"style-1"}
      />

      {/* import Footer Component to Drama Episodes Page */}
      <Footer />
    </div>
  );
}

export default Drama_Episode;
