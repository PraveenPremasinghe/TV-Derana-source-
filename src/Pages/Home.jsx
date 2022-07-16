import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "../Components/Header/Header.js";
import Mainbanner_Card from "../Components/MainBanner-Card/Mainbanner_Card.js";
import MaincategoryContainer from "../Components/Maincategory-Container/Maincategory-Container.jsx";

import mainShowslider, {
  Showslider,
  LatestEpisodesShowslider,
} from "../Components/Showslider/mainShowslider.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import Footer from "../Components/Footer/Footer.jsx";

import Header3 from "../Components/Header-03/Header-3.jsx";

import Mainbanner from "../Components/Header/finalbg.png";
import Advertisment_banner from "../Components/Header/homepagebanner1.png";
import Advertisment_banner2 from "../Components/Header/homepagebanner2.png";

function Home() {
  return (
    <div>
      <Header3 />
     

      <div className="Mainbannerdiv">
        <img src={Mainbanner} width="100%" />

        <div className="Mainbannerdivcard">
          <Mainbanner_Card />
        </div>
      </div>
      <div className="Advertisment">
        <img src={Advertisment_banner} width="100%" />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Top 10 TV Shows" />
      </div>

      <div className="Showslider">
        <Showslider />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Latest Episodes" />
      </div>

      <div className="Showslider">
        <LatestEpisodesShowslider />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Teledramas" />
      </div>

      <div className="Showslider">
        <Showslider />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Reality Shows" />
      </div>

      <div className="Showslider">
        <Showslider />
      </div>

      <div className="Advertisment ">
        <img src={Advertisment_banner2} width="100%" />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Magazine & Variety" />
      </div>

      <div className="Showslider">
        <Showslider />
      </div>

      <div className="Maincategory-Container">
        <MaincategoryContainer title="Talk Shows" />
      </div>

      <div className="Showslider">
        <Showslider />
      </div>

      <div className="Advertisment2">
        <img src={Advertisment_banner} width="100%" />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
